<template>
  <p-space>
    <p-button @click="validateAll">验证全部</p-button>
    <p-button @click="validatePartial('input1')">验证第一个input</p-button>
    <p-button @click="validatePartial('input2')">验证第二个input</p-button>
    <p-button @click="clearValidate">清空验证</p-button>
  </p-space>
  <p-form ref="formRef" :model="formData" :rules="rules" label-position="top">
    <p-form-item label="最短长度为2" prop="input1">
      <p-input v-model="formData.input1" />
    </p-form-item>
    <p-form-item label="最短长度为3" prop="input2">
      <p-input v-model="formData.input2" />
    </p-form-item>
  </p-form>
</template>

<script setup>
  import { reactive, ref } from 'vue'
  const formRef = ref()
  const formData = reactive({
    input1: '',
    input2: ''
  })
  const rules = {
    input1: {
      required: true,
      min: 2,
      message: '最小长度2'
    },
    input2: {
      required: true,
      min: 3,
      message: '最小长度3'
    }
  }
  const validateAll = () => {
    formRef.value?.validate()
  }
  const validatePartial = (prop) => {
    formRef.value?.validateFields([prop])
  }
  const clearValidate = () => {
    formRef.value?.clearValidate()
  }
</script>

<style></style>
