import { defineComponent} from "vue";
import { Button, Space } from 'promiseui-vue'
export default defineComponent({
  setup() {
    return () => <Space>
      <Button>默认</Button>
      <Button type="primary">Primary</Button>
      <Button type="danger">Danger</Button>
      <Button type="info">Info</Button>
      <Button type="warning">Warning</Button>
      <Button type="success">Success</Button>
    </Space>
  }
})