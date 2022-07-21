# Table 表格

## 如何使用

往 Table 传入表头 `columns` 和数据 `dataSource` 进行渲染。

请为 `dataSource` 中的每个数据项提供一个与其他数据项值不同的 `key`，或者使用 `rowKey` 参数指定一个作为主键的属性名，表格的行选择、展开等绝大多数行操作功能都会使用到。

## 基本表格

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

## 空表格

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

## 边框和斑马线条纹

设置`border` 和 `stripe` 开启 边框和斑马线条纹

:::demo column

```vue
<template>
  <p-table :data-source="dataSource" :columns="columns" border stripe />
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

## 对齐方式

设置 `colum` 的 `align` 属性,可选 `'left' | 'center' | 'right'`

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
      title: '作品',
      align: 'left'
    },
    {
      dataIndex: 'author',
      title: '作者',
      align: 'center'
    },
    {
      dataIndex: 'press',
      title: '出版单位',
      align: 'right'
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

## 自定义行属性

如果你想给行增加一些属性或者事件处理器，使用 `row-props `属性。

:::demo column

```vue
<template>
  <p-table :data-source="dataSource" :columns="columns" :row-props="rowProps" />
</template>

<script setup>
  import { reactive } from 'vue'
  import { Message } from 'promiseui-vue'
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

## 过滤和排序

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

## 选中行

可以通过把第一列的类型设为 `rowSelection` 来让行变成可选的。

注意: 必须传入`rowKey`或者`dataSource`对象中提供`key`属性

:::demo column

```vue
<template>
  <p-table
    :data-source="dataSource"
    :columns="columns"
    :row-key="(row) => row.id"
    :rowSelection="rowSelection"
  />
</template>

<script setup>
  import { reactive } from 'vue'
  import { Message } from 'promiseui-vue'
  const rowSelection = reactive({
    selectedRowKeys: [],
    onChange(rowKeys, row) {
      Message.info(`selected: ${JSON.stringify(rowKeys)}`)
      rowSelection.selectedRowKeys = rowKeys
    }
  })
  const dataSource = reactive([
    {
      id: 10000,
      song: 'All Too Well',
      singer: 'Taylor Swift',
      album: '《Red》',
      duration: 329752
    },
    {
      id: 100001,
      song: 'Back To December',
      singer: 'Taylor Swift',
      album: '《Back to December》',
      duration: 363859
    },
    {
      id: 100002,
      song: 'New RomanticsSQ',
      singer: 'Taylor Swift',
      album: '《1989 (Deluxe)》',
      duration: 230466
    },
    {
      id: 100003,
      song: 'Blueming',
      singer: 'IU',
      album: '《Love poem》',
      duration: 217053
    },
    {
      id: 100004,
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

## 受控选中行

:::demo column

```vue
<template>
  <p-space>
    <p-button @click="handleSelect('IU')">只选择歌手IU</p-button>
    <p-button @click="handleSelect('Taylor Swift')"
      >只选择歌手Taylor Swift</p-button
    >
  </p-space>
  <p-table
    :data-source="dataSource"
    :columns="columns"
    :row-key="(row) => row.id"
    :rowSelection="rowSelection"
  />
</template>

