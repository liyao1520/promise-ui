<template>
  <div>
    <p-select :options="options"></p-select>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const options = ref([
    {
      label: 'china',
      value: 'china'
    },
    {
      label: '哈哈哈哈哈',
      value: '123'
    }
  ])
</script>

<style></style>
