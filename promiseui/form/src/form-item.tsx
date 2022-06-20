import { computed, defineComponent, provide, ref } from 'vue'

import { useNamespace } from '../../shared/hooks/use-namespace'
import toArray from '../../shared/utils/toArray'
import { formItemProps, FormItemProps, formItemContextKey } from './form-types'
import useForm from './hooks/use-form'

import './index.scss'

export default defineComponent({
  name: 'PFormItem',
  props: formItemProps,
  emits: [],
  setup(props: FormItemProps, ctx) {
    const ns = useNamespace('form-item')
    const labelRef = ref<HTMLLabelElement>()

    const {
      labelWidth,
      labelPosition,
      formItemSize,
      showLabel,
      showRequireMark,
      validateError,
      validateFn
    } = useForm(props, labelRef)

    const triggers = computed(() => toArray(props.trigger))
    // formItemContext
    provide(formItemContextKey, { validate: validateFn, triggers })

    const classes = computed(() => ({
      [ns.b()]: true,
      [ns.m(formItemSize.value)]: true,
      [ns.m(labelPosition.value)]: true,
      [ns.m('is-error')]: validateError.value
    }))
    const labelStyles = computed(() => [
      {
        width: labelWidth.value
      },
      props.labelStyle || {}
    ])
    return () => {
      return (
        <div class={classes.value}>
          {showLabel.value && (
            <label ref={labelRef} class={[ns.e('label')]} style={labelStyles.value}>
              <span class={ns.e('require-mark')}>{showRequireMark.value ? '*' : ''}</span>
              {props.label}
            </label>
          )}

          <div class={ns.e('content')}>
            {ctx.slots.default?.()}
            <span class={ns.e('error')}>{validateError.value?.message}</span>
          </div>
        </div>
      )
    }
  }
})
