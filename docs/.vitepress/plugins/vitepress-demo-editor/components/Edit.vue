<script lang="ts" setup>
  import { onMounted, ref, defineExpose } from 'vue'
  import iPlastic from 'monaco-themes/themes/iPlastic.json'
  import iDark from '../../../../../promiseui/theme/themes/dark'
  const props = defineProps({
    initialValue: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
      default: 'vs'
    },
    language: {
      type: String,
      default: 'html'
    }
  })
  const emit = defineEmits(['change'])
  const monacoContainer = ref<HTMLDivElement | null>(null)
  let monacoInstance: any
  onMounted(async () => {
    const monaco = await import('monaco-editor/esm/vs/editor/editor.api.js')
    await import('monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution')
    await import('monaco-editor/esm/vs/basic-languages/html/html.contribution')
    await import('monaco-editor/esm/vs/basic-languages/css/css.contribution')
    if (!(window as any).monaco) {
      ;(window as any).monaco = monaco
    }
    if (!monacoContainer.value) return
    // monaco.editor.defineTheme('iPlastic', iPlastic as any)
    // monaco.editor.defineTheme('iDark', iDark as any)
    monacoInstance = monaco.editor.create(monacoContainer.value, {
      value: props.initialValue,
      language: props.language,
      automaticLayout: true,
      tabSize: 2,
      minimap: { enabled: false },
      lineNumbers: 'off',
      scrollbar: {
        handleMouseWheel: false
      }
    })

    monacoInstance.onDidChangeModelContent((e) => {
      const newValue = monacoInstance.getValue()
      emit('change', newValue)
    })
    monacoInstance.onDidBlurEditorText(() => {
      monacoInstance.updateOptions({
        scrollbar: {
          handleMouseWheel: false
        }
      })
    })
    monacoInstance.onDidFocusEditorText(() => {
      monacoInstance.updateOptions({
        scrollbar: {
          handleMouseWheel: true
        }
      })
    })
  })
  defineExpose({
    reset() {
      monacoInstance.setValue(props.initialValue)
    }
  })
</script>

<template>
  <div class="monaco" ref="monacoContainer"></div>
</template>
<style scoped>
  .monaco {
    position: relative;
  }
  .error {
    position: absolute;
    bottom: 2px;
    right: 18px;
    color: red;
    z-index: 999;
    font-size: 12px;
  }
</style>
