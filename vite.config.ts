import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'
// import libCss from 'vite-plugin-libcss'
const path = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    dts({
      include: ['promiseui']
    })
    // libCss()
  ],
  resolve: {
    alias: {
      '@ui': path.resolve(__dirname, 'promiseui')
    }
  },
  build: {
    cssCodeSplit: true,
    lib: {
      entry: path.resolve(__dirname, 'promiseui', 'index.ts'),
      fileName: (format) => `promiseui.${format}.js`,
      name: 'promiseui',
      formats: ['cjs', 'es']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
