<script setup lang="ts">
  import { ref } from 'vue'

  const count = ref(0)
</script>

<template>
  <div>{{ count }}</div>
  <button @click="count++">+1</button>
</template>

<style scoped>
  #app {
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
