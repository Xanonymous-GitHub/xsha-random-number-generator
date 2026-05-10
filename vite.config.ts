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
    minify: "oxc",
    target: "esnext",
    rolldownOptions: {
      output: {
        comments: { legal: false },
        minify: {
          compress: {
            dropConsole: process.env.NODE_ENV === "production",
            dropDebugger: process.env.NODE_ENV === "production",
          },
          mangle: true,
        },
        codeSplitting: {
          groups: [
            {
              name: "react",
              test: /node_modules[\\/](react|react-dom)[\\/]/,
              priority: 30,
            },
            {
              name: "ui",
              test: /node_modules[\\/]@radix-ui[\\/](react-label|react-slot)[\\/]/,
              priority: 20,
            },
            {
              name: "utils",
              test: /node_modules[\\/](clsx|tailwind-merge|class-variance-authority)[\\/]/,
              priority: 10,
            },
          ],
        },
      },
    },
    sourcemap: false,
    reportCompressedSize: true,
  },
});
