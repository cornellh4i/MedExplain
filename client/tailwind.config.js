/** @type {import('tailwindcss').Config} */

const { Colors, FontSize, FontWeight } = require("./theme/theme");

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: Colors,
      fontSize: FontSize,
      fontWeight: FontWeight,
    },
  },
  plugins: [],
};
