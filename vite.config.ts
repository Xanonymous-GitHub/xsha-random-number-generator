import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
  plugins: [react(), tailwindcss(), createHtmlPlugin({ minify: true })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "esnext",
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: "react",
              test: /node_modules\/(react|react-dom)\//,
            },
            {
              name: "ui",
              test: /node_modules\/@radix-ui\//,
            },
            {
              name: "utils",
              test: /node_modules\/(clsx|tailwind-merge|class-variance-authority)\//,
            },
          ],
        },
        comments: {
          legal: false,
        },
        minify: {
          compress: {
            dropConsole: true,
            dropDebugger: true,
          },
        },
      },
    },
    sourcemap: false,
    reportCompressedSize: true,
  },
});
