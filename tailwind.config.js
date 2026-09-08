export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#712CDC",
          50: "#F5F1FF",
          100: "#ECE5FF",
          200: "#D6CAFF",
          300: "#BDA7FF",
          400: "#A483FF",
          500: "#712CDC",
          600: "#5C24B9",
          700: "#471C96",
          800: "#321573",
          900: "#1D0D50",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        "xl": "18px",
        "2xl": "24px",
      },
      boxShadow: {
        "card": "0 4px 12px rgba(113, 44, 220, 0.04)",
        "elevated": "0 8px 24px rgba(113, 44, 220, 0.08)",
      },
      animation: {
        "fade-in": "fadeIn 200ms ease-out",
        "slide-up": "slideUp 200ms ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(8px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
}
