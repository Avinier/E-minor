/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/*.tsx", "./src/components/*.tsx"],
  theme: {
    extend: {
      colors: {
        main: "#000",
        accent: "#fff",
        "green--pastel": "#D3FBD8",
        "purple--pastel": "#D9DAFF",
      },
    },
  },
  plugins: [],
};
