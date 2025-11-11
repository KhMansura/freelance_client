import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  // server: {
  //   proxy: {
  //     // ✅ Proxy /jobs* → http://localhost:3000
  //     '/jobs': {
  //       target: 'http://localhost:3000',
  //       changeOrigin: true,
  //     },
  //     '/accept-job': {
  //       target: 'http://localhost:3000',
  //       changeOrigin: true,
  //     },
  //     '/accepted-tasks': {
  //       target: 'http://localhost:3000',
  //       changeOrigin: true,
  //     },
  //   },
  // },
});
