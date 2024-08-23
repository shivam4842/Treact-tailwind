/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}"
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#6415ff',
        'primary-focus': '#5011cc',
        'secondary': '#243E63',
        'slate-350': '#edf2f7',
        'transparent': '#FFFFFF80',
        'pink-350': '#F687B3',
        'blue-935': '#506582',
      },
      fontFamily: {
        inter: ['Inter', 'system-ui'],
      },
      borderRadius: {
        '4xl': '40px',
      },
    },
  },
  plugins: [],
}

