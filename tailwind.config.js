/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0E0327',
          gold: '#AE8532',
          'gold-light': '#C69A49',
          'gold-dim': '#7A5D22',
          'dark-2': '#1a0a3d',
          'dark-3': '#120630',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'draw-line': 'drawLine 1.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-slower': 'float 12s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-gold': 'pulseGold 3s ease-in-out infinite',
        'slide-in-left': 'slideInLeft 0.9s ease-out forwards',
        'count-up': 'fadeUp 0.6s ease-out forwards',
        'spin-slow': 'spin 20s linear infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        drawLine: {
          '0%': { width: '0%', opacity: '0' },
          '100%': { width: '100%', opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        pulseGold: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 0 0 rgba(174,133,50,0.4)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 0 12px rgba(174,133,50,0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
