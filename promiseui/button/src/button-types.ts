import type { PropType, ExtractPropTypes } from 'vue'

export const buttonProps = {
  /* test: {
    type: Object as PropType<{ xxx: xxx }>
  } */
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
