import { Dayjs } from 'dayjs'
import { ICommonSize } from './../../types'
import type { PropType, ExtractPropTypes, Prop, InjectionKey } from 'vue'

export const datePickerProps = {
  clearable: Boolean,
  bordered: Boolean,
  disabled: Boolean,
  disabledDate: {
    // 不可以 unknown , 先先上去
    type: Function as PropType<(currentDate: unknown) => boolean>
  },
  locale: Object,
  mode: String as PropType<'time' | 'date' | 'month' | 'year' | 'decade'>,
  placeholder: String,
  size: String as PropType<ICommonSize>,
  valueFormat: String,
  modelValue: {
    type: [Object, Array, undefined] as PropType<Dayjs | Dayjs[] | undefined>
  }
} as const

export type DatePickerProps = ExtractPropTypes<typeof datePickerProps>
export interface DatePickerContext {
  toggleNextMonth: () => void
  togglePrevMonth: () => void
  toggleNextYear: () => void
  togglePrevYear: () => void
}

export const datePickContextKey: InjectionKey<DatePickerContext> = Symbol()
