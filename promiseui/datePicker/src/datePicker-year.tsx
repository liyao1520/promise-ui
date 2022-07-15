/* eslint-disable vue/require-default-prop */
import dayjs, { Dayjs } from 'dayjs'
import { computed, defineComponent, PropType, ref } from 'vue'
import { Button } from '../../button'
import { useNamespace } from '../../shared/hooks/use-namespace'
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
  emits: ['change', 'changeYear'],
  setup(props, { emit }) {
    const ns = useNamespace('date-picker')
    const initialDate = dayjs()
    const startYear = ref(Math.floor(initialDate.year() / 10) * 10 - 1)

    const yearRows = computed(() => {
      const endYear = startYear.value + 12
      const years: Array<Array<Dayjs>> = []
      for (let i = startYear.value; i < endYear; i++) {
        const index = Math.floor((i - startYear.value) / 3)
        const row = years[index]
        const day = dayjs(new Date(i, 0))
        if (row) {
          row.push(day)
        } else {
          years[index] = [day]
        }
      }
      return years
    })
    const isActive = (day: Dayjs) => {
      if (props.activeDay === undefined) return false
      if (Array.isArray(props.activeDay)) {
        //
      } else {
        return props.activeDay?.year() === day.year()
      }
    }
    const handleYearClick = (day: Dayjs) => {
      emit('change', day)
    }

    return () => (
      <div class={ns.b()}>
        <div class={ns.e('header')}>
          <div class={ns.e('btns')}>
            <Button
              size={'xs'}
              shake={false}
              fillMode="none"
              onClick={() => (startYear.value -= 10)}
            >
              <IconDoubleChevronLeft />
            </Button>
          </div>
          <div class={ns.e('navigation-year')}>{`${startYear.value + 1} 年 - ${
            startYear.value + 10
          }年`}</div>
          <div class={ns.e('btns')}>
            <Button
              size={'xs'}
              shake={false}
              fillMode="none"
              onClick={() => (startYear.value += 10)}
            >
              <IconDoubleChevronRight />
            </Button>
          </div>
        </div>
        <div class={ns.e('body')}>
          <table>
            <tbody>
              {yearRows.value.map((row) => (
                <tr class={ns.e('year-row')}>
                  {row.map((day) => (
                    <td
                      key={day.unix()}
                      class={{
                        [ns.e('month-year-cell')]: true,
                        [ns.em('month-year-cell', 'active')]: isActive(day)
                      }}
                      onClick={() => handleYearClick(day)}
                    >
                      <div class={[ns.e('month-year-cell-inner')]}>
                        <span> {day.year()}</span>
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
