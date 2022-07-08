import { ISelectOption, selectActiveKey } from './../select-types'
import { Ref, watch } from 'vue'
import { SelectProps } from '../select-types'

export default function (
  props: SelectProps,
  inputValue: Ref<string>,
  multipleActiveItems: Ref<ISelectOption[]>,
  options: Ref<ISelectOption[]>,
  optionListShow: Ref<boolean>
) {
  const onAddTag = (e: KeyboardEvent) => {
    if (!props.addible) return
    if (e.key != 'Enter') return
    const val = inputValue.value.trim()
    if (val.length === 0) return
    multipleActiveItems.value.push({
      value: val,
      label: val
    })
    inputValue.value = ''
  }
  const onTagClose = (e: Event, optionItem: ISelectOption) => {
    e.stopPropagation()
    const index = multipleActiveItems.value.findIndex((item) => item === optionItem)
    if (index !== -1) {
      multipleActiveItems.value[index][selectActiveKey] = false
      multipleActiveItems.value.splice(index, 1)
    }
  }

  const filterMethod =
    typeof props.filterMethod === 'function'
      ? props.filterMethod
      : (inputValue: string, item: ISelectOption) => {
          const val = inputValue.trim().toLowerCase()
          return item.label?.toLowerCase().includes(val)
        }

  watch(inputValue, () => {
    // 输入时,需要显示列表
    optionListShow.value = true

    const val = inputValue.value.trim().toLowerCase()
    if (val.length === 0) {
      options.value = props.options || []
    } else {
      const newOptions = props.options
        ? props.options.filter((item) => filterMethod(inputValue.value, item))
        : []

      options.value = newOptions
    }
  })
  return { onAddTag, onTagClose }
}
