import type { PropType, ExtractPropTypes } from 'vue'

export const loadingBarProps = {
  /* test: {
    type: Object as PropType<{ xxx: xxx }>
  } */
} as const

export type LoadingBarProps = ExtractPropTypes<typeof loadingBarProps>
