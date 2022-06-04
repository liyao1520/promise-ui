import { computed, defineComponent, inject, nextTick, ref, toRefs } from 'vue'
import { tabPaneProps, TabPaneProps, TabsKey } from './tabs-types'

import './index.scss'
import { useNamespace } from '../../shared/hooks/use-namespace'

export default defineComponent({
  name: 'PTabPane',
  props: tabPaneProps,
  emits: [],
  setup(props: TabPaneProps, { slots, emit }) {
    const { disabled, label, name, lazy, closable } = toRefs(props)

    const ns = useNamespace('tab-pane')
    const TabsContext = inject(TabsKey)
    const TabsProps = TabsContext?.props
    const classes = computed(() => ({
      [ns.b()]: true,
      [ns.m('disabled')]: disabled.value,
      [ns.m('active')]: isActive.value
    }))
    const tabPaneEl = ref<HTMLDivElement>()

    const updateTabsContent = async () => {
      const allow = await TabsContext?.onBeforeLeaveHook(name.value)
      if (!allow) return
      TabsContext?.updateModelValue(name.value, currentIndex)
      TabsContext?.renderContent(slots.default)
      if (!tabPaneEl.value) {
        await nextTick()
      }
      const width = tabPaneEl.value?.clientWidth
      const left = tabPaneEl.value?.offsetLeft

      TabsContext?.changeActiveBarPosition(left + 'px', width + 'px')
    }
    // 如果是第一个,并且modelValue 没有传值,则tabs content显示这个
    const currentIndex = TabsContext?.getPaneIndex() || 0
    if (currentIndex === 0 && TabsProps?.modelValue === '') {
      updateTabsContent()
    }
    const isActive = computed(() => TabsProps?.modelValue === name.value)
    if (isActive.value) {
      updateTabsContent()
    }

    const onClick = () => {
      updateTabsContent()
    }

    return () => {
      return (
        <div class={classes.value} data-name={name.value} onClick={onClick} ref={tabPaneEl}>
          {label.value}
        </div>
      )
    }
  }
})
