import { computed, defineComponent, toRefs } from 'vue'
import { buttonProps, ButtonProps } from './button-types'
import { useNamespace } from '../../shared/hooks/use-namespace'

import './index.scss'

export default defineComponent({
  name: 'PButton',
  props: buttonProps,
  emits: ['click'],

  setup(props: ButtonProps, { slots, emit }) {
    //icon, loading
    const { type, disabled, size, fillMode } = toRefs(props)

    const ns = useNamespace('button')
    const classes = computed(() => ({
      [ns.b()]: true,
      [ns.m(type.value)]: true,
      [ns.m(size.value)]: true,
      [ns.m(fillMode.value)]: true
    }))

    const onClick = (e: MouseEvent) => {
      emit('click', e)
    }

    return () => {
      return (
        <button class={classes.value} onClick={onClick} disabled={disabled.value}>
          {slots.default && slots.default()}
        </button>
      )
    }
  }
})
