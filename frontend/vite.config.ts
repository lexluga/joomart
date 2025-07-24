
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
   // This ensures the dev server binds to all interfaces, making it accessible from Nginx
    host: '0.0.0.0',
    port: 3000, // Make sure this matches your Dockerfile and docker-compose.yml exposed port

    // Crucial for HMR behind a proxy:
    hmr: {
      host: 'joomart.local', // Use your Nginx domain here
      clientPort: 443,    // Use 80 if Nginx is serving on HTTP, 443 if HTTPS
      protocol: 'wss', // Defaults to ws, but can explicitly set if needed
    },
  },


  plugins: [
    vue(),
    vueJsx(),
    VueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  
  base: './'
  
})
