import { ComponentPublicInstance, Ref, ref, watchEffect } from 'vue'
import virtualScroll, { RenderItemProps } from '../../../virtualScroll'
import { ISelectOption } from '../select-types'

export default (
  optionListShow: Ref<boolean>,
  options: Ref<ISelectOption[]>,
  virtualListRef: Ref,
  selectOptionClick: (row: ISelectOption) => void
) => {
  const hoverIndex = ref<number>(0)

  const handleKeydown = (e: KeyboardEvent) => {
    e.preventDefault()
    const keyCode = e.key || e.code
    const len = options.value.length
    const [startIndex, endIndex] = virtualListRef.value?.getVisibleRange() || []

    switch (keyCode) {
      case 'ArrowDown':
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
        console.log('Enter')

        const hoverItem = options.value[hoverIndex.value]
        // 相当于点击
        selectOptionClick(hoverItem)
        break
      default:
        break
    }
  }
  watchEffect(() => {
    if (optionListShow.value) {
      window.addEventListener('keydown', handleKeydown)
      hoverIndex.value = 0
    } else {
      window.removeEventListener('keydown', handleKeydown)
    }
  })

  return hoverIndex
}
