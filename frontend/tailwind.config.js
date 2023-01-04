/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/*.tsx",
    "./src/components/*.tsx",
    "./src/components/CreatePage/*.tsx",
    "./src/components/ExplorePage/*.tsx",

  ],
  theme: {
    extend: {
      colors: {
        main: "#000",
        accent: "#fff",
        "green--pastel": "#D3FBD8",
        "purple--pastel": "#D9DAFF",
        grey: "#555555",
        gold: "#ffd640",
      },
    },
  },
  plugins: [],
};
