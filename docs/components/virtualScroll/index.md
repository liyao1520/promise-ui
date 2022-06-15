# Virtual Scroll 虚拟滚动

### 基础用法

必须设置 `itemHeight` 属性, 需要每一项的高度都相等, `listData` 传入列表数据, `itemKey` 指定哪以属性作为`key`值

`item` 插槽 指定每一项的内容, 接收 `row` `index` `rows` 三个 `props`,分别为 该项的值,索引,所有项的值

:::demo

```vue
<template>
  <p-virtual-scroll
    :itemHeight="50"
    :wrapHeight="250"
    :listData="listData"
    :itemStyle="itemStyle"
    itemKey="id"
  >
    <template #item="{ row, index, rows }">
      {{ row.label }}
    </template>
  </p-virtual-scroll>
</template>
<script setup>
  import { ref } from 'vue'
  const list = []
  for (let i = 0; i < 1000; i++) {
    list[i] = { id: i, label: 'label' + i }
  }
  const listData = ref(list)
  const itemStyle = {
    border: '1px solid var(--promiseui-brand)',
    listStyle: 'none',
    textAlign: 'center',
    backgroundColor: 'var(--promiseui-item-bg-hover)',
    color: 'var(--promiseui-brand)'
  }
</script>
```

:::

### 加载更多

`@loadMore` 在列表滚动到底部时触发,函数中可以返回一个`promise`

如果返回的是 `promise`则会显示加载图标,

promise 的 `resolve` 和 `reject` 如果传入字符串,则会自动调用 `Message`组件的 `success` 和 `error` 方法

:::demo

```vue
<template>
  <p-virtual-scroll
    :itemHeight="50"
    :wrapHeight="250"
    :listData="listData"
    :itemStyle="itemStyle"
    itemKey="id"
    @loadMore="loadMore"
  >
    <template #item="{ row, index, rows }">
      {{ row.label }}
    </template>
  </p-virtual-scroll>
</template>
<script setup>
  import { ref } from 'vue'
  const list = []
  for (let i = 0; i < 50; i++) {
    list[i] = { id: i, label: 'label' + i }
  }
  const listData = ref(list)
  const itemStyle = {
    border: '1px solid var(--promiseui-brand)',
    listStyle: 'none',
    textAlign: 'center',
    backgroundColor: 'var(--promiseui-item-bg-hover)',
    color: 'var(--promiseui-brand)'
  }
  const loadMore = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const len = listData.value.length
        for (let i = len; i < len + 10; i++) {
          listData.value.push({ id: i, label: 'label' + i })
        }
        resolve('新增10条~')
      }, 1000)
    })
</script>
```

:::
