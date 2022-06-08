<template>
  <div>
    <p-radio-group v-model="value" name="fruits" @change="onChange">
      <p-radio-button v-for="item in fruits" :key="item.value" :value="item.value">
        {{ item.label }}</p-radio-button
      >
    </p-radio-group>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { Message } from '../promiseui/message'
  const fruits = ref([
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' }
  ])
  const value = ref('Apple')
  const onChange = (value) => {
    // Message.success(`change value: ${value}`)
  }
</script>

<style></style>
