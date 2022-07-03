# Select 选择器

### 基础用法

`v-model` 绑定选项值,`options`指定选项

:::demo

```vue
<template>
  <p-select v-model="selected" :options="options" @change="onChange" />
  <h4>selected value: {{ selected }}</h4>
</template>
<script setup>
  import { ref } from 'vue'
  import { Message } from 'promiseui-vue'
  const selected = ref('1')
  const options = [
    {
      label: '选项1',
      value: '1'
    },
    {
      label: '选项2',
      value: '2'
    },
    {
      label: '选项3',
      value: '3'
    },
    {
      label: '选项4',
      value: '4'
    }
  ]
  const onChange = (item) => {
    Message.success(` label: ${item.label}  value :${item.value} `)
  }
</script>
```

:::

### disabled

`select` 的 `disabled` 和 `option` 的 `disabled`

:::demo

```vue
<template>
  <p-select v-model="selected" :options="options" />
  <h4>disabled select</h4>
  <p-select v-model="selected" :options="options" disabled />
</template>
<script setup>
  import { ref } from 'vue'
  const selected = ref('1')
  const options = [
    {
      label: '选项1',
      value: '1'
    },
    {
      label: '选项2',
      value: '2',
      disabled: true
    },
    {
      label: '选项3',
      value: '3'
    },
    {
      label: '选项4',
      value: '4'
    }
  ]
</script>
```

:::

### 基础多选

设置 `multiple` 属性即可启用多选， 此时 `v-model` 的值为当前选中值所组成的数组。

:::demo

```vue
<template>
  <p-select v-model="selected" :options="options" multiple />
  <h4>selected value :{{ selected }}</h4>
</template>
<script setup>
  import { ref } from 'vue'
  const selected = ref(['1'])
  const options = [
    {
      label: '选项1',
      value: '1'
    },
    {
      label: '选项2',
      value: '2'
    },
    {
      label: '选项3',
      value: '3'
    },
    {
      label: '选项4',
      value: '4'
    }
  ]
</script>
```

:::

### 筛选选项

`filterable` 属性即可启用筛选功能 `filter-method` 自定义筛选方法, 接收 两个参数 输入框值`inputValue` 和 选项值`optionItem`

:::demo

```vue
<template>
  <p-space>
    <h4>默认</h4>
    <p-select v-model="active" :options="options" filterable />
    <h4>自定义 filter-method</h4>
    <p-select v-model="active" :options="options" filterable :filter-method="filterMethod" />
  </p-space>
</template>
<script setup>
  import { ref, watch } from 'vue'
  const list = []
  for (let i = 0; i < 20; i++) {
    list[i] = {
      label: 'label' + i,
      value: i
    }
  }
  const active = ref(1)
  const options = ref(list)
  const filterMethod = (inputValue, optionItem) =>
    optionItem.label.includes(inputValue.replaceAll(' ', ''))
</script>
```

:::

### 可清空

设置 `clearable` 属性

:::demo

```vue
<template>
  <p-select v-model="active" :options="options" clearable />
  <h4>selected value: {{ active }}</h4>
  <p-select v-model="actives" :options="options" multiple clearable />
  <h4>selected value: {{ actives }}</h4>
</template>
<script setup>
  import { ref } from 'vue'
  const active = ref('1')
  const actives = ref(['1'])
  const options = [
    {
      label: '选项1',
      value: '1'
    },
    {
      label: '选项2',
      value: '2'
    },
    {
      label: '选项3',
      value: '3'
    },
    {
      label: '选项4',
      value: '4'
    }
  ]
</script>
```

:::

### 创建新的选项

设置 `addible` 属性 ,

要想 `addible` 生效 必须设置 `filterable` 为 `true`

按 Enter(回车)键或者手动选择 即可创建新选项

:::demo

```vue
<template>
  <p-select v-model="actives" :options="options" multiple filterable addible />
  <h4>selected value: {{ actives }}</h4>
</template>
<script setup>
  import { ref } from 'vue'

  const actives = ref(['1'])
  const options = [
    {
      label: '选项1',
      value: '1'
    },
    {
      label: '选项2',
      value: '2'
    },
    {
      label: '选项3',
      value: '3'
    },
    {
      label: '选项4',
      value: '4'
    }
  ]
</script>
```

:::

### 大量数据

`select` 使用了虚拟滚动技术,支持 大量数据

:::demo

```vue
<template>
  <h4>先来个 10 万条数据</h4>
  <p-select v-model="actives" clearable :options="options" multiple filterable></p-select>
  <h4>actives value :{{ actives }}</h4>
</template>

<script setup>
  import { ref } from 'vue'
  const list = []
  for (let i = 0; i < 100000; i++) {
    list[i] = {
      label: 'label' + i,
      value: i
    }
  }
  const options = ref(list)
  const actives = ref([2])
</script>
```

:::

### 多选数量限制

设置`multipleLimit` 最多选择项

:::demo

```vue
<template>
  <h4>最多选三个</h4>
  <p-select v-model="actives" :options="options" multiple :multipleLimit="3"></p-select>
  <h4>actives value :{{ actives }}</h4>
</template>

<script setup>
  import { ref } from 'vue'
  const list = []
  for (let i = 0; i < 10; i++) {
    list[i] = {
      label: 'label' + i,
      value: i
    }
  }
  const options = ref(list)
  const actives = ref([2])
</script>
```

