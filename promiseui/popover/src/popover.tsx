import { defineComponent, getCurrentInstance, onMounted, ref } from 'vue'
import { popoverProps, PopoverProps } from './popover-types'

import './index.scss'
import { Overlay } from '../../overlay'
import findDOMNode from '../../shared/utils/findDOMNode'
import { useNamespace } from '../../shared/hooks/use-namespace'

export default defineComponent({
  name: 'PPopover',
  props: popoverProps,
  emits: [],
  setup(props: PopoverProps, ctx) {
    const _instance = getCurrentInstance()
    const isShow = ref(false)
    const nodeRef = ref<HTMLElement | null>(null)
    const contentRef = ref<HTMLElement | null>(null)
    let timer: number
    const handleLeavle = () => {
      if (props.trigger === 'hover') {
        timer = window.setTimeout(() => (isShow.value = false), 300)
      }
    }
    onMounted(() => {
      const node = findDOMNode(_instance)
      nodeRef.value = node

      if (node) {
        node.addEventListener('click', () => {
          if (props.trigger === 'click') {
            isShow.value = !isShow.value
          }
        })
        node.addEventListener('mouseenter', () => {
          clearTimeout(timer)

          if (props.trigger === 'hover') {
            isShow.value = true
          }
        })
        node.addEventListener('mouseleave', () => {
          clearTimeout(timer)
          handleLeavle()
        })
      }
    })
    const ns = useNamespace('popover')
    return () => {
      return (
        <>
          {ctx.slots.default?.()}
          <Overlay
            v-model={isShow.value}
            origin={nodeRef.value}
            position={props.posititon}
            flip
            offset={props.offset}
            showArrow={props.showArrow}
            dark
            style={{
              padding: 0,
              ...props.style
            }}
            class={props.class}
            onOutsideClick={(_) => (isShow.value = false)}
          >
            <span
              ref={contentRef}
              class={ns.e('content')}
              onMouseenter={(_) => clearTimeout(timer)}
              onMouseleave={handleLeavle}
            >
              {props.content}
            </span>
          </Overlay>
        </>
      )
    }
  }
})
