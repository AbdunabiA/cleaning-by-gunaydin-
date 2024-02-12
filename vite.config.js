import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import jsconfigPaths from "vite-jsconfig-paths";
import viteImagemin from "@vheemstra/vite-plugin-imagemin";
// import { compression } from "vite-plugin-compression2";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import imageminWebp from "imagemin-webp";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    jsconfigPaths(),
    ViteImageOptimizer(),
    viteImagemin({
      makeWebp: {
        plugins: {
          jpg: imageminWebp(),
        },
      },
    }),
  ],
});
