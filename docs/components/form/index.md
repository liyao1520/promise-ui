# Form 表单

### 典型表单

最基础的表单包括各种输入表单项，比如 `input`、`select`、`radio`、`checkbox`等。

在每一个 `form` 组件中，你需要一个 `form-item` 字段作为输入项的容器，用于获取值与验证值。

:::demo

```vue
<template>
  <p-form>
    <p-form-item label="username"></p-form-item>
    <p-form-item label="age"></p-form-item>
  </p-form>
</template>
```

:::
