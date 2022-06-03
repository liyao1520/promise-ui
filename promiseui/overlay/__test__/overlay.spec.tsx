import { mount } from '@vue/test-utils'
import { nextTick, ref } from 'vue'

import { Overlay } from '../index'

// 测试有问题,跟实际不同

let origin: HTMLElement
describe('overlay test', () => {
  beforeEach(() => {
    const div = document.createElement('div')
    div.style.width = '100px'
    div.style.height = '100px'
    document.body.appendChild(div)
    origin = div
  })
  afterEach(() => {
    origin && document.body.removeChild(origin)
  })
  it('overlay init render', async () => {
    // todo
    const isVisible = ref(false)
    const wrapper = mount({
      setup() {
        return () => (
          <Overlay v-model={isVisible.value} origin={origin}>
            test
          </Overlay>
        )
      }
    })
    expect(document.body.querySelector('.pui-overlay')).toBeFalsy()
    isVisible.value = false
    await wrapper.unmount()
  })
  it('origin', async () => {
    const isShow = ref(false)
    const wrapper = mount({
      setup() {
        return () => (
          <Overlay v-model={isShow.value} origin={origin}>
            test
          </Overlay>
        )
      }
    })
    expect(wrapper.find('.pui-overlay').exists()).toBeFalsy()

    isShow.value = true
    await nextTick()
    await wrapper.unmount()
  })
})
