import { defineComponent, ref, SetupContext, toRefs, Transition, watch, nextTick } from 'vue'
import { tabsProps, TabsProps } from './tabs-types'

import './index.scss'
import { useNamespace } from '../../shared/hooks/use-namespace'
import useTabs from './hooks/use-tabs'

export default defineComponent({
  name: 'PTabs',
  props: tabsProps,
  emits: ['update:modelValue', 'change', 'before-leave', 'close', 'addTabPane'],
  setup(props: TabsProps, ctx) {
    const { slots, emit } = ctx
    const { type, size, tabPosition, closable, centered, modelValue, onBeforeLeave } = toRefs(props)
    const tabsHeaderEl = ref<HTMLDivElement | null>(null)
    const ns = useNamespace('tabs')

    const { transitionName, activeBarStyles, contentVnode } = useTabs(props, ctx as SetupContext)

    const handleAddPane = () => {
      emit('addTabPane')
      nextTick(() => {
        console.log(tabsHeaderEl.value?.scrollWidth)
        tabsHeaderEl.value?.scrollTo({
          left: tabsHeaderEl.value?.scrollWidth,
          behavior: 'smooth'
        })
      })
    }
    watch(
      () => props.modelValue,
      (name) => {
        emit('change', name)
      }
    )

    return () => {
      return (
        <div class={[ns.b(), ns.m(type.value)]}>
          <div
            class={[ns.e('header'), centered.value && ns.em('header', 'center')]}
            ref={tabsHeaderEl}
          >
            {slots.default && slots.default()}
            <div class={[ns.e('pane-add')]} onClick={handleAddPane}>
              +
            </div>
            <div class={ns.e('active-bar')} style={activeBarStyles}></div>
          </div>
          <Transition name={transitionName.value} mode="out-in">
            <div class={ns.e('content-wrapper')} key={modelValue.value}>
              <div class={ns.e('content')}>{contentVnode.value}</div>
            </div>
          </Transition>
        </div>
      )
    }
  }
})
