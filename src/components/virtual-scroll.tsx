import {
  computed,
  CSSProperties,
  defineComponent,
  onMounted,
  onUnmounted,
  ref,
  watchEffect,
  withModifiers
} from 'vue'

import './index.scss'
export default defineComponent({
  setup(props, { expose }) {
    const scrollContainer = ref<HTMLDivElement | null>(null)
    const list = []
    for (let i = 0; i < 42000; i++) {
      list[i] = i
    }
    const allList = ref(list)
    const oneHeight = ref(50)
    const containSize = ref(0)
    const visibleStartIndex = ref(0)
    const visibleEndIndex = computed(() => {
      const _endIndex = visibleStartIndex.value + containSize.value
      const allLen = allList.value.length
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
      const allLen = allList.value.length
      if (visibleEndIndex.value + containSize.value > allLen) {
        return allLen
      }
      return visibleEndIndex.value + containSize.value
    })
    const isRequestData = ref(false)
    const containerStyles = computed<CSSProperties>(() => ({
      paddingTop: realStartIndex.value * oneHeight.value + 'px',
      paddingBottom: (allList.value.length - realEndIndex.value) * oneHeight.value + 'px',
      height: '100%'
    }))
    watchEffect(() => {
      console.log(
        'visibleStartIndex:',
        visibleStartIndex.value,
        'visibleEndIndex:',
        visibleEndIndex.value
      )
      console.log(scrollContainer.value?.offsetHeight)
    })
    const showList = computed(() => {
      return allList.value.slice(realStartIndex.value, realEndIndex.value)
    })
    const getContainSize = () => {
      console.log('11111111111111')

      if (!scrollContainer.value) return (containSize.value = 0)
      containSize.value = Math.floor(scrollContainer.value.offsetHeight / oneHeight.value) + 2
      console.log(containSize.value)
    }
    let timer: number | null = null
    const handleScroll = (e: Event) => {
      if (timer) {
        return
      }
      timer = requestAnimationFrame(() => {
        timer = null
      })
      if (!scrollContainer.value) return
      visibleStartIndex.value = Math.floor(scrollContainer.value.scrollTop / oneHeight.value)
      if (
        visibleStartIndex.value + containSize.value > allList.value.length - 1 &&
        !isRequestData.value
      ) {
        console.log('滚动到了底部')
        isRequestData.value = true
        RequestData()
          .finally(() => (isRequestData.value = false))
          .then((res) => {
            allList.value.push(...res)
            console.log('新增数据')
          })
          .catch((e) => {
            throw e
          })
      }
    }
    const RequestData: () => Promise<any[]> = () =>
      new Promise((resolve) => {
        setTimeout(() => resolve([111, 2222, 3333]), 3000)
      })

    onMounted(() => {
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
        top: index * oneHeight.value + offset,
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
        const index = allList.value.findIndex(findItemFn)
        if (index === -1) return
        scrollToIndex(index, option)
      }
    })

    return () => (
      <div
        ref={scrollContainer}
        class="scroll-container"
        onScroll={withModifiers(handleScroll, ['passive'])}
      >
        <ul style={containerStyles.value}>
          {showList.value.map((i, j) => (
            <li key={j}>{i}</li>
          ))}
          {/* <span>上拉加载更多...</span> */}
        </ul>
      </div>
    )
  }
})
