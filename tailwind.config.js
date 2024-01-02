/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Helvetica', 'Arial', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif']  
      },
      colors: {
        'bg-1' : "#00040f",
        'b-red' : "#A60A3D"
      },
    },
  },
  plugins: [],
}

