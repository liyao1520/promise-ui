import { computed, defineComponent, provide } from 'vue'
import { useNamespace } from '../../shared/hooks/use-namespace'
import { formItemProps, FormItemProps } from './form-types'

import './index.scss'

export default defineComponent({
  name: 'PFormItem',
  props: formItemProps,
  emits: [],
  setup(props: FormItemProps, ctx) {
    const ns = useNamespace('form-item')
    const classes = computed(() => ({
      [ns.b()]: true
    }))
    return () => {
      return <div class={classes.value}>{ctx.slots.default?.()}</div>
    }
  }
})
