module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          DEFAULT: "#F8D500",
        },
        gray: {
          light: "#242424",
          dark: "#0C0C0C",
        },
      },
    },
  },
  plugins: [],
}