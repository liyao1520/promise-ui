import { coreName } from './utils'

export default function genTestTemplate(name) {
  return `\
import { mount } from '@vue/test-utils'
import { ${coreName(name)} } from '../index'

describe('${name} test', () => {
  it('${name} init render', async () => {
    \/\/ todo
  })
})
`
}
