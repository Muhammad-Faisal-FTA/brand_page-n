/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        'sm': '320px',   // Small devices
        'md': '375px',   // Medium devices
        'lg': '600px',   // Large devices
        // You can add more breakpoints if needed
      },
    },
  },
  plugins: [],
}

