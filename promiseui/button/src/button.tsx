import { computed, defineComponent, toRefs, watch } from 'vue'
import { buttonProps, ButtonProps } from './button-types'
import { useNamespace } from '../../shared/hooks/use-namespace'
import Loading from './components/button-loading'
import './index.scss'
import { Icon } from '../../icon'

export default defineComponent({
  name: 'PButton',
  props: buttonProps,
  emits: ['click'],
  setup(props: ButtonProps, { slots, emit }) {
    //icon, loading
    const { type, disabled, size, fillMode, loading } = toRefs(props)
    const ns = useNamespace('button')

    const classes = computed(() => ({
      [ns.b()]: true,
      [ns.m(type.value)]: true,
      [ns.m(size.value)]: true,
      [ns.m(fillMode.value)]: true,
      [ns.m('isloading')]: loading.value
    }))

    const onClick = (e: MouseEvent) => {
      if (loading.value) {
        return
      }
      emit('click', e)
    }

    const loadingRender = () => {
      return loading.value ? (
        <Icon class={ns.e('loading')}>
          <Loading />
        </Icon>
      ) : null
    }

    return () => {
      return (
        <button class={classes.value} onClick={onClick} disabled={disabled.value}>
          {loadingRender() || (slots.icon && slots.icon())}
          {slots.default && slots.default()}
        </button>
      )
    }
  }
})