:::

### 显示标签数量

设置 `maxTagCount` 属性

:::demo

```vue
<template>
  <h4>两个以上折叠标签, hover 可显示隐藏掉的标签</h4>
  <p-select v-model="actives" :options="options" multiple :maxTagCount="2"></p-select>
  <h4>actives value :{{ actives }}</h4>
</template>

<script setup>
  import { ref } from 'vue'
  const list = []
  for (let i = 0; i < 10; i++) {
    list[i] = {
      label: 'label' + i,
      value: i
    }
  }
  const options = ref(list)
  const actives = ref([2])
</script>
```

:::

### 显示 options 数量

设置 `maxOptionCount` 属性

:::demo

```vue
<template>
  <h4>options一页最多显示5个</h4>
  <p-select v-model="actives" :options="options" multiple :maxOptionCount="5"></p-select>
  <h4>actives value :{{ actives }}</h4>
</template>

<script setup>
  import { ref } from 'vue'
  const list = []
  for (let i = 0; i < 10; i++) {
    list[i] = {
      label: 'label' + i,
      value: i
    }
  }
  const options = ref(list)
  const actives = ref([2])
</script>
```

:::

### 多选标签类型

设置 `tagType` 属性

:::demo

```vue
<template>
  <h4>设置标签类型</h4>
  <p-select v-model="actives1" :options="options1" multiple tagType="success"></p-select>
  <h4>单独选项标签类型</h4>
  <p-select v-model="actives2" :options="options2" multiple></p-select>
</template>

<script setup>
  import { ref } from 'vue'
  const list1 = []
  const list2 = []
  const tagTypes = ['primary', 'success', 'danger', 'warning', 'info', 'default']

  for (let i = 0; i < 10; i++) {
    list1[i] = {
      label: 'label' + i,
      value: i
    }
    list2[i] = {
      label: 'label' + i,
      value: i,
      tagType: tagTypes[i % 6]
    }
  }
  const options1 = ref(list1)
  const options2 = ref(list2)
  const actives1 = ref([0, 1, 2, 3, 4, 5])
  const actives2 = ref([0, 1, 2, 3, 4, 5])
</script>
```

:::

### placeholder

设置 `placeholder` 属性,在没有选择任何值时展示

:::demo

```vue
<template>
  <h4>placeholder="请选择"</h4>
  <p-select v-model="actives" :options="options" placeholder="请选择" clearable></p-select>
</template>

<script setup>
  import { ref } from 'vue'
  const list = []
  for (let i = 0; i < 10; i++) {
    list[i] = {
      label: 'label' + i,
      value: i
    }
  }
  const options = ref(list)
  const actives = ref()
</script>
```

:::

### 空数据插槽

当 `filterable` 为 `true` , 过滤数据没有匹配到时显示的内容

:::demo

```vue
<template>
  <p-space>
    <p-select v-model="active" :options="options" filterable>
      <template #noMatch>
        <div class="no-match">没有搜索到内容...</div>
      </template>
    </p-select>
  </p-space>
</template>
<script setup>
  import { ref, watch } from 'vue'
  const list = []
  for (let i = 0; i < 20; i++) {
    list[i] = {
      label: 'label' + i,
      value: i
    }
  }
  const active = ref(1)
  const options = ref(list)
</script>
<style>
  .no-match {
    text-align: center;
    font-size: 25px;
    padding: 20px;
  }
</style>
```

:::

### 自定义选项渲染

`renderLabel` 接收一个函数需要返回`vnode`

:::demo

```vue
<template>
  <p-space>
    <p-select v-model="active" :options="options" :renderLabel="renderLabel" />
  </p-space>
</template>
<script setup>
  import { ref, watch, h } from 'vue'
  import { Icon } from 'promiseui-vue'
  import { MusicalNotesSharp, FlameSharp } from '@vicons/ionicons5'

  const list = [
    'All Too Well',
    'evermore',
    'Cruel Summer',
    'You Belong With Me (Taylor’s Version)',
    "Love Story (Taylor's Version)",
    'exile',
    'Call It What You Want (Commentary)',
    'London Boy',
    'This Love (Commentary)',
    'Back To December'
  ].map((item) => ({ label: item, value: item }))

  const active = ref(1)
  const options = ref(list)
  const renderLabel = ({ row, rows, index }) => {
    return h(
      'div',
      {
        style: {
          color: index <= 2 ? 'red' : 'inherit'
        }
      },
      [
        h(Icon, { component: index <= 2 ? FlameSharp : MusicalNotesSharp }),
        h(
          'span',
          {
            style: 'padding: 0 10px'
          },
          row.label
        )
      ]
    )
  }
</script>
```

:::

### 尺寸

:::demo

```vue
<template>
  <p-space>
    <p-select v-model="selected" :options="options" size="sm" />
    <p-select v-model="selected" :options="options" size="md" />
    <p-select v-model="selected" :options="options" size="lg" />
  </p-space>
</template>
<script setup>
  import { ref } from 'vue'
  const selected = ref('1')
  const options = [
    {
      label: '选项1',
      value: '1'
    },
    {
      label: '选项2',
      value: '2'
    },
    {
      label: '选项3',
      value: '3'
    },
    {
      label: '选项4',
      value: '4'
    }
  ]
</script>
```

:::
