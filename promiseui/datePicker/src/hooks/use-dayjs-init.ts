import dayjs from 'dayjs'
import localeData from 'dayjs/plugin/localeData'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import 'dayjs/locale/zh-cn'
export default function () {
  dayjs.locale('zh-cn')
  dayjs.extend(localeData)
  dayjs.extend(customParseFormat)
}
