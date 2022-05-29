<template>
  <PSpace>
    <PButton shake @click="click2">this.$message</PButton>
  </PSpace>
</template>
<script>
  export default {
    methods: {
      click2() {
        console.log(this)
        this.$message({ message: 'this.$message' })
      }
    }
  }
</script>
