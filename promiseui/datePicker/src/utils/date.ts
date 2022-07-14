import { IDayjs } from './../datePicker-types'
import { getFirstWeekDay, getMonthDayCount } from '../../../shared/utils/date'
import dayjs, { Dayjs } from 'dayjs'
export function getLastMonthRestDays(year: number, month: number): IDayjs[] {
  const weekday = getFirstWeekDay(year, month)
  const LastMonthDayCount = getMonthDayCount(year, month - 1)
  const days: IDayjs[] = []
  for (let i = 0; i < weekday - 1; i++) {
    const day: Dayjs = dayjs(new Date(year, month - 2, LastMonthDayCount - i))
    days.unshift(
      Object.assign(day, {
        timestamp: day.unix()
      })
    )
  }
  return days
}
export function getCurrentMonthDays(year: number, month: number): IDayjs[] {
  const count = getMonthDayCount(year, month)
  return Array.from({ length: count }).map((_, i) => {
    const day: Dayjs = dayjs(new Date(year, month - 1, i + 1))
    return Object.assign(day, { timestamp: day.unix() })
  })
}
export function getNextMonthRestDays(year: number, month: number): IDayjs[] {
  const lastMonthDayCount = getFirstWeekDay(year, month) - 1
  const curMonthDayCount = getMonthDayCount(year, month)
  // 6 行 7 列
  const nextMonthDayCount = 6 * 7 - (lastMonthDayCount + curMonthDayCount)
  return Array.from({ length: nextMonthDayCount }).map((_, i) => {
    const day: Dayjs = dayjs(new Date(year, month, i + 1))
    return Object.assign(day, { timestamp: day.unix() })
  })
}
