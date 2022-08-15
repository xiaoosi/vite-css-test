import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

console.log(JSON.stringify(react(), null, 2));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {},
    },
  },
});