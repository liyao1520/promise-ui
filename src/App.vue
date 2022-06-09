<template>
  <p-checkbox
    v-model="checkAll"
    label="Check all"
    :indeterminate="indeterminate"
    @change="onChange"
  />
  <br />
  <br />
  <p-checkbox-group v-model="checkedList">
    <p-checkbox label="Apple" value="Apple" />
    <p-checkbox label="Pear" value="Pear" />
    <p-checkbox label="Orange" value="Orange" />
  </p-checkbox-group>
</template>
<script setup>
  import { ref, watch } from 'vue'
  const options = ['Apple', 'Pear', 'Orange']
  const checkedList = ref(['Apple', 'Pear'])
  const checkAll = ref(false)
  const indeterminate = ref(false)
  const onChange = (value) => {
    checkedList.value = value ? options : []
    indeterminate.value = false
  }
  watch(checkedList, (values) => {
    const len1 = values.length
    const len2 = options.length
    indeterminate.value = len1 !== 0 && len1 !== len2
    checkAll.value = len1 === len2
  })
</script>

<style></style>
