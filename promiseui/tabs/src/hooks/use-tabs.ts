import { provide, reactive, ref, SetupContext, Slot, VNode } from 'vue'
import { TabsKey, TabsProps } from '../tabs-types'

export default function (props: TabsProps, ctx: SetupContext) {
  const { renderContent, contentVnode } = useRenderContent(props)
  const { getPaneIndex, updateTranstionName, transitionName } =
    useTransitionName()
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
  const updateModelValue = async (name: string | number, paneIndex: number) => {
    if (name === props.modelValue) return
    const allow = await onBeforeLeaveHook(name)
    if (!allow) return
    ctx.emit('update:modelValue', name)
    updateTranstionName(paneIndex)
  }

  const handleClose = (
    name: string | number,
    defaultSlot: Slot | undefined
  ) => {
    ctx.emit('close', name)
  }
  provide(TabsKey, {
    props,
    renderContent,
    updateModelValue,
    getPaneIndex,
    onBeforeLeaveHook,
    handleClose,
    changeActiveBarPosition
  })
  return {
    transitionName,
    activeBarStyles,
    contentVnode,
    changeActiveBarPosition
  }
}
// renderContont
const useRenderContent = (props: TabsProps) => {
  const defaultSlotMap = new WeakMap()
  const contentVnode = ref<VNode[] | null>(null)
  const renderContent = (defaultSlot: Slot | undefined) => {
    if (!defaultSlot) return

    if (defaultSlotMap.has(defaultSlot)) {
      contentVnode.value = defaultSlotMap.get(defaultSlot)
      return
    }
    const vnode = defaultSlot()
    defaultSlotMap.set(defaultSlotMap, vnode)
    contentVnode.value = vnode
  }
  // const removeContentBySlot = (defaultSlot: Slot, name: string | number) => {
  //   defaultSlotMap.set(defaultSlot, null)
  //   // 当前选择的和删除为一个时,需要重新render 一下 content 内容, 也就清空content
  //   if (name === props.modelValue) renderContent(defaultSlot)
  // }
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
