import { mount } from '@vue/test-utils'
import { nextTick, ref } from 'vue'

import { Overlay } from '../index'

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

    const wraper = mount(Overlay, {
      props: {
        modelValue: false
      } as any
    })
    expect(document.body.querySelector('.pui-overlay')).toBeFalsy()
    await wraper.setProps({
      modelValue: true
    })
    await nextTick()
    expect(document.body.querySelector('.pui-overlay')).toBeTruthy()
    await wraper.unmount()
  })
  it('origin', async () => {
    const isShow = ref(false)
    mount({
      setup() {
        return () => (
          <Overlay v-model={isShow.value} origin={origin}>
            test
          </Overlay>
        )
      }
    })
    expect(document.body.querySelector('.pui-overlay')).toBeFalsy()
    isShow.value = true
    await nextTick()
    const overlay = document.body.querySelector('.pui-overlay')
    expect(overlay).toBeTruthy()
    expect(overlay?.textContent).toBe('test')
  })
})
