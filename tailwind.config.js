/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "san-serif"],
    },
    extend: {
      colors: {
        primary: "#3b82f6",
        accent: "#3b82f6",
        dashboard: "#2B2B2B",
        dark: "#000000",
      },
      keyframes: {
        shake: {
          "0%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(2px)" },
          "50%": { transform: "translateX(-2px)" },
          "75%": { transform: "translateX(2px)" },
          "10%": { transform: "translateX(0)" },
        },
      },
      animation: {
        shake: "shake .2s ease-in-out",
      },
    },
  },
  plugins: [],
};
