<template>
  <div>
    <p-checkbox-group v-model="checked" @change="change">
      <p-checkbox label="123" value="a" :indeterminate="indeterminate" />
      <p-checkbox label="123" value="b" />
      <p-checkbox label="123" value="c" />
    </p-checkbox-group>
    <p-checkbox label="123" v-model="checked2" @change="change" />
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const checked = ref(['a', 'c'])
  const checked2 = ref(false)
  const indeterminate = ref(true)

  const change = (values) => {
    console.log(values)
  }
  setTimeout(() => (checked.value = ['b']), 3000)
</script>

<style></style>
