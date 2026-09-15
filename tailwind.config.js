/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0F172A',
          50: '#F1F5F9',
          100: '#E2E8F0',
          400: '#475569',
          500: '#334155',
          600: '#1E293B',
          700: '#172037',
          800: '#131C30',
          900: '#0F172A',
          950: '#0A0F1D',
        },
        brand: {
          blue: '#2563EB',
          cyan: '#06B6D4',
        },
        surface: {
          light: '#F8FAFC',
        },
      },
      fontFamily: {
        display: ['Manrope', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.08) 1px, transparent 1px)",
        'glow-gradient': 'radial-gradient(circle at 50% 0%, rgba(37,99,235,0.15), transparent 60%)',
      },
      boxShadow: {
        soft: '0 4px 24px -4px rgba(15,23,42,0.08)',
        'soft-lg': '0 20px 60px -12px rgba(15,23,42,0.15)',
        glow: '0 0 40px rgba(6,182,212,0.25)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
    },
  },
  plugins: [],
}


