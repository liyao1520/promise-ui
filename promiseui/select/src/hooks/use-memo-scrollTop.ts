import { nextTick, ref, Ref, watch } from 'vue'

export default function (optionListShow: Ref<boolean>, virtualListEl: Ref) {
  const memoScrollTop = ref(0)

  watch(optionListShow, async (isShow) => {
    if (isShow) {
      await nextTick()
      if (virtualListEl.value) {
        virtualListEl.value.setScrollTop(memoScrollTop.value)
      }
    } else {
      if (!virtualListEl.value) return
      memoScrollTop.value = virtualListEl.value.getScrollTop()
    }
  })
  return { virtualListEl }
}
