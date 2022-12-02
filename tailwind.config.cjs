/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "colorful-circles": "url('/src/assets/images/circle-bg-img-10.png')",
      },
      colors: {
        kera: {
          white: "#FCFDFD",
          blue: {
            400: "#1793DE",
            900: "#152D4A",
          },
          yellow: {
            400: "#CCD36A",
            600: "#FFBB3B",
          },
          pink: "#E65AC6",
          gray: {
            100: "#EFFCFF",
            300: "#E7EDF3",
            500: "#D2DCE8",
            700: "#5881A4",
          },
        },
      },
      fontFamily: {
        kera: ["Almarai", "sans-serif"],
      },
    },
  },
  plugins: [],
};
