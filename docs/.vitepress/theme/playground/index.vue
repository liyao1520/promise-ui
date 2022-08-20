<template>
  <div v-if="!isLoaded"> 加载中... </div>
  <template v-else>
    <Demo
      :initialValue="template"
      style="height: calc(100vh - 100px)"
      :lang="lang"
      :key="lang"
    />
    <div class="btns">
      <p-radio-group v-model="lang" size="sm">
        <p-radio-button key="vue" value="vue">sfc</p-radio-button>
        <p-radio-button key="jsx" value="jsx">jsx</p-radio-button>
      </p-radio-group>
    </div>
  </template>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue'
  import sfc from './template.vue?raw'
  import jsx from './template.jsx?raw'
  import { onUILoaded } from '../promiseui-utils.ts'
  const isLoaded = ref(false)
  const lang = ref('vue')
  const template = ref(sfc)
  onUILoaded(() => {
    isLoaded.value = true
  })
  watch(lang, (val) => {
    template.value = val === 'vue' ? sfc : jsx
  })
</script>

<style scoped>
  .btns {
    position: fixed;
    right: 20px;
    top: 55px;
    z-index: 99;
  }
</style>
