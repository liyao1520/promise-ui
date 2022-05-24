import { IMEssageType } from '../message-types'
import {
  InformationCircle,
  CheckmarkCircle,
  CloseCircleSharp,
  WarningSharp
} from '@vicons/ionicons5'
export default function (type: IMEssageType) {
  let Icon
  switch (type) {
    case 'error':
      Icon = CloseCircleSharp
      break
    case 'success':
      Icon = CheckmarkCircle
      break
    case 'info':
      Icon = InformationCircle
      break
    case 'warning':
      Icon = WarningSharp
      break
    case 'none':
      Icon = ''
      break
    default:
      Icon = ''
  }
  return Icon
}
