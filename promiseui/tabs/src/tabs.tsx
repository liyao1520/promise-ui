import {
  defineComponent,
  ref,
  SetupContext,
  toRefs,
  Transition,
  watch,
  nextTick,
  getCurrentInstance
} from 'vue'
import { tabsProps, TabsProps } from './tabs-types'

import './index.scss'
import { useNamespace } from '../../shared/hooks/use-namespace'
import useTabs from './hooks/use-tabs'
import useVerticalWheel from '../../shared/hooks/use-vertical-wheel'

export default defineComponent({
  name: 'PTabs',
  props: tabsProps,
  emits: ['update:modelValue', 'change', 'close', 'addTabPane'],
  setup(props: TabsProps, ctx) {
    const { slots, emit } = ctx
    const { type, justifyContent, modelValue, animated } = toRefs(props)
    const tabsHeaderEl = ref<HTMLDivElement | null>(null)
    const ns = useNamespace('tabs')

    const {
      transitionName,
      activeBarStyles,
      contentVnode,
      changeActiveBarPosition,
    } = useTabs(props, ctx as SetupContext)

    const handleAddPane = () => {
      emit('addTabPane')
      nextTick(() => {
        tabsHeaderEl.value?.scrollTo({
          left: tabsHeaderEl.value?.scrollWidth,
          behavior: 'smooth'
        })
      })
    }
    useVerticalWheel(tabsHeaderEl)

    const _instance = getCurrentInstance()
    const proxy = _instance ? _instance.proxy : { $el: null }
    watch(
      () => props.modelValue,
      async (name) => {
        emit('change', name)
        if (!proxy) return
        if (!proxy.$el) return
        const tabPaneEl = proxy.$el.querySelector(`[data-name='${name}']`)
        if (!tabPaneEl) return
        const width = tabPaneEl.clientWidth
        const left = tabPaneEl.offsetLeft
        changeActiveBarPosition(left + 'px', width + 'px')
      }
    )

    return () => {
      return (
        <div class={[ns.b(), ns.m(type.value)]}>
          <div class={ns.e('header-wrapper')} ref={tabsHeaderEl}>
            <div class={ns.e('header')} style={{ justifyContent: justifyContent.value }}>
              {slots.default && slots.default()}
              {type.value === 'editable-card' && (
                <div class={[ns.e('pane-add')]} onClick={handleAddPane}>
                  +
                </div>
              )}
              <div class={ns.e('active-bar')} style={activeBarStyles}></div>
            </div>
          </div>
          <Transition name={animated.value ? transitionName.value : ''} mode="out-in">
            <div class={ns.e('content-wrapper')} key={modelValue.value}>
              <div class={ns.e('content')}>{contentVnode.value}</div>
            </div>
          </Transition>
        </div>
      )
    }
  }
})
