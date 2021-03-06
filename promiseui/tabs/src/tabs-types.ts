import { ICommonSize } from './../../types'
import type { PropType, ExtractPropTypes, InjectionKey, Slot } from 'vue'
type TabsType = 'line' | 'card' | 'editable-card'

type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'unset'
  | string

export type OnBeforeLeaveImpl = (
  name: string | number,
  oldName: string | number | null
) => boolean | Promise<boolean>
export const tabsProps = {
  modelValue: {
    type: [String, Number] as PropType<string | number>,
    default: ''
  },
  type: {
    type: String as PropType<TabsType>,
    default: 'line'
  },
  closable: { type: Boolean, default: true },
  size: {
    type: String as PropType<ICommonSize>,
    default: 'md'
  },
  justifyContent: {
    type: String as PropType<JustifyContent>,
    default: 'unset'
  },
  tabPosition: {
    type: String as PropType<'top' | 'right' | 'bottom' | 'left'>
  },
  onBeforeLeave: {
    type: Function as PropType<OnBeforeLeaveImpl>
  },
  animated: {
    type: Boolean,
    default: false
  }
} as const
export const tabPaneProps = {
  label: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  name: {
    type: [String, Number] as PropType<string | number>,
    default: ''
  },
  closable: { type: Boolean, default: true },
  lazy: {
    type: Boolean,
    default: false
  }
} as const

interface ITabsInstance {
  props: TabsProps
  renderContent: (defaultSlot: Slot | undefined) => void
  updateModelValue: (name: string | number, paneIndex: number) => void
  getPaneIndex: () => number
  changeActiveBarPosition: (left: string, width: string) => void
  onBeforeLeaveHook: (name: string | number) => Promise<boolean>
  handleClose: (name: string | number, defautSlot: Slot | undefined) => void
}

export const TabsKey: InjectionKey<ITabsInstance> = Symbol('tabsKey')
export type TabsProps = ExtractPropTypes<typeof tabsProps>
export type TabPaneProps = ExtractPropTypes<typeof tabPaneProps>
