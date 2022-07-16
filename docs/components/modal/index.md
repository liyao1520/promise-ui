# Modal 模态框

## 基础用法

需要设置 `model-value `/` v-model` 属性，它接收 `Boolean`，当为 `true` 时显示 `Modal`。 `title` 属性用于定义标题

:::demo

```vue
<template>
  <p-button @click="isShow = true">打开 model</p-button>
  <p-modal v-model="isShow" title="title" @after-leave="onAfterLeave">
    <span>This is a message</span>
  </p-modal>
</template>
<script setup>
  import { ref } from 'vue'
  import { Message } from 'promiseui-vue'
  const isShow = ref(false)
  const onAfterLeave = () => {
    Message.info('modal hide')
  }
</script>
```

:::

## 受控显示

模态框的显示可以是受控的。

:::demo

```vue
<template>
  <p-button @click="handleClick">打开 model</p-button>
  <p-modal :modelValue="isShow" title="title" :showClose="false">
    <span>{{ timeout / 1000 }}s后关闭</span>
  </p-modal>
</template>
<script setup>
  import { ref } from 'vue'
  import { Message } from 'promiseui-vue'
  const isShow = ref(false)
  const timeout = ref(4000)
  const countdown = () => {
    if (timeout.value <= 0) {
      isShow.value = false
    } else {
      timeout.value -= 1000
      setTimeout(countdown, 1000)
    }
  }
  const handleClick = () => {
    isShow.value = true
    timeout.value = 4000
    countdown()
  }
</script>
```

:::

<!--
## 可拖拽

试着拖动一下 `header` 部分吧

设置 `draggable` 属性为 true 以做到拖拽

:::demo

```vue
<template>
  <p-button @click="isShow = true">打开 model</p-button>
  <p-modal v-model="isShow" title="可拖拽" draggable>
    <span>试着拖动一下header部分吧</span>
  </p-modal>
</template>
<script setup>
  import { ref } from 'vue'
  const isShow = ref(false)
</script>
```

::: -->

## 遮罩关闭

使用 `mask-closable=false` 使点击遮罩层不关闭。

:::demo

```vue
<template>
  <p-button @click="isShow = true">打开 model</p-button>
  <p-modal v-model="isShow" title="title" :mask-closable="false">
    <span>This is a message</span>
  </p-modal>
</template>
<script setup>
  import { ref } from 'vue'
  import { Message } from 'promiseui-vue'
  const isShow = ref(false)
</script>
```

:::

## 自定义内容

:::demo

```vue
<template>
  <p-button @click="isShow = true">打开 model</p-button>
  <p-modal v-model="isShow">
    <template #header>登录</template>
    <template #header-extra><p-icon :component="HappyOutline" /></template>
    <p-form>
      <p-form-item label="账号">
        <p-input v-model="formData.username" />
      </p-form-item>
      <p-form-item label="密码">
        <p-input v-model="formData.password" />
      </p-form-item>
    </p-form>
    <template #footer>
      <p-button type="primary" @click="isShow = false">提交</p-button>
    </template>
  </p-modal>
</template>
<script setup>
  import { ref, reactive } from 'vue'
  import { HappyOutline } from '@vicons/ionicons5'
  const isShow = ref(false)
  const formData = reactive({
    username: '',
    password: ''
  })
</script>
```

:::

## 自定义 modal 样式

`width` 设置 `modal`的宽度, 'top' 设置`modal`的`margin-top`, `zIndex` 设置 层级

或者设置`class`指定样式

:::demo

```vue
<template>
  <p-button @click="isShow = true">打开 model</p-button>
  <p-modal
    v-model="isShow"
    title="title"
    width="100vw"
    top="10px"
    zIndex="1000"
    style="height:50vh"
  >
    <span>This is a message</span>
  </p-modal>
</template>
<script setup>
  import { ref } from 'vue'
  const isShow = ref(false)
</script>
```

:::

## 锁定滚动

`model` 在打开时默认禁用 `body` 滚动,设置`block-scroll`为`false`可以取消禁用

:::demo

```vue
<template>
  <p-button @click="isShow = true">打开 model</p-button>

  <p-modal v-model="isShow" title="不禁止滚动!" :block-scroll="false">
    <div>滚动下试试</div>
  </p-modal>
</template>
<script setup>
  import { ref } from 'vue'
  const isShow = ref(false)
</script>
```

:::

## 其他属性

`to` 设置插入到`html`的位置,默认`body`

`closeOnEsc` 设置按`Esc`是否可关闭,默认为`true`

`showClose` 设置是否显示`close icon`

`displayDirective` 设置使用何种指令控制模态框主体的条件渲染 `'if' | 'show'` ,默认`'if'`

:::demo

```vue
<template>
  <p-button @click="isShow = true">打开 model</p-button>
  <p-modal
    v-model="isShow"
    title="title"
    to="#app"
    :closeOnEsc="false"
    :showClose="false"
    displayDirective="show"
  >
    <div>content</div>
  </p-modal>
</template>
<script setup>
  import { ref } from 'vue'
  const isShow = ref(false)
</script>
```

:::
