<template>
  <div class="demo">
    <Table
      :data-source="dataSource"
      :columns="columns"
      :row-key="'address'"
      :row-props="rowProps"
      border
      stripe
      :row-selection="{
        selectedRowKeys: selectedRowKeys,
        fixed: true,
        onChange: onSelectionChange
      }"
      :max-height="400"
      :scroll-x="2000"
    />
  </div>
</template>

<script setup lang="ts">
  import { defineComponent, h, nextTick, reactive, ref, withDirectives } from 'vue'
  import { Button } from '../promiseui/button'
  import { Input } from '../promiseui/input'
  import { Table, TableColumn } from '../promiseui/table'
  const ShowOrEdit = defineComponent({
    props: {
      value: [String, Number],
      onUpdateValue: [Function, Array]
    },
    setup(props) {
      const isEdit = ref(false)
      const inputRef = ref<HTMLInputElement | null>(null)
      const inputValue = ref(props.value)
      function handleOnClick() {
        isEdit.value = true
        nextTick(() => {
          inputRef.value && inputRef.value.focus()
        })
      }
      function handleChange() {
        props.onUpdateValue?.(inputValue.value)
        isEdit.value = false
      }
      return () =>
        h(
          'div',
          {
            onClick: handleOnClick
          },
          isEdit.value
            ? h(Input, {
                ref: inputRef,
                value: inputValue.value,
                'onUpdate:modelValue': (v: string) => {
                  inputValue.value = v
                },
                onChange: handleChange,
                onBlur: handleChange
              })
            : props.value
        )
    }
  })
  const dataSource = reactive(
    Array.from({ length: 100 })
      .fill(1)
      .map((item, index) => {
        return {
          age: index,
          name: 'name' + index,
          address: 'address' + index,
          email: 'email' + index,
          other: {
            phone: 'phone' + String(Math.random()).replace('.', '')
          }
        }
      })
  )

  const deleteItem = (name: string) => {
    const index = dataSource.findIndex((itme) => itme.name === name)
    dataSource.splice(index, 1)
  }

  const columns: TableColumn<typeof dataSource[0]>[] = [
    {
      title: () =>
        h(
          'div',
          {
            style: {
              color: 'red'
            }
          },
          '姓名'
        ),
      dataIndex: 'name',
      render(row, index) {
        return h(ShowOrEdit, {
          value: row.name,
          onUpdateValue(val: string) {
            row.name = val
          }
        })
      },
      colSpan(row, rowIndex) {
        return rowIndex === 0 ? 2 : 1
      },
      rowSpan(row, rowIndex) {
        return rowIndex === 0 ? 2 : 1
      },
      fixed: 'left',
      width: 200
    },
    {
      title: '年龄',
      dataIndex: 'age',
      sorter(a, b) {
        return a.age - b.age
      }
    },
    {
      title: '地址',
      dataIndex: 'address',
      filter: (value, item) => {
        return item.address.includes(value) && false
      },
      filterOptions: [
        { label: 'address3', value: '3' },
        { label: 'address4', value: '4' }
      ]
    },
    {
      title: '地址',
      dataIndex: 'address'
    },
    {
      title: '邮箱',
      dataIndex: 'email'
    },
    {
      title: '电话',
      dataIndex: ['other', 'phone'],
      width: 200
    },
    {
      title: 'action',
      fixed: 'right',
      width: 200,
      render(row, index) {
        return h(
          Button,
          {
            type: 'danger',
            size: 'sm',
            onClick() {
              deleteItem(row.name)
            }
          },
          {
            default: () => '删除'
          }
        )
      }
    }
  ]

  const rowProps = (row: typeof columns[0]) => {
    return {
      style: 'cursor: auto;'
    }
  }
  const selectedRowKeys = ref<(string | number)[]>([])
  const onSelectionChange = (keyrows: (string | number)[], rows: any[]) => {
    selectedRowKeys.value = keyrows
    console.log(rows)
  }
</script>

<style>
  .demo {
    margin: 10px auto;
    width: 900px;
  }
</style>
