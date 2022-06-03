import { useNamespace } from '../../shared/hooks/use-namespace'
import { computed, defineComponent, inject, ref, toRefs } from 'vue'
import { dropdownItemProps, DropdownItemProps, DropDownKey } from './dropdown-types'

export default defineComponent({
  name: 'PDropdownItem',
  props: dropdownItemProps,
  setup(props: DropdownItemProps, { slots }) {
    const { size: propsSize } = toRefs(props)
    const DropDown = inject(DropDownKey)

    const ns = useNamespace('dropdown-item')
    const classes = computed(() => [ns.b(), ns.m(DropDown?.props.size || propsSize.value)])
    const onClick = () => {
      if (DropDown?.props.hideOnClick) {
        DropDown.handleClick()
      }
    }
    return () => (
      <div class={classes.value} onClick={onClick}>
        {slots.default && slots.default()}
      </div>
    )
  }
})
