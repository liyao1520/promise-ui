import { computed, defineComponent, onMounted, ref, withModifiers } from 'vue'
import { scrollbarProps, ScrollbarProps } from './scrollbar-types'

import './index.scss'
import { useNamespace } from '../../shared/hooks/use-namespace'
import getScrollbarWidth from '../../shared/utils/getScrollbarWidth'
import { useMutationObserver, useResizeObserver } from '@vueuse/core'
import Scrollbar from './scroll-bar'
// 实现原理:
/**
 * 以y滚动为例子
 * 1. 获取节点的scrollHeight 和 clientHeight ,heightRatio = scrollHeight / clientHeight 得到高度比
 * 2. 通过 heightRatio 可以得到 scrollbar 的高度 height = `${heightRatio*100}%`
 * 3. 监听滚动事件,当滚动时需要动态改变scrollbar的 位置
 * 4. scrollYRatio.value = el.scrollTop / el.scrollHeight
 * 5. 滚动条的top值应该为`${scrollYRatio*100}%`
 * 6. 当按下滚动条时,window监听mousemove和moseup事件,
 * 7. mouseup 用于卸载 mousemove 事件
 * 8. mousemove 用于获取前后两次的PageY值,根据这两个值的差值,得到 Offset
 * 9. Offset / heightRatio 得到需要真实的滚动距离,
 * 10. scrollTop += offset / heightRatio 动态修改scrollTop
 * 11. scrollTop修改触发scroll 事件,滚动条动态改变位置
 * 12. 其他细节 :
 *     1. 通过wrap设置overflow:hidden,view容器 width: calc(100% + scrollbarWidth); 隐藏滚动条
 *     2. 如果 heightRatio === 1 说明没有超出容器,不需要滚动条,把自定义滚动条隐藏掉
 */
export default defineComponent({
  name: 'PScrollbar',
  props: scrollbarProps,
  emits: ['scroll', 'native-scroll'],
  setup(props: ScrollbarProps, { slots, expose, emit }) {
    const ns = useNamespace('scrollbar')
    //-------控制滚动条的显示--------
    const isEnter = ref(false)
    const isMouseDown = ref(false)
    //--------------
    const viewEl = ref<HTMLElement | null>(null)
    // clientHeight 占 scrollHeight 的比例
    const heightRatio = ref(0)
    const widthRatio = ref(0)
    // scrollTop 占 scrollHeight 的比例
    const scrollYRatio = ref(0)
    const scrollXRatio = ref(0)
    const handleHeightAndWidthRatio = () => {
      const el = viewEl.value as HTMLElement
      heightRatio.value = el.clientHeight / el.scrollHeight
      widthRatio.value = el.clientWidth / el.scrollWidth
    }
    onMounted(handleHeightAndWidthRatio)
    useResizeObserver(viewEl, handleHeightAndWidthRatio)
    useMutationObserver(viewEl, handleHeightAndWidthRatio, {
      subtree: true,
      childList: true
    })

    let prev = 0

    const onScroll = (e: MouseEvent) => {
      emit('native-scroll', e)
      const now = Date.now()
      if (now - prev < 16.7) return

      const el = viewEl.value as HTMLElement
      scrollYRatio.value = el.scrollTop / el.scrollHeight
      scrollXRatio.value = el.scrollLeft / el.scrollWidth
      emit('scroll', e)
      prev = now
    }
    // 给 bar 提供的方法,通过计算先后两次的pageY计算得到偏移量offset,
    // offset / heightRatio 得到对应因该滚动的真实距离
    // 通过 scrollTop += offset / heightRatio 修改scrollTop值,从而触发scroll事件
    // scroll事件修改scrollRatio,bar位置发生改变改变
    const scrollByOffset = (offset: number, isY: boolean) => {
      if (!viewEl.value) return
      if (isY) {
        viewEl.value.scrollTop += offset / heightRatio.value
      } else {
        viewEl.value.scrollLeft += offset / widthRatio.value
      }
    }
    const isShowYBar = computed(() => {
      if (heightRatio.value >= 1) return false
      if (props.always) {
        return true
      } else {
        return isEnter.value || isMouseDown.value
      }
    })
    const isShowXBar = computed(() => {
      if (widthRatio.value >= 1) return false
      if (props.always) {
        return true
      } else {
        return isEnter.value || isMouseDown.value
      }
    })

    const wrapClasses = computed(() => [ns.e('wrap'), props.wrapClass])
    const viewClasses = computed(() => [ns.e('view'), props.viewClass])
    const wrapStyles = computed(() => [
      {
        height: props.height,
        width: props.width,
        maxHeight: props.maxHeight
      },
      props.wrapStyle
    ])
    const viewStyles = computed(() => [
      {
        height: '100%',
        width: '100%',
        maxHeight: props.maxHeight
      },
      props.viewStyle
    ])

    const scrollTo = (options?: ScrollToOptions | undefined) => {
      viewEl.value && viewEl.value.scrollTo(options)
    }
    const scrollBy = (options?: ScrollToOptions | undefined) => {
      viewEl.value && viewEl.value.scrollBy(options)
    }

    expose({
      scrollTo,
      scrollBy,
      getEl() {
        return viewEl.value
      }
    })
    return () => {
      return (
        <div
          class={wrapClasses.value}
          style={wrapStyles.value}
          onMouseenter={() => (isEnter.value = true)}
          onMouseleave={() => (isEnter.value = false)}
        >
          <div
            class={viewClasses.value}
            style={viewStyles.value}
            ref={viewEl}
            onScroll={withModifiers(onScroll, ['passive'])}
          >
            {slots.default?.()}
          </div>
          <Scrollbar
            minSize={props.minSize}
            heightRatio={heightRatio.value}
            widthRatio={widthRatio.value}
            scrollYRatio={scrollYRatio.value}
            scrollXRatio={scrollXRatio.value}
            scrollByOffset={scrollByOffset}
            isShowXBar={isShowXBar.value}
            isShowYBar={isShowYBar.value}
            onMousedown={() => (isMouseDown.value = true)}
            onMouseup={() => (isMouseDown.value = false)}
          />
        </div>
      )
    }
  }
})
