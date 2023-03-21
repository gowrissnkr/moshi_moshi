/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0"
          },
          '100%': { opacity: "1" },
        }
      },
      animation: {
        'fadeIn': 'fadeIn 10s ease-in',
      },
    },
  },
  plugins: [],
}
