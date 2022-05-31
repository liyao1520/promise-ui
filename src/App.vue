<template>
  <div>
    <p-button ref="btn" class="btn" :shake="false" @click="isShow = !isShow"> click me !</p-button>
    <p-overlay v-model="isShow" :origin="btn" position="left">left</p-overlay>
    <p-overlay v-model="isShow" :origin="btn" position="right">right</p-overlay>
    <p-overlay v-model="isShow" :origin="btn" position="top">top</p-overlay>
    <p-overlay v-model="isShow" :origin="btn" position="bottom">bottom</p-overlay>
    <p-overlay v-model="isShow" :origin="btn" position="left-start">left-start</p-overlay>
    <p-overlay v-model="isShow" :origin="btn" position="left-end">left-end</p-overlay>
    <p-overlay v-model="isShow" :origin="btn" position="right-start">right-start</p-overlay>
    <p-overlay v-model="isShow" :origin="btn" position="right-end">right-end</p-overlay>
    <p-overlay v-model="isShow" :origin="btn" position="top-start">top-start</p-overlay>
    <p-overlay v-model="isShow" :origin="btn" position="top-end">top-end</p-overlay>
    <p-overlay v-model="isShow" :origin="btn" position="bottom-start">bottom-start</p-overlay>
    <p-overlay v-model="isShow" :origin="btn" position="bottom-end">bottom-end</p-overlay>

    <p-overlay v-model="isShow" :origin="btn2"
      ><p-input 请输入 /> <p-button>确认</p-button></p-overlay
    >
    <p-button ref="btn2"> click me ! </p-button>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  const btn = ref(null)
  const btn2 = ref(null)
  const isShow = ref(true)
</script>

<style>
  .btn {
    display: block !important;
    width: 500px;
    height: 200px !important;
    margin: 0 auto !important;
  }
</style>
