/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors : {
      "primary" : "#06AED5 !important",
      "prim-dark" : "#046880",
      "prim-light" : "#6acee6",
      "secondary" : "#032B43 !important",
      "sec-dark" : "#021e2f",
      "sec-light" : "#4f6b7b !important",
      "sec-50" : "#032B43CC",
      "white" : "#ffffff",
      "black" : "#000",
      "gray" : "#b3b3b3",
      "gray-light" : "#f3f3f3",
      "light" : "#e6eaec",
      "transparent" : "transparent"
    }
  },
  plugins: [],
}