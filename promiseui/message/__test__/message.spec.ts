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

  it('message unmount', async () => {
    // todo
    await Message({
      message: 'test'
    })
    expect(document.querySelector('.pui-message')).toBeFalsy()
  })
  it('closeShow', async () => {
    Message({
      message: 'test'
    })
    const el = document.querySelector('.pui-icon')
    expect(el).toBeTruthy()
  })
  it('type', async () => {
    Message({
      message: 'test',
      type: 'success'
    })
    const el = document.querySelector('.pui-message--success')
    expect(el).toBeTruthy()
  })
})
