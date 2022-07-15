import dayjs from 'dayjs'
import { ref } from 'vue'
export default function () {
  const initialDate = dayjs()
  const currentYear = ref(initialDate.year())
  const currentMonth = ref(initialDate.month() + 1)
  console.log(currentYear, currentMonth)

  return [currentYear, currentMonth]
}
