# Overlay 遮罩层

## 基本使用

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
    color: #333;
  }
</style>
```

:::

## 弹出位置

跟随起点元素移动，并且在遇到边界时根据 `position` 参数指定的可选位置自动调整。总共支持 `12` 个弹出位置。

:::demo column

```vue
<template>
  <div>
    <p-button ref="btn" class="btn" :shake="false" @click="isShow = !isShow"> click me !</p-button>
    <p-overlay v-model="isShow" :origin="btn" position="left" showArrow>left</p-overlay>
    <p-overlay v-model="isShow" :origin="btn" position="right" showArrow>right</p-overlay>
    <p-overlay v-model="isShow" :origin="btn" position="top" showArrow>top</p-overlay>
    <p-overlay v-model="isShow" :origin="btn" position="bottom" showArrow>bottom</p-overlay>
    <p-overlay v-model="isShow" :origin="btn" position="left-start" showArrow>left-start</p-overlay>
    <p-overlay v-model="isShow" :origin="btn" position="left-end" showArrow>left-end</p-overlay>
    <p-overlay v-model="isShow" :origin="btn" position="right-start" showArrow
      >right-start</p-overlay
    >
    <p-overlay v-model="isShow" :origin="btn" position="right-end" showArrow>right-end</p-overlay>
    <p-overlay v-model="isShow" :origin="btn" position="top-start" showArrow>top-start</p-overlay>
    <p-overlay v-model="isShow" :origin="btn" position="top-end" showArrow>top-end</p-overlay>
    <p-overlay v-model="isShow" :origin="btn" position="bottom-start" showArrow
      >bottom-start</p-overlay
    >
    <p-overlay v-model="isShow" :origin="btn" position="bottom-end" showArrow>bottom-end</p-overlay>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  const btn = ref(null)
  const isShow = ref(true)
</script>

<style>
  .btn {
    width: 250px;
    height: 100px !important;

    font-size: 20px;
  }
  div {
    display: flex;
    background-color: #e9edfa;
    height: 300px;
    justify-content: center;
    align-items: center;
  }
</style>
```

:::

## 任意内容

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


## 自动调整位置

`flip` 为 `true` 则当前放置方式不能提供足够空间的时候调整弹出信息的位置, 默认`false`

:::demo

```vue
<template>
  <p-overlay v-model="isShow" :origin="btn" flip>
    <div class="demo">
      <h3>自动调整弹出位置</h3>
      <ul>
        <li v-for="i in 10">{{ 'content'+ i }}</li>
      </ul>
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
    text-align:center;
  }

</style>
```

:::