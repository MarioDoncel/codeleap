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
    extend: {
      keyframes: {
        presentation: {
          '0%': { opacity: '0' },
          '50%': { opacity: '.8' },
          '100%': { opacity: '0', display: 'none' },
        }
      },
      animation: {
        presentation: 'presentation 3s ease-out forwards'
      }
    },
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
