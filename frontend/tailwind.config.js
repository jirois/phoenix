module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
      gridTemplateAreas: {
        'layout': [
          'header',
          'main',
          'footer',
        ],
      },
      gridTemplateColumns: {
        'layout': '1fr'
    },
    gridTemplateRows: {
      'layout': '5rem 1fr 5rem',
    },

  variants: {
    extend: {
      gridTemplateAreas: ['responsive']
    },
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas')
  ],
}
}
