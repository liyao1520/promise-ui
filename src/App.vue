<template>
  <div>
    <p-modal v-model="isShow" title="模态框" style="height: 50vh">
      内容
      <template #footer>footer</template>
      <template #header-extra> 噢！ </template>
    </p-modal>
    <p-button @click="isShow = true">show</p-button>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const isShow = ref(true)
</script>

<style></style>
