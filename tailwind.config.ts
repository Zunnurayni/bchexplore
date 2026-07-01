import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0c2a23",
        paper: "#f3f0e7",
        green: { DEFAULT: "#0ac18e", deep: "#089e74" },
        xp: { DEFAULT: "#e8a13a", deep: "#c9821f" },
        coral: "#e2563d",
        line: "#d9d4c5",
        muted: "#5d6b63",
        card: "#fbfaf5",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl2: "20px",
      },
    },
  },
  plugins: [],
};
export default config;
