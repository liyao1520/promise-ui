import { defineComponent, onMounted, ref, toRefs, Transition, defineExpose } from 'vue'
import { messageProps, MessageProps } from './message-types'

import './index.scss'

export default defineComponent({
  name: 'PMessage',
  props: messageProps,
  emits: ['destory'],
  setup(props: MessageProps) {
    const { duration } = toRefs(props)
    const isShow = ref(true)

    // 出现到页面上后,再倒计时关闭Message
    onMounted(() => {
      setTimeout(() => {
        isShow.value = false
      }, duration.value)
    })
    return {
      isShow
    }
  },
  data() {
    return {
      top: this.$props.offset
    }
  },
  methods: {
    setTop(top: number) {
      if (top < 0) {
        this.top = this.top + top
      } else {
        this.top = top
      }
    }
  },
  render() {
    const { isShow, $emit, top } = this

    return (
      <Transition name="message-fade" onAfterLeave={(_) => $emit('destory')} appear>
        {isShow && (
          <div class="pui-message" style={{ top: top + 'px' }}>
            {this.message}
          </div>
        )}
      </Transition>
    )
  },
  expose: ['setTop', 'getHeight']
})
