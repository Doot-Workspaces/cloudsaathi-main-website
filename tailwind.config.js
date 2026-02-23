/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#06080a',
        card: '#0c0e12',
        'card-hover': '#12151b',
        terminal: '#0a0c10',
        surface: '#161a22',
        border: 'rgba(255,255,255,0.05)',
        'border-hover': 'rgba(255,255,255,0.1)',
        accent: '#00e5a0',
        'accent-dim': 'rgba(0,229,160,0.08)',
        'accent-glow': 'rgba(0,229,160,0.15)',
        warm: '#ff8a50',
        'warm-dim': 'rgba(255,138,80,0.1)',
        blue: '#5eaaff',
        'blue-dim': 'rgba(94,170,255,0.08)',
        'text-primary': '#e8eaed',
        'text-soft': '#8b92a0',
        'text-muted': '#555d6e',
      },
      fontFamily: {
        display: ['Newsreader', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'Menlo', 'monospace'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
