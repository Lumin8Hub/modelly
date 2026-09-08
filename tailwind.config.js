/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1C2A35",
        "ink-soft": "#1C2A35",
        paper: "#F5F7F9",
        "paper-elevated": "#FFFFFF",
        rule: "rgba(28, 42, 53, 0.18)",
        "text-muted": "#356B87",
        "text-inverse": "#FFFFFF",
        "accent-teal": "#12AD8E",
        "accent-amber": "#DDAC4A",
        "accent-coral": "#C04040",
        "accent-slate": "#356B87",
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
