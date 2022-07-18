import { computed, defineComponent, ref } from 'vue'
import { messageBoxProps, MessageBoxProps } from './messageBox-types'
import useIcon from '../../message/src/hooks/use-icon'
import './index.scss'
import { Modal } from '../../modal'
import { useNamespace } from '../../shared/hooks/use-namespace'
import { Button } from '../../button'
import { Icon } from '../../icon'

export default defineComponent({
  name: 'PMessageBox',
  props: messageBoxProps,
  emits: ['cancel', 'confirm', 'close'],
  setup(props: MessageBoxProps, { emit }) {
    const ns = useNamespace('message-box')
    const isShow = ref(true)
    const cancelBtnLoading = ref(false)
    const confirmBtnLoading = ref(false)
    const MessageType = computed(() => {
      if (props.confirmButtonType) {
        if (props.confirmButtonType === 'danger') {
          return 'error'
        } else if (props.confirmButtonType === 'primary') {
          return 'none'
        } else {
          return props.confirmButtonType
        }
      } else {
        return 'none'
      }
    })
    const IconComponent = useIcon(MessageType.value)
    const cancelHandle = async () => {
      if (props.beforeClose) {
        try {
          cancelBtnLoading.value = true
          const allow = await props.beforeClose('cancel')
          cancelBtnLoading.value = false
          if (allow) {
            emit('cancel')
            isShow.value = false
          }
        } catch (e) {
          cancelBtnLoading.value = false
        }
      } else {
        emit('cancel')
        isShow.value = false
      }
    }
    const confimHandle = async () => {
      if (props.beforeClose) {
        try {
          confirmBtnLoading.value = true
          const allow = await props.beforeClose('confirm')
          confirmBtnLoading.value = false

          if (allow) {
            emit('confirm')
            isShow.value = false
          }
        } catch (e) {
          confirmBtnLoading.value = false
        }
      } else {
        emit('confirm')
        isShow.value = false
      }
    }
    const closehandle = async () => {
      if (props.beforeClose) {
        const allow = await props.beforeClose('close')

        if (allow) {
          emit('close')
          isShow.value = false
        }
      } else {
        emit('close')
        isShow.value = false
      }
    }

    return () => {
      return (
        <Modal
          class={[ns.b(), props.customClass]}
          style={props.customStyle}
          v-model={isShow.value}
          title={props.title}
          maskClosable={false}
          onCloseIconClick={closehandle}
          closeOnEsc={false}
          showClose={props.showClose}
          blockScroll={props.blockScroll}
        >
          {{
            default: () => props.content,
            header: () => (
              <>
                {props.confirmButtonType !== 'primary' && (
                  <Icon
                    class={[
                      ns.e('icon'),
                      ns.em('icon', props.confirmButtonType)
                    ]}
                  >
                    <IconComponent />
                  </Icon>
                )}
                {props.title}
              </>
            ),
            footer: () => (
              <div class={ns.e('footer')}>
                {props.cancelButtonText && (
                  <Button
                    class={ns.e('cancel-button')}
                    onClick={cancelHandle}
                    loading={cancelBtnLoading.value}
                    size={props.buttonSize}
                  >
                    {props.cancelButtonText}
                  </Button>
                )}
                {props.confirmButtonText && (
                  <Button
                    type={props.confirmButtonType}
                    onClick={confimHandle}
                    loading={confirmBtnLoading.value}
                    size={props.buttonSize}
                  >
                    {props.confirmButtonText}
                  </Button>
                )}
              </div>
            )
          }}
        </Modal>
      )
    }
  }
})
