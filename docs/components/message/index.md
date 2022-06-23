# Message 消息

### 基础用法

`函数式 Message` 和 `this.$message`

:::demo

```vue
<template>
  <PSpace>
    <PButton @click="click1">函数式Message</PButton>
    <PButton @click="click2">this.$message</PButton>
  </PSpace>
</template>
<script>
  import { Message } from 'promiseui'
  export default {
    setup() {
      const click1 = () => {
        Message({ message: '函数式Message' })
      }
      return {
        click1
      }
    },
    methods: {
      click2() {
        this.$message({ message: 'this.$message' })
      }
    }
  }
</script>
```

:::

### 不同状态

用来显示「成功、警告、消息、错误」类的操作反馈。

:::demo

```vue
<template>
  <PSpace>
    <PButton @click="click1">成功</PButton>
    <PButton @click="click2">警告</PButton>
    <PButton @click="click3">消息</PButton>
    <PButton @click="click4">错误</PButton>
    <PButton @click="click5">none</PButton>
  </PSpace>
</template>
<script setup>
  import { Message } from 'promiseui'
  const click1 = () =>
    Message({
      message: '成功信息',
      type: 'success'
    })
  const click2 = () =>
    Message({
      message: '警告信息',
      type: 'warning'
    })
  const click3 = () =>
    Message({
      message: '消息信息',
      type: 'info'
    })
  const click4 = () =>
    Message({
      message: '错误信息',
      type: 'error'
    })
  const click5 = () =>
    Message({
      message: 'none信息',
      type: 'none'
    })
</script>
```

:::

### 可关闭的

默认的 `Message` 是不可以被人工关闭的。 如果你需要手动关闭功能，你可以把 `showClose` 设置为 `true`

:::demo

```vue
<template>
  <PSpace>
    <PButton @click="click1">成功</PButton>
    <PButton @click="click2">警告</PButton>
    <PButton @click="click3">消息</PButton>
    <PButton @click="click4">错误</PButton>
    <PButton @click="click5">none</PButton>
  </PSpace>
</template>
<script setup>
  import { Message } from 'promiseui'
  const click1 = () =>
    Message({
      message: '成功信息',
      type: 'success',
      showClose: true
    })
  const click2 = () =>
    Message({
      message: '警告信息',
      type: 'warning',
      showClose: true
    })
  const click3 = () =>
    Message({
      message: '消息信息',
      type: 'info',
      showClose: true
    })
  const click4 = () =>
    Message({
      message: '错误信息',
      type: 'error',
      showClose: true
    })
  const click5 = () =>
    Message({
      message: 'none信息',
      type: 'none',
      showClose: true
    })
</script>
```

:::

### 自定义显示时长

可以设置`duration` 自定义显示时长 :::demo

:::demo

```vue
<template>
  <PSpace>
    <PButton @click="click1">10s后关闭</PButton>
    <PButton @click="click2">5s后关闭</PButton>
  </PSpace>
</template>
<script setup>
  import { Message } from 'promiseui'
  const click1 = () =>
    Message({
      message: '10s后关闭',
      type: 'success',
      duration: 10000
    })
  const click2 = () =>
    Message({
      message: '5s后关闭',
      type: 'success',
      duration: 5000
    })
</script>
```

:::

### 静态方法

可调用 `Message.success` `Message.error` 等方法

:::demo

```vue
<template>
  <PSpace>
    <PButton @click="click1">success</PButton>
    <PButton @click="click2">error</PButton>
  </PSpace>
</template>
<script setup>
  import { Message } from 'promiseui'
  const click1 = () =>
    Message.success('success', {
      duration: 5000,
      showClose: true
    })
  const click2 = () =>
    Message.error('error', {
      duration: 5000,
      showClose: true
    })
</script>
```

:::
