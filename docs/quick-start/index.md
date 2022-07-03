# 快速开始

## 安装

`npm install promiseui-vue`

`yarn add promiseui-vue`

## 按需引入

### vite

`npm install unplugin-vue-components`

```ts
// vite.config.ts
import Components from 'unplugin-vue-components/vite'
export default defineConfig({
  plugins: [
    Components({
      resolvers: [
        (name) => {
          // where `componentName` is always CapitalCase
          if (name.match(/^P[A-Z]/)) return { name: name.slice(1), from: 'promiseui-vue' }
        }
      ]
    })
  ]
})
```

```js
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-vue-components/webpack')({
      (name) => {
          // where `componentName` is always CapitalCase
          if (name.match(/^P[A-Z]/)) return { name: name.slice(1), from: 'promiseui-vue' }
        }
    })
  ]
}
```
