/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f7fce8',
          100: '#eef9d1',
          200: '#ddf3a3',
          300: '#cced75',
          400: '#bbe747',
          500: '#bed631',
          600: '#a8c02a',
          700: '#92aa23',
          800: '#7c941c',
          900: '#667e15',
        },
        accent: '#444649',
        card: '#f1f1f1',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

