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
        bg: "#f7f7f8",
        "bg-dark": "#0b0f1a",
        "bg-light": "#ffffff",
        "text-primary": "#071327",
        "text-secondary": "#586174",
        "text-tertiary": "#8a8fa3",
        accent: "#D4A017",
        "accent-hover": "#b8860b",
        success: "#4caf50",
        warning: "#ff9800",
        danger: "#f44336",
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        neu: "6px 6px 18px rgba(0,0,0,0.06), -6px -6px 18px rgba(255,255,255,0.6)",
        "neu-sm": "3px 3px 8px rgba(0,0,0,0.05), -3px -3px 8px rgba(255,255,255,0.6)",
        "neu-hover": "8px 10px 24px rgba(0,0,0,0.08)",
        "neu-in": "inset 3px 3px 8px rgba(0,0,0,0.04), inset -3px -3px 8px rgba(255,255,255,0.6)",
        "neu-in-sm": "inset 2px 2px 4px rgba(0,0,0,0.03), inset -2px -2px 4px rgba(255,255,255,0.6)",
        "neu-in-deep": "inset 6px 6px 12px rgba(0,0,0,0.06), inset -6px -6px 12px rgba(255,255,255,0.6)",
        accent: "0 8px 20px rgba(212,160,23,0.12)",
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