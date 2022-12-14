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

          "secondary": "#007BFF",

          "accent": "#37CDBE",

          "neutral": "#3D4451",

          "base-100": "#FFFFFF",

          "info": "#3ABFF8",

          "success": "#218838",

          "warning": "#fcc419",

          "error": "#C82333",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
