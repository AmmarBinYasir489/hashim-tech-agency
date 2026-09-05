import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F7F9FC",
        "bg-dark": "#06152D",
        "bg-dark-alt": "#0B2854",
        "bg-light": "#FFFFFF",
        "text-primary": "#06152D",
        "text-secondary": "#0B2854",
        "text-tertiary": "#174EA6",
        accent: "#F5B51B",
        "accent-hover": "#d49b18",
        success: "#4caf50",
        warning: "#ff9800",
        danger: "#f44336",
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        "card": "0 4px 20px rgba(6, 21, 45, 0.04)",
        "card-hover": "0 20px 60px rgba(6, 21, 45, 0.08)",
        "card-lg": "0 10px 40px rgba(6, 21, 45, 0.06)",
        "accent": "0 8px 24px rgba(245, 181, 27, 0.25)",
        "nav": "0 4px 20px rgba(6, 21, 45, 0.1)",
      },
      borderRadius: {
        "card": "20px",
        "card-lg": "24px",
        "card-xl": "32px",
      },
      backgroundImage: {
        "gradient-navy": "linear-gradient(135deg, #06152D 0%, #0B2854 100%)",
        "gradient-gold": "linear-gradient(135deg, #F5B51B 0%, #d49b18 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
