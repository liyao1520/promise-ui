<script lang="ts">
  import { AirplaneSharp } from '@vicons/ionicons5'
  import { ref } from 'vue'
  export default {
    components: {
      AirplaneSharp
    },
    setup() {
      const isLoading = ref(false)
      const handleClick = () => {
        isLoading.value = true
        setTimeout(() => {
          isLoading.value = false
        }, 3000)
      }
      return {
        handleClick,
        isLoading
      }
    }
  }
</script>

<template>
  <div id="app">
    <p-button size="lg" :loading="isLoading" @click="handleClick">
      <template #icon>
        <p-icon tag="i">
          <AirplaneSharp />
        </p-icon>
      </template>
      点我
    </p-button>
    <p-button size="lg" :loading="isLoading" @click="handleClick"> 点我 </p-button>
  </div>
</template>

<style scoped>
  #app {
    display: flex;
    justify-content: center;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
