import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const root = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  base: "/link-flower/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        root: `${root}index.html`,
        channels: `${root}channels/index.html`,
        apps: `${root}apps/index.html`,
        horror: `${root}horror/index.html`,
      },
    },
  },
});
