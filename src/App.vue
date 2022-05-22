<template>
  <PSpace>
    <PButton size="lg" :loading="isLoading" @click="handleClick">
      <template #icon>
        <PIcon>
          <AirplaneSharp />
        </PIcon>
      </template>
      点我
    </PButton>
    <PButton size="lg" :loading="isLoading" @click="handleClick"> 点我 </PButton>
  </PSpace>
</template>
<script setup>
  import { ref } from 'vue'
  const isLoading = ref(false)
  function handleClick() {
    isLoading.value = true
  }
</script>
