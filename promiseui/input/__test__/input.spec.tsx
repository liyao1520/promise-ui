import { mount } from '@vue/test-utils'

import { ref, nextTick } from 'vue'
import { Input } from '../index'
import { SearchSharp, ChatboxSharp } from '@vicons/ionicons5'
import { Icon } from '../../icon'
describe('input test', () => {
  it('input init render', async () => {
    // todo
    const wrapper = mount({
      setup() {
        return () => <Input />
      }
    })
    expect(wrapper.find('.pui-input').exists()).toBeTruthy()
  })
  it('size', () => {
    const wrapper = mount({
      setup() {
        return () => <Input size="lg" />
      }
    })
    expect(wrapper.classes()).toContain('pui-input--lg')
    expect(wrapper.find('input')).toBeTruthy()
  })

  it('v-model', async () => {
    const inputValue = ref('test')
    const wrapper = mount({
      template: `<PInput v-model="inputValue" />`,
      components: {
        PInput: Input
      },
      setup() {
        return {
          inputValue
        }
      }
    })
    const input = wrapper.find('input')
    expect(input.element.value).toBe('test')
    inputValue.value = 'hahaha'
    await nextTick()
    expect(input.element.value).toBe('hahaha')
    await input.setValue('abc')
    expect(input.element.value).toBe('abc')
  })
  it('disabled', async () => {
    const wrapper = mount({
      setup() {
        return () => <Input disabled />
      }
    })
    expect(wrapper.classes()).toContain('pui-input--disabled')
    expect(wrapper.find('input').attributes('disabled')).toBe('')
    await wrapper.setProps({
      disabled: false
    })
    expect(wrapper.find('input').attributes('disabled')).toBe(undefined)
  })
  it('clearable', async () => {
    const wrapper = mount({
      setup() {
        const test = ref('test')
        return () => <Input clearable v-model={test.value} />
      }
    })
    const clearBtn = wrapper.find('.pui-icon')
    const input = wrapper.find('input')
    expect(clearBtn).toBeTruthy()
    expect(input.element.value).toBe('test')
    await clearBtn.trigger('click')
    expect(input.element.value).toBe('')
  })
  it('showPassword', async () => {
    const wrapper = mount({
      setup() {
        return () => <Input showPassword />
      }
    })
    const input = wrapper.find('input')
    const icon = wrapper.find('.pui-icon')
    expect(input.attributes('type')).toBe('password')
    expect(icon).toBeTruthy()
    await icon.trigger('click')
    expect(input.attributes('type')).toBe('text')
    await icon.trigger('click')
    expect(input.attributes('type')).toBe('password')
  })
  it('slot prefix suffix', async () => {
    const wrapper = mount({
      template: `
      <p-input>
        <template #prefix>
          <p-icon :component="SearchSharp" size="16" />
        </template>
        <template #suffix>
         <p-icon :component="ChatboxSharp" size="16" />  
        </template>
      </p-input>
      `,
      components: {
        PInput: Input,
        PIcon: Icon
      },
      setup() {
        return {
          SearchSharp,
          ChatboxSharp
        }
      }
    })
    expect(wrapper.findAll('.pui-icon').length).toBe(2)
    expect(wrapper.find('.pui-input__prefix')).toBeTruthy()
    expect(wrapper.find('.pui-input__suffix')).toBeTruthy()
  })
  it('slot append prepend', () => {
    const wrapper = mount({
      template: `
      <p-input>
        <template #prepend>www.</template>
        <template #append>.com</template>
      </p-input>
      `,
      components: {
        PInput: Input,
        PIcon: Icon
      },
      setup() {
        return {
          SearchSharp,
          ChatboxSharp
        }
      }
    })
    const prepend = wrapper.find('.pui-input__prepend')
    const append = wrapper.find('.pui-input__append')
    expect(prepend).toBeTruthy()
    expect(append).toBeTruthy()
    expect(prepend.text()).toContain('www.')
    expect(append.text()).toContain('.com')
  })
  it('placeholder', () => {
    const wrapper = mount({
      setup() {
        return () => <Input placeholder="请输入" />
      }
    })
    expect(wrapper.find('input').attributes('placeholder')).toBe('请输入')
  })
  it('focus', async () => {
    const wrapper = mount(Input)
    const input = wrapper.find('input')

    expect(wrapper.classes()).not.toContain('pui-input--focus')
    await input.trigger('focus')
    expect(wrapper.classes()).toContain('pui-input--focus')
    await input.trigger('blur')
    expect(wrapper.classes()).not.toContain('pui-input--focus')
  })
})
