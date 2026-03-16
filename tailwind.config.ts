import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        amber: { 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706" },
        orange: { 400: "#fb923c", 500: "#f97316" },
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "fade-up": "fadeUp 0.8s ease both",
        "glow-pulse": "glowPulse 5s ease-in-out infinite",
      },
      keyframes: {
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        fadeUp: { from: { opacity: "0", transform: "translateY(22px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        glowPulse: { "0%,100%": { opacity: "0.35" }, "50%": { opacity: "0.7" } },
      },
    },
  },
  plugins: [],
};
export default config;
