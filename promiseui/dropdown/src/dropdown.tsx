import { ChevronDownOutline } from '@vicons/ionicons5'
import { defineComponent, toRefs, ref, onMounted, provide } from 'vue'
import { Button } from '../../button'
import { Icon } from '../../icon'
import { Overlay } from '../../overlay'
import useClickOutside from '../../shared/hooks/use-click-outside'
import { useNamespace } from '../../shared/hooks/use-namespace'
import { DropDownKey, dropdownProps, DropdownProps } from './dropdown-types'
import useEvent from './hooks/use-event'

import './index.scss'

export default defineComponent({
  name: 'PDropdown',
  props: dropdownProps,
  emits: ['click'],
  setup(props: DropdownProps, { slots, emit }) {
    const { type, trigger, offset, position, showArrow, size, btnType } = toRefs(props)
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
    const defaultSlot = slots.default && slots.default()

    useClickOutside(
      overlayEl,
      (e) => {
        visible.value = false
      },
      { ignore: [origin] }
    )

    const { onClick, onMouseenter, onMouseleave } = useEvent(trigger, visible)

    const commonProps = { onMouseenter, onMouseleave, onClick, ref: origin }

    const renderLink = () => (
      <span class={[ns.e('a'), ns.em(props.type, props.size)]} {...commonProps}>
        {defaultSlot}
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
          {defaultSlot}
        </Button>
        <Button type={btnType.value} shake={false} size={size.value} {...commonProps}>
          <Icon>
            <ChevronDownOutline />
          </Icon>
        </Button>
      </div>
    )
    const renderSlotDefault = () => {
      return (
        <div class={ns.b()} {...commonProps}>
          {defaultSlot}
        </div>
      )
    }

    return () => (
      <>
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
          style={{ padding: 0 }}
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
      </>
    )
  }
})
