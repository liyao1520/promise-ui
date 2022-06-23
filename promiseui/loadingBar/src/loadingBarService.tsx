import { createApp, h, ref, render } from 'vue'
import LoadingBar from './loadingBar'
let hasMemo = false
let start: () => void
let finish: () => void
let error: () => void

const initLoadingBar = () => {
  if (hasMemo) {
    return { start, finish, error }
  }
  const show = ref(false)
  const isError = ref(false)
  const app = createApp({
    setup() {
      return () => <LoadingBar show={show.value} isError={isError.value} />
    }
  })
  const wrapper = document.createElement('div')
  app.mount(wrapper)
  wrapper.firstChild && document.body.appendChild(wrapper.firstChild)
  start = () => {
    isError.value = false
    show.value = true
  }
  finish = () => {
    show.value = false
  }
  error = () => {
    isError.value = true
    finish()
  }
  hasMemo = true
  return {
    start,
    finish,
    error
  }
}

const useLoadingBar = () => {
  const { start, finish, error } = initLoadingBar()

  return {
    start,
    finish,
    error
  }
}
export default useLoadingBar
