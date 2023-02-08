/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#DC3545",

          "secondary": "#2c3094",

          "accent": "#37CDBE",

          "neutral": "#3D4451",

          "base-100": "#FFFFFF",

          "info": "#3ABFF8",

          "success": "#03a54c",

          "warning": "#fcc419",

          "error": "#f11925",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
