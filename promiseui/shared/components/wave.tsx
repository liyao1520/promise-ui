import { defineComponent, getCurrentInstance, h, onMounted, watch } from 'vue'
import { findDOMNode } from '../utils'

export default defineComponent({
  name: 'Wave',
  abstract: true,
  props: {
    disabled: Boolean,
    run: Boolean
  },
  setup(props, { slots, attrs, expose }) {
    const instance = getCurrentInstance()

    watch(
      () => props.run,
      (isRun) => {
        handleRun()
      }
    )
    watch(
      () => props.disabled,
      (disabled) => {
        if (!node) return
        if (disabled) {
          node.removeEventListener('click', handleRun)
        } else {
          node.addEventListener('click', handleRun)
        }
      }
    )
    let node: HTMLElement | null = null
    const handleRun = () => {
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
      node.addEventListener('click', handleRun)
    })
    expose({
      run: handleRun
    })
    return () => slots.default && slots.default()[0]
  }
})
