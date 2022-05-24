<template>
  <PSpace>
    <PButton @click="click1">函数式Message</PButton>
    <PButton @click="click2">this.$message</PButton>
  </PSpace>
</template>
<script>
  export default {
    setup() {
      const click1 = () => {}
    },
    methods: {
      click2() {
        console.log(this)
        this.$message({ message: 'this.$message' })
      }
    }
  }
</script>
