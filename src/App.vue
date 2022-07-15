<template>
  <div><DatePicker v-model="date" /> </div>
</template>

<script setup lang="ts">
  import dayjs from 'dayjs';
import { ref, watchEffect } from 'vue'
  import { DatePicker } from '../promiseui/datePicker'
  const date = ref(dayjs())
  watchEffect(() => {
    console.log(date.value)
  })
</script>

<style>
  body {
    background-color: aliceblue;
  }
</style>
