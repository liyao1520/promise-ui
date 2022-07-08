import { Ref, ref, watch } from 'vue'

import { ISelectOption } from '../select-types'

export default (
  optionListShow: Ref<boolean>,
  options: Ref<ISelectOption[]>,
  virtualListRef: Ref,
  selectOptionClick: (row: ISelectOption) => void
) => {
  const hoverIndex = ref<number>(0)

  const handleKeydown = (e: KeyboardEvent) => {
    const keyCode = e.key || e.code
    const len = options.value.length
    const [startIndex, endIndex] = virtualListRef.value?.getVisibleRange() || []

    if (hoverIndex.value < startIndex || hoverIndex.value > endIndex) {
      console.log(1)

      virtualListRef.value?.scrollToIndex(hoverIndex.value)
    }
    switch (keyCode) {
      case 'ArrowDown':
        e.preventDefault()
        if (++hoverIndex.value >= len) {
          hoverIndex.value = 0
          virtualListRef.value?.scrollToStart()
        } else {
          if (endIndex <= hoverIndex.value) {
            virtualListRef.value?.scrollToIndex(hoverIndex.value, {
              offset: 'bottom'
            })
          }
        }
        break
      case 'ArrowUp':
        e.preventDefault()
        if (--hoverIndex.value < 0) {
          hoverIndex.value = len - 1
          virtualListRef.value?.scrollToEnd()
        } else {
          if (startIndex >= hoverIndex.value) {
            virtualListRef.value?.scrollToIndex(hoverIndex.value)
          }
        }

        break
      case 'Enter':
        const hoverItem = options.value[hoverIndex.value]
        // 相当于点击
        hoverItem && selectOptionClick(hoverItem)
        break
      default:
        break
    }
  }
  watch(optionListShow, () => {
    if (optionListShow.value) {
      window.addEventListener('keydown', handleKeydown)
    } else {
      window.removeEventListener('keydown', handleKeydown)
    }
  })

  return hoverIndex
}
