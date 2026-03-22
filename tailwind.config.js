/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f0fdfa', // Lightest teal
          100: '#ccfbf1',
          200: '#99f6e4',
          500: '#246B6B', // Main Sidebar Teal
          600: '#1e5d5d', // Darker Sidebar Teal
          700: '#194e4e',
          800: '#133e3e',
          900: '#0d2d2d',
        },
      },
    },
  },
  plugins: [],
}

