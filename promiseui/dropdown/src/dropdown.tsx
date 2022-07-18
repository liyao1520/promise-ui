import { ChevronDownOutline } from '@vicons/ionicons5'
import { defineComponent, toRefs, ref, provide } from 'vue'
import { Button } from '../../button'
import { Icon } from '../../icon'
import { Overlay } from '../../overlay'

import { useNamespace } from '../../shared/hooks/use-namespace'
import { DropDownKey, dropdownProps, DropdownProps } from './dropdown-types'
import useEvent from './hooks/use-event'

import './index.scss'

export default defineComponent({
  name: 'PDropdown',
  props: dropdownProps,
  emits: ['click'],
  setup(props: DropdownProps, { slots, emit, expose }) {
    const { type, trigger, offset, position, showArrow, size, btnType, dark } =
      toRefs(props)
    const origin = ref<any>(null)
    const visible = ref(false)
    const overlayEl = ref<any>()
    const ns = useNamespace('dropdown')
    provide(DropDownKey, {
      handleClick() {
        visible.value = false
      },
      props
    })

    const onOutsideClick = () => (visible.value = false)

    const { onClick, onMouseenter, onMouseleave } = useEvent(
      trigger,
      origin,
      overlayEl,
      visible
    )

    const commonProps = { onMouseenter, onMouseleave, onClick, ref: origin }

    const renderLink = () => (
      <span class={[ns.e('a'), ns.em(props.type, props.size)]} {...commonProps}>
        {slots.default?.()}
        <Icon>
          <ChevronDownOutline />
        </Icon>
      </span>
    )
    const renderButton = () => (
      <div class={[ns.e('button-group')]}>
        <Button
          type={btnType.value}
          shake={false}
          size={size.value}
          onClick={(e) => emit('click', e)}
        >
          {slots.default?.()}
        </Button>
        <Button
          type={btnType.value}
          shake={false}
          size={size.value}
          {...commonProps}
        >
          <Icon>
            <ChevronDownOutline />
          </Icon>
        </Button>
      </div>
    )
    const renderSlotDefault = () => {
      return (
        <div class={ns.e('content')} {...commonProps}>
          {slots.default?.()}
        </div>
      )
    }
    expose({
      hide() {
        visible.value = false
      }
    })
    return () => (
      <div class={ns.b()}>
        {type.value === 'a'
          ? renderLink()
          : type.value === 'button'
          ? renderButton()
          : renderSlotDefault()}
        <Overlay
          origin={origin}
          v-model={visible.value}
          offset={offset.value}
          position={type.value === 'button' ? 'bottom-end' : position.value}
          showArrow={showArrow.value}
          dark={dark.value}
          style={{ padding: 0 }}
          flip
          onOutsideClick={onOutsideClick}
        >
          <div
            class={ns.e('overlay')}
            ref={overlayEl}
            onMouseenter={onMouseenter}
            onMouseleave={onMouseleave}
          >
            {slots.dropdown && slots.dropdown()}
          </div>
        </Overlay>
      </div>
    )
  }
})
