/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      phone: "390px",
      tablet: "720px",
      laptop: "1024px",
    },

    extend: {},
  },
  plugins: [],
};
