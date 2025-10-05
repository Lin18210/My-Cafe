# Cafe — React + Vite

This project is a cafe website built with React and Vite.

## Getting Started

1. Install dependencies

```
npm install
```

2. Start the development server

```
npm run dev
```

## HubSpot Integration

This project supports HubSpot tracking and a HubSpot form on the Contact page.

1) Create a `.env` file (see `.env.example`) in the `Cafe/` folder and set:

```
VITE_HUBSPOT_PORTAL_ID=YOUR_PORTAL_ID
VITE_HUBSPOT_FORM_ID_CONTACT=YOUR_FORM_GUID
```

2) Tracking code is injected via `index.html` using `VITE_HUBSPOT_PORTAL_ID`.

3) The Contact page will automatically render the HubSpot form when both env vars are present; otherwise, the existing local React form acts as a fallback.
