const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ['test/index.html'],
  theme: {
    extend: {},
  },
  plugins: [
    require('./index'),
    plugin(function({ matchUtilities, theme }) {
      matchUtilities(
        {
          tab: (value) => { 
            console.log(value);
            return {
              tabSize: value
            }
          },
        },
        { values: theme('tabSize') }
      )
    })
  ],
}
