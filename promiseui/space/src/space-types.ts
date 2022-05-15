import type { PropType, ExtractPropTypes } from 'vue'

export const spaceProps = {
  /* test: {
    type: Object as PropType<{ xxx: xxx }>
  } */
} as const

export type SpaceProps = ExtractPropTypes<typeof spaceProps>
