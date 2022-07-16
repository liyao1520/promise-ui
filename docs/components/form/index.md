


# Form 表单

## 典型表单

最基础的表单包括各种输入表单项，比如 `input`、`select`、`radio`、`checkbox`等。

在每一个 `form` 组件中，你需要一个 `form-item` 字段作为输入项的容器，用于获取值与验证值。

`help-tips` 如果传值会出现一个问好图标,可以给用户提示信息

:::demo

```vue
<template>
  <p-form>
    <p-form-item label="username" help-tips="This is the username.">
      <p-input v-model="formData.username" />
    </p-form-item>
    <p-form-item label="password" help-tips="This is the password.">
      <p-input v-model="formData.password" show-password />
    </p-form-item>
    <p-form-item>
      <p-checkbox v-model="formData.rememberMe" label="Remember me" />
    </p-form-item>
    <p-form-item>
      <p-button type="primary" @click="submit">Submit</p-button>
    </p-form-item>
  </p-form>
</template>
<script setup>
  import { reactive } from 'vue'
  import { Message } from 'promiseui-vue'
  const formData = reactive({
    username: '',
    password: '',
    rememberMe: true
  })
  const submit = () => {
    Message.info(`username: "${formData.username}" , password: "${formData.password}"`)
  }
</script>
```

:::

## 表单样式

:::demo column

```vue
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
    <pre><code>{{  JSON.stringify(formData, null, 2) }}</code></pre>
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
    padding: 0 20px;
  }
</style>
```

:::

## 行内表单

设置 `inline` , 当垂直方向空间受限且表单较简单时，可以在一行内放置表单。

:::demo column

```vue
<template>
  <p-form inline>
    <p-form-item label="姓名">
      <p-input v-model="formData.name" placeholder="请输入姓名" />
    </p-form-item>
    <p-form-item label="年龄">
      <p-input v-model="formData.age" placeholder="请输入年龄" />
    </p-form-item>
    <p-form-item label="电话号码">
      <p-input v-model="formData.phone" placeholder="请输入电话号码" />
    </p-form-item>
    <p-form-item>
      <p-button>查询</p-button>
    </p-form-item>
  </p-form>
</template>
<script setup>
  import { reactive } from 'vue'
  const formData = reactive({
    name: '',
    age: '',
    phone: ''
  })
</script>
```

:::

## 表单验证

:::demo

```vue
<template>
  <div class="demo">
    <p-form ref="formRef" :model="formData" :rules="rules">
      <p-form-item label="用户名" prop="user.name">
        <p-input v-model="formData.user.name" placeholder="请输入用户名" />
      </p-form-item>
      <p-form-item label="年龄" prop="user.age">
        <p-input v-model="formData.user.age" type="number" placeholder="请输入年龄" />
      </p-form-item>
      <p-form-item label="学历" prop="education">
        <p-select
          v-model="formData.education"
          placeholder="请选择学历"
          :options="[
            { label: '本科', value: '本科' },
            { label: '专科', value: '专科' }
          ]"
        />
      </p-form-item>
      <p-form-item label="邮箱" prop="email">
        <p-auto-complete
          v-model="formData.email"
          placeholder="请输入"
          :options="autoCompleteOptions"
        />
      </p-form-item>
      <p-form-item label="性别" prop="user.gender">
        <p-radio-group v-model="formData.user.gender">
          <p-radio value="男" label="男" />
          <p-radio value="女" label="女" />
        </p-radio-group>
      </p-form-item>
      <p-form-item label="爱好" prop="likes">
        <p-checkbox-group v-model="formData.likes">
          <p-checkbox value="唱" label="唱" />
          <p-checkbox value="跳" label="跳" />
          <p-checkbox value="rap" label="rap" />
        </p-checkbox-group>
      </p-form-item>
      <p-form-item>
        <p-button type="primary" @click="submit">提交</p-button>
      </p-form-item>
    </p-form>
  </div>
</template>

<script setup>
  import { reactive, ref, watchEffect } from 'vue'
  import { Message } from 'promiseui-vue'
  const formRef = ref()
  const formData = reactive({
    user: {
      name: '',
      age: '',
      gender: '男'
    },
    email: '',
    education: '',
    likes: []
  })

  const rules = {
    user: {
      name: {
        required: true,
        message: '用户名不能为空'
      },
      age: {
        required: true,
        validator(rule, value) {
          const val = parseInt(value)
          return val >= 12 && val <= 100
        },
        message: '年龄必须>=12且<=100'
      },
      gender: { required: true }
    },
    email: {
      required: true,
      type: 'email'
    },
    education: {
      required: true
    },
    likes: {
      type: 'array',
      required: true
    }
  }

  const autoCompleteOptions = ref([])
  watchEffect(() => {
    const email = formData.email
    autoCompleteOptions.value = ['@gmail.com', '@163.com', '@qq.com'].map((suffix) => {
      const prefix = email.split('@')[0]
      return {
        label: prefix + suffix,
        value: prefix + suffix
      }
    })
  })
  const submit = () => {
    formRef.value?.validate((valid) => {
      if (valid) {
        Message.success('提交成功~')
      } else {
        Message.error('提交失败,请验证表单正确性~')
      }
    })
  }
</script>
<style>
  .demo {
    padding: 0 20px;
  }
</style>
```

