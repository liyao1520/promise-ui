import { defineComponent, getCurrentInstance, h, onMounted, watch } from 'vue'
import findDOMNode from './findDOMNode'

export default defineComponent({
  name: 'Wave',
  abstract: true,
  props: {
    disabled: Boolean
  },
  setup(props, { slots, attrs }) {
    const instance = getCurrentInstance()

    watch(
      () => props.disabled,
      (disabled) => {
        if (!node) return
        if (disabled) {
          node.removeEventListener('click', handleCLick)
        } else {
          node.addEventListener('click', handleCLick)
        }
      }
    )
    let node: HTMLElement | null = null
    const handleCLick = () => {
      if (!node) return
      const computedStyle = getComputedStyle(node)
      const waveColor =
        computedStyle.getPropertyValue('border-top-color') ||
        computedStyle.getPropertyValue('border-color') ||
        computedStyle.getPropertyValue('background-color')

      node.setAttribute('pui-click-animating-without-extra-node', '')
      node.style.setProperty('--promiseui-wave-shadow-color', waveColor)
      setTimeout(() => {
        if (!node) return
        node.removeAttribute('pui-click-animating-without-extra-node')
      }, 400)
    }
    onMounted(() => {
      node = findDOMNode(instance)
      if (props.disabled) return
      node.addEventListener('click', handleCLick)
    })

    return () => slots.default && slots.default()[0]
  }
})
