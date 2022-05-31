# Overlay 遮罩层

### 基本使用

`v-model` 控制`overlay`显示

:::demo

```vue
<template>
  <div class="demo-wrapper">
    <div ref="origin" class="demo"> origin </div>
    <p-button @click="isShow = !isShow">{{ isShow ? '隐藏overlay' : '显示overlay' }}</p-button>
    <p-button @click="showArrow = !showArrow">{{ showArrow ? '隐藏箭头' : '显示箭头' }}</p-button>
    <p-overlay v-model="isShow" :origin="origin" position="right" :show-arrow="showArrow"
      >hello overlay</p-overlay
    >
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  const origin = ref(null)
  const isShow = ref(false)
  const showArrow = ref(false)
</script>
<style>
  .demo-wrapper {
    background-color: #f8f8f8;
    padding: 10px 0;
  }
  .demo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    margin: 20px;
    background-color: #e9edfa;
  }
</style>
```

:::

### 弹出位置

跟随起点元素移动，并且在遇到边界时根据 `position` 参数指定的可选位置自动调整。总共支持 `12` 个弹出位置。

:::demo column

```vue
<template>
  <div>
    <p-button ref="btn" class="btn" :shake="false" @click="isShow = !isShow"> click me !</p-button>
    <p-overlay v-model="isShow" :origin="btn" position="left">left</p-overlay>
    <p-overlay v-model="isShow" :origin="btn" position="right">right</p-overlay>
    <p-overlay v-model="isShow" :origin="btn" position="top">top</p-overlay>
    <p-overlay v-model="isShow" :origin="btn" position="bottom">bottom</p-overlay>
    <p-overlay v-model="isShow" :origin="btn" position="left-start">left-start</p-overlay>
    <p-overlay v-model="isShow" :origin="btn" position="left-end">left-end</p-overlay>
    <p-overlay v-model="isShow" :origin="btn" position="right-start">right-start</p-overlay>
    <p-overlay v-model="isShow" :origin="btn" position="right-end">right-end</p-overlay>
    <p-overlay v-model="isShow" :origin="btn" position="top-start">top-start</p-overlay>
    <p-overlay v-model="isShow" :origin="btn" position="top-end">top-end</p-overlay>
    <p-overlay v-model="isShow" :origin="btn" position="bottom-start">bottom-start</p-overlay>
    <p-overlay v-model="isShow" :origin="btn" position="bottom-end">bottom-end</p-overlay>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  const btn = ref(null)
  const isShow = ref(true)
</script>

<style>
  .btn {
    display: block !important;
    width: 250px;
    height: 100px !important;
    margin: 50px auto !important;
    font-size: 20px;
  }
</style>
```

:::

### 任意内容

默认插槽可以传任意内容

:::demo

```vue
<template>
  <p-overlay v-model="isShow" :origin="btn">
    <div class="demo">
      <p-input placeholder="请输入" />
      <p-button type="primary" @click="isShow = false">确认</p-button>
    </div>
  </p-overlay>
  <p-button ref="btn" class="btn" @click="isShow = !isShow"> click me ! </p-button>
</template>
<script setup>
  import { ref } from 'vue'
  const btn = ref(null)
  const isShow = ref(false)
</script>
<style>
  .demo {
    display: flex;
  }
  .btn {
    display: block;
    margin: 20px auto;
  }
</style>
```

:::
