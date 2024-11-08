/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          150: "#F27C84",
          250: "#8E69FB",
        },
        gray: {
          150: "#FF6347",
          250: "#FF6347",
          350: "#2C3333"
        }
      }
    },
  },
  plugins: [],
}

