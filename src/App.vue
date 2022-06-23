<template>
  <div>
    <p-button @click="show('success')">success</p-button>
    <p-button @click="show('error')">error</p-button>
    <p-button @click="show('info')">info</p-button>
    <p-button @click="show('warning')">warning</p-button>
    <p-button @click="show('open')">open</p-button>
  </div>
</template>

<script setup lang="ts">
  import { Message } from '../promiseui/message'
  import { MessageBox } from '../promiseui/messageBox'

  const show = (type: any) => {
    ;(MessageBox as any)
      [type]({
        title: 'title',
        content: 'content',
        cancelButtonText: 'cancel',
        confirmButtonText: 'confirm',
        beforeClose(type: string) {
          return new Promise((resovle) => {
            setTimeout(() => {
              resovle(true)
            }, 1000)
          })
        }
      })
      .then(() => {
        Message.success('ok')
      })
      .catch(() => {
        Message.error('unok')
      })
  }
</script>

<style></style>
