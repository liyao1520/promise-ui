# Tabs 标签页

### 基础用法

`v-model` 控制 tabs 显示 , `animated`控制是否开启动画

:::demo

```vue
<template>
  <p-tabs v-model="activeName" animated @change="handleChange">
    <p-tab-pane label="用户管理" name="first">用户管理</p-tab-pane>
    <p-tab-pane label="配置管理" name="second">配置管理</p-tab-pane>
    <p-tab-pane label="角色管理" name="third">角色管理</p-tab-pane>
    <p-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</p-tab-pane>
  </p-tabs>
</template>
<script setup>
  import { ref } from 'vue'
  import { Message } from 'promiseui'
  const activeName = ref('first')
  const handleChange = (name) => {
    Message.success(`${name} click`)
  }
</script>
```

:::

### 卡片类型

设定 `type="card"`

:::demo

```vue
<template>
  <p-tabs v-model="activeName" type="card" animated>
    <p-tab-pane label="用户管理" name="first">用户管理</p-tab-pane>
    <p-tab-pane label="配置管理" name="second">配置管理</p-tab-pane>
    <p-tab-pane label="角色管理" name="third">角色管理</p-tab-pane>
    <p-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</p-tab-pane>
  </p-tabs>
</template>
<script setup>
  import { ref } from 'vue'
  import { Message } from 'promiseui'
  const activeName = ref('first')
</script>
```

:::

### 可编辑卡片类型

设定 `type="editable-card"`

:::demo column

```vue
<template>
  <p-tabs v-model="current" type="editable-card" @close="close" @add-tab-pane="addTabPane">
    <p-tab-pane v-for="item in panels" :key="item" :label="'Tab' + item" :name="item">
      {{ 'content' + item }}
    </p-tab-pane>
  </p-tabs>
</template>
<script setup>
  import { ref } from 'vue'
  import { Message } from 'promiseui'
  const panels = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  const current = ref(1)

  const close = (name) => {
    if (panels.value.length === 1) return Message.warning('最后一个了,别删了!')

    const index = panels.value.findIndex((item) => name === item)
    panels.value.splice(index, 1)
    Message.success(`Tab${name}已删除`)
    if (current.value === name) {
      if (index === panels.value.length) {
        current.value = panels.value[0]
      } else {
        current.value = panels.value[index]
      }
    }
  }
  const addTabPane = () => {
    panels.value.push(panels.value[panels.value.length - 1] + 1)
  }
</script>
```

:::

### 是否可关闭

`type` 为 `editable-card` 时 , `tab-pane`设置`closable `控制关闭

:::demo column

```vue
<template>
  <p-tabs v-model="current" type="editable-card" @close="close" @add-tab-pane="addTabPane">
    <p-tab-pane
      v-for="item in panels"
      :key="item"
      :label="'Tab' + item"
      :name="item"
      :closable="item % 2 === 0"
    >
      {{ 'content' + item }}
    </p-tab-pane>
  </p-tabs>
</template>
<script setup>
  import { ref } from 'vue'
  import { Message } from 'promiseui'
  const panels = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  const current = ref(1)

  const close = (name) => {
    const index = panels.value.findIndex((item) => name === item)
    panels.value.splice(index, 1)
    Message.success(`Tab${name}已删除`)
    if (current.value === name) {
      if (index === panels.value.length) {
        current.value = panels.value[0]
      } else {
        current.value = panels.value[index]
      }
    }
  }
  const addTabPane = () => {
    panels.value.push(panels.value[panels.value.length - 1] + 1)
  }
</script>
```

:::

### 对齐方式

设置 `justifyContent`

:::demo

```vue
<template>
  <p-tabs v-model="activeName" justifyContent="flex-start">
    <p-tab-pane label="Tab1" name="first">Tab1 content</p-tab-pane>
    <p-tab-pane label="Tab2" name="second">Tab2 content</p-tab-pane>
    <p-tab-pane label="Tab3" name="third">Tab3 content</p-tab-pane>
  </p-tabs>
  <br />
  <p-tabs v-model="activeName" justifyContent="center">
    <p-tab-pane label="Tab1" name="first">Tab1 content</p-tab-pane>
    <p-tab-pane label="Tab2" name="second">Tab2 content</p-tab-pane>
    <p-tab-pane label="Tab3" name="third">Tab3 content</p-tab-pane>
  </p-tabs>
  <br />
  <p-tabs v-model="activeName" justifyContent="flex-end">
    <p-tab-pane label="Tab1" name="first">Tab1 content</p-tab-pane>
    <p-tab-pane label="Tab2" name="second">Tab2 content</p-tab-pane>
    <p-tab-pane label="Tab3" name="third">Tab3 content</p-tab-pane>
  </p-tabs>
  <br />
  <p-tabs v-model="activeName" justifyContent="space-around">
    <p-tab-pane label="Tab1" name="first">Tab1 content</p-tab-pane>
    <p-tab-pane label="Tab2" name="second">Tab2 content</p-tab-pane>
    <p-tab-pane label="Tab3" name="third">Tab3 content</p-tab-pane>
  </p-tabs>
  <br />
  <p-tabs v-model="activeName" justifyContent="space-between">
    <p-tab-pane label="Tab1" name="first">Tab1 content</p-tab-pane>
    <p-tab-pane label="Tab2" name="second">Tab2 content</p-tab-pane>
    <p-tab-pane label="Tab3" name="third">Tab3 content</p-tab-pane>
  </p-tabs>
</template>
<script setup>
  import { ref } from 'vue'
  import { Message } from 'promiseui'
  const activeName = ref('first')
</script>
```

:::

### 离开守卫

` @before-leave` 可接收两个参数分别为 `"to" name` 和 `"from" name`

你可以通过返回值延迟或阻止 `Tab` 切换。

:::demo

```vue
<template>
  <p-tabs v-model="tabPane" @before-leave="BeforeLeave">
    <p-tab-pane label="不能进" name="one">123</p-tab-pane>
    <p-tab-pane label="可以进" name="two">456</p-tab-pane>
    <p-tab-pane label="等1s" name="three">789</p-tab-pane>
  </p-tabs>
</template>
<script setup>
  import { ref } from 'vue'
  import { Message } from 'promiseui'
  const tabPane = ref('two')
  const BeforeLeave = (name, oldName) => {
    switch (name) {
      case 'one':
        Message.error('不让进')
        return false
      case 'two':
        Message.success('随便进')
        return true
      case 'three':
        Message.warning('一会进')
        return new Promise((resolve) =>
          setTimeout(() => {
            resolve(true)
          }, 1000)
        )
    }
  }
</script>
```

:::
