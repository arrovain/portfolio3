import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],



  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
      },
     
       colors: {
           dark: "#1b1b1b",
           light: "#f5f5f5",
           primary: "#B63E96", // 240,86,199
           primaryDark: "#58E6D9", // 80,230,217
       },
       animations: {
         'spin-slow': 'spin 8s linear infinite',
     
     },
     backgroundImage: {
      circularLight: 'repeating-radial-gradient(rgba(0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 100px);'
     }
     
    
  },
}
}
export default config;
