# Button 按钮

#### 不同颜色

:::demo 设置属性`type` , 可选 `primary` `success` `info` `wraning` `danger`

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

#### 不同填充

:::demo 设置属性`fillMode`

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

#### 不同尺寸

:::demo 设置属性`size`,可控制按钮大小 `lg` `md` `sm` `xs`

```vue
<template>
  <PSpace>
    <PButton size="xs">Mini</PButton>
    <PButton size="sm">Small</PButton>
    <PButton size="md">Medium</PButton>
    <PButton size="lg">Large</PButton>
  </PSpace>
</template>
```

:::

#### 禁用状态

:::demo 设置属性`disabled`, 是否禁用按钮

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

#### Icon

:::demo 可以传 icon

```vue
<template>
  <PSpace>
    <PButton>
      <PIcon> <AirplaneSharp /> </PIcon>
      飞机
    </PButton>
    <PButton fillMode="outline">
      Hello
      <PIcon> <AccessibilitySharp /> </PIcon>
    </PButton>
    <PButton type="danger">
      <PIcon> <Ban /> </PIcon>
      禁止
    </PButton>
  </PSpace>
</template>
```

:::

#### 加载 loading 状态

:::demo 控制 loading 效果

```vue
<template>
  <PSpace>
    <PButton size="lg" :loading="isLoading" @click="handleClick">
      <template #icon>
        <pIcon>
          <AirplaneSharp />
        </pIcon>
      </template>
      点我
    </PButton>
    <PButton size="lg" :loading="isLoading" @click="handleClick"> 点我 </PButton>
  </PSpace>
</template>
<script lang="ts">
  import { ref } from 'vue'
  export default {
    setup() {
      const isLoading = ref(false)
      const handleClick = () => {
        isLoading.value = true
        setTimeout(() => {
          isLoading.value = false
        }, 3000)
      }
      return {
        handleClick,
        isLoading
      }
    }
  }
</script>
```

:::
