/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["winter", "night"],
    darkTheme: "night", // optional
  },
};