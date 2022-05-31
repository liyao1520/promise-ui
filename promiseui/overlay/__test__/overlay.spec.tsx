import { mount } from '@vue/test-utils'

import { ref, nextTick } from 'vue'
import { Overlay } from '../index'

describe('overlay test', () => {
  it('overlay init render', async () => {
    // todo

    const div = document.createElement('div')
    const wraper = mount({
      data() {
        return {
          isShow: false
        }
      },
      render() {
        const { isShow } = this
        return () => <Overlay v-model={isShow} origin={div}></Overlay>
      }
    })

    expect(document.body.querySelector('.pui-overlay')).toBeFalsy()
    await wraper.setData({
      isShow: true
    })
  })
})
