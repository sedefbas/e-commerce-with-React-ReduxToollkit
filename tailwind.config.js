/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
        container: {
      center: true,
      
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            textAlign: 'center',
          },
        },
      }),
    },
  },
  plugins: [
    "@babel/plugin-proposal-private-property-in-object"
  ],
}
