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
<script lang="ts">
  import { ref } from 'vue'
  export default {
    setup() {
      const isLoading = ref(false)
      const handleClick = () => {
        isLoading.value = true
        // setTimeout(() => {
        //   isLoading.value = false
        // }, 3000)
      }
      return {
        handleClick,
        isLoading
      }
    }
  }
</script>
