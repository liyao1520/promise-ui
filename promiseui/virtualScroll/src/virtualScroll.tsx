import { computed, CSSProperties, defineComponent, onMounted, onUnmounted, ref } from 'vue'
import { RenderItemProps, virtualScrollProps, VirtualScrollProps } from './virtualScroll-types'

import './index.scss'
import { useNamespace } from '../../shared/hooks/use-namespace'
import { Message } from '../../message'
import Loading from '../../shared/components/loading'
import { Scrollbar } from '../../scrollbar'

export default defineComponent({
  name: 'PVirtualScroll',
  props: virtualScrollProps,
  emits: [],
  setup(props: VirtualScrollProps, { expose, slots }) {
    const scrollContainer = ref<HTMLDivElement | null>(null)
    const scrollbar$ = ref()
    const ns = useNamespace('virtualScroll')
    const containSize = ref(0)
    const visibleStartIndex = ref(0)
    const visibleEndIndex = computed(() => {
      const _endIndex = visibleStartIndex.value + containSize.value
      const allLen = props.listData.length
      if (_endIndex > allLen) {
        return allLen
      }
      return _endIndex
    })
    const realStartIndex = computed(() => {
      if (visibleStartIndex.value < containSize.value) {
        return 0
      } else {
        return visibleStartIndex.value - containSize.value
      }
    })
    const realEndIndex = computed(() => {
      const allLen = props.listData.length
      if (visibleEndIndex.value + containSize.value > allLen) {
        return allLen
      }
      return visibleEndIndex.value + containSize.value
    })
    const isLoadMore = ref(false)
    const containerStyles = computed<CSSProperties>(() => ({
      paddingTop: realStartIndex.value * props.itemHeight + 'px',
      paddingBottom: (props.listData.length - realEndIndex.value) * props.itemHeight + 'px',
      height: '100%'
    }))

    const showList = computed(() => {
      return props.listData.slice(realStartIndex.value, realEndIndex.value)
    })
    const getContainSize = () => {
      if (!scrollContainer.value) return (containSize.value = 0)

      containSize.value = Math.floor(scrollContainer.value.offsetHeight / props.itemHeight) + 2
    }
    let timer: number | null = null
    const handleScroll = async (e: Event) => {
      if (!scrollContainer.value) return
      if (timer) return
      timer = requestAnimationFrame(() => (timer = null))
      visibleStartIndex.value = Math.floor(scrollContainer.value.scrollTop / props.itemHeight)
      if (props.onLoadMore && !isLoadMore.value) {
        const target = e.target as HTMLElement
        console.log(target.scrollHeight, target.clientHeight + target.scrollTop)

        if (target.scrollHeight <= target.clientHeight + target.scrollTop + props.loadMoreOffset) {
          handleLoadMore()
        }
      }
    }
    const handleLoadMore = async () => {
      if (typeof props.onLoadMore === 'function') {
        isLoadMore.value = true
        try {
          const message = await props.onLoadMore()
          if (message) Message.success(message)
          isLoadMore.value = false
        } catch (err) {
          if (typeof err === 'string') {
            Message.error(err)
          } else {
            Message.error((err as Error).message)
          }
          isLoadMore.value = false
          console.error(err)
        }
      }
    }
    onMounted(() => {
      scrollContainer.value = scrollbar$.value.getEl()
      getContainSize()
      window.addEventListener('resize', getContainSize)
      window.addEventListener('orientationchange', getContainSize)
    })
    onUnmounted(() => {
      window.removeEventListener('resize', getContainSize)
      window.removeEventListener('orientationchange', getContainSize)
    })
    interface IScrollToIndexOption {
      behavior: 'auto' | 'smooth'
      offset: number
    }
    const scrollToIndex = (index: number, option?: IScrollToIndexOption) => {
      const { behavior, offset } = option || { behavior: 'smooth', offset: 0 }
      scrollContainer.value?.scrollTo({
        top: index * props.itemHeight + offset,
        behavior
      })
    }
    expose({
      scrollTo: scrollContainer.value?.scrollTo || (() => {}),
      scrollBy: scrollContainer.value?.scrollBy || (() => {}),
      scrollToIndex,
      scrollToItem(
        findItemFn: (value: any, index: number, obj: any[]) => unknown,
        option?: IScrollToIndexOption
      ) {
        const index = props.listData.findIndex(findItemFn)
        if (index === -1) return
        scrollToIndex(index, option)
      }
    })
    const handleItemStyle = (renderItemProps: RenderItemProps<unknown>) => {
      if (typeof props.itemStyle === 'function') {
        return props.itemStyle(renderItemProps)
      } else {
        return props.itemStyle || {}
      }
    }
    const handleItemClass = (renderItemProps: RenderItemProps<unknown>) => {
      if (typeof props.itemClass === 'function') {
        return props.itemClass(renderItemProps)
      } else {
        return props.itemClass
      }
    }
    const renderList = () => {
      return showList.value.map((row, index, rows) => {
        return (
          <li
            key={props.itemKey ? (row as any)[props.itemKey] : index}
            style={[handleItemStyle({ row, index, rows }), { height: props.itemHeight + 'px' }]}
            class={handleItemClass({ row, index, rows })}
          >
            {slots.item?.({
              row,
              index,
              rows
            })}
          </li>
        )
      })
    }

    return () => (
      <Scrollbar
        ref={scrollbar$}
        class={ns.b()}
        onNativeScroll={handleScroll}
        height={props.wrapHeight + 'px'}
      >
        <ul style={containerStyles.value}>{renderList()}</ul>
        {isLoadMore.value && (
          <div class={ns.e('load-more')}>
            <span>Loading</span>
            <Loading />
          </div>
        )}
      </Scrollbar>
    )
  }
})
