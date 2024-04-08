/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'mainTheme': '#f7faff',
        'questionSectionTheme' : '#f7faff' ,
        'bookingTheme': '#092640' ,
      }
    },
  },
  plugins: [],
}

