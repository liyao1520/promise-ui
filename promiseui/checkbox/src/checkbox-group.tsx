import { defineComponent, provide, watch } from 'vue'
import { useNamespace } from '../../shared/hooks/use-namespace'
import { checkboxGroupProps, CheckboxGroupProps, checkBoxKey } from './checkbox-types'

export default defineComponent({
  name: 'PCheckboxGroup',
  props: checkboxGroupProps,
  emits: ['update:modelValue', 'change'],
  setup(props: CheckboxGroupProps, { slots, emit }) {
    const ns = useNamespace('checkbox-group')

    const addValue = (value: string | boolean | number) => {
      if (!Array.isArray(props.modelValue)) return
      const newValues = [...new Set(props.modelValue.concat(value))]
      emit('update:modelValue', newValues)
    }
    const removeValue = (value: string | boolean | number) => {
      if (!Array.isArray(props.modelValue)) return
      const filterValues = props.modelValue.filter((item) => item !== value)
      emit('update:modelValue', filterValues)
    }
    watch(
      () => props.modelValue,
      () => emit('change', props.modelValue)
    )
    provide(checkBoxKey, {
      props,
      addValue,
      removeValue
    })
    return () => {
      return <div class={ns.b()}>{slots.default?.()}</div>
    }
  }
})
