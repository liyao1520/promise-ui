import { Dayjs } from 'dayjs'

import { computed, defineComponent, inject, provide } from 'vue'
import { useNamespace } from '../../shared/hooks/use-namespace'
import DatePickerHeader from './datePicker-header'
import { datePickContextKey, datePickerProps, DatePickerProps } from './datePicker-types'
import useDayList from './hooks/use-day-list'

import useSelectCurrentDate from './hooks/use-select-current-date'
import useTogglePage from './hooks/use-toggle-page'

import './index.scss'

export default defineComponent({
  name: 'PDatePicker',
  props: datePickerProps,
  emits: ['update:modelValue'],
  setup(props: DatePickerProps, { emit }) {
    const ns = useNamespace('date-picker')
    const classes = computed(() => ({
      [ns.b()]: true
    }))
    const [currentYear, currentMonth] = useSelectCurrentDate()
    const days = useDayList(currentYear, currentMonth)
    const dayRows = computed(() => {
      // 分六行
      return Array.from({ length: 6 }).map((_, i) => {
        return days.value.slice(i * 7, i * 7 + 7)
      })
    })
    const tdClasses = computed(() => ({
      [ns.e('cell')]: true
    }))
    const { toggleNextMonth, togglePrevMonth, toggleNextYear, togglePrevYear } = useTogglePage(
      currentMonth,
      currentYear
    )
    const handleDayClick = (day: Dayjs) => {
      // dayjs month 需要加 1
      const month = day.month() + 1
      if (month < currentMonth.value) {
        togglePrevMonth()
      } else if (month > currentMonth.value) {
        toggleNextMonth()
      }
      emit('update:modelValue', day.unix())
    }
    provide(datePickContextKey, {
      toggleNextMonth,
      togglePrevMonth,
      toggleNextYear,
      togglePrevYear
    })
    return () => {
      return (
        <div class={classes.value}>
          <DatePickerHeader currentMonth={currentMonth.value} currentYear={currentYear.value} />
          <div class={ns.e('body')}>
            <table>
              <thead></thead>
              <table>
                {dayRows.value.map((dayCols) => (
                  <tr>
                    {dayCols.map((day) => (
                      <td
                        key={day.timestamp}
                        class={[
                          tdClasses.value,
                          {
                            [ns.em('cell', 'weak')]:
                              day.month() + 1 !== currentMonth.value ||
                              day.year() !== currentYear.value,
                            [ns.em('cell', 'active')]: day.timestamp === props.modelValue
                          }
                        ]}
                        onClick={() => handleDayClick(day)}
                      >
                        <div class={ns.e('cell-inner')}>{day.date()}</div>
                      </td>
                    ))}
                  </tr>
                ))}
              </table>
            </table>
          </div>
        </div>
      )
    }
  }
})
