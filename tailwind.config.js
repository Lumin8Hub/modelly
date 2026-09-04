/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0B0D",
        "ink-soft": "#1A1C20",
        paper: "#FAFAF7",
        "paper-elevated": "#F2F2EE",
        rule: "#E5E5E0",
        "text-muted": "#6B6B66",
        "text-inverse": "#F5F5F0",
        "accent-teal": "#5DB5AE",
        "accent-amber": "#F4C04E",
        "accent-coral": "#E5546B",
        "accent-slate": "#5B7DB1",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        sans: ["Plus Jakarta Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};
