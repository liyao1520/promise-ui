import { computed, Ref } from 'vue'
import { getLastMonthRestDays, getNextMonthRestDays, getCurrentMonthDays } from '../utils/date'

export default function (currentYear: Ref<number>, currentMonth: Ref<number>) {
  const days = computed(() => {
    return getDays(currentYear.value, currentMonth.value)
  })
  return days
}

function getDays(year: number, month: number) {
  return getLastMonthRestDays(year, month).concat(
    getCurrentMonthDays(year, month),
    getNextMonthRestDays(year, month)
  )
}
