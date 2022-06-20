import { inject, ref, SetupContext, watch, computed } from 'vue'
import useFormItem from '../../../form/src/hooks/use-form-item'
import { checkBoxKey, CheckboxProps } from '../checkbox-types'

export default function (props: CheckboxProps, ctx: SetupContext) {
  const CheckboxContext = inject(checkBoxKey, undefined)
  const initialChecked = () => {
    if (props.value === undefined) {
      return false
    }
    if (CheckboxContext) {
      const modelValue = CheckboxContext.props.modelValue
      return Array.isArray(modelValue) ? modelValue.includes(props.value) : false
    }
    return props.modelValue === true
  }
  const initial = initialChecked()
  const checked = ref(initial)
  const handleClick = () => {
    if (disabled.value) return
    checked.value = !checked.value
    if (CheckboxContext) {
      const value = props.value
      if (!value) return // 如果没有value,不做任何反应
      const { addValue, removeValue } = CheckboxContext
      checked.value ? addValue(value) : removeValue(value)
    } else {
      ctx.emit('update:modelValue', checked.value)
    }
  }
  const { triggerValidate } = useFormItem()
  watch(
    () => props.modelValue,
    () => {
      checked.value = props.modelValue
    }
  )
  watch(checked, () => {
    triggerValidate('change')
    triggerValidate('blur')
    ctx.emit('change', checked.value)
  })
  watch(
    () => CheckboxContext?.props.modelValue,
    (valueArr) => {
      if (!props.value || !Array.isArray(valueArr)) return
      checked.value = valueArr.includes(props.value)
    }
  )
  const disabled = computed(() => {
    if (props.disabled || CheckboxContext?.props.disabled) return true
    return false
  })
  const size = computed(() => {
    return CheckboxContext?.props.size || props.size
  })
  return {
    handleClick,
    checked,
    disabled,
    size
  }
}
