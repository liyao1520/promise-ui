import { ISelectOption, selectActiveKey, SelectProps } from '../select-types'

export default function (props: SelectProps) {
  const defaultSingleActiveItem = props.options
    ? props.options.find((item) => item.value === props.modelValue)
    : { value: props.modelValue, label: props.modelValue }
  let defaultMultipleActiveItems: ISelectOption[] = []

  if (Array.isArray(props.modelValue)) {
    const values = new Set(props.modelValue as ISelectOption[])
    defaultMultipleActiveItems = props.options?.filter((item) => {
      const has = values.has(item.value)
      if (has) item[selectActiveKey] = true
      return has
    }) || [{ value: props.modelValue, label: props.modelValue }]
  }
  return {
    defaultSingleActiveItem,
    defaultMultipleActiveItems
  }
}
