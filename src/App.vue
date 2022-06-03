<template>
  <div style="margin: 20px 100px">
    <p-dropdown type="button" btn-type="default" size="md" trigger="click" @click="fn">
      <template #dropdown>
        <p-dropdown-item disabled>11</p-dropdown-item>
        <p-dropdown-item>11</p-dropdown-item>
        <p-dropdown-item>11</p-dropdown-item>
        <p-dropdown-item>11</p-dropdown-item>
      </template>
    </p-dropdown>
  </div>
</template>
<script setup></script>
