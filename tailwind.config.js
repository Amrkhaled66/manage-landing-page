/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"], // Corrected path
  theme: {
    container: {
      // You can add container configurations here if needed
    },
    extend: {
      // container: {
      //   center: true, // Center the container by default
      // },
      colors: {
        BrightRed: "hsl(12, 88%, 59%)",
        BrightRedFade: "#f79e87", // Removed the extra space
        DarkBlue: "hsl(228, 39%, 23%)",
        DarkGrayishBlue: "hsl(227, 12%, 61%)",
        VeryDarkBlue: "hsl(233, 12%, 13%)",
        VeryPaleRed: "hsl(13, 100%, 96%)",
        VeryLightGray: "hsl(0, 0%, 98%)",
      },
    },
    screens: {
      xs: "280px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
