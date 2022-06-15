<template>
  <p-virtual-scroll :itemHeight="50" :listData="listData" @loadMore="loadMore">
    <template #item="{ row }">{{ row }} </template>
  </p-virtual-scroll>
</template>

<script setup>
  import { ref } from 'vue'
  const list = []
  for (let i = 0; i < 42000; i++) {
    list[i] = i
  }
  const listData = ref(list)
  const loadMore = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        listData.value.push(1, 2, 3, 4, 5, 6)
        resolve('加载成功!')
      }, 1000)
    })
</script>

<style scoped></style>

<style>
  .itemClass {
    color: blueviolet;
  }
</style>
