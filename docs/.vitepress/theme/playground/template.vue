<template>
  <PButton type="primary" size="xs" @click="count--">-1</PButton>
  <span style="padding: 0 10px">{{ count }}</span>
  <PButton type="primary" size="xs" @click="count++">+1</PButton>
</template>

<script setup>
  import { ref } from 'vue'
  const count = ref(0)
</script>

<style></style>
