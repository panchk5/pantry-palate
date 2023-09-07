/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: 'Montserrat',
        title: 'Montserrat',
      },
      colors: {
        bg: '#0A61C2',
        lightblue: '#DFF8FE',
        primary: '#0177FB',
        secondary: '#A9E5FF',
        white: '#FFFFFF',
        black: '#000000',
        blue: '#0A61C2',
        dark: '#1C52A3',
        darkblue: '#053973',
      },
    },
  },
  plugins: [],
}