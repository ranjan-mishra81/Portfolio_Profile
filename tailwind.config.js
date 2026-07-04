/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0A0F1E',
          900: '#0D1526',
          800: '#111D35',
          700: '#1E2A45',
        },
        teal: {
          DEFAULT: '#00D4B4',
          dim: '#00A88F',
          glow: 'rgba(0,212,180,0.35)',
        },
        lavender: {
          DEFAULT: '#8B9FD4',
          light: '#B8C5E8',
          muted: '#6A7A9A',
          dark: '#5A6A8A',
          faint: '#3A4A6A',
        },
        snow: '#F0F4FF',
        'card-text': '#E0E8FF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        fadeUp: 'fadeUp 0.8s ease both',
        'fadeUp-delay': 'fadeUp 0.8s ease 0.15s both',
        'fadeUp-delay2': 'fadeUp 0.8s ease 0.3s both',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        spinRev: {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 50px rgba(0,212,180,0.25), inset 0 0 40px rgba(124,143,212,0.12)' },
          '50%': { boxShadow: '0 0 70px rgba(0,212,180,0.4), inset 0 0 50px rgba(124,143,212,0.18)' },
        },
      },
      backgroundImage: {
        'grid-teal': 'linear-gradient(rgba(0,212,180,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,180,0.035) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '55px 55px',
      },
    },
  },
  plugins: [],
}
