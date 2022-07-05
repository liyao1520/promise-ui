<script setup lang="ts">
  import { withBase, useData } from 'vitepress'
  const { site, theme, localePath } = useData()
</script>

<template>
  <a class="nav-bar-title" :href="localePath" :aria-label="`${site.title}, back to home`">
    <!-- <img v-if="theme.logo" class="logo" :src="withBase(theme.logo)" alt="Logo" /> -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      id="图层_1"
      x="0px"
      y="0px"
      width="191.55047705525"
      height="197.21976114893"
      viewBox="15.099761962890625 21.3245849609375 152.90023803710938 157.42559814453125"
      style="enable-background: new 0 0 200 200"
      xml:space="preserve"
      class="style-removed logo"
      preserveAspectRatio="none"
      data-parent="shape_WGq6Ye8mnL"
    >
      <path
        d="M103.5,178.6c-20.7,1.4-46.1-7-63.1-24.7C18,130.7,10.1,104.6,18.2,73.2c1.5-5.9,4.9-9.1,11-8.4  c9.6,1.1,14,6.8,12.1,15.7c-7,33.4,13.4,69.6,45.7,81.3c27.3,9.8,52.1,5.4,74.6-12.9c1.1-0.9,5.3-4.1,6.4-5  C162.9,155.3,137.1,176.4,103.5,178.6z"
        fill="#1730C6"
        stroke-width="0"
      />
      <path
        d="M45,94.7C41.6,65,50.4,41.4,74.4,24.2c4.2-3.4,10.4-4.6,14.1,1c3.7,5.6,3.1,10.9-2.2,15  C70.5,52.4,62.9,68.8,61.7,89c-1.6,27.5,17.6,55.4,43.4,62.3c6.2,1.7,13,2.3,20.7,3.3c-6.3,1.1-13.3,1.7-19.2,1.1  c-19-2.1-35.7-10.3-46.9-26.5C53.7,120.5,46.7,109.9,45,94.7z"
        fill="#033CDD"
        stroke-width="0"
      />
      <path
        d="M82.3,127.2c-13.7-17.6-16.1-38-8.5-59.4c11.4-32,46.6-47.7,76.5-34.5c7.3,3.2,8.9,5.8,6.9,11.3  c-2.4,6.6-5.8,8-13.1,5.4c-22.6-8-45-1-58.5,19.1c-10.3,15.4-12,32.3-5.2,49.9c0.6,1.5,1.1,2.9,1.7,4.3c0.5,1.1,3.5,7.1,3.5,7.1  S84,129.3,82.3,127.2z"
        fill="#15BCC8"
        stroke-width="0"
      />
    </svg>
    <span class="logo-text">{{ site.title }}</span>
  </a>
</template>

<style scoped>
  .nav-bar-title {
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--c-text);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav-bar-title:hover {
    text-decoration: none;
  }

  .logo {
    margin-left: 0.75rem;
    height: 3rem;
    width: 3rem;
    vertical-align: bottom;
  }
  .logo path:nth-child(-n + 2) {
    fill: var(--c-brand);
  }
  .logo path:nth-child(3) {
    fill: var(--c-brand);
    opacity: 0.8;
  }
  .logo-text {
    position: relative;
    left: -20px;
    color: var(--c-brand);
  }
</style>
