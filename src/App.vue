<template>
  <div><DatePicker v-model="date" /> </div>
</template>

<script setup lang="ts">
  import { ref, watchEffect } from 'vue'
  import { DatePicker } from '../promiseui/datePicker'
  const date = ref(0)
  watchEffect(() => {
    console.log(date.value)
  })
</script>

<style>
  body {
    background-color: aliceblue;
  }
</style>
