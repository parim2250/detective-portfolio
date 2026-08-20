/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        typewriter: ['"Special Elite"', 'monospace'],
        handwritten: ['"Caveat"', 'cursive'],
        mono: ['"Courier Prime"', 'monospace'],
        stamp: ['"Bebas Neue"', 'sans-serif'],
      },
      colors: {
        board: '#2c1810',
        paper: '#f4e4c1',
        'paper-dark': '#d4c4a1',
        'red-string': '#cc0000',
        'red-stamp': '#8b0000',
        ink: '#2c2c2c',
        'ink-blue': '#1a3a5c',
      },
    },
  },
  plugins: [],
}