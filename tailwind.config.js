module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        'default': '5px 5px 20px #c8c9cc, -5px -5px 20px #ffffff',
        'xs': 'inset 5px 5px 20px #c8c9cc, inset -5px -5px 20px #ffffff',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
