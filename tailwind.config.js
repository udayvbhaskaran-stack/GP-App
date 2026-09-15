/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#13233A',
          50: '#E8ECF2',
          100: '#C9D1DE',
          200: '#9DAECA',
          300: '#708AB6',
          400: '#44689F',
          500: '#2A476B',
          600: '#1D3655',
          700: '#13233A',
          800: '#0E1A2E',
          900: '#0A1320',
        },
        teal: {
          DEFAULT: '#176B73',
          50: '#E6F4F5',
          100: '#C0E0E3',
          200: '#8BCCD1',
          300: '#56B8BF',
          400: '#2E9CA4',
          500: '#176B73',
          600: '#135660',
          700: '#0F424A',
          800: '#0B2E35',
          900: '#071B21',
        },
        gold: {
          DEFAULT: '#C79A3B',
          50: '#FAF3E4',
          100: '#F0DFB8',
          200: '#E5CC8C',
          300: '#D9B85F',
          400: '#CFA848',
          500: '#C79A3B',
          600: '#A87E2F',
          700: '#896224',
          800: '#6A491B',
          900: '#4B3112',
        },
        cream: '#F7F8F6',
        ink: {
          DEFAULT: '#17202A',
          light: '#566273',
          muted: '#7A8492',
        },
        success: '#2D7A50',
        warning: '#B8732E',
        error: '#9B3838',
      },
      fontFamily: {
        heading: ['DM Sans', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '14px',
      },
      boxShadow: {
        card: '0 1px 3px 0 rgba(19, 35, 58, 0.06), 0 1px 2px 0 rgba(19, 35, 58, 0.04)',
        'card-hover': '0 4px 12px 0 rgba(19, 35, 58, 0.08), 0 2px 6px 0 rgba(19, 35, 58, 0.05)',
        'card-lg': '0 8px 24px 0 rgba(19, 35, 58, 0.1), 0 4px 12px 0 rgba(19, 35, 58, 0.06)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'slide-in': 'slideIn 0.4s ease-out',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'bounce-subtle': 'bounceSubtle 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-12px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        bounceSubtle: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
