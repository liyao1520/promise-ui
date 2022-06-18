import { computed } from '@vue/reactivity'
import { defineComponent, provide } from 'vue'
import { useNamespace } from '../../shared/hooks/use-namespace'
import { formContextKey, formProps, FormProps } from './form-types'

import './index.scss'

export default defineComponent({
  name: 'PForm',
  props: formProps,
  emits: [],
  setup(props: FormProps, ctx) {
    const ns = useNamespace('form')
    const classes = computed(() => ({
      [ns.b()]: true
    }))
    provide(formContextKey, {
      props
    })
    ctx.expose({})
    return () => {
      return <div class={classes}>{ctx.slots.default?.()}</div>
    }
  }
})
