import { ComponentInternalInstance } from 'vue'

const findDOMNode = (instance: ComponentInternalInstance | null) => {
  let node = instance?.vnode?.el || (instance && (instance.proxy?.$el || instance))
  while (node && !node.tagName) {
    node = node.nextSibling
  }
  return node as HTMLElement
}
export default findDOMNode
