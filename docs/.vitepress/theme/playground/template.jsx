import { defineComponent, ref } from "vue";
import { Button } from 'promiseui-vue'
export default defineComponent({
  setup() {
    const msg = ref('hello jsx!')
    return () => <Button>{msg.value}</Button>
  }
})