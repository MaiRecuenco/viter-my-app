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
        dashboard: "#2B2B2B",
    },
  },
},
  plugins: [],
};
