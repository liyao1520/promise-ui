/* eslint-disable vue/require-default-prop */
import dayjs, { Dayjs } from 'dayjs'
import { defineComponent, PropType, ref, toRefs } from 'vue'
import { Button } from '../../button'
import { useNamespace } from '../../shared/hooks/use-namespace'
import useMonthList from './hooks/use-month-list'

import IconDoubleChevronLeft from './icons/IconDoubleChevronLeft'
import IconDoubleChevronRight from './icons/IconDoubleChevronRight'

export default defineComponent({
  props: {
    activeDay: {
      type: Object as PropType<Dayjs | undefined>
    },
    currentYear: {
      type: Number,
      requird: true,
      default: 0
    }
  },
  emits: ['change', 'yearChange'],
  setup(props, { emit }) {
    const ns = useNamespace('date-picker')
    // 分4行,一行3个
    const { currentYear } = toRefs(props)

    const monthRows = useMonthList(currentYear)

    const isActive = (day: Dayjs) => {
      if (props.activeDay === undefined) return false

      return (
        day.month() === props.activeDay?.month?.() &&
        day.year() === props.activeDay?.year?.()
      )
    }
    const handleMonthClick = (day: Dayjs) => {
      emit('change', day)
    }
    const togglePrevYear = () => {
      emit('yearChange', currentYear.value - 1)
    }
    const toggleNextYear = () => {
      emit('yearChange', currentYear.value + 1)
    }
    return () => (
      <div class={ns.b()}>
        <div class={ns.e('header')}>
          <div class={ns.e('btns')}>
            <Button
              size={'xs'}
              shake={false}
              fillMode="none"
              onClick={togglePrevYear}
            >
              <IconDoubleChevronLeft />
            </Button>
          </div>
          <div class={ns.e('navigation-year')}>{currentYear.value + '年'}</div>
          <div class={ns.e('btns')}>
            <Button
              size={'xs'}
              shake={false}
              fillMode="none"
              onClick={toggleNextYear}
            >
              <IconDoubleChevronRight />
            </Button>
          </div>
        </div>
        <div class={ns.e('body')}>
          <table>
            <tbody>
              {monthRows.value.map((row) => (
                <tr>
                  {row.map((month) => (
                    <td
                      key={month.dayjs.unix()}
                      class={{
                        [ns.e('month-year-cell')]: true,
                        [ns.em('month-year-cell', 'active')]: isActive(
                          month.dayjs
                        )
                      }}
                      onClick={() => handleMonthClick(month.dayjs)}
                    >
                      <div class={[ns.e('month-year-cell-inner')]}>
                        <span>{month.text}</span>
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
})
