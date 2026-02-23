/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        bg: '#0a0a0b',
        card: '#1a1a1f',
        border: 'rgba(255,255,255,0.08)',
        accent: '#22d3ee',
        'accent-dim': 'rgba(34,211,238,0.15)',
        amber: '#f59e0b',
        'amber-dim': 'rgba(245,158,11,0.15)',
        muted: '#a1a1aa',
      },
      animation: {
        'reveal': 'reveal 0.7s ease-out forwards',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
      },
      keyframes: {
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(1.5)' },
        },
      },
    },
  },
  plugins: [],
};
