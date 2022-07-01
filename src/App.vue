<template>
  <p-table :data-source="dataSource">
    <p-table-column title="索引">
      <template #default="{ index }">{{ index + 1 }}</template>
    </p-table-column>
    <p-table-column title="作品">
      <template #default="{ row }">{{ row.title }}</template>
    </p-table-column>
    <p-table-column title="作者" data-index="author"></p-table-column>
    <p-table-column title="出版单位" data-index="press"></p-table-column>
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
