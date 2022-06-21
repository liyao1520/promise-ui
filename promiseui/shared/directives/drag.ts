import { Directive } from 'vue'
/**
 * 本指令,只适合在没有设置transform的元素上使用
 */
type IDargElement = HTMLElement & {
  __moveElement: HTMLElement
}
type IMoveElement = HTMLElement & {
  __dargElements?: IDargElement[]
}
interface IConfig {
  includes: string[]
  disabled?: boolean
}
let isKeyDown = false

let prevPageX = 0
let prevPageY = 0

const mousedownHandle = (e: MouseEvent) => {
  isKeyDown = true
  prevPageX = e.pageX
  prevPageY = e.pageY
}
const mouseupHandle = (e: MouseEvent) => {
  isKeyDown = false
}
const mousemoveHandlde = (e: MouseEvent) => {
  if (!isKeyDown) return
  const dargElement = (e.currentTarget as IDargElement).__moveElement
  const offsetX = e.pageX - prevPageX
  const offsetY = e.pageY - prevPageY

  const transfrom = dargElement.style.transform

  if (!transfrom) {
    dargElement.style.transform = `translate(${offsetX}px,${offsetY}px)`
  } else {
    dargElement.style.transform = transfrom.replace(
      /translate\((.*?)px\,(.*?)px\)/,
      (match, p1, p2) => {
        const x = Number(p1) + offsetX
        const y = Number(p2) + offsetY
        return `translate(${x}px,${y}px)`
      }
    )
  }

  prevPageX = e.pageX
  prevPageY = e.pageY
}

const addEvents = (el: IDargElement, moveEl: HTMLElement) => {
  // let prePosition: { left: number; top: number } = { left: 0, top: 0 }
  removeEvents(el)
  el.addEventListener('mousedown', mousedownHandle)
  el.addEventListener('mouseup', mouseupHandle)
  el.addEventListener('mousemove', mousemoveHandlde)
}
const removeEvents = (el: HTMLElement) => {
  el.removeEventListener('mousedown', mousedownHandle)
  el.removeEventListener('mouseup', mouseupHandle)
  el.removeEventListener('mousemove', mousemoveHandlde)
}

const handleDrag = (moveEl: any, value: any) => {
  const config: IConfig = value || { includes: [] }
  const includes = config.includes || []
  const inclueElements: Element[] = []
  for (const selector of includes) {
    const els = (moveEl as HTMLElement).querySelectorAll(selector)
    inclueElements.push(...Array.from(els))
  }

  for (const el of inclueElements) {
    ;(el as IDargElement).style.cursor = 'move'
    ;(el as IDargElement).__moveElement = moveEl
    ;(moveEl as IMoveElement).__dargElements
      ? (moveEl as IMoveElement).__dargElements?.push(el as IDargElement)
      : []
    addEvents(el as IDargElement, moveEl)
  }
}

const dragDirective: Directive = {
  mounted(moveEl, { value }) {
    const config: IConfig = value || { includes: [] }
    if (config.disabled) return
    handleDrag(moveEl, value)
  },
  updated(moveEl, { value }) {
    const config: IConfig = value || { includes: [] }
    if (config.disabled) return
    handleDrag(moveEl, value)
  },
  unmounted(moveEl: IMoveElement) {
    if (moveEl.__dargElements) {
      for (const dargEl of moveEl.__dargElements) {
        removeEvents(dargEl)
      }
    }
  }
}
export default dragDirective
