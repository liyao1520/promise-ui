<template>
  <div>
    <button @click="onClick">message</button>
  </div>
</template>

<script setup lang="ts">
  import { Message } from '../promiseui/vue-promiseui'
  const onClick = () => {
    Message({
      message: '123'
    }).then((_) => {
      console.log('onclose')
    })
    Message.success('123456')
  }
</script>
<script></script>

<style></style>
