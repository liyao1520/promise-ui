import { mount } from '@vue/test-utils'

import { DatePicker } from '../index'
import { getCurrentMonthDays, getLastMonthRestDays, getNextMonthRestDays } from '../src/utils/date'
describe('utils', () => {
  it('getLastMonthRestDays', () => {
    expect(getLastMonthRestDays(2022, 7).map((i) => i.date())).toEqual([27, 28, 29, 30])
    expect(getLastMonthRestDays(2022, 6).map((i) => i.date())).toEqual([30, 31])
    expect(getLastMonthRestDays(2022, 5).map((i) => i.date())).toEqual([25, 26, 27, 28, 29, 30])
    expect(getLastMonthRestDays(2021, 5).map((i) => i.date())).toEqual([26, 27, 28, 29, 30])
  })
  it('getNextMonthRestDays', () => {
    expect(getNextMonthRestDays(2022, 7).map((i) => i.date())).toEqual([1, 2, 3, 4, 5, 6, 7])
    expect(getNextMonthRestDays(2022, 6).map((i) => i.date())).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ])
    expect(getNextMonthRestDays(2022, 5).map((i) => i.date())).toEqual([1, 2, 3, 4, 5])
    expect(getNextMonthRestDays(2021, 5).map((i) => i.date())).toEqual([1, 2, 3, 4, 5, 6])
  })
  it('getCurrentMonthDays', () => {
    expect(getCurrentMonthDays(2022, 7).map((i) => i.date())).toEqual(
      Array.from({ length: 31 }).map((_, i) => i + 1)
    )
    expect(getCurrentMonthDays(2022, 6).map((i) => i.date())).toEqual(
      Array.from({ length: 30 }).map((_, i) => i + 1)
    )
    expect(getCurrentMonthDays(2022, 5).map((i) => i.date())).toEqual(
      Array.from({ length: 31 }).map((_, i) => i + 1)
    )
  })
})
describe('datePicker test', () => {
  it('datePicker init render', async () => {
    // todo
  })
})
