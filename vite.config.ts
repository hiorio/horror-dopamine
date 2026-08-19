import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import { SHOW_HORROR_DOPAMINE } from "./src/visibility";

const root = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        root: `${root}index.html`,
        apps: `${root}apps/index.html`,
        dohwaji: `${root}apps/dohwaji/index.html`,
        timeflower: `${root}apps/timeflower/index.html`,
        dailyPlank: `${root}apps/daily-plank/index.html`,
        ...(SHOW_HORROR_DOPAMINE ? {
          channels: `${root}channels/index.html`,
          horror: `${root}horror/index.html`,
        } : {}),
      },
    },
  },
});
