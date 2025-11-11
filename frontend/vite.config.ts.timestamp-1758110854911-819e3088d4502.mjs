// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///app/node_modules/vite/dist/node/index.js";
import vue from "file:///app/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///app/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import VueDevTools from "file:///app/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
var __vite_injected_original_import_meta_url = "file:///app/vite.config.ts";
var vite_config_default = defineConfig({
  server: {
    // This ensures the dev server binds to all interfaces, making it accessible from Nginx
    host: "0.0.0.0",
    port: 3e3,
    // Make sure this matches your Dockerfile and docker-compose.yml exposed port
    // Crucial for HMR behind a proxy:
    hmr: {
      host: "joomart.local",
      // Use your Nginx domain here
      clientPort: 443,
      // Use 80 if Nginx is serving on HTTP, 443 if HTTPS
      protocol: "wss"
      // Defaults to ws, but can explicitly set if needed
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    VueDevTools()
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  base: "./"
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvYXBwXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvYXBwL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9hcHAvdml0ZS5jb25maWcudHNcIjtcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGgsIFVSTCB9IGZyb20gJ25vZGU6dXJsJ1xuXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgdnVlSnN4IGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZS1qc3gnXG5pbXBvcnQgVnVlRGV2VG9vbHMgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWRldnRvb2xzJ1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgc2VydmVyOiB7XG4gICAvLyBUaGlzIGVuc3VyZXMgdGhlIGRldiBzZXJ2ZXIgYmluZHMgdG8gYWxsIGludGVyZmFjZXMsIG1ha2luZyBpdCBhY2Nlc3NpYmxlIGZyb20gTmdpbnhcbiAgICBob3N0OiAnMC4wLjAuMCcsXG4gICAgcG9ydDogMzAwMCwgLy8gTWFrZSBzdXJlIHRoaXMgbWF0Y2hlcyB5b3VyIERvY2tlcmZpbGUgYW5kIGRvY2tlci1jb21wb3NlLnltbCBleHBvc2VkIHBvcnRcblxuICAgIC8vIENydWNpYWwgZm9yIEhNUiBiZWhpbmQgYSBwcm94eTpcbiAgICBobXI6IHtcbiAgICAgIGhvc3Q6ICdqb29tYXJ0LmxvY2FsJywgLy8gVXNlIHlvdXIgTmdpbnggZG9tYWluIGhlcmVcbiAgICAgIGNsaWVudFBvcnQ6IDQ0MywgICAgLy8gVXNlIDgwIGlmIE5naW54IGlzIHNlcnZpbmcgb24gSFRUUCwgNDQzIGlmIEhUVFBTXG4gICAgICBwcm90b2NvbDogJ3dzcycsIC8vIERlZmF1bHRzIHRvIHdzLCBidXQgY2FuIGV4cGxpY2l0bHkgc2V0IGlmIG5lZWRlZFxuICAgIH0sXG4gIH0sXG5cblxuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAgdnVlSnN4KCksXG4gICAgVnVlRGV2VG9vbHMoKSxcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKVxuICAgIH0sXG4gIH0sXG4gIFxuICBiYXNlOiAnLi8nXG4gIFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxTQUFTLGVBQWUsV0FBVztBQUVuQyxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLE9BQU8saUJBQWlCO0FBTndGLElBQU0sMkNBQTJDO0FBU2pLLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFFBQVE7QUFBQTtBQUFBLElBRU4sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBO0FBQUE7QUFBQSxJQUdOLEtBQUs7QUFBQSxNQUNILE1BQU07QUFBQTtBQUFBLE1BQ04sWUFBWTtBQUFBO0FBQUEsTUFDWixVQUFVO0FBQUE7QUFBQSxJQUNaO0FBQUEsRUFDRjtBQUFBLEVBR0EsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsWUFBWTtBQUFBLEVBQ2Q7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsSUFDdEQ7QUFBQSxFQUNGO0FBQUEsRUFFQSxNQUFNO0FBRVIsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
