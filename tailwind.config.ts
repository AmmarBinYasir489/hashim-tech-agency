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
        bg: "#e8e8e8",
        "bg-dark": "#d8d8d8",
        "bg-light": "#f2f2f2",
        "text-primary": "#1a1a2e",
        "text-secondary": "#4a4a6a",
        "text-tertiary": "#8a8aa8",
        accent: "#0ea5e9",
        "accent-hover": "#0284c7",
        success: "#4caf50",
        warning: "#ff9800",
        danger: "#f44336",
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        neu: "10px 10px 30px #bebebe, -10px -10px 30px #ffffff",
        "neu-sm": "5px 5px 15px #c8c8c8, -5px -5px 15px #ffffff",
        "neu-hover": "15px 15px 40px #b0b0b0, -15px -15px 40px #ffffff",
        "neu-in": "inset 5px 5px 10px #c8c8c8, inset -5px -5px 10px #ffffff",
        "neu-in-sm": "inset 3px 3px 6px #d0d0d0, inset -3px -3px 6px #ffffff",
        "neu-in-deep": "inset 8px 8px 16px #c0c0c0, inset -8px -8px 16px #ffffff",
        accent: "0 8px 30px rgba(14,165,233,0.25)",
      },
      borderRadius: {
        neu: "24px",
        "neu-lg": "32px",
        "neu-xl": "48px",
      },
    },
  },
  plugins: [],
};
export default config;