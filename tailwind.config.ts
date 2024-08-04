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
        'trooper': "url('../public/trooper.png')",
      },
      fontFamily: {
        sans: ['var(--font-brico)'],
      },
      colors: {
        'background': '#151514',
        'label': '#F5F7EF',
        'caption': 'rgba(245, 247, 239, 0.8);',
        'placeholder': 'rgba(245, 247, 239, 0.64);',
        'primary': '#C6FE09',
      },
      boxShadow: {
        'darkXl': '8px 8px 0px #151514;',
        'darkSm': '4px 4px 0px #151514;',
        'lightXl': '8px 8px 0px #F5F7EF;',
        'lightSm': '4px 4px 0px #F5F7EF;',
        'primarySm': '4px 4px 0px #C6FE09;',
      },
    },
  },
  plugins: [],
};
export default config;
