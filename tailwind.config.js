/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6B6B",
        secondary: "#4ECDC4",
        accent: "#FFE66D",
        dark: "#1a1a1a",
        light: "#f5f5f5",
      },
      fontFamily: {
        sans: ["'Poppins'", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 15px rgba(0, 0, 0, 0.1)",
        hover: "0 8px 25px rgba(0, 0, 0, 0.15)",
      },
      borderRadius: {
        card: "12px",
      },
    },
  },
  plugins: [],
}
