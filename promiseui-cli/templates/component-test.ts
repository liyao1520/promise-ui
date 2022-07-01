import { coreName } from './utils'

export default function genTestTemplate(name: string) {
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
