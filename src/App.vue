<template>
  <div>
    <p-select v-model="active" :options="options" class="dmoe" filterable></p-select>
    <p-tag>标签</p-tag>
    <p-tag type="success">标签</p-tag>
    <p-tag type="danger">标签</p-tag>
    <p-tag type="warning">标签</p-tag>
    <p-tag type="info">标签</p-tag>
    <p-tag size="sm">标签</p-tag>
    <p-tag size="sm" type="success">标签</p-tag>
    <p-tag size="sm" type="danger">标签</p-tag>
    <p-tag size="sm" type="warning">标签</p-tag>
    <p-tag size="sm" type="info">标签</p-tag>
    <p-tag size="lg">标签</p-tag>
    <p-tag size="lg" type="success">标签</p-tag>
    <p-tag size="lg" type="danger">标签</p-tag>
    <p-tag size="lg" type="warning">标签</p-tag>
    <p-tag size="lg" type="info">标签</p-tag>
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
  const active = ref(2)
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
