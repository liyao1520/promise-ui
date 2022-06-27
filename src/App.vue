<template>
  <div class="demo">
    <Table :data-source="dataSource" :columns="columns" border stripe />
  </div>
</template>

<script setup lang="ts">
  import { Table } from '../promiseui/table'
  const dataSource = Array.from({ length: 10 })
    .fill(1)
    .map((item, index) => {
      return {
        age: 'age' + index,
        name: 'name' + index,
        address: 'address' + index,
        email: 'email' + index,
        phone: 'phone' + String(Math.random()).replace('.', '')
      }
    })
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name'
    },
    { title: '年龄', dataIndex: 'age' },
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
</script>

<style>
  .demo {
    margin: 10px auto;
    width: 900px;
  }
</style>
