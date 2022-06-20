<template>
  <div class="demo">
    <p-space>
      <p-radio-group v-model="formSize">
        <p-radio-button value="sm">小</p-radio-button>
        <p-radio-button value="md">中</p-radio-button>
        <p-radio-button value="lg">大</p-radio-button>
      </p-radio-group>
      <p-radio-group v-model="labelPosition">
        <p-radio-button value="left">left</p-radio-button>
        <p-radio-button value="center">center</p-radio-button>
        <p-radio-button value="right">right</p-radio-button>
        <p-radio-button value="top">top</p-radio-button>
      </p-radio-group>
    </p-space>
    <hr />
    <p-form :size="formSize" :label-position="labelPosition">
      <p-form-item label="textInput">
        <p-input v-model="formData.textInput" placeholder="请输入" />
      </p-form-item>
      <p-form-item label="numberInput">
        <p-input v-model="formData.numberInput" type="number" placeholder="请输入" />
      </p-form-item>
      <p-form-item label="select">
        <p-select v-model="formData.select" placeholder="请选择" :options="selectOptions" />
      </p-form-item>
      <p-form-item label="autoComplete">
        <p-auto-complete
          v-model="formData.autoComplete"
          placeholder="请输入"
          :options="autoCompleteOptions"
        />
      </p-form-item>
      <p-form-item label="radio">
        <p-radio-group v-model="formData.radio">
          <p-radio value="radio1" label="radio1" />
          <p-radio value="radio2" label="radio2" />
          <p-radio value="radio3" label="radio3" />
        </p-radio-group>
      </p-form-item>
      <p-form-item label="radioButton">
        <p-radio-group v-model="formData.radioButton">
          <p-radio-button value="radio1">radio1</p-radio-button>
          <p-radio-button value="radio2">radio2</p-radio-button>
          <p-radio-button value="radio3">radio3</p-radio-button>
        </p-radio-group>
      </p-form-item>
      <p-form-item label="switch">
        <p-switch v-model="formData.switch" />
      </p-form-item>
      <p-form-item label="checkbox">
        <p-checkbox-group v-model="formData.checkbox">
          <p-checkbox label="checkbox1" value="checkbox1" />
          <p-checkbox label="checkbox2" value="checkbox2" />
          <p-checkbox label="checkbox3" value="checkbox3" />
        </p-checkbox-group>
      </p-form-item>
    </p-form>
    <pre>
      {{ formData }}
    </pre>
  </div>
</template>

<script setup>
  import { reactive, ref, watchEffect } from 'vue'
  const formSize = ref('md')
  const labelPosition = ref('right')
  const formData = reactive({
    textInput: '',
    numberInput: '',
    select: '',
    autoComplete: '',
    radio: '',
    radioButton: '',
    switch: false,
    checkbox: []
  })
  const selectOptions = [
    {
      label: 'select1',
      value: 'select1'
    },
    {
      label: 'select2',
      value: 'select2'
    },
    {
      label: 'select3',
      value: 'select3'
    }
  ]
  const autoCompleteOptions = ref([])
  watchEffect(() => {
    const autoCompleteValue = formData.autoComplete
    autoCompleteOptions.value = ['@gmail.com', '@163.com', '@qq.com'].map((suffix) => {
      const prefix = autoCompleteValue.split('@')[0]
      return {
        label: prefix + suffix,
        value: prefix + suffix
      }
    })
  })
</script>

<style>
  .demo {
    width: 500px;
    margin: 10px auto;
  }
</style>
