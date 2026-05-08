/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#C0392B',
          darkred: '#922B21',
          lightred: '#E74C3C',
          cream: '#FDF5F5',
        }
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
        body: ['system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
