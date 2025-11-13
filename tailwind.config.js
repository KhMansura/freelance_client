// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   plugins: [require("daisyui")],
//   daisyui: {
//     themes: ["winter", "night"],
//     darkTheme: "night", // optional
//   },
// };
// tailwind.config.js
module.exports = {
  darkMode: 'class', // 👈 critical
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};