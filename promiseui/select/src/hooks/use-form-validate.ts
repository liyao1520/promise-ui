import { Ref, watch } from 'vue'
import useFormItem from '../../../form/src/hooks/use-form-item'
import { SelectProps } from '../select-types'

export default function (props: SelectProps, showOptions: Ref<boolean>) {
  const { triggerValidate } = useFormItem()
  watch(showOptions, () => {
    if (!showOptions.value) {
      triggerValidate('blur')
    }
  })
  watch(
    () => props.modelValue,
    () => {
      triggerValidate('change')
    }
  )
}
