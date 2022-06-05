import { defineComponent, getCurrentInstance, h, onMounted } from 'vue'
import findDOMNode from './findDOMNode'

export default defineComponent({
  name: 'Wave',
  abstract: true,
  props: {
    disabled: Boolean
  },
  setup(props, { slots, attrs }) {
    const instance = getCurrentInstance()

    onMounted(() => {
      const node = findDOMNode(instance)
      node.addEventListener('click', () => {
        const computedStyle = getComputedStyle(node)
        const waveColor =
          computedStyle.getPropertyValue('border-top-color') ||
          computedStyle.getPropertyValue('border-color') ||
          computedStyle.getPropertyValue('background-color')

        node.setAttribute('pui-click-animating-without-extra-node', '')
        node.style.setProperty('--promiseui-wave-shadow-color', waveColor)
        setTimeout(() => {
          node.removeAttribute('pui-click-animating-without-extra-node')
        }, 400)
      })
    })

    return () => slots.default && slots.default()[0]
  }
})
