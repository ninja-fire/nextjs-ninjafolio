import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-brico)'],
      },
      colors: {
        'background': '#151514',
        'label': '#F5F7EF',
        'caption': '#C8CAC2',
        'placeholder': '#A4A6A0',
        'primary': '#C6FE09',
      },
      boxShadow: {
        'darkXl': '8px 8px 0px #151514;',
        'darkSm': '4px 4px 0px #151514;',
        'lightXl': '8px 8px 0px #F5F7EF;',
        'lightSm': '4px 4px 0px #F5F7EF;',
      },
    },
  },
  plugins: [],
};
export default config;
