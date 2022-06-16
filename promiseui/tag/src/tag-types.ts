import type { PropType, ExtractPropTypes } from 'vue'

export const tagProps = {
  /* test: {
    type: Object as PropType<{ xxx: xxx }>
  } */
} as const

export type TagProps = ExtractPropTypes<typeof tagProps>
