import { Ref } from 'vue'

export default function (currentMonth: Ref<number>, currentYear: Ref<number>) {
  const togglePrevMonth = () => {
    if (currentMonth.value === 1) {
      currentMonth.value = 12
      currentYear.value--
    } else {
      currentMonth.value--
    }
  }
  const toggleNextMonth = () => {
    if (currentMonth.value === 12) {
      currentMonth.value = 1
      currentYear.value++
    } else {
      currentMonth.value++
    }
  }
  const togglePrevYear = () => {
    currentYear.value--
  }
  const toggleNextYear = () => {
    currentYear.value++
  }
  return {
    togglePrevYear,
    toggleNextYear,
    toggleNextMonth,
    togglePrevMonth
  }
}
