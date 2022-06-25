<script setup lang="ts">
  import { withBase, useData } from 'vitepress'
  const { site, theme, localePath } = useData()
</script>

<template>
  <a class="nav-bar-title" :href="localePath" :aria-label="`${site.title}, back to home`">
    <img v-if="theme.logo" class="logo" :src="withBase(theme.logo)" alt="Logo" />
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
    height: 3.3rem;
    vertical-align: bottom;
  }
  .logo-text {
    position: relative;
    left: -20px;
    background: linear-gradient(180deg, #15bcc8 10%, #5e7ce0);
    -webkit-background-clip: text;
    color: transparent;
  }
</style>
