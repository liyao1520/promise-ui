let components = null //所有注册过的组件
let vue = {} // 当前 vue
let globalProperties = {}
export function setComponents(value: any) {
  components = value
}
export function getComponents() {
  return components
}

export function getVue() {
  return vue
}
export function setVue(_vue) {
  vue = _vue
}
export function initialVue() {
  if (window['_vue']) return
  window['_vue'] = {}
  Object.keys(vue).forEach((key) => {
    window['_vue'][key] = vue[key]
  })
}
export function setGlobalProperties(_globalProperties: any) {
  globalProperties = _globalProperties
}
export function getGlobalProperties() {
  return globalProperties
}
