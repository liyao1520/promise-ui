import { getFirstWeekDay, getMonthDayCount } from '../../../shared/utils/date'
import dayjs, { Dayjs } from 'dayjs'
export function getLastMonthRestDays(year: number, month: number): Dayjs[] {
  const weekday = getFirstWeekDay(year, month)
  const LastMonthDayCount = getMonthDayCount(year, month - 1)
  const days: Dayjs[] = []
  for (let i = 0; i < weekday - 1; i++) {
    const day: Dayjs = dayjs(new Date(year, month - 2, LastMonthDayCount - i))
    days.unshift(day)
  }
  return days
}
export function getCurrentMonthDays(year: number, month: number): Dayjs[] {
  const count = getMonthDayCount(year, month)
  return Array.from({ length: count }).map((_, i) => {
    return dayjs(new Date(year, month - 1, i + 1))
  })
}
export function getNextMonthRestDays(year: number, month: number): Dayjs[] {
  const lastMonthDayCount = getFirstWeekDay(year, month) - 1
  const curMonthDayCount = getMonthDayCount(year, month)
  // 6 行 7 列
  const nextMonthDayCount = 6 * 7 - (lastMonthDayCount + curMonthDayCount)
  return Array.from({ length: nextMonthDayCount }).map((_, i) => {
    return dayjs(new Date(year, month, i + 1))
  })
}
