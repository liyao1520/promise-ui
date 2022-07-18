import { ComponentInternalInstance } from 'vue'

export default (instance: ComponentInternalInstance | null) => {
  let node =
    instance?.vnode?.el || (instance && (instance.proxy?.$el || instance))
  while (node && !node.tagName) {
    node = node.nextSibling
  }
  return node as HTMLElement
}
