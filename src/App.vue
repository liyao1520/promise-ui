<template>
  <p-space>
    <p-switch
      v-model="active"
      size="sm"
      active-color="info"
      activeText="成功成功成功"
      inactiveText="失败失败失败"
    ></p-switch>
    <p-switch
      v-model="active"
      activeText="成功成功成功"
      inactiveText="失败失败失败"
      :loading="loading"
      @beforeChange="onBeforeChange"
    ></p-switch>
    <p-switch
      v-model="active"
      size="lg"
      active-color="danger"
      activeText="成功成功成功"
      inactiveText="失败失败失败"
    ></p-switch>
  </p-space>
</template>

<script setup>
  import { ref } from 'vue'

  const active = ref(false)
  const loading = ref(false)
  const onBeforeChange = (value) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true)
      }, 2000)
    })
  }
</script>

<style></style>
