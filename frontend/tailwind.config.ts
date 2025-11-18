
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: { 50: "#e6fbff", 100: "#c0f1ff", 200: "#92e4ff", 300: "#61d6ff", 400: "#31c3f7", 500: "#10a8dc", 600: "#0b86b1", 700: "#096a8c", 800: "#074e66", 900: "#05384b" },
        accent: { 500: "#f59e0b" },
        surface: { 50: "#111315", 100: "#101317", 200: "#0d1117", 300: "#0b0f14" }
      },
      boxShadow: { soft: "0 10px 30px rgba(0,0,0,0.25)" },
      borderRadius: { xl2: "1.25rem" }
    }
  },
  plugins: []
};
export default config;
