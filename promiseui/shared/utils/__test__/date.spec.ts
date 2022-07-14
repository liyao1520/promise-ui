import { getFirstWeekDay, getMonthDayCount } from '../date'
describe('date test', () => {
  it('getFirstWeekDay', async () => {
    expect(getFirstWeekDay(2022, 7)).toBe(5)
    expect(getFirstWeekDay(2022, 6)).toBe(3)
    expect(getFirstWeekDay(2022, 5)).toBe(7)
  })
  it('getMonthDayCount', () => {
    expect(getMonthDayCount(2022, 7)).toBe(31)
    expect(getMonthDayCount(2022, 6)).toBe(30)
    expect(getMonthDayCount(2022, 5)).toBe(31)
    expect(getMonthDayCount(2022, 4)).toBe(30)
    expect(getMonthDayCount(2022, 3)).toBe(31)
    expect(getMonthDayCount(2022, 2)).toBe(28)
    expect(getMonthDayCount(2022, 1)).toBe(31)
  })
})
