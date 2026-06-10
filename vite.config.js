import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteImagemin from 'vite-plugin-imagemin'

export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      // Compressão para JPEG
      mozjpeg: {
        quality: 80,
      },
      // Compressão para PNG
      pngquant: {
        quality: [0.6, 0.8], // intervalo de qualidade
      },
      // Conversão para WebP (gera .webp e mantém original? Gera apenas .webp?)
      webp: {
        quality: 80,
      },
    }),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'https://api-painel.orangeenvios.com.br',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, '/api')
      }
    }
  }
})