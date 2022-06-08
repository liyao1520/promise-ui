# Radio 单选框

### 基础用法

要使用 Radio 组件，只需要设置 `v-model` 绑定变量 , label 可以是 `String`、`Number` 或 `Boolean`。

:::demo

```vue
<template>
  <p-space>
    <p-radio v-model="value" label="Option1" value="Option1" />
    <p-radio v-model="value" label="Option2" value="Option2" :disabled="disabled" />
    <p-switch v-model="disabled" />
  </p-space>
</template>
<script setup>
  import { ref } from 'vue'
  const value = ref(false)
  const disabled = ref(true)
</script>
```

:::

### 选项组

:::demo

```vue
<template>
  <div>
    <p-radio-group v-model="value" name="fruits" @change="onChange">
      <p-radio v-for="item in fruits" :key="item.value" :value="item.value">
        {{ item.label }}</p-radio
      >
    </p-radio-group>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { Message } from 'promiseui'
  const fruits = ref([
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' }
  ])
  const value = ref('Apple')
  const onChange = (value) => {
    Message.success(`change value: ${value}`)
  }
</script>
```

:::

### 按钮风格

只需要把 `p-radio` 元素换成 `p-radio-button` 元素即可，此外，还提供了 size 属性。

:::demo

```vue
<template>
  <div>
    <p-radio-group v-model="value" name="fruits" btnSize="sm">
      <p-radio-button v-for="item in fruits" :key="item.value" :value="item.value">
        {{ item.label }}</p-radio-button
      >
    </p-radio-group>
    <br />
    <br />
    <p-radio-group v-model="value" name="fruits" btnSize="md" @change="onChange">
      <p-radio-button v-for="item in fruits" :key="item.value" :value="item.value">
        {{ item.label }}</p-radio-button
      >
    </p-radio-group>
    <br />
    <br />
    <p-radio-group v-model="value" name="fruits" btnSize="lg">
      <p-radio-button v-for="item in fruits" :key="item.value" :value="item.value">
        {{ item.label }}</p-radio-button
      >
    </p-radio-group>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { Message } from 'promiseui'
  const fruits = ref([
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' }
  ])
  const value = ref('Apple')
  const onChange = (value) => {
    Message.success(`change value: ${value}`)
  }
</script>
```

:::
