import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        'text-color-change': {
          '0%, 100%': { color: '#ffffff' }, // white
          '25%': { color: '#f59e0b' }, // amber
          '50%': { color: '#f75d5d' }, // red
          '75%': { color: '#f97316' }, // orange
        },
      },
      animation: {
        'text-color-change': 'text-color-change 5s linear infinite',
      }
    },
  },
  plugins: [],
};
export default config;
