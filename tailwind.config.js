/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pri: '#1f1f25',
        sec: '#272c35',
        ter: '#1C82AD',
        qua: '/*#03C988*/#009578',
      },
    },
    fontFamily: {
      almarai: ['almarai', 'sans-serif'],
    },
  },
  plugins: [],
}
