<template>
  <p-tabs v-model="tabPane" @before-leave="BeforeLeave">
    <p-tab-pane label="Table 1" name="one">123</p-tab-pane>
    <p-tab-pane label="Table 2" name="two">456</p-tab-pane>
    <p-tab-pane label="Table 3" name="three">789</p-tab-pane>
  </p-tabs>
</template>
<script setup>
  import { ref } from 'vue'
  import { Message } from 'promiseui'
  const tabPane = ref('two')
  const BeforeLeave = (name, oldName) => {
    Message.info(`name:${name},oldName${oldName}`)
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
