# Checkbox 多选框

### 基础用法

简单的 checkbox

:::demo

```vue
<template>
  <p-space>
    <p-checkbox v-model="checked" label="多选框" @change="onChange" />
    <p-checkbox label="多选框" :disabled="disabled" @change="onChange" />
    <p-switch v-model="disabled" />
  </p-space>
</template>
<script setup>
  import { ref } from 'vue'
  import { Message } from 'promiseui-vue'
  const checked = ref(true)
  const disabled = ref(true)
  const onChange = (value) => {
    Message.success(`change value: ${value}`)
  }
</script>
```

:::

### 选项组

`checkbox-group` `v-model` 需要绑定一个数组,值为 所有选中的 `checkbox` 的 `value`

:::demo

```vue
<template>
  <p-checkbox-group v-model="checked" @change="onChange">
    <p-checkbox label="Apple" value="Apple" />
    <p-checkbox label="Pear" value="Pear" />
    <p-checkbox label="Orange" value="Orange" />
  </p-checkbox-group>
</template>
<script setup>
  import { ref } from 'vue'
  import { Message } from 'promiseui-vue'
  const checked = ref(['Apple'])
  const onChange = (values) => {
    Message.success(`change value: ${JSON.stringify(values)}`)
  }
</script>
```

:::

### 部分选中

在实现全选效果时，你可能会用到 `indeterminate` 属性

:::demo

```vue
<template>
  <p-checkbox
    v-model="checkAll"
    label="Check all"
    :indeterminate="indeterminate"
    @click="onClick"
  />
  <br />
  <br />
  <p-checkbox-group v-model="checkedList">
    <p-checkbox label="Apple" value="Apple" />
    <p-checkbox label="Pear" value="Pear" />
    <p-checkbox label="Orange" value="Orange" />
  </p-checkbox-group>
</template>
<script setup>
  import { ref, watch } from 'vue'
  const options = ['Apple', 'Pear', 'Orange']
  const checkedList = ref(['Apple', 'Pear'])
  const checkAll = ref(false)
  const indeterminate = ref(true)
  const onClick = () => {
    indeterminate.value = false
    checkedList.value = checkAll.value ? options : []
  }
  watch(checkedList, (values) => {
    const len1 = values.length
    const len2 = options.length
    indeterminate.value = len1 !== 0 && len1 < len2
    checkAll.value = len1 === len2
  })
</script>

<style></style>
```

:::

### 尺寸

:::demo

```vue
<template>
  <p-checkbox-group v-model="checkedList" size="sm">
    <p-checkbox label="Apple" value="Apple" />
    <p-checkbox label="Pear" value="Pear" />
    <p-checkbox label="Orange" value="Orange" />
  </p-checkbox-group>
  <br />
  <br />
  <p-checkbox-group v-model="checkedList" size="md">
    <p-checkbox label="Apple" value="Apple" />
    <p-checkbox label="Pear" value="Pear" />
    <p-checkbox label="Orange" value="Orange" />
  </p-checkbox-group>
  <br />
  <br />
  <p-checkbox-group v-model="checkedList" size="lg">
    <p-checkbox label="Apple" value="Apple" />
    <p-checkbox label="Pear" value="Pear" />
    <p-checkbox label="Orange" value="Orange" />
  </p-checkbox-group>
</template>
<script setup>
  import { ref } from 'vue'
  import { Message } from 'promiseui-vue'
  const checkedList = ref(['Apple'])
</script>
```

:::
