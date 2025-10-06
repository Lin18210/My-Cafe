import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const app = express();
app.use(express.json());

const hubspot = axios.create({
  baseURL: 'https://api.hubapi.com',
  headers: {
    Authorization: `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
    'Content-Type': 'application/json'
  }
});

// 1) Find or create contact by email
async function getOrCreateContactIdByEmail(email) {
  // Search contact
  const searchBody = {
    filterGroups: [
      { filters: [{ propertyName: 'email', operator: 'EQ', value: email }] }
    ],
    properties: ['email', 'firstname', 'lastname'],
    limit: 1
  };
  const search = await hubspot.post('/crm/v3/objects/contacts/search', searchBody);
  if (search.data.total > 0) {
    return search.data.results[0].id;
  }
  // Create contact
  const created = await hubspot.post('/crm/v3/objects/contacts', {
    properties: { email }
  });
  return created.data.id;
}

// 2) Create deal
async function createDeal({ amount, closeDateMs }) {
  const body = {
    properties: {
      dealname: `Order ${new Date(closeDateMs).toISOString()}`,
      amount: Number(amount).toFixed(2),
      closedate: closeDateMs, // ms timestamp
      dealstage: 'closedwon', // adjust to your pipeline
      pipeline: 'default'
    }
  };
  const res = await hubspot.post('/crm/v3/objects/deals', body);
  return res.data.id;
}

// 3) Create a line item for each product
async function createLineItem({ name, quantity, price }) {
  const res = await hubspot.post('/crm/v3/objects/line_items', {
    properties: {
      name,
      quantity: Number(quantity),
      price: Number(price).toFixed(2)
    }
  });
  return res.data.id;
}

// 4) Associate objects
async function associate(objectType, objectId, toObjectType, toObjectId, associationType) {
  await hubspot.put(`/crm/v4/objects/${objectType}/${objectId}/associations/${toObjectType}/${toObjectId}/${associationType}`, {});
}

// API route to receive order data from frontend
app.post('/api/hubspot/order', async (req, res) => {
  try {
    const {
      customerEmail,
      orderId,
      orderNumber,
      subtotal,
      tax,
      total,
      items,
      orderTimestamp // ms
    } = req.body;

    // 1) Contact
    const contactId = await getOrCreateContactIdByEmail(customerEmail || 'guest@example.com');

    // 2) Deal (store total on the deal)
    const dealId = await createDeal({ amount: total, closeDateMs: orderTimestamp || Date.now() });

    // 3) Line items
    const lineItemIds = [];
    for (const item of items) {
      const lineItemId = await createLineItem({
        name: `${item.name} (${orderNumber})`,
        quantity: item.quantity,
        price: (item.price * item.quantity).toFixed(2)
      });
      lineItemIds.push(lineItemId);
    }

    // 4) Associations: contact ↔ deal
    await associate('deals', dealId, 'contacts', contactId, 'deal_to_contact');
    // 5) Associations: deal ↔ each line item
    for (const lineItemId of lineItemIds) {
      await associate('deals', dealId, 'line_items', lineItemId, 'deal_to_line_item');
    }

    // Optionally set extra properties on deal (subtotal/tax/order IDs)
    await hubspot.patch(`/crm/v3/objects/deals/${dealId}`, {
      properties: {
        hs_order_id__c: orderId,        // custom property (create in HubSpot first)
        hs_order_number__c: orderNumber,// custom property
        hs_order_subtotal__c: Number(subtotal).toFixed(2),
        hs_order_tax__c: Number(tax).toFixed(2)
      }
    });

    res.json({ ok: true, dealId, contactId, lineItemIds });
  } catch (err) {
    console.error('HubSpot sync error:', err?.response?.data || err.message);
    res.status(500).json({ ok: false, error: err?.response?.data || err.message });
  }
});

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server running on ${process.env.PORT || 4000}`);
});