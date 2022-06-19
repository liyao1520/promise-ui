<template>
  <div class="demo">
    <p-form label-position="right" :model="form" ref="formRef" :rules="rules">
      <p-form-item label="账号" name="name" :trigger="['change', 'blur']">
        <p-input v-model="form.name" />
      </p-form-item>
      <p-form-item label="密码" name="password">
        <p-input v-model="form.password" />
      </p-form-item>

      <p-form-item label="密码" name="select">
        <p-select
          v-model="form.select"
          filterable
          :options="[{ value: '1', label: 'xuanxiangyi' }]"
        />
      </p-form-item>
      <p-form-item label="密码" name="complete">
        <p-auto-complete v-model="form.complete" />
      </p-form-item>
      <p-form-item label="密码">
        <p-button @click="click">提交</p-button>
      </p-form-item>
    </p-form>
  </div>
</template>

<script setup>
  import { reactive, ref } from 'vue'
  const formRef = ref()
  const form = reactive({
    name: 'china',
    password: 'password1',
    complete: 'complete1',
    select: ''
  })
  const click = () => {
    formRef.value.validate().then((res) => {
      console.log(res)
    })
  }
  const rules = {
    name: {
      required: true,
      min: 10
    },
    password: {
      required: true,
      min: 10
    },
    select: {
      required: true
    },
    complete: {
      required: true,
      min: 10
    }
  }
</script>

<style>
  .demo {
    margin: 50px auto;
  }
</style>
