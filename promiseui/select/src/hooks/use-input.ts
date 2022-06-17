import { ISelectOption } from './../select-types'
import { Ref, watch } from 'vue'
import { SelectProps } from '../select-types'

export default function (
  props: SelectProps,
  inputValue: Ref<string>,
  multipleActiveItems: Ref<ISelectOption[]>,
  options: Ref<ISelectOption[]>
) {
  const onAddTag = (e: KeyboardEvent) => {
    if (!props.addible) return
    if (e.key != 'Enter') return
    const val = inputValue.value.trim()
    multipleActiveItems.value.push({
      value: val,
      label: val
    })
    inputValue.value = ''
  }
  const onTagClose = (e: Event, optionItem: ISelectOption) => {
    e.stopPropagation()
    const index = multipleActiveItems.value.findIndex((item) => item === optionItem)
    multipleActiveItems.value.splice(index, 1)
  }
  watch(inputValue, () => {
    const val = inputValue.value.trim().toLowerCase()
    if (val.length === 0) {
      options.value = props.options || []
    } else {
      options.value = props.options
        ? props.options.filter((item) => item.label?.toLowerCase().includes(val))
        : []
    }
  })
  return { onAddTag, onTagClose }
}
