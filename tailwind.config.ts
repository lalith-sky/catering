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
        leaf: {
          50: "#F2F9F5",
          100: "#E1F2E8",
          200: "#C3E5D1",
          300: "#96D0AF",
          400: "#5FB486",
          500: "#369764",
          600: "#267A4F",
          700: "#1C5E3D",
          800: "#14482E",
          900: "#0D3522",
          950: "#072014",
        },
        gold: {
          50: "#FAF7EE",
          100: "#F4ECD4",
          200: "#E9D9A6",
          300: "#DBC172",
          400: "#CBA745",
          500: "#B88E28",
          600: "#9C731C",
          700: "#7A5618",
          800: "#5A3E16",
          900: "#3D2A11",
        },
        cream: {
          50: "#FCFAF6",
          100: "#F8F3EA",
          200: "#F0E7D3",
          300: "#E5D6B6",
          400: "#D3BE94",
        },
      },
      fontFamily: {
        serif: ["var(--font-cinzel)", "Georgia", "serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #D4AF37 0%, #C59B27 50%, #9C731C 100%)",
        "leaf-gradient": "linear-gradient(135deg, #134E35 0%, #0D3522 100%)",
      },
      boxShadow: {
        subtle: "0 4px 20px -2px rgba(13, 53, 34, 0.06)",
        card: "0 10px 30px -4px rgba(13, 53, 34, 0.08)",
        gold: "0 6px 20px -2px rgba(184, 142, 40, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
