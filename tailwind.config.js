/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#357376",
        "primary-hover": "#316a6d",
        "dark": "#363636",
        "danger": "#f14668",
        "success": "#1eb553",
        "info": "#3e8ed0",
        "warning": "#ffe08a",
        "body-bg": "#f5f5f5"
      },
      screens: {
        xs: "480px"
      }
    },
  },
  plugins: [],
}
