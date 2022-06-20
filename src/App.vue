<template>
  <div class="demo">
    <p-form-item :rules="[{ required: true }]">
      <p-input v-model="form.user.name" />
    </p-form-item>
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
      name: { min: 10 }
    },
    password: {
      required: true,
      min: 10
    },
    select: {
      required: true
    }
  }
  const size = ref('md')
</script>

<style>
  .demo {
    margin: 50px auto;
  }
</style>
