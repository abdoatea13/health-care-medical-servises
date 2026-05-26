/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0d9488',
        secondary: '#059669',
      },
      direction: ['rtl', 'ltr'],
    },
  },
  plugins: [],
}
