import type { Component, ExtractPropTypes, PropType } from 'vue'

export const iconProps = {
  size: {
    //图标大小
    type: [String, Number] as PropType<string | number>
  },
  color: {
    //图片颜色
    type: String
  },
  tag: { type: String }, //要渲染为何种 HTML 标签
  component: {
    type: Object as PropType<Component>
  }
} as const

export type IconProps = ExtractPropTypes<typeof iconProps>
