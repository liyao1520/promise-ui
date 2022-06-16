# Tag 标签

### 基础用法

:::demo

```vue
<template>
  <h4>它有不同的类型。</h4>
  <p-space>
    <p-tag>标签1</p-tag>
    <p-tag type="info">标签2</p-tag>
    <p-tag type="success">标签3</p-tag>
    <p-tag type="danger">标签4</p-tag>
    <p-tag type="warning">标签4</p-tag>
  </p-space>
  <h4>禁用。</h4>
  <p-space>
    <p-tag disabled>标签1</p-tag>
    <p-tag type="info" disabled>标签2</p-tag>
    <p-tag type="success" disabled>标签3</p-tag>
    <p-tag type="danger" disabled>标签4</p-tag>
    <p-tag type="warning" disabled>标签4</p-tag>
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
    <p-tag type="info" size="sm">标签2</p-tag>
    <p-tag type="success" size="sm">标签3</p-tag>
    <p-tag type="danger" size="sm">标签4</p-tag>
    <p-tag type="warning" size="sm">标签4</p-tag>
  </p-space>
  <p-space>
    <p-tag>标签1</p-tag>
    <p-tag type="info">标签2</p-tag>
    <p-tag type="success">标签3</p-tag>
    <p-tag type="danger">标签4</p-tag>
    <p-tag type="warning">标签4</p-tag>
  </p-space>
  <p-space>
    <p-tag size="lg">标签1</p-tag>
    <p-tag type="info" size="lg">标签2</p-tag>
    <p-tag type="success" size="lg">标签3</p-tag>
    <p-tag type="danger" size="lg">标签4</p-tag>
    <p-tag type="warning" size="lg">标签4</p-tag>
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
    <p-tag closable @close="handleClose">标签1</p-tag>
    <p-tag type="info" closable @close="handleClose">标签2</p-tag>
    <p-tag type="success" closable @close="handleClose">标签3</p-tag>
    <p-tag type="danger" closable @close="handleClose">标签4</p-tag>
    <p-tag type="warning" closable @close="handleClose">标签4</p-tag>
  </p-space>
</template>
<script setup>
  import { Message } from 'promiseui'
  const handleClose = () => {
    Message.info('tag close')
  }
</script>
```

:::
