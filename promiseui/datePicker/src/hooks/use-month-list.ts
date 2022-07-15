import dayjs from 'dayjs'
import { computed, Ref } from 'vue'

export default function (currentYear: Ref<number>) {
  const months = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
  ]
  const monthNames = dayjs.months()
  const monthNamesFormat = Array.from({ length: 4 }).map((_, i) => {
    return monthNames.slice(i * 3, (i + 1) * 3)
  })

  const monthRows = computed(() =>
    months.map((row, i) =>
      row.map((_, j) => ({
        text: monthNamesFormat[i][j],
        dayjs: dayjs(new Date(currentYear.value, months[i][j] - 1)) // 坑: 需要减去1
      }))
    )
  )
  return monthRows
}
