import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [] as const,
      },
    }),
    tailwindcss(),
    createHtmlPlugin({ minify: true }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    minify: "esbuild",
    target: "esnext",
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          ui: ["@radix-ui/react-label", "@radix-ui/react-slot"],
          utils: ["clsx", "tailwind-merge", "class-variance-authority"],
        },
      },
    },
    sourcemap: false,
    reportCompressedSize: true,
  },
  esbuild: {
    legalComments: "none",
    target: "esnext",
    drop: process.env.NODE_ENV === "production" ? ["console", "debugger"] : [],
  },
});
