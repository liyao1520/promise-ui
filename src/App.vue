<template>
  <div>
    <button @click="onClick">message</button>
  </div>
</template>

<script setup lang="ts">
  import { Message } from '../promiseui/vue-promiseui'
  const onClick = () => {
    Message({
      message: 'info'
    }).then((_) => {
      console.log('onclose')
    })
    Message.error('error', {
      duration: 1000
    })
    Message.success('sucess', {
      duration: 5000
    })
    Message.warning('warning', {
      duration: 10000000
    })
    Message.none('warning', {
      duration: 10000000
    })
  }
</script>
<script></script>

<style></style>
