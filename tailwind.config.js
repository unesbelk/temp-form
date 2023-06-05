/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#E7406C' /*d11f5c*/,
        secondary: '#10183f',
        secondary_light: '#9FA0BD',
        secondary_faint: '#E8F0FE',
        hero_bg: '#4E4445'
      }
    },
  },
  plugins: [
    // tailwind.config.js
    module.exports = {
      theme: {
        // ...
      },
      plugins: [
        require('@tailwindcss/forms'),
        // ...
      ],
    }
  ],
}
