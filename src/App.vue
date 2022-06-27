<template>
  <div class="demo">
    <Table :data-source="dataSource" :columns="columns" :row-props="rowProps" border stripe />
  </div>
</template>

<script setup lang="ts">
  import { Table, TableColumn } from '../promiseui/table'
  const dataSource = Array.from({ length: 10 })
    .fill(1)
    .map((item, index) => {
      return {
        age: index,
        name: 'name' + index,
        address: 'address' + index,
        email: 'email' + index,
        phone: 'phone' + String(Math.random()).replace('.', '')
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
      }
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
      dataIndex: 'address'
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
      dataIndex: 'phone'
    }
  ]

  const rowProps = (row: typeof columns[0]) => {
    return {
      style: 'cursor: pointer;'
    }
  }
</script>

<style>
  .demo {
    margin: 10px auto;
    width: 900px;
  }
</style>
