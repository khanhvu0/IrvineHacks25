/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "src/**/*.{js,ts,jsx,tsx,html,css}"
  ],
  theme: {
    extend: {
      colors: {
        "dark-background": "var(--dark-background)",
        "first-text": "var(--first-text)",
        "light-background": "var(--light-background)",
        "light-text": "var(--light-text)",
        primary: "var(--primary)",
        "second-text": "var(--second-text)",
        secondary: "var(--secondary)",
      },
      fontFamily: {
        button: "var(--button-font-family)",
        headline: "var(--headline-font-family)",
        link: "var(--link-font-family)",
        "mobile-menu": "var(--mobile-menu-font-family)",
        paragraphe: "var(--paragraphe-font-family)",
        "second-headline": "var(--second-headline-font-family)",
        "sub-heading": "var(--sub-heading-font-family)",
        subtitle: "var(--subtitle-font-family)",
        title: "var(--title-font-family)",
      },
      boxShadow: {
        shadow: "var(--shadow)",
      },
    },
  },
  plugins: [],
}

