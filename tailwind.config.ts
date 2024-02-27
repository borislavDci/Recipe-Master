import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#CD853F",
        navbar: "#F5F5F5",
        background: "#F9FBF2",
        textColor: "#0A122A",
        danger: "#A41623",
        info: "#38A3A5",
      },
    },
  },
  plugins: [],
};
export default config;
