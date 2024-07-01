/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      ssm:'375px',
      sm:'640px',
      md:'768px',
      lg: '1074px',
    },
    extend: {
      colors: {
        'primary': '#361934',
        'secondary': '#F9F9F9'
      }
    },
  },
  plugins: [],
}


