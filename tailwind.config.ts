import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        croissant: ["var(--font-croissant)"],
      },
      keyframes: {
        drop: {
          "0% ": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        dropLarge: {
          "0% ": { opacity: "0", transform: "translate(-50%,-20px)" },
          "100%": { opacity: "1", transform: "translate(-50%,0)" },
        },
      },
      animation: {
        "spin-slow": " spin 4s linear infinite",
        drop: "drop ease-in .25s",
        dropLarge: "dropLarge ease-in .25s",
      },
    },
  },
  plugins: [],
};
export default config;
