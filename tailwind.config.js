const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}',],
  theme: {
    screens: {
      xm: '320px',
      ssm: '470px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px'
    },
    extend: {},
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
