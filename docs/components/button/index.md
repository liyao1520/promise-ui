# Button 按钮

## 不同颜色

设置属性`type` , 可选 `primary` `success` `info` `warning` `danger`

:::demo

```vue
<template>
  <PSpace>
    <PButton>默认</PButton>
    <PButton type="primary">Primary</PButton>
    <PButton type="danger">Danger</PButton>
    <PButton type="info">Info</PButton>
    <PButton type="warning">Warning</PButton>
    <PButton type="success">Success</PButton>
  </PSpace>
</template>
```

:::

## 不同填充

设置属性`fillMode`

:::demo

```vue
<template>
  <PSpace>
    <PButton type="primary">Primary</PButton>
    <PButton type="danger">Danger</PButton>
    <PButton type="info">Info</PButton>
    <PButton type="warning">Warning</PButton>
    <PButton type="success">Success</PButton>
  </PSpace>
  <PSpace>
    <PButton type="primary" fillMode="outline">Primary</PButton>
    <PButton type="danger" fillMode="outline">Danger</PButton>
    <PButton type="info" fillMode="outline">Info</PButton>
    <PButton type="warning" fillMode="outline">Warning</PButton>
    <PButton type="success" fillMode="outline">Success</PButton>
  </PSpace>
  <PSpace>
    <PButton type="primary" fillMode="dashed">Primary</PButton>
    <PButton type="danger" fillMode="dashed">Danger</PButton>
    <PButton type="info" fillMode="dashed">Info</PButton>
    <PButton type="warning" fillMode="dashed">Warning</PButton>
    <PButton type="success" fillMode="dashed">Success</PButton>
  </PSpace>
  <PSpace>
    <PButton type="primary" fillMode="none">Primary</PButton>
    <PButton type="danger" fillMode="none">Danger</PButton>
    <PButton type="info" fillMode="none">Info</PButton>
    <PButton type="warning" fillMode="none">Warning</PButton>
    <PButton type="success" fillMode="none">Success</PButton>
  </PSpace>
</template>
```

:::

## 不同尺寸

设置属性`size`,可控制按钮大小 `lg` `md` `sm` `xs`

:::demo

```vue
<template>
  <PSpace>
    <PButton size="xs" type="primary">Mini</PButton>
    <PButton size="sm" type="primary">Small</PButton>
    <PButton size="md" type="primary">Medium</PButton>
    <PButton size="lg" type="primary">Large</PButton>
  </PSpace>
</template>
```

:::

## 禁用状态

设置属性`disabled`, 是否禁用按钮

:::demo

```vue
<template>
  <PSpace>
    <PButton type="info">Info</PButton>
    <PButton type="warning">Warning</PButton>
    <PButton type="success">Success</PButton>
  </PSpace>
  <PSpace>
    <PButton type="info" disabled>Info</PButton>
    <PButton type="warning" disabled>Warning</PButton>
    <PButton type="success" disabled>Success</PButton>
  </PSpace>
</template>
```

:::

## Icon

可以传 `icon`

:::demo

```vue
<script setup>
  import { AccessibilitySharp, AirplaneSharp, Ban } from '@vicons/ionicons5'
</script>
<template>
  <PSpace>
    <PButton>
      <PIcon :component="AirplaneSharp" />
      飞机
    </PButton>
    <PButton fillMode="outline">
      Hello
      <PIcon :component="AccessibilitySharp" />
    </PButton>
    <PButton type="danger">
      <PIcon :component="Ban" />
      禁止
    </PButton>
  </PSpace>
</template>
```

:::

## 加载 loading 状态

控制 `loading` 效果

:::demo

```vue
<template>
  <PSpace>
    <PButton size="lg" :loading="isLoading" @click="handleClick">
      <template #icon>
        <PIcon :component="AirplaneSharp" />
      </template>
      点我
    </PButton>
    <PButton size="lg" :loading="isLoading" @click="handleClick">
      点我
    </PButton>
  </PSpace>
</template>
<script>
  import { ref } from 'vue'
  import { Message } from 'promiseui-vue'
  import { AirplaneSharp } from '@vicons/ionicons5'

  export default {
    setup() {
      const isLoading = ref(false)
      const handleClick = () => {
        Message.success('click !')
        isLoading.value = true
        setTimeout(() => {
          isLoading.value = false
        }, 3000)
      }
      return {
        handleClick,
        isLoading,
        AirplaneSharp
      }
    }
  }
</script>
```

:::
