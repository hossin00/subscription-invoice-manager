import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  base: '/subscription-invoice-manager/',
  build: { outDir: 'dist' }
})
