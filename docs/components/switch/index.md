# Switch 开关

### 基本用法

最简单的用法。

:::demo

```vue
<template>
  <p-space>
    <p-switch v-model="checked" @change="handleChange" />
    <p-switch v-model="checked" :disabled="disabled" />
    <p-button @click="disabled = !disabled" size="sm" type="primary">toggle disabled</p-button>
  </p-space>
</template>
<script setup>
  import { ref } from 'vue'
  const checked = ref(false)
  const disabled = ref(true)
</script>
```

:::

### 内容

向开关中加入内容。 `props` 和 `slots` 两种方式 , 支持 `icon`

:::demo

```vue
<template>
  <h4>props</h4>
  <p-space>
    <p-switch v-model="checked" activeText="开" inactiveText="关" />
    <p-switch v-model="checked" activeText="长内容也可以!" inactiveText="长内容可以吗?" />
  </p-space>
  <h4>slots</h4>
  <p-space>
    <p-switch v-model="checked">
      <template #checked> 打开 </template>
      <template #unChecked> 关闭 </template>
    </p-switch>
    <p-switch v-model="checked">
      <template #checked> <p-icon :component="CheckmarkSharp" /> </template>
      <template #unChecked> <p-icon :component="CloseSharp" /> </template>
    </p-switch>
  </p-space>
</template>
<script setup>
  import { ref } from 'vue'
  import { CheckmarkSharp, CloseSharp } from '@vicons/ionicons5'
  const checked = ref(true)
</script>
```

:::

### beforeChange 和 loading

通过`@beforeChange` 可以拦截`switch` 值的改变, 返回 `false` 则`switch`值不会改变

也可以返回一个`promise`,若返回的是`promise`,则会出现`loading`图标 在`promise` 状态发生改变时会自动关闭

:::demo

```vue
<template>
  <p-switch v-model="active" @beforeChange="onBeforeChange"></p-switch>
</template>
<script setup>
  import { ref } from 'vue'
  import { Message } from 'promiseui-vue'
  const active = ref(false)
  const onBeforeChange = (value) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true)
        Message.success('允许改变value')
      }, 3000)
    })
  }
</script>
```

:::

### 尺寸

三种尺寸 `sm`,`md`,`lg`

:::demo

```vue
<template>
  <p-space>
    <p-switch v-model="checked" size="sm" />
    <p-switch v-model="checked" size="md" />
    <p-switch v-model="checked" size="lg" />
  </p-space>
</template>
<script setup>
  import { ref } from 'vue'
  const checked = ref(true)
</script>
```

:::

### 颜色

设置 `activeCoactiveColor`颜色

可以是 `primary` `success` `info` `wraning` `danger` , 也可以是`自定义颜色`

:::demo

```vue
<template>
  <h4>预置颜色</h4>
  <p-space>
    <p-switch v-model="checked" activeColor="primary" />
    <p-switch v-model="checked" activeColor="success" />
    <p-switch v-model="checked" activeColor="info" />
    <p-switch v-model="checked" activeColor="wraning" />
    <p-switch v-model="checked" activeColor="danger" />
  </p-space>
  <h4>自定义颜色</h4>
  <p-space>
    <p-switch v-model="checked" activeColor="red" />
    <p-switch v-model="checked" activeColor="#fb7299" />
    <p-switch v-model="checked" activeColor="rgba(161, 0, 160)" />
  </p-space>
</template>
<script setup>
  import { ref } from 'vue'
  const checked = ref(true)
</script>
```

:::

### 对应值

`activeValue` 和 `inactiveValue` 分别对应 选中时的值 和 非选中时的值

:::demo

```vue
<template>
  <p-switch v-model="checked" :activeValue="1" :inactiveValue="0" @change="handleChange" />
</template>
<script setup>
  import { ref } from 'vue'
  import { Message } from 'promiseui-vue'
  const checked = ref(1)
  const handleChange = (value) => {
    Message.success(`change value : ${value}`)
  }
</script>
```

:::
