import {
  withModifiers,
  Comment,
  Fragment,
  VNodeChild,
  createTextVNode,
  VNode,
  ComponentInternalInstance
} from 'vue'
export const inherit = Object.assign
export const nativeClick = (fn: (e?: any) => void) => {
  return withModifiers(fn, ['native'])
}
export function flatten(
  vNodes: VNodeChild[],
  filterCommentNode = true,
  result: VNode[] = []
): VNode[] {
  vNodes.forEach((vNode) => {
    if (vNode === null) return
    if (typeof vNode !== 'object') {
      if (typeof vNode === 'string' || typeof vNode === 'number') {
        result.push(createTextVNode(String(vNode)))
      }
      return
    }
    if (Array.isArray(vNode)) {
      flatten(vNode, filterCommentNode, result)
      return
    }
    if (vNode.type === Fragment) {
      if (vNode.children === null) return
      if (Array.isArray(vNode.children)) {
        flatten(vNode.children, filterCommentNode, result)
      }
      // rawSlot
    } else if (vNode.type !== Comment) {
      result.push(vNode)
    }
  })
  return result
}

export const findDOMNode = (instance: ComponentInternalInstance | null) => {
  let node = instance?.vnode?.el || (instance && (instance.proxy?.$el || instance))
  while (node && !node.tagName) {
    node = node.nextSibling
  }
  return node as HTMLElement
}

export const warnLog = (...messages: any[]) => {
  console.warn(`promiseui`, ...messages)
}
export const errorLog = (...messages: any[]) => {
  console.error(`promiseui`, ...messages)
}
