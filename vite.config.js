// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    mimeTypes: {
      // ensure .js files are served with the correct MIME type
      'application/javascript': ['js'],
    },
  },
})
