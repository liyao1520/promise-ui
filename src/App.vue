<template>
  <div
    ><p-auto-complete v-model="input" :options="options" />

    {{ options }}</div
  >
</template>

<script setup>
  import { computed, ref } from 'vue'
  const input = ref('')
  const options = computed(() =>
    ['@qq.com', '@163.com', '@123.com'].map((suffix) => {
      const prefix = input.value.split('@')[0]
      return {
        label: prefix + suffix,
        value: prefix + suffix
      }
    })
  )
</script>

<style></style>
