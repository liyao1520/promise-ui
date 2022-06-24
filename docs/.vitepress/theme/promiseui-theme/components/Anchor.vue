<template>
  <div class="anchor" v-if="links.length">
    <a
      class="anchor-item"
      :title="item.title"
      v-for="item in links"
      :href="`#${item.slug}`"
      :key="item"
      >{{ item.title }}</a
    >
  </div>
</template>

<script setup>
  import { ref, watch, computed } from 'vue'
  import { useData } from 'vitepress'
  const { page } = useData()

  const links = computed(() => {
    if (page.value && page.value.headers) {
      return page.value.headers.filter((item) => item.level === 3)
    } else {
      return []
    }
  })
</script>
<style scoped>
  .anchor {
    position: fixed;
    right: 15px;
    top: 100px;
    width: 110px;
    height: 200px;
  }
  @media (max-width: 720px) {
    .anchor {
      display: none;
    }
  }
  .anchor-item {
    display: block;
    width: 100%;
    color: var(--promiseui-text);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-decoration: none;
    cursor: pointer;
    line-height: 30px;
    font-size: 13px;
    transition: 0.2s;
  }
  .anchor-item:hover {
    color: var(--promiseui-brand, #5e7ce0);
  }
  .current-title {
    font-size: 16px;
  }
</style>
