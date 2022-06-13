import { computed } from '@vue/reactivity'
import { useThrottleFn } from '@vueuse/shared'
import { defineComponent, ref } from 'vue'
import { useNamespace } from '../../shared/hooks/use-namespace'
export default defineComponent({
  props: {
    minSize: Number,
    heightRatio: {
      type: Number,
      required: true
    },
    widthRatio: {
      type: Number,
      required: true
    },
    scrollXRatio: {
      type: Number,
      required: true
    },
    scrollYRatio: {
      type: Number,
      required: true
    },
    scrollByOffset: Function
  },
  setup(props) {
    const ns = useNamespace('scrollbar')
    const isShowYBar = computed(() => props.heightRatio !== 1)
    const isShowXBar = computed(() => props.widthRatio !== 1)
    const isY = ref(true)
    const xBarStyle = computed(() => ({
      minWidth: isShowXBar.value ? props.minSize + 'px' : 0,
      width: isShowXBar.value ? props.widthRatio * 100 + '%' : 0,
      left: props.scrollXRatio * 100 + '%'
    }))
    const yBarStyle = computed(() => ({
      minHeight: isShowYBar.value ? props.minSize + 'px' : 0,
      height: isShowYBar.value ? props.heightRatio * 100 + '%' : 0,
      top: props.scrollYRatio * 100 + '%'
    }))
    const isMouseDown = ref(false)

    const startPageY = ref(0)
    const startPageX = ref(0)
    const handleMouseup = (e: MouseEvent) => {
      isMouseDown.value = false
      window.removeEventListener('mousemove', handleMousemove)
    }

    const addEvents = () => {
      window.addEventListener('mouseup', handleMouseup)
      window.addEventListener('mousemove', handleMousemove)
    }
    const onMousedown = (e: MouseEvent, _isY: boolean) => {
      if (isMouseDown.value) return

      isY.value = _isY
      isMouseDown.value = true
      if (isY.value) {
        startPageY.value = e.pageY
      } else {
        startPageX.value = e.pageX
      }
      addEvents()
    }
    const handleMousemove = useThrottleFn((e: MouseEvent) => {
      if (props.scrollByOffset) {
        if (isY.value) {
          props.scrollByOffset(e.pageY - startPageY.value, true)
          startPageY.value = e.pageY
        } else {
          props.scrollByOffset(e.pageX - startPageX.value, false)
          startPageX.value = e.pageX
        }
      }
    }, 16.7)
    return () => (
      <>
        <div
          class={ns.e('bar_x')}
          style={xBarStyle.value}
          onMousedown={(e) => onMousedown(e, false)}
        ></div>
        <div
          class={ns.e('bar_y')}
          style={yBarStyle.value}
          onMousedown={(e) => onMousedown(e, true)}
        ></div>
      </>
    )
  }
})
