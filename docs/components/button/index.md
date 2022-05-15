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
