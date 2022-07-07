<template>
  <Select v-model="selected" :options="options" @change="onChange" />
</template>

<script setup lang="ts">
  import { Select, Message } from '../promiseui'
  import { ref } from 'vue'

  const selected = ref('1')
  const options = Array.from({ length: 20 })
    .fill(0)
    .map((item, index) => ({
      label: 'label' + index,
      value: 'value' + index
    }))
  const onChange = (item: any) => {
    Message.success(` label: ${item.label}  value :${item.value} `)
  }
</script>

<style></style>
