import { defineComponent, provide, watch } from 'vue'
import { useNamespace } from '../../shared/hooks/use-namespace'
import {
  RadioGroupProps,
  radioGroupProps,
  RadioKey,
  ValueType
} from './radio-types'

export default defineComponent({
  name: 'PRadioGroup',
  props: radioGroupProps,
  emits: ['update:modelValue', 'change'],
  setup(props: RadioGroupProps, { slots, emit }) {
    const ns = useNamespace('radio-group')
    const updateValue = (value: ValueType) => {
      emit('update:modelValue', value)
    }
    watch(
      () => props.modelValue,
      () => {
        emit('change', props.modelValue)
      }
    )
    provide(RadioKey, { props, updateValue })
    return () => {
      return <div class={ns.b()}>{slots.default?.()}</div>
    }
  }
})
