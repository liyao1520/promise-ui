import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vueJsx()],
  server: {
    fs: {
      strict: false
    }
  },
  optimizeDeps: {
    include: [resolve(__dirname, '../promiseui')]
  }
})
