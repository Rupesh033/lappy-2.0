import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FAF8F3",
        surface: "#FFFFFF",
        cream: "#FAF8F3",
        ink: "#071A33",
        graphite: "#172033",
        obsidian: "#071A33",
        navy: {
          DEFAULT: "#071A33",
          light: "#172033",
          dark: "#051224",
        },
        primary: {
          DEFAULT: "#0066B3",
          hover: "#004F8A",
        },
        muted: "#667085",
        steel: "#98A2B3",
        line: "#E7E4DD",
        gold: "#D4A93A",
        amber: {
          badge: "#F5E8BF",
          text: "#7A5A00",
        },
        blue: "#0066B3",
        sage: "#16805A",
        ember: "#DC2626",
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "sans-serif"],
        outfit: ["var(--font-outfit)", "sans-serif"],
        display: ["var(--font-outfit)", "sans-serif"],
        serif: ["var(--font-outfit)", "serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      letterSpacing: {
        eyebrow: "0.28em",
      },
      borderRadius: {
        none: "0px",
        sm: "4px",
        DEFAULT: "8px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "20px",
        "3xl": "28px",
        full: "9999px",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        "2xs": "0 1px 2px 0 rgba(0, 0, 0, 0.03)",
        card: "0 2px 12px rgba(7, 26, 51, 0.05)",
        drawer: "0 8px 30px rgba(7, 26, 51, 0.12)",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
