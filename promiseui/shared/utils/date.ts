// 得到指定月份第一天是星期几
export function getFirstWeekDay(year: number, month: number) {
  // 转换一下 因为 0 为星期天
  return new Date(year, month - 1, 1).getDay() || 7
}
export function getMonthDayCount(year: number, month: number) {
  // 下个月的第0天就是这个月的最后一天
  return new Date(year, month, 0).getDate()
}