<script setup>
  import { reactive, watch } from 'vue'
  import { Message } from 'promiseui-vue'
  const rowSelection = reactive({
    selectedRowKeys: [],
    onChange(rowKeys, row) {
      rowSelection.selectedRowKeys = rowKeys
    }
  })
  watch(
    () => rowSelection.selectedRowKeys,
    () => {
      const rowKeys = rowSelection.selectedRowKeys
      Message.info(`selected: ${JSON.stringify(rowKeys)}`)
    }
  )
  const handleSelect = (singer) => {
    rowSelection.selectedRowKeys = dataSource
      .filter((item) => item.singer === singer)
      .map((item) => item.id)
  }
  const dataSource = reactive([
    {
      id: 10000,
      song: 'All Too Well',
      singer: 'Taylor Swift',
      album: '《Red》',
      duration: 329752
    },
    {
      id: 100001,
      song: 'Back To December',
      singer: 'Taylor Swift',
      album: '《Back to December》',
      duration: 363859
    },
    {
      id: 100002,
      song: 'New RomanticsSQ',
      singer: 'Taylor Swift',
      album: '《1989 (Deluxe)》',
      duration: 230466
    },
    {
      id: 100003,
      song: 'Blueming',
      singer: 'IU',
      album: '《Love poem》',
      duration: 217053
    },
    {
      id: 100004,
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

## 固定头部

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

## 固定头部和列

注意：如果设定了固定的列，你需要同时设定 `scroll-x`。

:::demo column

```vue
<template>
  <p-table
    :data-source="dataSource"
    :columns="columns"
    :max-height="250"
    :scroll-x="1500"
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
      fixed: 'left',
      width: 100
    },
    {
      title: 'Age',
      dataIndex: 'age',
      fixed: 'left',
      width: 100
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

## 自定义渲染样式

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

## 自定义内容

:::demo column

```vue
<template>
  <p-table :data-source="dataSource" :columns="columns" />
</template>

<script setup>
  import { reactive, h } from 'vue'
  import { Tag, Button, Message } from 'promiseui-vue'
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
      title: '出版单位',
      render(row) {
        return h(
          Tag,
          { type: 'primary' },
          {
            default: () => row.press
          }
        )
      }
    },
    {
      title: '操作',
      render(row) {
        return h(
          Button,
          {
            type: 'primary',
            size: 'sm',
            onClick: () => handleClick(row)
          },
          {
            default: () => '阅读'
          }
        )
      }
    }
  ]
  const handleClick = (row) => {
    Message.info(row)
  }
</script>
```

:::

## 自定义头部

`title` 可以是 `string` 或者 `()=>VNodeChild`

:::demo column

```vue
<template>
  <p-table :data-source="dataSource">
    <p-table-column title="索引" width="200px">
      <template #default="{ index }">{{ index + 1 }}</template>
      <template #title>
        <p-input v-model="search" placeholder="模糊搜索" clearable />
      </template>
    </p-table-column>
    <p-table-column title="作品">
      <template #default="{ row }">{{ row.title }}</template>
    </p-table-column>
    <p-table-column title="作者" data-index="author"></p-table-column>
    <p-table-column title="出版单位" data-index="press"></p-table-column>
  </p-table>
</template>

<script setup>
  import { ref, watch } from 'vue'
  const search = ref('')
  watch(search, (val) => {
    dataSource.value = data.filter((item) => {
      return [item.author, item.press, item.title].some((i) => i.includes(val))
    })
  })
  const data = [
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
  ]
  const dataSource = ref(data)
</script>
```

:::

## 可编辑

点击文字可编辑

:::demo column

```vue
<template>
  <p-table :data-source="dataSource" :columns="columns" table-layout="fixed" />
</template>

<script setup>
  import { defineComponent, h, nextTick, reactive, ref } from 'vue'
  import { Input } from 'promiseui-vue'
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

## jsx 写法

如果你使用 `jsx` ,将获得更加灵活的书写体验,可以不用写繁琐的 `h` 函数

:::demo column

```jsx
import { defineComponent, reactive } from 'vue'
import { Table, Button } from 'promiseui-vue'
export default defineComponent({
  setup() {
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
        author: '陈 彦',
        press: '作家出版社'
      }
    ])
    const columns = [
      {
        title: '索引',
        render(row, index) {
          return index + 1
        }
      },
      {
        title: '作品',
        dataIndex: 'title'
      },
      {
        title: '作者',
        dataIndex: 'author'
      },
      {
        title: '出版单位',
        dataIndex: 'press'
      },
      {
        title: '操作',
        render(row, index) {
          return (
            <Button size="sm" type="danger" onClick={() => deleteItem(index)}>
              删除
            </Button>
          )
        }
      }
    ]
    const deleteItem = (index) => {
      dataSource.splice(index, 1)
    }
    return () => (
      <Table
        dataSource={dataSource}
        columns={columns}
        table-layout="fixed"
      ></Table>
    )
  }
})
```

:::

## template 写法

这个只是一个描述 `columns` 的语法糖，所以你不能用其他组件去包裹 `Column`

:::demo column

```vue
<template>
  <p-table :data-source="dataSource" table-layout="fixed">
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
        <p-button size="sm" type="danger" @click="deleteItem(index)"
          >删除</p-button
        >
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

## 省略

省略的前提是要 `table-layout` 为 ` fixed`,

`table-layout` 在 设置 `max-height` 或者 `scroll-x` 属性时,自动会为 `true`

:::demo column

```vue
<template>
  <p-table :dataSource="dataSource" :columns="columns" table-layout="fixed" />
</template>
<script setup>
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: 80
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address 1',
      ellipsis: true
    },
    {
      title: 'Long Column Long Column Long Column',
      dataIndex: 'address',
      key: 'address 2',
      ellipsis: true
    },
    {
      title: 'Long Column Long Column',
      dataIndex: 'address',
      key: 'address 3',
      ellipsis: true
    },
    {
      title: 'Long Column',
      dataIndex: 'address',
      key: 'address 4',
      ellipsis: true
    }
  ]

  const dataSource = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park, New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 2 Lake Park, London No. 2 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park'
    }
  ]
</script>
```

:::
