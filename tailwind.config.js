/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Source Sans Pro", "sans-serif"],
      sofia: ["Sofia", "sans-serif"],
      Montserrat: ["Montserrat", "sans-serif"],
      Handrawn: ["Delicious Handrawn", "sans-serif"],
      Lato: ["Lato", "sans-serif"],
      Inter: ["Inter", "sans-serif"],
      Roboto: ["Roboto", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    screens: {
      sm: "480px",
      sm2: "520px",
      md: "768px",
      lg: "976px",
      xl: "1250px",
    },
    extend: {
      colors: {
        black: "#111111",
        gray: {
          light: "#D3D3D3",
          semi: "#222222",
          dark: "#333333",
          original: "#808080",
          dim: "#696969",
          slate: "#708090",
        },
      },
    },
  },
  plugins: [],
};
