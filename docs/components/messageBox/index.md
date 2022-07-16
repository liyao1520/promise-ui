# MessageBox 消息弹出框

## 基础用法

两种用法,函数式 `MessageBox` 和 `this.$messageBox`

:::demo

```vue
<template>
  <PSpace>
    <PButton @click="click1">函数式MessageBox</PButton>
    <PButton @click="click2">this.$messageBox</PButton>
  </PSpace></template
>
<script>
  import { defineComponent } from 'vue'
  import { MessageBox } from 'promiseui-vue'
  export default defineComponent({
    setup() {
      const click1 = () => {
        MessageBox.open({
          title: 'title',
          content: '函数式MessageBox',
          confirmButtonText: 'ok'
        })
      }
      return {
        click1
      }
    },
    methods: {
      click2() {
        this.$messageBox.open({
          title: 'title',
          content: 'this.$messageBox',
          confirmButtonText: 'ok'
        })
      }
    }
  })
</script>
```

:::

## 确认消息

返回一个 `Promise` 处理任务

:::demo

```vue
<template>
  <p-space>
    <PButton @click="MessageBoxOpen('open')">open</PButton>
    <PButton @click="MessageBoxOpen('success')">success</PButton>
    <PButton @click="MessageBoxOpen('error')">error</PButton>
    <PButton @click="MessageBoxOpen('info')">info</PButton>
    <PButton @click="MessageBoxOpen('warning')">warning</PButton>
  </p-space>
</template>
<script setup>
  import { defineComponent } from 'vue'
  import { MessageBox, Message } from 'promiseui-vue'
  const MessageBoxOpen = (type) => {
    MessageBox[type]({
      title: '操作',
      content: '确定吗?',
      cancelButtonText: '取消',
      confirmButtonText: '确定'
    })
      .then(() => {
        Message.success('confirm')
      })
      .catch((type) => {
        if (type === 'cancel') {
          Message.error('cancel')
        }
        if (type === 'close') {
          Message.error('close')
        }
      })
  }
</script>
```

:::

## 异步

`beforeClose` 可以在关闭前执行异步操作,可以返回 `boolean` 类型 或者 `Promise<boolean>` 类型

`true :` 弹框可以被关闭

`false :` 阻止弹框被关闭

:::demo

```vue
<template>
  <p-button @click="handleClick">异步</p-button>
</template>
<script setup>
  import { MessageBox, Message } from 'promiseui-vue'

  const handleClick = () => {
    MessageBox.warning({
      title: '警告',
      content: '确认提交?',
      cancelButtonText: '取消',
      confirmButtonText: '确定',
      beforeClose(type) {
        if (type === 'confirm') {
          return new Promise((resolve) =>
            setTimeout(() => {
              resolve(true)
            }, 2000)
          )
        } else {
          return true
        }
      }
    })
      .then(() => {
        Message.success('提交成功!')
      })
      .catch((type) => {
        Message.warning('取消提交')
      })
  }
</script>
```

:::
