<template>
  <div>
    <p-select :options="options" class="dmoe" v-model="active" multiple></p-select>
  </div>
</template>

<script setup>
  import { ref, watch } from 'vue'
  const list = []
  for (let i = 0; i < 1000; i++) {
    list[i] = {
      label: 'label' + i,
      value: i
    }
  }
  const options = ref(list)
  const active = ref([2, 10])
  watch(active, () => {
    console.log(active.value)
  })
</script>

<style scoped>
  .dmoe {
    width: 600px;
    margin: 100px auto;
  }
</style>
