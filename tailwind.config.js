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
        gray500: '#10E10E10E',
        googlecolor: '#EB5757',
        facebookcolor: '#2F80ED',
        whity: '#FFFFFF',
        lightgreen: '#70CDD6',
      },
      // insetCostumize: {
      //   topCostumize: '208px',
      //   rightCostumize: '208px',
      //   bottomCostumize: '208px',
      //   leftCostumize: '208px',
      // },
      // insetCostumize1: {
      //   top: '208px',
      //   right: '208px',
      //   bottom: '208px',
      //   left: '208px',
      // },
    },
  },
  plugins: [],
};
