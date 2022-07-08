import { UseNamespace } from './../../../shared/hooks/use-namespace'
import { ref, Ref, SetupContext,  watch } from 'vue'
import { RenderItemProps } from '../../../virtualScroll'
import { ISelectOption, selectActiveKey, SelectProps } from '../select-types'
import useKeyboardSelect from './use-keyboard-select'

export default function (
  props: SelectProps,
  ctx: SetupContext,
  singleActiveItem: Ref<ISelectOption | undefined>,
  multipleActiveItems: Ref<ISelectOption[]>,
  optionListShow: Ref<boolean>,
  inputValue: Ref<string>,
  ns: UseNamespace,
  virtualListRef: Ref,
  selectInputRef: Ref
) {
  const options = ref<ISelectOption[]>(props.options || [])

  const selectOptionClick = (row: ISelectOption) => {
    if (row.disabled) return
    if (props.multiple) {
      if (row[selectActiveKey]) {
        row[selectActiveKey] = false
        const index = multipleActiveItems.value.findIndex((item) => item === row)
        multipleActiveItems.value.splice(index, 1)
      } else {
        // 最大选择数量
        if (multipleActiveItems.value.length >= props.multipleLimit) return
        row[selectActiveKey] = true
        multipleActiveItems.value.push(row)
      }
    } else {
      singleActiveItem.value = row
      optionListShow.value = false
      ctx.emit('update:modelValue', singleActiveItem.value.value)
    }
    if (!props.multiple) {
      selectInputRef.value?.blur()
    }
    inputValue.value = ''
  }

  const hoverIndex = useKeyboardSelect(optionListShow, options, virtualListRef, selectOptionClick)

  watch(
    () => props.options,
    () => {
      options.value = props.options || []
    }
  )
  const isActive = (row: ISelectOption) => {
    if (props.multiple) {
      return !!row[selectActiveKey]
    } else {
      return singleActiveItem.value !== undefined && singleActiveItem.value.value === row.value
    }
  }

  const selectOptionClass = ({ row, index }: RenderItemProps<ISelectOption>) => {
    return {
      [ns.e('option')]: true,
      [ns.em('option', 'active')]: isActive(row),
      [ns.em('option', 'disabled')]: row.disabled,
      [ns.em('option', 'hover')]: hoverIndex.value === index
    }
  }

  const onClearOpiton = (e: Event) => {
    e.stopPropagation()
    if (props.multiple) {
      multipleActiveItems.value.forEach((item) => (item[selectActiveKey] = false))
      multipleActiveItems.value = []
    } else {
      singleActiveItem.value = undefined
    }
    optionListShow.value = false
    inputValue.value = ''
  }

  return {
    selectOptionClick,
    selectOptionClass,
    options,
    onClearOpiton,
    hoverIndex
  }
}
