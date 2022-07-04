import sass from 'sass'
import { writeFileSync, readdirSync, statSync, existsSync, mkdirSync, appendFileSync } from 'fs'
import { resolve, extname, basename } from 'path'
import { execSync } from 'child_process'
import { green } from 'kolorist'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'
const distPath = resolve(__dirname, '../../dist')
const promiseuiPath = resolve(__dirname, '../../promiseui')
// sass.compileAsync()

const transformScss = (filePath: string) => {
  const css = sass.compile(filePath).css
  return postcss([autoprefixer]).process(css, { from: undefined }).css
}

const excludes = ['styles', 'styles-var', 'theme']
const readComponentScssFileRec = (path: string) => {
  for (const file of readdirSync(path)) {
    const filePath = resolve(path, file)
    const fileStat = statSync(filePath)
    if (fileStat.isDirectory() && !excludes.includes(file)) {
      readComponentScssFileRec(filePath)
    } else {
      if (extname(file) === '.scss') {
        const dirName = basename(resolve(path, '../'))
        const stylePath = resolve(distPath, 'styles')
        if (!existsSync(stylePath)) {
          mkdirSync(stylePath)
        }
        writeFileSync(resolve(distPath, 'styles', dirName + '.css'), sass.compile(filePath, {}).css)
        console.log(green(`${dirName}.css finish`))
      }
    }
  }
}
const readSharedCompoentScssFileRec = (path: string) => {
  for (const file of readdirSync(path)) {
    const filePath = resolve(path, file)
    const fileStat = statSync(filePath)
    if (fileStat.isDirectory()) {
      readSharedCompoentScssFileRec(filePath)
    } else {
      if (extname(file) === '.scss') {
        //shard css
        appendFileSync(resolve(distPath, 'base.css'), transformScss(filePath))
      }
    }
  }
}
const autoGeneratorVolarDts = () => {
  // 生成 volar 提示
  const excludes = ['loadingBar', 'shared', 'theme']
  const filenames = readdirSync(resolve(distPath, 'promiseui')).filter((file) => {
    return !excludes.includes(file) && statSync(resolve(distPath, 'promiseui', file)).isDirectory()
  })
  const dts = `
// Auto generated component declarations
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    ${filenames
      .map((name) => {
        const ComponentName = `${name.slice(0, 1).toUpperCase() + name.slice(1)}`
        return `P${ComponentName}: typeof import('./dist/promiseui')['${ComponentName}'];`
      })
      .join('\n\t\t')}
  }
}
export {}
    `
  writeFileSync(resolve(distPath, '../volar.d.ts'), dts)
}
export const buildLib = () => {
  console.log('开始打包...')
  execSync('yarn build', { stdio: 'inherit' })
  readComponentScssFileRec(promiseuiPath)
  //base css
  console.log(green('打包base css'))
  writeFileSync(
    resolve(distPath, 'base.css'),
    transformScss(resolve(promiseuiPath, 'styles/base.scss'))
  )
  console.log(green('打包内部组件css'))
  readSharedCompoentScssFileRec(resolve(promiseuiPath, 'shared', 'components'))
  autoGeneratorVolarDts()

  console.log(green('生成volar.d.ts'))

  console.log(green('打包完毕!'))
}
