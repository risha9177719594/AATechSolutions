/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0755A5',
          'blue-dark': '#063B78',
          'blue-light': '#0D8FD3',
          gray: '#777777',
        },
        text: {
          dark: '#20252B',
          muted: '#5A6573',
        },
        surface: {
          light: '#F3F5F7',
          border: '#E2E7EC',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.02)',
        'card': '0 4px 12px 0 rgba(7, 85, 165, 0.05), 0 1px 3px 0 rgba(0, 0, 0, 0.04)',
        'card-hover': '0 12px 24px -4px rgba(7, 85, 165, 0.12), 0 4px 8px -2px rgba(0, 0, 0, 0.04)',
        'header': '0 2px 10px 0 rgba(6, 59, 120, 0.06)',
      }
    },
  },
  plugins: [],
}
