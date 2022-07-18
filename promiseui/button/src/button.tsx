import { computed, defineComponent, toRefs } from 'vue'
import { buttonProps, ButtonProps } from './button-types'
import { useNamespace } from '../../shared/hooks/use-namespace'
import Loading from './components/button-loading'
import './index.scss'
import { Icon } from '../../icon'
import useEvent from './hooks/use-event'
import Wave from '../../shared/components/wave'

import useFormSize from '../../form/src/hooks/use-form-size'

export default defineComponent({
  name: 'PButton',
  inheritAttrs: false,
  props: buttonProps,
  emits: ['click'],
  setup(props: ButtonProps, { slots, emit, attrs }) {
    //icon, loading
    const {
      type,
      disabled,

      fillMode,
      loading,
      shake,
      style,
      class: className
    } = toRefs(props)
    const ns = useNamespace('button')
    const { onClick, onMousedown, onMouseup, isMouseDown } = useEvent(
      props,
      emit
    )

    const formSize = useFormSize()
    const buttonSize = computed(() => props.size || formSize.value || 'md')
    const classes = computed(() => ({
      [ns.b()]: true,
      [ns.m(type.value)]: true,
      [ns.m(buttonSize.value)]: true,
      [ns.m(fillMode.value)]: true,
      [ns.m('isloading')]: loading.value,
      [ns.m('mousedown')]: isMouseDown.value && shake.value
    }))

    const loadingRender = () => {
      return loading.value ? (
        <Icon class={ns.e('loading')}>
          <Loading />
        </Icon>
      ) : null
    }

    return () => {
      return (
        <Wave>
          <button
            class={[classes.value, className?.value]}
            style={style?.value}
            onClick={onClick}
            onMousedown={onMousedown}
            onMouseup={onMouseup}
            disabled={disabled.value}
            {...attrs}
          >
            {loadingRender() || (slots.icon && slots.icon())}
            {slots.default && slots.default()}
          </button>
        </Wave>
      )
    }
  }
})
