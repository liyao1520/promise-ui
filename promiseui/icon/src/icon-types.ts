import type { ExtractPropTypes, PropType } from 'vue'
import {} from '@vicons/utils'
export const iconProps = {
  size: {
    //图标大小
    type: [String, Number] as PropType<string | number>
  },
  color: {
    //图片颜色
    type: String
  },
  tag: { type: String } //要渲染为何种 HTML 标签
} as const

export type IconProps = ExtractPropTypes<typeof iconProps>
