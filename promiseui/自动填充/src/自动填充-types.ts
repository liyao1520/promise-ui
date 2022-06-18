import type { PropType, ExtractPropTypes } from 'vue'

export const 自动填充Props = {
  /* test: {
    type: Object as PropType<{ xxx: xxx }>
  } */
} as const

export type 自动填充Props = ExtractPropTypes<typeof 自动填充Props>
