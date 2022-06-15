# Scrollbar 滚动条

### 基础用法

通过 `height` 属性设置滚动条高度，若不设置则根据父容器高度自适应。

:::demo

```vue
<template>
  <p-scrollbar height="300px">
    <p v-for="item in 20" :key="item" class="scrollbar-demo-item"> {{ item }}</p>
  </p-scrollbar>
</template>
<style>
  .scrollbar-demo-item {
    height: 50px;
    text-align: center;
    line-height: 50px;
    background: var(--promiseui-brand);
    color: #fff;
    margin: 10px;
  }
</style>
```

:::

### 横向滚动

当元素宽度大于滚动条宽度时，会显示横向滚动条。

:::demo

```vue
<template>
  <div class="demo">
    <p-scrollbar>
      <div class="scrollbar-demo-wrap">
        <p v-for="item in 20" :key="item" class="scrollbar-demo-item"> {{ item }}</p>
      </div>
    </p-scrollbar>
  </div>
</template>
<style>
  .demo {
    max-width: 320px;
  }
  .scrollbar-demo-wrap {
    display: flex;
  }
  .scrollbar-demo-item {
    width: 100px;
    height: 100px;
    flex-shrink: 0;
    background: var(--promiseui-brand);
    color: #fff;
    text-align: center;
    line-height: 70px;
    margin: 10px 20px;
  }
</style>
```

:::

### 最大高度

当元素高度超过最大高度，才会显示滚动条。

:::demo

```vue
<template>
  <p-button @click="add">Add Item</p-button>
  <p-button @click="onDelete">Delete Item</p-button>
  <p-scrollbar max-height="300px">
    <p v-for="item in count" :key="item" class="scrollbar-demo-item"> {{ item }}</p>
  </p-scrollbar>
</template>

<script setup>
  import { ref } from 'vue'
  const count = ref(3)

  const add = () => {
    count.value++
  }
  const onDelete = () => {
    if (count.value > 0) {
      count.value--
    }
  }
</script>
<style>
  .scrollbar-demo-item {
    height: 50px;
    text-align: center;
    line-height: 50px;
    background: var(--promiseui-brand);
    color: #fff;
    margin: 10px;
  }
</style>
```

:::

### 手动滚动

通过使用 `scrollTo` , `scrollBy` 等方法，可以手动控制滚动条滚动。

:::demo

```vue
<template>
  <p-button @click="scrollBy(+200)">-200px</p-button>
  <p-button @click="scrollBy(-200)">+200px</p-button>
  <br />
  <p-scrollbar height="300px" ref="scrollbar">
    <p v-for="item in 20" :key="item" class="scrollbar-demo-item"> {{ item }}</p>
  </p-scrollbar>
</template>
<script setup>
  import { ref } from 'vue'
  const scrollbar = ref(null)
  const scrollBy = (offset) => {
    scrollbar.value.scrollBy({
      top: offset,
      behavior: 'smooth'
    })
  }
</script>
<style>
  .scrollbar-demo-item {
    height: 50px;
    text-align: center;
    line-height: 50px;
    background: var(--promiseui-brand);
    color: #fff;
    margin: 10px;
  }
</style>
```

:::

### 滚动事件

`@scroll`

:::demo

```vue
<template>
  <h3> scrollTop: {{ scrollTop }} </h3>
  <p-scrollbar height="300px" @scroll="onScroll">
    <p v-for="item in 20" :key="item" class="scrollbar-demo-item"> {{ item }}</p>
  </p-scrollbar>
</template>
<script setup>
  import { ref } from 'vue'
  import { Message } from 'promiseui'
  const scrollTop = ref(0)
  const onScroll = (e) => (scrollTop.value = e.target.scrollTop)
</script>
<style>
  .scrollbar-demo-item {
    height: 50px;
    text-align: center;
    line-height: 50px;
    background: var(--promiseui-brand);
    color: #fff;
    margin: 10px;
  }
</style>
```

:::
