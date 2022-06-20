<template>
  <div class="demo">
    <p-form ref="formRef" label-position="right" :model="form" :rules="rules" size="sm">
      <p-form-item label="账号" prop="user.name" :trigger="['change', 'blur']">
        <p-input v-model="form.name" />
      </p-form-item>
      <p-form-item label="密码" prop="password">
        <p-input v-model="form.password" />
      </p-form-item>

      <p-form-item label="密码" prop="select">
        <p-select
          v-model="form.select"
          filterable
          :options="[{ value: '1', label: 'xuanxiangyi' }]"
        />
      </p-form-item>
      <p-form-item label="密码" prop="complete" required>
        <p-auto-complete v-model="form.complete" />
      </p-form-item>
      <p-form-item label="密码" prop="radio" required>
        <p-radio-group v-model="form.radio">
          <p-radio label="123" value="1" />
          <p-radio label="456" value="3" />
        </p-radio-group>
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
    user: {
      name: 'china'
    },
    password: 'password1',
    complete: '',
    select: '',
    radio: ''
  })
  const click = () => {
    formRef.value.validate().then((res) => {
      console.log(res)
    })
  }
  const rules = {
    user: {
      name: { required: true, min: 10 }
    },
    password: {
      required: true,
      min: 10
    },
    select: {
      required: true
    }
  }
</script>

<style>
  .demo {
    margin: 50px auto;
  }
</style>
