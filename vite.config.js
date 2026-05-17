import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Registers the modern Tailwind CSS v4 native compiler
  ],
  server: {
    port: 3000,
    open: true,
  },
});
