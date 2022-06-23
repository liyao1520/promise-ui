import type { PropType, ExtractPropTypes } from 'vue'

export const tableProps = {
  /* test: {
    type: Object as PropType<{ xxx: xxx }>
  } */
} as const

export type TableProps = ExtractPropTypes<typeof tableProps>
