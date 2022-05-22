<template>
  <div
    class="demo"
    :style="{
      flexDirection: $props.direction
    }"
  >
    <div class="view-wrap">
      <div class="view" :id="randomId" ref="viewRef"></div>
      <div class="error" v-if="errors.length">
        <div v-for="e in errors.slice(0, 5)">{{ e.message }}</div>
        <div v-if="errors.length > 5">...</div>
      </div>
    </div>
    <div class="edit-wrap" @mouseenter="toolsShow = true" @mouseleave="toolsShow = false">
      <div class="tools" v-if="toolsShow">
        <span title="重置代码" class="reset-code" @click="resetCode">
          <svg
            t="1652853672207"
            class="icon"
            viewBox="0 0 1130 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3224"
          >
            <path
              d="M1126.586009 306.125494l-204.026536 204.026536-204.026535-204.026536h148.939371a408.053071 408.053071 0 1 0 24.99325 357.046437h108.64413a511.953584 511.953584 0 1 1-20.402653-357.046437H1126.586009z"
              p-id="3225"
            ></path>
          </svg>
        </span>
        <span>可编辑</span>
      </div>

      <Edit
        class="edit"
        :style="{
          height: editHeight + 'px',
          minHeight: $props.direction === 'row' ? '200px' : '300px'
        }"
        :initial-value="$props.initialValue"
        @change="handleChange"
        ref="editRef"
      >
        <template #error v-if="errors.length">
          <div v-for="e in errors.slice(0, 4)">{{ e.message }}</div>
          <div v-if="errors.length > 4">...</div>
        </template>
      </Edit>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { ref, defineProps, onMounted, nextTick } from 'vue'
  import { templateWrap } from '../compiler/templateWrap'
  import Edit from './Edit.vue'

  const props = withDefaults(
    defineProps<{ initialValue: string; direction?: 'column' | 'row' }>(),
    {
      initialValue: '',
      direction: 'row'
    }
  )

  const errors = ref<any[]>([])
  const editHeight = ref<number>(0)
  const viewRef = ref<HTMLDivElement | null>(null)
  const editRef = ref<typeof Edit | null>(null)
  const randomId = ref('')
  const toolsShow = ref(false)

  const autoHeight = () => {
    const h = viewRef.value?.clientHeight || 0
    editHeight.value = h > 200 ? h : 200
  }

  const resetCode = () => {
    editRef.value?.reset()
  }

  let compiler

  onMounted(async () => {
    const { default: Compiler } = await import('../compiler')
    randomId.value = 'id_' + Math.random().toString(36).slice(2, 12)
    await nextTick()
    compiler = new Compiler(`#${randomId.value}`, (errs) => {
      // 错误处理
      errors.value = errs
    })
    compiler.compileCode(templateWrap(props.initialValue))
    autoHeight()
    let obsever = new MutationObserver(autoHeight)
    if (viewRef.value) obsever.observe(viewRef.value, { childList: true })
  })

  const handleChange = (content: string) => {
    if (!compiler) return
    // 需要加一个根,不然多根报错,不知道为什么,vue3不是支持多跟吗?
    content = templateWrap(content)
    console.log(content)

    compiler.compileCode(content)
  }
</script>

<style scoped>
  .demo {
    margin-top: 10px;
    display: flex;
    border-radius: 4px;
    border: 1px solid #f2f2f3;
    padding: 5px;
    min-height: 200px;
    transition: 0.3s;
  }
  .demo:hover {
    box-shadow: 0 0 15px 4px rgb(0, 0, 0, 0.04);
  }
  @media (max-width: 720px) {
    .demo {
      flex-direction: column !important;
    }
  }
  .edit-wrap {
    position: relative;
    flex: 6;
    height: 100%;
    overflow: auto;
    border-radius: 4px;
  }
  .tools {
    display: flex;
    position: absolute;
    right: 18px;
    top: 0px;
    color: #000;
    z-index: 1;
    font-size: 12px;
  }
  .reset-code {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 5px;
  }
  .reset-code:hover {
    background-color: #ccc;
  }
  .tools svg {
    width: 13px;
    height: 13px;
    cursor: pointer;
    line-height: 16px;
  }

  .view-wrap {
    position: relative;
    flex: 4;
    min-height: 100px;
  }
  .view {
    width: 100%;
    height: 100%;
  }
  .error {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #a12027;
    color: #fff;
    z-index: 1;
    padding: 15px;
    opacity: 0.86;
    font-size: 12px;
  }
  .error > div {
    margin: 5px 0;
  }
</style>
