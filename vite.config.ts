import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: './', // ← この1行を追加（ドットスラッシュ）
  plugins: [
    react(),
    tailwindcss(),
  ],
})