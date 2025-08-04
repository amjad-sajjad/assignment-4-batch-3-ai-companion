import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
      theme: {
        extend: {
          fontFamily: {
            satoshi: ['Satoshi', 'sans-serif'],
          },
          colors: {
            bodyBgStart: '#0f0f0f',
            bodyBgEnd: '#1a0b2e',
          },
        },
      },
    }),
  ],
});
