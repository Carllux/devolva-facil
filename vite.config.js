import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Quando o front-end chamar '/api', o Vite redireciona para a Orange Envios
      '/api': {
        target: 'https://api-painel.orangeenvios.com.br',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})