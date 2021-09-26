module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          '100': '#FFC107',
          '200': '#888883'
        }
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        nanumGothic: ['Nanum Gothic', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      },
      fontSize: {
        '2xs': ['0.50rem', {lineHeight: '0.75rem'}], 
        'mid': []
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
