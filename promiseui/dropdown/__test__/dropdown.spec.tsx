import { mount } from '@vue/test-utils'

import { Dropdown } from '../index'

describe('dropdown test', () => {
  it('dropdown init render', async () => {
    const wrapper = mount(Dropdown)
    expect(wrapper.find('.pui-dropdown')).toBeTruthy()
  })
  it('type', async () => {
    const wrapper1 = mount({
      render() {
        return (
          <Dropdown type="button">
            <span class="dropdown-test">按钮</span>
          </Dropdown>
        )
      }
    })

    expect(wrapper1.classes()).toContain('pui-dropdown')
    expect(wrapper1.find('.pui-dropdown__a').exists()).toBeFalsy()
    expect(wrapper1.find('.pui-dropdown__button-group').exists()).toBeTruthy()
    expect(wrapper1.find('.dropdown-test').exists()).toBeTruthy()

    const wrapper2 = mount({
      render() {
        return <Dropdown type="a">按钮</Dropdown>
      }
    })
    expect(wrapper2.find('.pui-dropdown__a').exists()).toBeTruthy()
    expect(wrapper2.find('.pui-dropdown__button-group').exists()).toBeFalsy()

    const wrapper3 = mount({
      render() {
        return (
          <Dropdown>
            <div class="dropdown-test"></div>
          </Dropdown>
        )
      }
    })
    expect(wrapper3.find('.pui-dropdown__a').exists()).toBeFalsy()
    expect(wrapper3.find('.pui-dropdown__button-group').exists()).toBeFalsy()
    expect(wrapper3.find('.dropdown-test').exists()).toBeTruthy()
  })
})
