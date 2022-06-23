import type { ExtractPropTypes } from 'vue'

export const loadingBarProps = {
  show: {
    type: Boolean,
    default: false
  },
  isError: Boolean
} as const

export type LoadingBarProps = ExtractPropTypes<typeof loadingBarProps>
