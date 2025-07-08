/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        brandBlue: "#00ffff",
      },
      backgroundImage: {
        "brand-grad":
          "linear-gradient(90deg, rgba(0,255,255,1) 0%, rgba(64,224,208,1) 50%, rgba(0,191,255,1) 100%)",
      },
    },
  },
  plugins: [],
};
