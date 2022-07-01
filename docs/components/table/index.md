# Table 表格

### 如何使用

往 Table 传入表头 `columns` 和数据 `dataSource` 进行渲染。

请为 `dataSource` 中的每个数据项提供一个与其他数据项值不同的 `key`，或者使用 `rowKey` 参数指定一个作为主键的属性名，表格的行选择、展开等绝大多数行操作功能都会使用到。

### 基本表格

对于表格，最基本的两个参数为 `dataSource` 和 `columns`，前者为数据项，后者为每列的配置，二者皆为数组类型。

:::demo column

```vue
<template>
  <p-table :data-source="dataSource" :columns="columns" />
</template>

<script setup>
  import { reactive } from 'vue'
  const dataSource = reactive([
    {
      title: '《人世间》',
      author: '梁晓声',
      press: '中国青年出版社'
    },
    {
      title: '《牵风记》',
      author: '徐怀中',
      press: '人民文学出版社'
    },
    {
      title: '《北上》',
      author: '徐则臣',
      press: '北京十月文艺出版社'
    },
    {
      title: '《主角》',
      author: '陈　彦',
      press: '作家出版社'
    }
  ])
  const columns = [
    {
      dataIndex: 'title',
      title: '作品'
    },
    {
      dataIndex: 'author',
      title: '作者'
    },
    {
      dataIndex: 'press',
      title: '出版单位'
    },
    {
      title: '更多',
      render() {
        return '...'
      }
    }
  ]
</script>
```

:::

### 空表格

:::demo column

```vue
<template>
  <p-table :data-source="dataSource" :columns="columns" />
</template>

<script setup>
  import { reactive } from 'vue'
  const dataSource = reactive([])
  const columns = [
    {
      dataIndex: 'title',
      title: '作品'
    },
    {
      dataIndex: 'author',
      title: '作者'
    },
    {
      dataIndex: 'press',
      title: '出版单位'
    },
    {
      title: '更多',
      render() {
        return '...'
      }
    }
  ]
</script>
```

:::

### 边框和斑马线条纹

设置`border` 和 `striped` 开启 边框和斑马线条纹

:::demo column

```vue
<template>
  <p-table :data-source="dataSource" :columns="columns" border striped />
</template>

<script setup>
  import { reactive } from 'vue'
  const dataSource = reactive([
    {
      title: '《人世间》',
      author: '梁晓声',
      press: '中国青年出版社'
    },
    {
      title: '《牵风记》',
      author: '徐怀中',
      press: '人民文学出版社'
    },
    {
      title: '《北上》',
      author: '徐则臣',
      press: '北京十月文艺出版社'
    },
    {
      title: '《主角》',
      author: '陈　彦',
      press: '作家出版社'
    }
  ])
  const columns = [
    {
      dataIndex: 'title',
      title: '作品'
    },
    {
      dataIndex: 'author',
      title: '作者'
    },
    {
      dataIndex: 'press',
      title: '出版单位'
    },
    {
      title: '更多',
      render() {
        return '...'
      }
    }
  ]
</script>
```

:::

### 自定义行属性

如果你想给行增加一些属性或者事件处理器，使用 `row-props `属性。

:::demo column

```vue
<template>
  <p-table :data-source="dataSource" :columns="columns" :row-props="rowProps" />
</template>

<script setup>
  import { reactive } from 'vue'
  import { Message } from 'promiseui'
  const dataSource = reactive([
    {
      title: '《人世间》',
      author: '梁晓声',
      press: '中国青年出版社'
    },
    {
      title: '《牵风记》',
      author: '徐怀中',
      press: '人民文学出版社'
    },
    {
      title: '《北上》',
      author: '徐则臣',
      press: '北京十月文艺出版社'
    },
    {
      title: '《主角》',
      author: '陈　彦',
      press: '作家出版社'
    }
  ])
  const columns = [
    {
      dataIndex: 'title',
      title: '作品'
    },
    {
      dataIndex: 'author',
      title: '作者'
    },
    {
      dataIndex: 'press',
      title: '出版单位'
    },
    {
      title: '更多',
      render() {
        return '...'
      }
    }
  ]
  const rowProps = (row, index) => {
    return {
      style: 'cursor: pointer;',
      onClick: () => {
        Message.info(`${row.title}-${row.author}`)
      }
    }
  }
</script>
```

:::

### 过滤和排序

设置 `sorter` , `filter` 和`filterOption`

:::demo column

