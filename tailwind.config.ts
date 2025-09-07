import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#010b19",
        navy: "#021631",
        signal: "#042c62",
        alloy: "#c0c0c0"
      },
      fontFamily: {
        mokoto: ["Mokoto", "Bicubik", "system-ui", "Arial"],
        bicubik: ["Bicubik", "system-ui", "Arial"]
      }
    }
  },
  plugins: []
};
export default config;
