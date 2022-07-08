<template>
  <AutoComplete v-model="selected" :options="options" />
</template>

<script setup lang="ts">
  import { Select, AutoComplete, Input, Message } from '../promiseui'
  import { ref } from 'vue'

  const selected = ref('11111')
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