:::

## 只执行部分规则

执行部分规则可以使用 `form.validateFields`, 传入 `fields` 指定部分字段进行验证,

清除验证可以用 `form.clearValidate` 传入 `fields` 指定部分字段进行清除,若 `fields` 没传,则清除全部

:::demo

```vue
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
```

:::

## 必填项

除了设置 `form rules`,也可以设置`form-item` 的 `required` 属性,如果为 `truly` 则为 必填项, 当 `required` 为 `string`类型时,为作为 `rule` 的 `message`

必选项会出现小红点,若不想要,则设置`show-require-mark`为`false`

:::demo

```vue
<template>
  <p-form :model="formData">
    <p-form-item label="名字" prop="name" required="名字不能为空">
      <p-input v-model="formData.name" />
    </p-form-item>
    <p-form-item label="年龄" prop="age" required="年龄不能为空" :showRequireMark="false">
      <p-input v-model="formData.age" />
    </p-form-item>
  </p-form>
</template>

<script setup>
  import { reactive, ref } from 'vue'
  const formRef = ref()
  const formData = reactive({
    name: '',
    age: ''
  })
</script>
```

:::

## 自定义 labelWidth

`labelWidth` 默认为`auto`,会根据所有的 `form-item` 的 `label` 宽度计算出最大值,作为`labelWidth` 的宽度, 若不想这样,可以传固定值

:::demo

```vue
<template>
  <p-form :model="formData" labelWidth="100px">
    <p-form-item label="名字" prop="name" required="名字不能为空">
      <p-input v-model="formData.name" />
    </p-form-item>
    <p-form-item label="年龄" prop="age" required="年龄不能为空">
      <p-input v-model="formData.age" />
    </p-form-item>
  </p-form>
</template>

<script setup>
  import { reactive, ref } from 'vue'
  const formRef = ref()
  const formData = reactive({
    name: '',
    age: ''
  })
</script>
```

:::

## 展示 label

设置 `showLabel` 确定是否展示 label

:::demo

```vue
<template>
  <p-space> 展示label <p-switch v-model="showLabel" /> </p-space>

  <p-form :model="formData" :showLabel="showLabel">
    <p-form-item label="名字" prop="name" required="名字不能为空">
      <p-input v-model="formData.name" />
    </p-form-item>
    <p-form-item label="年龄" prop="age" required="年龄不能为空">
      <p-input v-model="formData.age" />
    </p-form-item>
  </p-form>
</template>

<script setup>
  import { reactive, ref } from 'vue'
  const formRef = ref()
  const showLabel = ref(true)
  const formData = reactive({
    name: '',
    age: ''
  })
</script>
```

:::
