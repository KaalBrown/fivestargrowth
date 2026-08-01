import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { ink: "#07131f", navy: "#0b2033", sky: "#25b7f1", lime: "#d8fb63" },
      boxShadow: { glow: "0 0 32px rgba(37, 183, 241, .28)" },
    },
  },
  plugins: [],
};

export default config;