```vue
<template>
  <p-table :data-source="dataSource" :columns="columns" />
</template>

<script setup>
  import { reactive } from 'vue'
  const dataSource = reactive([
    {
      song: 'All Too Well',
      singer: 'Taylor Swift',
      album: '《Red》',
      duration: 329752
    },
    {
      song: 'Back To December',
      singer: 'Taylor Swift',
      album: '《Back to December》',
      duration: 363859
    },
    {
      song: 'New RomanticsSQ',
      singer: 'Taylor Swift',
      album: '《1989 (Deluxe)》',
      duration: 230466
    },
    {
      song: 'Blueming',
      singer: 'IU',
      album: '《Love poem》',
      duration: 217053
    },
    {
      song: 'Celebrity',
      singer: 'IU',
      album: '《Celebrity》',
      duration: 195546
    }
  ])
  const columns = [
    {
      title: '',
      width: 50,
      render(row, index) {
        return index + 1
      }
    },
    {
      dataIndex: 'song',
      title: '歌曲'
    },
    {
      dataIndex: 'singer',
      title: '歌手',
      filter(value, row) {
        return row.singer === value
      },
      filterOptions: [
        {
          label: 'IU',
          value: 'IU'
        },
        {
          label: 'Taylor Swift',
          value: 'Taylor Swift'
        }
      ]
    },
    {
      dataIndex: 'album',
      title: '专辑'
    },
    {
      dataIndex: 'duration',
      title: '时长',
      render(row) {
        const t = row.duration / 1000
        const s = parseInt(t % 60)
        return `${parseInt(t / 60)}:${s >= 10 ? s : '0' + s}`
      },
      sorter(row1, row2) {
        return row1.duration - row2.duration
      }
    }
  ]
</script>
```

:::

### 固定头部

在展示大量数据的时候通过设定 max-height 来固定头部、滚动数据。

:::demo column

```vue
<template>
  <p-table :data-source="dataSource" :columns="columns" :max-height="250" />
</template>

<script setup>
  import { reactive } from 'vue'
  const dataSource = reactive(
    Array.from({ length: 40 }).map((_, index) => ({
      key: index,
      name: `Edward King ${index}`,
      age: 32,
      address: `London, Park Lane no. ${index}`
    }))
  )
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name'
    },
    {
      title: 'Age',
      dataIndex: 'age'
    },
    {
      title: 'Address',
      dataIndex: 'address'
    }
  ]
</script>
```

:::

### 固定头部和列

注意：如果设定了固定的列，你需要同时设定 `scroll-x`。

:::demo column

```vue
<template>
  <p-table :data-source="dataSource" :columns="columns" :max-height="250" :scroll-x="2000" />
</template>

<script setup>
  import { reactive } from 'vue'
  const dataSource = reactive(
    Array.from({ length: 40 }).map((_, index) => ({
      key: index,
      name: `Edward King ${index}`,
      age: 32,
      address: `London, Park Lane no. ${index}`
    }))
  )
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      fixed: 'left'
    },
    {
      title: 'Age',
      dataIndex: 'age',
      fixed: 'left'
    },
    {
      title: 'Row1',
      render() {
        return 'Row1'
      }
    },
    {
      title: 'Row2',
      render() {
        return 'Row2'
      }
    },
    {
      title: 'Row3',
      render() {
        return 'Row3'
      }
    },
    {
      title: 'Address',
      dataIndex: 'address',
      fixed: 'right'
    }
  ]
</script>
```

:::

### 自定义渲染样式

想要之定义渲染样式可以使用`row-props` 和 `cell-props`

:::demo column

```vue
<template>
  <p-table
    :data-source="dataSource"
    :columns="columns"
    :max-height="250"
    :scroll-x="2000"
    :row-props="rowProps"
    :cell-props="cellProps"
  />
</template>

<script setup>
  import { reactive } from 'vue'
  const dataSource = reactive(
    Array.from({ length: 40 }).map((_, index) => ({
      key: index,
      name: `Edward King ${index}`,
      age: 32,
      address: `London, Park Lane no. ${index}`
    }))
  )
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      fixed: 'left'
    },
    {
      title: 'Age',
      dataIndex: 'age',
      fixed: 'left'
    },
    {
      title: 'Row1',
      render() {
        return 'Row1'
      }
    },
    {
      title: 'Row2',
      render() {
        return 'Row2'
      }
    },
    {
      title: 'Row3',
      render() {
        return 'Row3'
      }
    },
    {
      title: 'Address',
      dataIndex: 'address',
      fixed: 'right'
    }
  ]
  const cellProps = (row, col, rowIndex, colIndex) => {
    return {
      style: {
        backgroundColor: colIndex === 1 ? 'antiquewhite' : 'inherit',
        color: colIndex === 1 ? '#333' : 'inherit'
      }
    }
  }
  const rowProps = (row, rowIndex) => {
    return {
      style: {
        color: rowIndex % 2 ? 'red' : 'inherit'
      }
    }
  }
</script>
```

