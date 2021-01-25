const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Fraunces', 'serif']
    },
    // colors: {
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   black: colors.black,
    //   white: colors.white,
    //   gray: colors.trueGray,
    //   indigo: colors.indigo,
    //   red: colors.rose,
    //   yellow: colors.amber
    // },
    // fill: theme => theme(colors),
    extend: {
      screens: {
        '3xl': '1600px'
      }
    }
  },

  variants: {
    extend: {}
  },
  plugins: []
};
