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
  import { ref } from 'vue'
  import { Table, TableColumn } from '../promiseui/table'
  const dataSource = Array.from({ length: 100 })
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
  const columns: TableColumn[] = [
    {
      title: '姓名',
      dataIndex: 'name',
      colSpan(row, rowIndex) {
        return rowIndex === 0 ? 2 : 1
      },
      rowSpan(row, rowIndex) {
        return rowIndex === 0 ? 2 : 1
      },
      fixed: 'left',
      width: 100
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
      fixed: 'right',
      width: 200
    }
  ]

  const rowProps = (row: typeof columns[0]) => {
    return {
      style: 'cursor: pointer;'
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
