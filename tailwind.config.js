/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#1E1E2F',
          50: '#f5f5f7',
          100: '#e8e8ed',
          200: '#d1d1db',
          300: '#a9a9bc',
          400: '#7c7c96',
          500: '#5e5e76',
          600: '#4a4a5e',
          700: '#3d3d4d',
          800: '#2d2d3d',
          900: '#1E1E2F',
        },
        accent: {
          DEFAULT: '#ff9b54',
          50: '#fff8f3',
          100: '#ffeddf',
          200: '#ffd9bf',
          300: '#ffbe94',
          400: '#ff9b54',
          500: '#f57c2a',
          600: '#e65f0a',
          700: '#bf4d0b',
          800: '#983f10',
          900: '#7a3510',
        },
      },
    },
  },
  plugins: [],
}
