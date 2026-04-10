import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // これがあるか確認

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // これがあるか確認
  ],
})