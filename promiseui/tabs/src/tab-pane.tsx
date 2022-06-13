import { computed, defineComponent, inject, nextTick, ref, toRefs, Transition, watch } from 'vue'
import { tabPaneProps, TabPaneProps, TabsKey } from './tabs-types'

import './index.scss'
import { useNamespace } from '../../shared/hooks/use-namespace'
import { Icon } from '../../icon'
import { CloseOutline } from '@vicons/ionicons5'
import nativeClick from '../../shared/utils/nativeClick'

export default defineComponent({
  __TAB_PANE__: true,
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
    watch(
      () => TabsProps?.modelValue,
      (newName) => {
        if (!name.value) return
        if (newName === name.value) {
          TabsContext?.renderContent(slots.default)
        }
      }
    )

    const init = async () => {
      if (TabsProps?.modelValue === name.value) {
        TabsContext?.renderContent(slots.default)
        await nextTick()
        if (!tabPaneEl.value) return
        const width = tabPaneEl.value.clientWidth
        const left = tabPaneEl.value.offsetLeft
        TabsContext?.changeActiveBarPosition(left + 'px', width + 'px')
      }
    }
    init()
    const updateTabsContent = () => {
      TabsContext?.updateModelValue(name.value, currentIndex)
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
    const handleClose = (e: Event) => {
      e.stopPropagation()
      if (!closable.value) return
      if (!TabsContext?.props.closable) return
      TabsContext.handleClose(name.value, slots.default)
    }

    return () => (
      <div class={classes.value} data-name={name.value} onClick={onClick} ref={tabPaneEl}>
        {label.value}
        {TabsProps && TabsProps.type === 'editable-card' && closable.value && (
          <Icon
            component={CloseOutline}
            class={ns.e('close-icon')}
            onClick={nativeClick(handleClose)}
          />
        )}
      </div>
    )
  }
})
