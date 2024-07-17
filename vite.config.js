// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'public', // ensure this matches the directory you want to use
  },
  server: {
    mimeTypes: {
      // ensure .js files are served with the correct MIME type
      'application/javascript': ['js'],
    },
  },
})
