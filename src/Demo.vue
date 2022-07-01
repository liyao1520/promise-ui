
<template>
  <div class="demo">
    <Table :data-source="dataSource" :row-key="'address'" border stripe :max-height="400"> </Table>
  </div>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue'
  import { Table, TableColumn } from '../promiseui/table'
  const count = ref(0)
  setInterval(() => count.value++, 2000)
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
</script>

<style>
  .demo {
    margin: 10px auto;
    width: 900px;
  }
</style>
