import * as Vue from 'vue'

// 1. 获取vue,用来后续编译,渲染组件
// 2. 获取注册过的Components,可以在每个app实例共享复用它. 注:每个Demo都会创建一个新的app实例
import { setComponents, setVue } from './memo'
import { themeKey } from './key'
let _app: Vue.App | undefined
const themeRef = Vue.ref('iplastic')
export const vuePlugin = function (app: Vue.App) {
  const Demo = Vue.defineAsyncComponent(() => import('./components/Demo.vue'))
  app.component('Demo', Demo)
  setComponents(app._context.components)
  setVue(Vue)
  // 注入主题
  app.provide(themeKey, themeRef)
  _app = app
}

export function setTheme(theme: string) {
  if (!_app) return

  themeRef.value = theme
}
