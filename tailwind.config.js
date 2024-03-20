/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      padding: {
        '46': '11.5rem', 
      },
      width: {
        '5/5': '1.5rem'
      }
    }
  },
  plugins: [],
};
