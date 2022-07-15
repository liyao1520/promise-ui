/* eslint-disable vue/require-default-prop */
import dayjs, { Dayjs } from 'dayjs'

import {
  computed,
  defineComponent,
  onDeactivated,
  onUnmounted,
  PropType,
  ref,
  watchEffect
} from 'vue'
import { Button } from '../../button'
import { useNamespace } from '../../shared/hooks/use-namespace'
import DatePickerMonth from './datePicker-month'
import DatePickerYear from './datePicker-year'

import useDayList from './hooks/use-day-list'

import useSelectCurrentDate from './hooks/use-select-current-date'
import useTogglePage from './hooks/use-toggle-page'
import IconChevronLeft from './icons/IconChevronLeft'
import IconChevronRight from './icons/IconChevronRight'
import IconDoubleChevronLeft from './icons/IconDoubleChevronLeft'
import IconDoubleChevronRight from './icons/IconDoubleChevronRight'

import './index.scss'

export default defineComponent({
  name: 'PDatePicker',
  props: {
    activeDay: {
      type: [Object, Array] as PropType<Dayjs | Dayjs[] | undefined>
    }
  },
  emits: ['change'],
  setup(props, { emit }) {
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

    // 默认星期日在前面,需要把星期日换到最后
    const weaks = dayjs.weekdaysMin()
    weaks.push(weaks.shift() as string)

    const tdClasses = computed(() => ({
      [ns.e('day-cell')]: true
    }))
    const { toggleNextMonth, togglePrevMonth, toggleNextYear, togglePrevYear, setMonth, setYear } =
      useTogglePage(currentMonth, currentYear)
    const handleDayClick = (day: Dayjs) => {
      // dayjs month 需要加 1
      const month = day.month() + 1
      if (month < currentMonth.value) {
        togglePrevMonth()
      } else if (month > currentMonth.value) {
        toggleNextMonth()
      }
      emit('change', day)
    }
    const isActive = (day: Dayjs) => {
      if (Array.isArray(props.activeDay)) {
        //
      } else {
        if (props.activeDay === undefined) return false
        return (
          day.year() === props.activeDay?.year?.() &&
          day.month() === props.activeDay?.month?.() &&
          day.date() === props.activeDay?.date?.()
        )
      }
    }
    const showSelectMonth = ref(false)
    const showSelectYear = ref(false)

    return () => (
      <>
        <DatePickerYear
          v-show={showSelectYear.value}
          activeDay={Array.isArray(props.activeDay) ? undefined : props.activeDay}
          currentYear={currentYear.value}
          onChange={(day) => {
            setMonth(day.month() + 1)
            setYear(day.year())
            showSelectYear.value = false
            showSelectMonth.value = true
          }}
        />
        <DatePickerMonth
          v-show={showSelectMonth.value}
          activeDay={Array.isArray(props.activeDay) ? undefined : props.activeDay}
          currentYear={currentYear.value}
          onYearChange={(year) => setYear(year)}
          onChange={(day) => {
            setMonth(day.month() + 1)
            setYear(day.year())
            showSelectMonth.value = false
          }}
        />

        <div class={classes.value} v-show={!showSelectMonth.value && !showSelectYear.value}>
          <div class={ns.e('header')}>
            <div class={ns.e('btns')}>
              <Button size={'xs'} shake={false} fillMode="none" onClick={togglePrevYear}>
                <IconDoubleChevronLeft />
              </Button>
              <Button size={'xs'} shake={false} fillMode="none" onClick={togglePrevMonth}>
                <IconChevronLeft />
              </Button>
            </div>
            <div class={ns.e('navigation-month')}>
              <span onClick={() => (showSelectYear.value = true)}>{currentYear.value + '年'}</span>
              <span onClick={() => (showSelectMonth.value = true)}>
                {currentMonth.value + '月'}
              </span>
            </div>
            <div class={ns.e('btns')}>
              <Button size={'xs'} shake={false} fillMode="none" onClick={toggleNextMonth}>
                <IconChevronRight />
              </Button>
              <Button size={'xs'} shake={false} fillMode="none" onClick={toggleNextYear}>
                <IconDoubleChevronRight />
              </Button>
            </div>
          </div>

          <div class={ns.e('body')}>
            <table>
              <thead>
                {weaks.map((weak) => (
                  <th>{weak}</th>
                ))}
              </thead>
              <tbody>
                {dayRows.value.map((dayCols) => (
                  <tr>
                    {dayCols.map((day) => (
                      <td
                        key={day.unix()}
                        class={[
                          tdClasses.value,
                          {
                            [ns.em('day-cell', 'weak')]:
                              day.month() + 1 !== currentMonth.value ||
                              day.year() !== currentYear.value,
                            [ns.em('day-cell', 'active')]: isActive(day)
                          }
                        ]}
                        onClick={() => handleDayClick(day)}
                      >
                        <div class={ns.e('day-cell-inner')}>{day.date()}</div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    )
  }
})
