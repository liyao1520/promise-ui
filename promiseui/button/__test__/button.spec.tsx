
import { mount } from '@vue/test-utils'
import { Button } from '../index'

describe('button test', () => {
  it('button init render', () => {
    // todo
    const wrapper = mount({
      setup() {
        return () => <Button>foo</Button>
      }
    })
    const btn = wrapper.find('.pui-button')
    expect(btn.exists()).toBeTruthy()
    expect(btn.text()).toBe('foo')
  })
  it('type', () => {
    const wrapper = mount({
      setup() {
        return () => <Button type="primary">foo</Button>
      }
    })
    const btn = wrapper.find('.pui-button')

    expect(btn.classes()).toContain('pui-button--primary')
  })
  it('size', () => {
    const wrapper = mount({
      setup() {
        return () => <Button size="xs">foo</Button>
      }
    })
    const btn = wrapper.find('.pui-button')
    expect(btn.classes()).toContain('pui-button--xs')
  })
  it('click', async () => {
    const onClick = jest.fn(() => {})
    const wrapper = mount({
      setup() {
        return () => <Button onClick={onClick}>foo</Button>
      }
    })
    await wrapper.find('.pui-button').trigger('click')
    expect(onClick).toBeCalled()
  })
  it('disabled', async () => {
    const onClick = jest.fn(() => {})
    const wrapper = mount({
      setup() {
        return () => (
          <Button disabled onClick={onClick}>
            foo
          </Button>
        )
      }
    })
    const btn = wrapper.find('.pui-button')
    expect(btn.attributes()).toHaveProperty('disabled')
    await btn.trigger('click')
    expect(onClick).not.toBeCalled()
  })

  it('fillMode', async () => {
    const wrapper = mount({
      setup() {
        return () => <Button fillMode="outline">foo</Button>
      }
    })
    const btn = wrapper.find('.pui-button')
    expect(btn.classes()).toContain('pui-button--outline')
  })
})
