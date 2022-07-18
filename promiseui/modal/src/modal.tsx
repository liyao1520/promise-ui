import {
  computed,
  CSSProperties,
  defineComponent,
  onMounted,
  onUnmounted,
  ref,
  Teleport,
  toRef,
  Transition,
  watch,
  watchEffect
} from 'vue'
import { modalProps, ModalProps } from './modal-types'

import './index.scss'
import { useNamespace } from '../../shared/hooks/use-namespace'
import { onClickOutside } from '@vueuse/core'
import { Icon } from '../../icon'
import { CloseOutline } from '@vicons/ionicons5'
import dragDirective from '../../shared/directives/drag'

export default defineComponent({
  name: 'PModal',
  directives: {
    drag: dragDirective
  },
  inheritAttrs: false,
  props: modalProps,
  emits: ['update:modelValue', 'closeIconClick'],
  setup(props: ModalProps, { slots, emit, attrs }) {
    const ns = useNamespace('modal')
    const modelRef = ref<HTMLDivElement>()
    onClickOutside(modelRef, () => {
      props.onMaskClick?.()
      if (props.maskClosable) {
        emit('update:modelValue', false)
      }
    })
    const classes = computed(() => ({
      [ns.b()]: true
    }))
    const styles = computed<CSSProperties>(() => ({
      width: typeof props.width === 'number' ? props.width + 'px' : props.width,
      marginTop: props.top || undefined
    }))
    const renderHeaderContet = () => {
      return slots.header ? (
        slots.header()
      ) : (
        <div class={ns.e('title')}>{props.title}</div>
      )
    }
    const keyupHandle = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && props.closeOnEsc) {
        emit('update:modelValue', false)
      }
    }
    onMounted(() => {
      window.addEventListener('keyup', keyupHandle)
    })

    onUnmounted(() => {
      window.removeEventListener('keyup', keyupHandle)
    })

    watchEffect(() => {
      if (props.blockScroll) {
        if (props.modelValue) {
          document.documentElement.classList.add('pui-overflow-hidden')
        } else {
          document.documentElement.classList.remove('pui-overflow-hidden')
        }
      }
    })
    const renderHeaderExtra = () => {
      return slots['header-extra']
        ? slots['header-extra']()
        : props.showClose && (
            <Icon
              class={ns.e('close-icon')}
              component={CloseOutline}
              onClick={() => {
                if (props.onCloseIconClick) {
                  emit('closeIconClick')
                } else {
                  emit('update:modelValue', false)
                }
              }}
            />
          )
    }
    const renderModalContent = () => (
      <div
        class={classes.value}
        style={styles.value}
        ref={modelRef}
        {...attrs}
        // v-drag={{ includes: [`.${ns.e('header')}`], disabled: !props.draggable }}
      >
        <div class={ns.e('header')}>
          <div class={ns.e('header-content')}>{renderHeaderContet()}</div>
          <div class={ns.e('header-extra')}>{renderHeaderExtra()}</div>
        </div>
        <div class={ns.e('content')}>{slots.default?.()}</div>
        <div class={ns.e('footer')}>{slots.footer?.()}</div>
      </div>
    )
    return () => {
      return (
        <Teleport to={props.to}>
          <Transition
            name="pui-modal-scalein"
            appear
            onAfterEnter={props.onAfterEnter}
            onAfterLeave={props.onAfterLeave}
          >
            {props.displayDirective === 'if' ? (
              <div
                v-show={props.modelValue}
                class={ns.e('mask')}
                style={{ zIndex: props.zIndex }}
              >
                {renderModalContent()}
              </div>
            ) : (
              props.modelValue && (
                <div class={ns.e('mask')} style={{ zIndex: props.zIndex }}>
                  {renderModalContent()}
                </div>
              )
            )}
          </Transition>
        </Teleport>
      )
    }
  }
})
