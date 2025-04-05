import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './resources/js'),
    },
  },
  build: {
    manifest: true,
    rollupOptions: {
      input: {
        app: './resources/js/UserApp/main.js',
        admin: './resources/js/AdminApp/main.js'
      },
    },
  }
})