/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "src/**/*.{js,ts,jsx,tsx,html,css}"
  ],
  theme: {
    extend: {
      fontFamily: {
        merriweather: ['Merriweather', 'serif'],
      },
      fontFamily: {
        ibm: ['IBM Plex Sans Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

