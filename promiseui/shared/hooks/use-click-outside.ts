import { ComponentPublicInstance, onUnmounted, Ref, unref, watch } from 'vue'
interface IClickOutsideOptions {
  ignore?: Target[]
}
type Target =
  | Ref<HTMLElement | SVGElement | ComponentPublicInstance | undefined | null>
  | HTMLElement
  | ComponentPublicInstance
const useClickOutside = (
  target: Target,
  hanler: (e: PointerEvent) => void,
  ClickOutsideOptions?: IClickOutsideOptions
) => {
  if (!window) return

  const { ignore } = ClickOutsideOptions || {}
  let targetEl: HTMLElement
  const listenner = (e: Event) => {
    if (targetEl === e.target) return
    if (targetEl.contains(e.target as HTMLElement)) return
    if (
      ignore?.some((i) => {
        const plain = unref(i)
        const el = ((plain as ComponentPublicInstance).$el ?? plain) as HTMLElement
        return el === e.target || el.contains(e.target as HTMLElement)
      })
    )
      return

    hanler(e as PointerEvent)
  }
  watch(
    () => {
      const plain = unref(target)

      if (!plain) return null

      const el = (plain as ComponentPublicInstance).$el ?? plain

      return el
    },
    (el) => {
      if (!el) return

      targetEl = el
      window.removeEventListener('click', listenner)
      window.addEventListener('click', listenner)
    },
    {
      immediate: true
    }
  )
  onUnmounted(() => window.removeEventListener('click', listenner))
}
export default useClickOutside
