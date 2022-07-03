# Loading Bar 加载条

### 基础用法

:::demo

```vue
<template>
  <p-space>
    <p-button @click="start">开始</p-button>
    <p-button @click="finish" :disabled="disabled">结束</p-button>
    <p-button @click="error">报个错</p-button>
  </p-space>
</template>

<script setup>
  import { useLoadingBar } from 'promiseui-vue'
  import { ref } from 'vue'
  const disabled = ref(true)
  const loadingbar = useLoadingBar()
  const start = () => {
    loadingbar.start()
    disabled.value = false
  }
  const error = () => {
    loadingbar.error()
    disabled.value = true
  }
  const finish = () => {
    loadingbar.finish()
    disabled.value = true
  }
</script>
```

:::
