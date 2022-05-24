import { mount } from '@vue/test-utils'
import { Message } from '../index'

describe('message test', () => {
  it('message init render', async () => {
    // todo
    Message({
      message: 'test'
    })
    const el = document.querySelector('.pui-message')
    expect(el).toBeTruthy()
    expect(el?.textContent).toContain('test')
  })

  it('message init render', async () => {
    // todo
    await Message({
      message: 'test'
    })
    expect(document.querySelector('.pui-message')).toBeFalsy()
  })
})
