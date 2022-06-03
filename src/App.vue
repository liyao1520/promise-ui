<template>
  <div style="margin: 20px 100px">
    <p-dropdown type="button" btnType="default" size="md" trigger="click" @click="fn">
      123
      <template #dropdown>
        <p-dropdown-item>xixixi</p-dropdown-item>
        <p-dropdown-item>xixixi</p-dropdown-item>
        <p-dropdown-item>xixixi</p-dropdown-item>
        <p-dropdown-item>xixixi</p-dropdown-item>
      </template>
    </p-dropdown>
  </div>
</template>
<script setup>
  const fn = () => {
    console.log(1)
  }
</script>
