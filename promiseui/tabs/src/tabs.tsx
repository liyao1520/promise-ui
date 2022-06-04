import {
  defineComponent,
  provide,
  reactive,
  ref,
  SetupContext,
  Slot,
  toRefs,
  Transition,
  VNode,
  watch
} from 'vue'
import { TabsKey, tabsProps, TabsProps } from './tabs-types'

import './index.scss'
import { useNamespace } from '../../shared/hooks/use-namespace'
import useTabs from './hooks/use-tabs'

export default defineComponent({
  name: 'PTabs',
  props: tabsProps,
  emits: ['update:modelValue', 'change', 'before-leave'],
  setup(props: TabsProps, ctx) {
    const { slots, emit } = ctx
    const { type, size, tabPosition, closable, centered, modelValue, onBeforeLeave } = toRefs(props)

    const ns = useNamespace('tabs')
    const { transitionName, activeBarStyles, contentVnode } = useTabs(props, ctx as SetupContext)
    watch(
      () => props.modelValue,
      (name) => {
        emit('change', name)
      }
    )
    return () => {
      return (
        <div class="pui-tabs">
          <div class={[ns.e('header'), centered.value && ns.em('header', 'center')]}>
            {slots.default && slots.default()}
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
