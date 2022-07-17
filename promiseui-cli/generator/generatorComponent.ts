import { resolve } from 'path'
import fs from 'fs/promises'
import { existsSync } from 'fs'
import { red } from 'kolorist'
import genCoreTemplate from '../templates/component'
import genStyleTemplate from '../templates/scss'
import genTypesTemplate from '../templates/types'
import genIndexTemplate from '../templates'
import genTestTemplate from '../templates/component-test'
import { coreName } from '../templates/utils'

interface IWriteFileOptions {
  encoding: 'utf-8'
}
const writeFileOptions: IWriteFileOptions = { encoding: 'utf-8' }
export default async function generatorComponent(info: {
  name: string
  category: string
  title: string
}) {
  const { name, category, title } = info
  const rootDir = process.cwd()
  const componentDir = resolve(rootDir, 'promiseui', name)
  const testDir = resolve(componentDir, '__test__')
  const srcDir = resolve(componentDir, 'src')
  const markdwonDir = resolve(rootDir, 'docs/components/' + name)
  // 判断是否有目录
  if (existsSync(componentDir)) {
    console.log(red(`目录: ${componentDir} 已经存在!`))
    return
  }
  // 创建组件dir
  await fs.mkdir(componentDir)
  //创建单元测试__test__
  await fs.mkdir(testDir)
  //创建src
  await fs.mkdir(srcDir)
  // 创建组件文档
  await fs.mkdir(markdwonDir)
  // 创建测试文件
  await fs.writeFile(resolve(testDir, `${name}.spec.ts`), genTestTemplate(name), writeFileOptions)
  //创建index.ts文件
  await fs.writeFile(resolve(componentDir, 'index.ts'), genIndexTemplate(info), writeFileOptions)
  //创建tsx组件
  await fs.writeFile(resolve(srcDir, `${name}.tsx`), genCoreTemplate(name), writeFileOptions)
  //创建scss文件
  await fs.writeFile(resolve(srcDir, 'index.scss'), genStyleTemplate(name), writeFileOptions)
  // 创建 ${name}-types文件
  await fs.writeFile(resolve(srcDir, `${name}-types.ts`), genTypesTemplate(name), writeFileOptions)
  // 创建 md 文档文件
  await fs.writeFile(
    resolve(markdwonDir, `index.md`),
    `# ${coreName(name)} ${title}`,
    writeFileOptions
  )
  //  修改 sidebar.json
  const res = await fs.readFile(resolve(rootDir, 'docs/.vitepress/sidebar.json'), 'utf-8')
  const json = JSON.parse(res)
  const sidebarItem = json['/'].find((item: { text: string }) => item.text === category)
  const config = {
    text: `${coreName(name)} ${title}`,
    link: `/components/${name}/`
  }
  interface ISidebarItem {
    text: string
    items?: ISidebarItem[]
  }
  json['/'].forEach((item: ISidebarItem) => {
    if (Array.isArray(item.items)) {
      item.items.sort((a, b) => (a.text < b.text ? -1 : 1))
    }
  })

  sidebarItem.items = sidebarItem.items ? [...sidebarItem.items, config] : [config]
  await fs.writeFile(
    resolve(rootDir, 'docs/.vitepress/sidebar.json'),
    JSON.stringify(json),
    writeFileOptions
  )
}
