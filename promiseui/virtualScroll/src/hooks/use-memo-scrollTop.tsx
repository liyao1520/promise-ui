import { onActivated, onDeactivated, Ref, ref } from 'vue'

export default (scrollContainer: Ref<HTMLElement | null>) => {
  const memoScrollTop = ref(0)
  onActivated(() => {
    if (!scrollContainer.value) return
    scrollContainer.value.scrollTop = memoScrollTop.value
  })
  onDeactivated(() => {
    memoScrollTop.value = scrollContainer.value?.scrollTop || 0
  })
}
