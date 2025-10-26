/** @type {import('tailwindcss').Config} */

const { Colors } = require("./theme/theme");

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./global.css",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: Colors,
    },
  },
  plugins: [],
};
