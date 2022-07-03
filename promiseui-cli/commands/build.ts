import { build } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'
const path = require('path')
// https://vitejs.dev/config/
const basePath = path.resolve(__dirname, '../../promiseui')
const outputDir = path.resolve(__dirname, '../../dist')

export const buildLib = async () =>
  await build({
    plugins: [
      vue(),
      vueJsx(),
      dts({
        include: [basePath]
      })
    ],
    build: {
      cssCodeSplit: true,
      lib: {
        entry: path.resolve(basePath, 'index.ts'),
        fileName: (format) => `promiseui.${format}.js`,
        name: 'promiseui',
        formats: ['cjs', 'es']
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue'
          },
          dir: outputDir
        }
      }
    }
  })
console.log('ok')
