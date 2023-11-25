/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      phone: "390px",
      tablet: "720px",
      laptop: "1024px",
    },
    colors: {
      orange:"#EE6811",
      gray:"#F6F6F6",
      white:"#FFFFFF",
      black:"#343a40",
      blue:"#4cc9f0",

    },

    extend: {},
  },
  plugins: [],
};
