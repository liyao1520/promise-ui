import { mount } from '@vue/test-utils'
import Button from '../src/button'

describe('button', () => {
  it('should render correctly', () => {
    const wrapper = mount({
      components: { Button },
      template: `
        <Button>test</Button>
      `
    })
    expect(wrapper.classes()).toContain('devui-button')
  })
})
