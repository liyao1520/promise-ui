<template>
  <h2>123</h2>
  <p-scrollbar height="100px">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
    </ul>
  </p-scrollbar>
</template>

<script setup>
  // import virtualScroll from './components/virtual-scroll'
</script>

<style scoped>
  ul {
    display: flex;
  }
  li {
    width: 300px;
    flex-shrink: 0;
    height: 200px;
  }
</style>
