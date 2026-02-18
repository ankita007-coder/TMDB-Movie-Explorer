import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#141414",
        surface: "#1f1f1f",
        surfaceHover: "#2a2a2a",
        accent: "#e50914",
        textPrimary: "#ffffff",
        textMuted: "#b3b3b3",
      },
    },
  },
  plugins: [],
};

export default config;
