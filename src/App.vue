<template>
  <div>
    <p-select v-model="actives" clearable :options="options" multiple filterable></p-select>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  const list = []
  for (let i = 0; i < 1000; i++) {
    list[i] = {
      label: 'label' + i,
      value: i,
      disabled: i === 10
    }
  }
  const options = ref(list)
  const actives = ref([2])
</script>
