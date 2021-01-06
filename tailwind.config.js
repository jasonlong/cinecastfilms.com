module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'fade-in': 'fade-in 2500ms linear',
      },
      keyframes: {
        'fade-in': {
          '0%': {
            'opacity': '0',
          },
          '50%': {
            'opacity': '0',
          },
          '100%': {
            'opacity': '1',
          }
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
