/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Euclid Circular B"', "Manrope", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          green: "#0f5d4b",
          greenSoft: "#dfece7",
        },
        ink: {
          900: "#1a1a1a",
          700: "#3a3a3a",
          500: "#6b6b6b",
          300: "#9c9c9c",
        },
        accent: {
          blue: "#4c5dff",
          green: "#13b05a",
          teal: "#12b2a6",
          red: "#f14b3f",
        },
        surface: "#ffffff",
        border: "#e7e7e7",
      },
      boxShadow: {
        card: "0 16px 32px rgba(15, 24, 38, 0.08)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease forwards",
      },
    },
  },
  plugins: [],
}
