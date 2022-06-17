import { UseNamespace } from './../../../shared/hooks/use-namespace'
import { ref, Ref, SetupContext, watch } from 'vue'
import { RenderItemProps } from '../../../virtualScroll'
import { ISelectOption, selectActiveKey, SelectProps } from '../select-types'

export default function (
  props: SelectProps,
  ctx: SetupContext,
  singleActiveItem: Ref<ISelectOption | undefined>,
  multipleActiveItems: Ref<ISelectOption[]>,
  optionListShow: Ref<boolean>,
  inputValue: Ref<string>,
  ns: UseNamespace
) {
  const options = ref<ISelectOption[]>(props.options || [])
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

  const selectOptionClick = (e: Event, { row }: RenderItemProps<ISelectOption>) => {
    if (props.multiple) {
      if (row[selectActiveKey]) {
        row[selectActiveKey] = false
        const index = multipleActiveItems.value.findIndex((item) => item === row)
        multipleActiveItems.value.splice(index, 1)
      } else {
        row[selectActiveKey] = true
        multipleActiveItems.value.push(row)
      }
    } else {
      singleActiveItem.value = row
      optionListShow.value = false
      ctx.emit('update:modelValue', singleActiveItem.value.value)
    }
  }
  const selectOptionClass = ({ row }: RenderItemProps<ISelectOption>) => {
    return {
      [ns.e('option')]: true,
      [ns.em('option', 'active')]: isActive(row)
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
    onClearOpiton
  }
}
