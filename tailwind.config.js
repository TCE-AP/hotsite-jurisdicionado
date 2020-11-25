/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    enabled: false,
    content: ['./src/**/*.tsx'],
    options: {
      safelist: [
        'bg-yellow-50',
        'bg-blue-50',
        'bg-gray-50 border-gray-700',
        'bg-purple-50',
        'bg-green-50',
        'bg-red-50',
        'text-yellow-700',
        'text-blue-700',
        'text-purple-700',
        'text-green-700',
        'text-red-700',
      ],
    },
  },
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'black-apoio': '#1a202c',
        'red-primary': '#cb2627',
        'red-secondary': '#fcf3f2',
        'yellow-primary': '#e9c82f',
        'yellow-secondary': '#fdfdea',
        'green-primary': '#24795e',
        'green-secoondary': '#f2faf7',
        'blue-primary': '#1f4888',
        'blue-secondary': '#ebf5ff',
        'blue-apoio': '#3E72E1',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