:::

### 可编辑

点击文字可编辑

:::demo column

```vue
<template>
  <p-table :data-source="dataSource" :columns="columns" table-layout="fixed" />
</template>

<script setup>
  import { defineComponent, h, nextTick, reactive, ref } from 'vue'
  import { Input } from 'promiseui'
  const ShowOrEdit = defineComponent({
    props: {
      value: [String, Number],
      onUpdateValue: [Function, Array]
    },
    setup(props) {
      const isEdit = ref(false)
      const inputRef = ref(null)
      const inputValue = ref(props.value)
      function handleOnClick() {
        isEdit.value = true
        nextTick(() => {
          inputRef.value.focus()
        })
      }
      function handleChange() {
        props.onUpdateValue(inputValue.value)
        isEdit.value = false
      }
      return () =>
        h(
          'div',
          {
            onClick: handleOnClick,
            style: 'height:32px;line-height:32px;text-indent:10px'
          },
          isEdit.value
            ? h(Input, {
                ref: inputRef,
                value: inputValue.value,
                'onUpdate:modelValue': (v) => {
                  inputValue.value = v
                },
                onChange: handleChange,
                onBlur: handleChange
              })
            : props.value
        )
    }
  })
  const dataSource = reactive([
    {
      song: 'All Too Well',
      singer: 'Taylor Swift',
      album: '《Red》',
      duration: 329752
    },
    {
      song: 'Back To December',
      singer: 'Taylor Swift',
      album: '《Back to December》',
      duration: 363859
    },
    {
      song: 'New RomanticsSQ',
      singer: 'Taylor Swift',
      album: '《1989 (Deluxe)》',
      duration: 230466
    },
    {
      song: 'Blueming',
      singer: 'IU',
      album: '《Love poem》',
      duration: 217053
    },
    {
      song: 'Celebrity',
      singer: 'IU',
      album: '《Celebrity》',
      duration: 195546
    }
  ])
  const columns = [
    {
      dataIndex: 'song',
      title: '歌曲',
      render(row, rowIndex) {
        return h(ShowOrEdit, {
          value: row.song,
          onUpdateValue(v) {
            dataSource[rowIndex].song = v
          }
        })
      }
    },
    {
      dataIndex: 'singer',
      title: '歌手',
      render(row, rowIndex) {
        return h(ShowOrEdit, {
          value: row.singer,
          onUpdateValue(v) {
            dataSource[rowIndex].singer = v
          }
        })
      },
      filter(value, row) {
        return row.singer === value
      },
      filterOptions: [
        {
          label: 'IU',
          value: 'IU'
        },
        {
          label: 'Taylor Swift',
          value: 'Taylor Swift'
        }
      ]
    },
    {
      dataIndex: 'album',
      render(row, rowIndex) {
        return h(ShowOrEdit, {
          value: row.album,
          onUpdateValue(v) {
            dataSource[rowIndex].album = v
          }
        })
      },
      title: '专辑'
    },
    {
      dataIndex: 'duration',
      title: '时长',
      render(row) {
        const t = row.duration / 1000
        const s = parseInt(t % 60)
        return `${parseInt(t / 60)}:${s >= 10 ? s : '0' + s}`
      },
      sorter(row1, row2) {
        return row1.duration - row2.duration
      }
    }
  ]
</script>
```

:::

### template 写法

这个只是一个描述 `columns` 的语法糖，所以你不能用其他组件去包裹 `Column`

:::demo column

```vue
<template>
  <p-table :data-source="dataSource">
    <p-table-column title="索引">
      <template #default="{ index }">{{ index + 1 }}</template>
    </p-table-column>
    <p-table-column title="作品">
      <template #default="{ row }">{{ row.title }}</template>
    </p-table-column>
    <p-table-column title="作者" dataIndex="author"></p-table-column>
    <p-table-column title="出版单位" dataIndex="press"></p-table-column>
    <p-table-column title="操作">
      <template #default="{ index }">
        <p-button size="sm" type="danger" @click="deleteItem(index)">删除</p-button>
      </template>
    </p-table-column>
  </p-table>
</template>

<script setup>
  import { reactive } from 'vue'
  const dataSource = reactive([
    {
      title: '《人世间》',
      author: '梁晓声',
      press: '中国青年出版社'
    },
    {
      title: '《牵风记》',
      author: '徐怀中',
      press: '人民文学出版社'
    },
    {
      title: '《北上》',
      author: '徐则臣',
      press: '北京十月文艺出版社'
    },
    {
      title: '《主角》',
      author: '陈　彦',
      press: '作家出版社'
    }
  ])
  const deleteItem = (index) => {
    dataSource.splice(index, 1)
  }
</script>
```

:::
