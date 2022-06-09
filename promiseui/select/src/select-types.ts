import type { PropType, ExtractPropTypes } from 'vue'

export const selectProps = {
  /* test: {
    type: Object as PropType<{ xxx: xxx }>
  } */
} as const

export type SelectProps = ExtractPropTypes<typeof selectProps>
