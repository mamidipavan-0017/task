/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
  variants: {
    extend: {
      display: ['responsive'],
      flexDirection: ['responsive'],
      flexWrap: ['responsive'],
      justifyContent: ['responsive'],
      alignItems: ['responsive'],
      alignContent: ['responsive'],
    },
  }
}