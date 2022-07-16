# DatePicker 日期选择器 <ClientOnly><p-tag type='warning' size='lg'>Beta</p-tag> </ClientOnly>

## 基本使用

:::demo

```vue
<template>
  <p-date-picker v-model="date" placeholder="请选择日期" />
</template>
<script setup>
  import { ref } from 'vue'
  const date = ref()
</script>
```

:::
