/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "grey-superdark": "#121212",
        "grey-dark": "#6F6F6F",
        "grey-light": "#B3B3B3",
        "grey-superlight": "#D5D5D5"
      },
      boxShadow: {
        'standard': '0 0 9px -6px rgb(0,0,0)'
      }
    },
  },
  plugins: [],
}

