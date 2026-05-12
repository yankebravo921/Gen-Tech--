/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F4F2EE',
        'cream-soft': '#ECE9E2',
        ink: '#0E0F11',
        'ink-2': '#1A1B1E',
        'gt-blue': '#2D6BF5',
        'gt-orange': '#E0533A',
        'gt-green': '#2FA85C',
        lime: '#A3E635',
      },
      fontFamily: {
        display: ['Spectral', 'Source Serif Pro', 'Georgia', 'serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        pill: '9999px',
      }
    }
  },
  plugins: []
}
