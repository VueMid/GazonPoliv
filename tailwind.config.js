/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',
        'black': '#000000',
        'darker-green': '#008435',
        'dark-black': '#191919',
        'dim-black': '#282828',
        'light green': '#148E45',
        'dim-gray': '#6D6D6D',
        'lighter-green': '#004B1E',
        'tailwind-dark': '#1E293B',
      }
    },
    container: {
      center: true,
      padding: '40px',
      screens: {
        'sm': '640px',
        'md': '768px',
        '2md': '820px',
        'lg': '1024px',
        'xl': '1206px',
        '2xl': '1536px',
      }
    },
    theme: {
      screens: {
        'sm': '640px',
        'md': '768px',
        '2md': '820px',
        'lg': '1024px',
        'xl': '1206px',
        '2xl': '1536px',
      }
    }
  },
  plugins: [],
}