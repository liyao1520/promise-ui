<template>
  <p-space>
    <p-tabs v-model="current" @change="change" @close="close" @add-tab-pane="addTabPane">
      <p-tab-pane v-for="item in panels" :key="item" :label="'Tab' + item" :name="item">
        {{ 'content' + item }}
      </p-tab-pane>
    </p-tabs>
  </p-space>
</template>
<script setup>
  import { ref } from 'vue'
  import { Message } from '../promiseui/message'
  const panels = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  const current = ref(1)

  const close = (name) => {
    const index = panels.value.findIndex((item) => name === item)
    panels.value.splice(index, 1)
    Message.success(`Tab${name}已删除`)
    if (current.value === name) {
      current.value = panels.value[index]
    }
  }
  const addTabPane = () => {
    panels.value.push(Date.now())
  }
  const change = (name) => {}
</script>
