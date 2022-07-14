import { defineComponent, inject } from 'vue'
import { Button } from '../../button'
import { useNamespace } from '../../shared/hooks/use-namespace'
import { datePickContextKey, DatePickerContext } from './datePicker-types'
import IconChevronLeft from './icons/IconChevronLeft'
import IconChevronRight from './icons/IconChevronRight'
import IconDoubleChevronLeft from './icons/IconDoubleChevronLeft'
import IconDoubleChevronRight from './icons/IconDoubleChevronRight'

export default defineComponent({
  props: {
    currentYear: {
      type: Number,
      required: true
    },
    currentMonth: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const ns = useNamespace('date-picker')
    const { togglePrevMonth, toggleNextMonth, toggleNextYear, togglePrevYear } = inject(
      datePickContextKey
    ) as DatePickerContext
    return () => (
      <div class={ns.e('header')}>
        <div class={ns.e('btns')}>
          <Button size={'xs'} shake={false} fillMode="none" onClick={togglePrevYear}>
            <IconDoubleChevronLeft />
          </Button>
          <Button size={'xs'} shake={false} fillMode="none" onClick={togglePrevMonth}>
            <IconChevronLeft />
          </Button>
        </div>
        <div class={ns.e('navigation-month')}> {props.currentYear + '-' + props.currentMonth}</div>
        <div class={ns.e('btns')}>
          <Button size={'xs'} shake={false} fillMode="none" onClick={toggleNextMonth}>
            <IconChevronRight />
          </Button>
          <Button size={'xs'} shake={false} fillMode="none" onClick={toggleNextYear}>
            <IconDoubleChevronRight />
          </Button>
        </div>
      </div>
    )
  }
})
