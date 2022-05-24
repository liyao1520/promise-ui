import { defineComponent, onMounted, ref, toRefs, Transition } from 'vue'
import { messageProps, MessageProps } from './message-types'
import './index.scss'
import { useNamespace } from '../../shared/hooks/use-namespace'
import useIcon from './hooks/use-icon'
import { Icon } from '../../icon'
import { CloseSharp } from '@vicons/ionicons5'

const ns = useNamespace('message')

export default defineComponent({
  name: 'PMessage',
  props: messageProps,
  emits: ['destory'],
  setup(props: MessageProps) {
    const { duration } = toRefs(props)
    const isShow = ref(true)
    const IconContent = useIcon(props.type)
    // 出现到页面上后,再倒计时关闭Message
    onMounted(() => {
      setTimeout(() => {
        isShow.value = false
      }, duration.value)
    })
    const closeClick = () => {
      isShow.value = false
    }
    return {
      isShow,
      IconContent,
      closeClick
    }
  },
  render() {
    const { isShow, $emit, top, type, IconContent, closeClick, showClose, customClass } = this
    return (
      <Transition name="message-fade" onAfterLeave={(_) => $emit('destory')} appear>
        {isShow && (
          <div class={[ns.b(), customClass]} style={{ top: top + 'px' }}>
            {IconContent && (
              <Icon class={ns.m(type)}>
                <IconContent />
              </Icon>
            )}
            <span class={ns.e('content')}>{this.message}</span>
            {showClose && (
              <Icon class={ns.e('close')} onClick={closeClick}>
                <CloseSharp />
              </Icon>
            )}
          </div>
        )}
      </Transition>
    )
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
  expose: ['setTop', 'getHeight']
})
