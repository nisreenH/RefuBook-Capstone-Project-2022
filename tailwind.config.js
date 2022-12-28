/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        prim: '#4699C2',
        sec: '#E5FAFF',
        lightRed: '#FD9E71',
        lightgray: '#E5E5E5',
        googlecolor: '#EB5757',
        facebookcolor: '#2F80ED',
      },
    },
  },
  plugins: [],
};
