/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Toggle dark mode via class="dark" on <html> or <body>
  theme: {
    extend: {
      colors: {
        // Design system custom HSL mappings mapped to Tailwind colors
        brand: {
          dark: '#0A0D14',      // Deep Space Charcoal
          cardDark: '#111622',  // Dark Navy Card BG
          glassDark: '#171E30', // Glass Accent Card BG
          light: '#F9FAFB',     // Soft Light Mode BG
          cardLight: '#FFFFFF', // Clean white card
          glassLight: '#F3F4F6',// Off-white glass BG
        },
        accent: {
          cyan: '#06B6D4',      // Neon Scalability Glow
          emerald: '#10B981',   // Trust/Retention Emerald
          purple: '#8B5CF6',    // Advanced Enterprise Purple
        }
      },
      fontFamily: {
        headline: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-light': '0 8px 32px 0 rgba(31, 38, 135, 0.08)',
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.15)',
        'glow-emerald': '0 0 20px rgba(16, 185, 129, 0.15)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
