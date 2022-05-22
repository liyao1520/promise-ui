<template>
  <div>{{ name }}</div>
</template>
<script>
  import { defineComponent, getCurrentInstance } from 'vue'

  // import { Icon } from '@vicons/utils'

  export default defineComponent({
    name: 'PIcon',

    emits: [],
    setup(props, ctx) {
      console.log(getCurrentInstance())

      return {
        name: '123'
      }
    }
  })
</script>
