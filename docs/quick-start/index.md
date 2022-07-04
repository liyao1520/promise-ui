# 快速开始

## 安装

### npm

`npm install promiseui-vue`

### yarn

`yarn add promiseui-vue`

## 全局引入

```js
// main.js

import { createApp } from 'vue'
import promiseui from 'promiseui-vue'
import 'promiseui-vue/dist/index.css'
import App from './App.vue'

createApp(App).use(promiseui).mount('#app')
```

## 按需引入

### vite

`npm install unplugin-vue-components`

```ts
// vite.config.ts
import Components from 'unplugin-vue-components/vite'
import PromiseuiResolver from 'promiseui-vue/resolver'
export default defineConfig({
  plugins: [
    Components({
      resolvers: [PromiseuiResolver()]
    })
  ]
})
```

### webpack

```js
// webpack.config.js
const PromiseuiResolver = require('promiseui-vue/resolver')
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-vue-components/webpack')({
      resolvers: [PromiseuiResolver()]
    })
  ]
}
```

### Volar 支持

如果你在使用 Volar，那么可以在 tsconfig.json 中配置 compilerOptions.types 来指定全局组件类型。

```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["promiseui-vue/volar"]
  }
}
```

以上配置完就可以在`template`得到代码提示了

<img src="http://cdn.coderly.top/imgs/代码提示.gif" style="width:500px" />
