import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import jsconfigPaths from "vite-jsconfig-paths";
// import { compression } from "vite-plugin-compression2";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    jsconfigPaths(),
    ViteImageOptimizer(),
    // viteImagemin({
    //   plugins: {
    //     jpg: imageminMozjpeg(),
    //   },
    //   makeWebp: {
    //     plugins: {
    //       jpg: imageminWebp(),
    //     },
    //   },
    // }),
  ],
});
