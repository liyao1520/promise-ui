<template>
  <div>
    <p-button @click="start">start</p-button>
    <p-button @click="finish">finish</p-button>
    <p-button @click="error">error</p-button>
  </div>
</template>

<script setup>
  import useLoadingBar from '../promiseui/loadingBar/src/loadingBarService'

  const loadingbar = useLoadingBar()
  const start = () => {
    loadingbar.start()
  }
  const error = () => {
    loadingbar.error()
  }
  const finish = () => {
    loadingbar.finish()
  }
</script>

<style></style>
