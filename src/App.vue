<template>
  <p-space>
    <p-tabs v-model="test" centered @change="change">
      <p-tab-pane label="Table 1" name="one">123</p-tab-pane>
      <p-tab-pane label="Table 2" name="two">456</p-tab-pane>
      <p-tab-pane label="Table 3" name="three">789</p-tab-pane>
    </p-tabs>
  </p-space>
</template>
<script setup>
  import { ref } from 'vue'

  const change = (e) => {
    console.log(e)
  }
  const test = ref('two')
  const BeforeLeave = (name, oldName) => {
    switch (name) {
      case 'one':
        return false
      case 'two':
        return true
      case 'three':
        return new Promise((resolve) =>
          setTimeout(() => {
            resolve(true)
          }, 1000)
        )
    }
  }
</script>
