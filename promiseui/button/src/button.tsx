import { computed, defineComponent, toRefs } from 'vue'
import { buttonProps, ButtonProps } from './button-types'
import { useNamespace } from '../../shared/hooks/use-namespace'

import './index.scss'

export default defineComponent({
  name: 'PButton',
  props: buttonProps,
  emits: ['click'],

  setup(props: ButtonProps, { slots, emit }) {
    const { type, icon, loading, disabled, size } = toRefs(props)

    const ns = useNamespace('button')
    const classes = computed(() => ({
      [ns.b()]: true,
      [ns.m(type.value)]: true,
      [ns.m(size.value)]: true
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
