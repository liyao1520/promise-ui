import { provide, reactive, ref, SetupContext, Slot, VNode } from 'vue'
import { TabsKey, TabsProps } from '../tabs-types'

export default function (props: TabsProps, ctx: SetupContext) {
  const { renderContent, contentVnode } = useRenderContent()
  const { getPaneIndex, updateTranstionName, transitionName } = useTransitionName()
  const activeBarStyles = reactive({
    left: 'unset',
    width: 'unset'
  })
  const changeActiveBarPosition = (left: string, width: string) => {
    activeBarStyles.left = left
    activeBarStyles.width = width
  }
  let oldName: null | number | string = null

  const onBeforeLeaveHook = async (name: string | number) => {
    // 没传,可以跳转
    if (!props.onBeforeLeave) return true
    const res = await props.onBeforeLeave(name, oldName)
    if (!res) return false
    oldName = name
    return true
  }
  const updateModelValue = (name: string, paneIndex: number) => {
    ctx.emit('update:modelValue', name)
    updateTranstionName(paneIndex)
  }
  provide(TabsKey, {
    props,
    renderContent,
    updateModelValue,
    changeActiveBarPosition,
    getPaneIndex,
    onBeforeLeaveHook
  })
  return { transitionName, activeBarStyles, contentVnode }
}
// renderContont
const useRenderContent = () => {
  const defaultSlotMap = new WeakMap()
  const contentVnode = ref<VNode[] | null>(null)
  const renderContent = (defaultSlot: Slot | undefined) => {
    if (!defaultSlot) return
    if (defaultSlotMap.has(defaultSlot)) {
      contentVnode.value = defaultSlotMap.get(defaultSlotMap)
      return
    }
    const vnode = defaultSlot()
    defaultSlotMap.set(defaultSlotMap, vnode)
    contentVnode.value = vnode
  }
  return {
    renderContent,
    contentVnode
  }
}
// 控制 prev 和 next 动画
const useTransitionName = () => {
  let paneIndex = 0
  const currentPaneIndex = ref(paneIndex)
  const transitionName = ref('prev-transition')
  const getPaneIndex = () => {
    return paneIndex++
  }
  const updateTranstionName = (paneIndex: number) => {
    transitionName.value =
      currentPaneIndex.value > paneIndex ? 'prev-transition' : 'next-transition'
    currentPaneIndex.value = paneIndex
  }
  return {
    getPaneIndex,
    updateTranstionName,
    transitionName
  }
}
