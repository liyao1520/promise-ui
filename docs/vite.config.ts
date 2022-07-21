import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [vueJsx()],
  resolve: {
    alias: {
      assert: 'browser-assert',
      path: 'path-browserify'
    }
  },
  define: {
    'process.env.BABEL_TYPES_8_BREAKING': 'false',
    'process.platform': '"darwin"',
    'Buffer.isBuffer': 'undefined'
  },
  server: {
    fs: {
      strict: false
    }
  },
  optimizeDeps: {
    include: [resolve(__dirname, '../promiseui/index.ts')]
  }
})
