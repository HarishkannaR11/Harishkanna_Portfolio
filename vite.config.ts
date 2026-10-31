import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'

// Absolute site URL for canonical / Open Graph tags (crawlers need absolute URLs).
// Set VITE_SITE_URL, or deploy on Vercel, which provides VERCEL_PROJECT_PRODUCTION_URL.
const siteUrl = (
  process.env.VITE_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "")
).replace(/\/$/, "")

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "html-site-url",
      transformIndexHtml: (html: string) => html.replaceAll("%SITE_URL%", siteUrl),
    },
  ],
  build: {
    rollupOptions: {
      output: {
        // Separate long-lived vendor code so app-only changes don't bust its cache.
        manualChunks: {
          motion: ["motion/react"],
          radix: ["@radix-ui/react-dialog", "@radix-ui/react-tabs", "@radix-ui/react-tooltip", "@radix-ui/react-slot"],
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
