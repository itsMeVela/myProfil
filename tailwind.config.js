/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        textKu: '#C26582',
        dark: '#1e293b',
        semibold: '#334155'
      },
      screens: {
        '2xl': '1520px'
      }
    },
  },
  plugins: [],
}

