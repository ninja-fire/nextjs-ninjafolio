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
        'surface': '#1E1E1C',
        'line': 'rgba(245, 247, 239, 0.12)',
        'label': '#F5F7EF',
        'caption': 'rgba(245, 247, 239, 0.8)',
        'placeholder': 'rgba(245, 247, 239, 0.64)',
        'primary': '#C6FE09',
      },
      boxShadow: {
        'darkXl': '8px 8px 0px #151514',
        'darkSm': '4px 4px 0px #151514',
        'lightXl': '8px 8px 0px #F5F7EF',
        'lightSm': '4px 4px 0px #F5F7EF',
        'primaryXl': '8px 8px 0px #C6FE09',
        'primarySm': '4px 4px 0px #C6FE09',
      },
      fontSize: {
        'display': ['clamp(3rem, 8vw, 7.5rem)', { lineHeight: '0.92', letterSpacing: '-0.03em' }],
        'h2': ['clamp(2.25rem, 5vw, 4rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'h3': ['clamp(1.5rem, 2.6vw, 2.25rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
      },
      maxWidth: {
        'site': '90rem',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'marquee-y': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 160s linear infinite',
        'marquee-y': 'marquee-y 70s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
