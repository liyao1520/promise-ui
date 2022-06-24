<script setup lang="ts">
  import PageFooter from './PageFooter.vue'
  import NextAndPrevLinks from './NextAndPrevLinks.vue'
  import Anchor from './Anchor.vue'
</script>

<template>
  <main class="page">
    <div class="container">
      <slot name="top" />

      <Content class="content" />
      <PageFooter />
      <NextAndPrevLinks />
      <Anchor />
      <slot name="bottom" />
    </div>
  </main>
</template>

<style scoped>
  .page {
    padding-top: var(--header-height);
  }

  @media (min-width: 720px) {
    .page {
      margin-left: 16.4rem;
    }
  }

  @media (min-width: 960px) {
    .page {
      margin-left: 16rem;
    }
  }

  .container {
    margin: 0 auto;
    padding: 0 9.5rem 4rem 1.5rem;
  }
  @media (max-width: 720px) {
    .container {
      padding: 0 1.5rem 4rem;
    }
  }
  .content {
    padding-bottom: 1.5rem;
  }

  @media (max-width: 420px) {
    .content {
      /* fix carbon ads display */
      clear: both;
    }
  }
</style>
