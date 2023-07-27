/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ".//components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 'xsm': '480px',
    keyframes: {
      circle: {
        '0%': { transform: 'translateY(-32px)' },
        '100%': { transform: 'translateY(32px)' },
      }
    }
  },
  },
  plugins: [],
}

