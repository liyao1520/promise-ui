# AutoComplete 自动填充

### 基础用法

:::demo

```vue
<template>
  <p-auto-complete v-model="inputValue" placeholder="请输入邮箱" :options="options" />
</template>
<script setup>
  import { ref, computed } from 'vue'
  const inputValue = ref('')
  const options = computed(() =>
    ['@gmail.com', '@163.com', '@qq.com'].map((suffix) => {
      const prefix = inputValue.value.split('@')[0]
      return {
        label: prefix + suffix,
        value: prefix + suffix
      }
    })
  )
</script>
```

:::

### 尺寸

:::demo

```vue
<template>
  <p-space>
    <p-auto-complete v-model="inputValue" placeholder="请输入邮箱" :options="options" size="sm" />
    <p-auto-complete v-model="inputValue" placeholder="请输入邮箱" :options="options" size="md" />
    <p-auto-complete v-model="inputValue" placeholder="请输入邮箱" :options="options" size="lg" />
  </p-space>
</template>
<script setup>
  import { ref, computed } from 'vue'
  const inputValue = ref('')
  const options = computed(() =>
    ['@gmail.com', '@163.com', '@qq.com'].map((suffix) => {
      const prefix = inputValue.value.split('@')[0]
      return {
        label: prefix + suffix,
        value: prefix + suffix
      }
    })
  )
</script>
```

:::

### 禁用

:::demo

```vue
<template>
  <p-space>
    <p-auto-complete v-model="inputValue" placeholder="请输入邮箱" :options="options" />
    <p-auto-complete v-model="inputValue" placeholder="请输入邮箱" :options="options" disabled />
  </p-space>
</template>
<script setup>
  import { ref, computed } from 'vue'
  const inputValue = ref('')
  const options = computed(() =>
    ['@gmail.com', '@163.com', '@qq.com'].map((suffix) => {
      const prefix = inputValue.value.split('@')[0]
      return {
        label: prefix + suffix,
        value: prefix + suffix
      }
    })
  )
</script>
```

:::

### 自定义选项渲染

renderLabel 接收一个函数需要返回 vnode

:::demo

```vue
<template>
  <p-space>
    <p-auto-complete
      v-model="inputValue"
      placeholder="请输入邮箱"
      :options="options"
      :renderLabel="renderLabel"
    />
  </p-space>
</template>
<script setup>
  import { ref, computed, h } from 'vue'
  import { Tag } from 'promiseui-vue'
  const inputValue = ref('')
  const options = computed(() =>
    ['@gmail.com', '@163.com', '@qq.com'].map((suffix) => {
      const prefix = inputValue.value.split('@')[0]
      return {
        label: prefix + suffix,
        value: prefix + suffix
      }
    })
  )
  const renderLabel = ({ row }) => {
    return h('div', [
      h(
        'span',
        {
          style: 'padding-right:10px'
        },
        row.label
      ),
      h(
        Tag,
        {
          type: 'primary'
        },
        'Email'
      )
    ])
  }
</script>
```

:::
