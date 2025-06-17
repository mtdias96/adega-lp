import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#0F1C2E",
          50: "#F8F9FB",
          100: "#E8EBF0",
          200: "#D1D8E1",
          300: "#A8B5C7",
          400: "#7A8BA3",
          500: "#556B85",
          600: "#3D4F68",
          700: "#2A3A4F",
          800: "#1C2B3A",
          900: "#0F1C2E",
          950: "#0A1420",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#E9BE7C",
          50: "#FDF9F3",
          100: "#FBF2E6",
          200: "#F7E4CC",
          300: "#F1D1A8",
          400: "#E9BE7C",
          500: "#E0A855",
          600: "#D4943A",
          700: "#B17B2F",
          800: "#8F632B",
          900: "#755227",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "#FF6B6B",
          50: "#FFF5F5",
          100: "#FFE3E3",
          200: "#FFCCCC",
          300: "#FFA8A8",
          400: "#FF8A8A",
          500: "#FF6B6B",
          600: "#FF5252",
          700: "#FF3838",
          800: "#E53E3E",
          900: "#C53030",
          foreground: "hsl(var(--accent-foreground))",
        },
        neutral: {
          DEFAULT: "#F5F7FA",
          50: "#FAFBFC",
          100: "#F5F7FA",
          200: "#E4E7EB",
          300: "#DDE1E6",
          400: "#9AA0A6",
          500: "#5F6368",
          600: "#3C4043",
          700: "#1C2B3A",
          800: "#0F1C2E",
          900: "#0A1420",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
