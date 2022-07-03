# Tag 标签

### 基础用法

:::demo

```vue
<template>
  <h4>它有不同的类型。</h4>
  <p-space>
    <p-tag>标签1</p-tag>
    <p-tag type="primary">标签2</p-tag>
    <p-tag type="success">标签3</p-tag>
    <p-tag type="danger">标签4</p-tag>
    <p-tag type="warning">标签5</p-tag>
    <p-tag type="info">标签6</p-tag>
  </p-space>
  <h4>禁用。</h4>
  <p-space>
    <p-tag disabled>标签1</p-tag>
    <p-tag type="primary" disabled>标签2</p-tag>
    <p-tag type="success" disabled>标签3</p-tag>
    <p-tag type="danger" disabled>标签4</p-tag>
    <p-tag type="warning" disabled>标签5</p-tag>
    <p-tag type="info" disabled>标签6</p-tag>
  </p-space>
</template>
```

:::

### 尺寸

:::demo

```vue
<template>
  <h4>它有不同的尺寸。</h4>
  <p-space>
    <p-tag size="sm">标签1</p-tag>
    <p-tag type="primary" size="sm">标签2</p-tag>
    <p-tag type="success" size="sm">标签3</p-tag>
    <p-tag type="danger" size="sm">标签4</p-tag>
    <p-tag type="warning" size="sm">标签5</p-tag>
    <p-tag type="info" size="sm">标签6</p-tag>
  </p-space>
  <p-space>
    <p-tag size="md">标签1</p-tag>
    <p-tag type="primary" size="md">标签2</p-tag>
    <p-tag type="success" size="md">标签3</p-tag>
    <p-tag type="danger" size="md">标签4</p-tag>
    <p-tag type="warning" size="md">标签5</p-tag>
    <p-tag type="info" size="md">标签6</p-tag>
  </p-space>
  <p-space>
    <p-tag size="lg">标签1</p-tag>
    <p-tag type="primary" size="lg">标签2</p-tag>
    <p-tag type="success" size="lg">标签3</p-tag>
    <p-tag type="danger" size="lg">标签4</p-tag>
    <p-tag type="warning" size="lg">标签5</p-tag>
    <p-tag type="info" size="lg">标签6</p-tag>
  </p-space>
</template>
```

:::

### 基础用法

:::demo

```vue
<template>
  <h4>可关闭的</h4>
  <p-space>
    <p-tag @close="handleClose">标签1</p-tag>
    <p-tag type="primary" @close="handleClose">标签2</p-tag>
    <p-tag type="success" @close="handleClose">标签3</p-tag>
    <p-tag type="danger" @close="handleClose">标签4</p-tag>
    <p-tag type="warning" @close="handleClose">标签5</p-tag>
    <p-tag type="info" @close="handleClose">标签6</p-tag>
  </p-space>
</template>
<script setup>
  import { Message } from 'promiseui-vue'
  const handleClose = () => {
    Message.info('tag close')
  }
</script>
```

:::
