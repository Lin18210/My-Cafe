/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8B4513', // Coffee brown
          light: '#A0522D',
          dark: '#653208',
        },
        secondary: {
          DEFAULT: '#DEB887', // Burlywood
          light: '#F5DEB3',
          dark: '#CD853F',
        },
        accent: {
          DEFAULT: '#FFF8DC', // Cream
          dark: '#F5F5DC',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in-down': 'fadeInDown 0.5s ease-out',
        'fade-out-up': 'fadeOutUp 0.5s ease-out',
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeOutUp: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}