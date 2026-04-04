/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./login.html","./first.html", "./*.js"],
  theme: {
    extend: {
      colors: {
          ink:    '#1e2a3a',
          ink2:   '#3a4a5c',
          ink3:   '#7a90a8',
          sky:    '#eef6fb',
          sky2:   '#daeef8',
          sky3:   '#c6e3f4',
          pink:   '#e07aaa',
          pink2:  '#f0a8ca',
          blue:   '#6ab8d8',
          blue2:  '#5a9ec8',
        },
        fontFamily: {
          serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
          sans:  ['"DM Sans"', 'system-ui', 'sans-serif'],
        },
      keyframes:{
      slideUp:{
        '0%':{
          opacity:'0',
          transform:'translateY(10px)',
        },
        '100%':{
          opacity:'1',
          transform:'translateY(0px)',
        },
      },
    },
    animation:{
      'slide-up':'slideUp 0.2s ease-out',
    },
  },
  plugins: [],
  },
}