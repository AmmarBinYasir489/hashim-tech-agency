/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      colors: {
        // Dark neumorphic palette
        surface: {
          DEFAULT: '#0B0F1A',
          light: '#111827',
          lighter: '#1A2236',
        },
        accent: {
          DEFAULT: '#6366F1',
          light: '#818CF8',
          dark: '#4F46E5',
          glow: 'rgba(99, 102, 241, 0.15)',
        },
        text: {
          primary: '#F1F5F9',
          secondary: '#94A3B8',
          muted: '#64748B',
        },
        neumorphic: {
          shadowLight: 'rgba(255, 255, 255, 0.03)',
          shadowDark: 'rgba(0, 0, 0, 0.4)',
          shadowDarkDeep: 'rgba(0, 0, 0, 0.6)',
        }
      },
      boxShadow: {
        'neu-raised': '8px 8px 16px rgba(0,0,0,0.4), -4px -4px 12px rgba(255,255,255,0.03), inset 0 0 0 rgba(0,0,0,0)',
        'neu-pressed': 'inset 4px 4px 8px rgba(0,0,0,0.4), inset -2px -2px 6px rgba(255,255,255,0.03)',
        'neu-glow': '0 0 40px rgba(99, 102, 241, 0.15), 0 0 80px rgba(99, 102, 241, 0.05)',
        'neu-card': '12px 12px 24px rgba(0,0,0,0.35), -6px -6px 16px rgba(255,255,255,0.02)',
        'neu-card-hover': '16px 16px 32px rgba(0,0,0,0.45), -8px -8px 20px rgba(255,255,255,0.03), 0 0 30px rgba(99,102,241,0.08)',
        'neu-inset': 'inset 6px 6px 12px rgba(0,0,0,0.4), inset -3px -3px 8px rgba(255,255,255,0.02)',
      },
      borderRadius: {
        'neu': '20px',
        'neu-sm': '14px',
        'neu-lg': '28px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 8s ease-in-out 1s infinite',
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
        'gradient': 'gradientShift 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
