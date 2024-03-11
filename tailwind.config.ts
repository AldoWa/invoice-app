import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ['selector', '[data-mode="dark"]'],
  theme: {
    colors: {
      "invoice-01": "#7C5DFA",
      "invoice-02": "#9277FF",
      "invoice-03": "#1E2139",
      "invoice-04": "#252945",
      "invoice-05": "#DFE3FA",
      "invoice-06": "#888EB0",
      "invoice-07": "#7E88C3",
      "invoice-08": "#0C0E16",
      "invoice-09": "#EC5757",
      "invoice-10": "#FF9797",
      "invoice-light": "#F8F8FB",
      "invoice-dark": "#141625",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
