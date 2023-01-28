import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Select 选择器","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]},{"level":2,"title":"disabled","slug":"disabled","link":"#disabled","children":[]},{"level":2,"title":"基础多选","slug":"基础多选","link":"#基础多选","children":[]},{"level":2,"title":"筛选选项","slug":"筛选选项","link":"#筛选选项","children":[]},{"level":2,"title":"可清空","slug":"可清空","link":"#可清空","children":[]},{"level":2,"title":"创建新的选项","slug":"创建新的选项","link":"#创建新的选项","children":[]},{"level":2,"title":"大量数据","slug":"大量数据","link":"#大量数据","children":[]},{"level":2,"title":"多选数量限制","slug":"多选数量限制","link":"#多选数量限制","children":[]},{"level":2,"title":"显示标签数量","slug":"显示标签数量","link":"#显示标签数量","children":[]},{"level":2,"title":"显示 options 数量","slug":"显示-options-数量","link":"#显示-options-数量","children":[]},{"level":2,"title":"多选标签类型","slug":"多选标签类型","link":"#多选标签类型","children":[]},{"level":2,"title":"placeholder","slug":"placeholder","link":"#placeholder","children":[]},{"level":2,"title":"空数据插槽","slug":"空数据插槽","link":"#空数据插槽","children":[]},{"level":2,"title":"自定义选项渲染","slug":"自定义选项渲染","link":"#自定义选项渲染","children":[]},{"level":2,"title":"尺寸","slug":"尺寸","link":"#尺寸","children":[]}],"relativePath":"components/select/index.md"}');
const _sfc_main = { name: "components/select/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_clientOnly = resolveComponent("clientOnly");
  const _component_demo = resolveComponent("demo");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="select-选择器" tabindex="-1">Select 选择器 <a class="header-anchor" href="#select-选择器" aria-hidden="true">#</a></h1><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-hidden="true">#</a></h2><p><code>v-model</code> 绑定选项值,<code>options</code>指定选项</p>`);
  _push(ssrRenderComponent(_component_clientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_demo, {
          "initial-value": `<template>
  <p-select v-model="selected" :options="options" @change="onChange" />
  <h4>selected value: {{ selected }}</h4>
</template>
<script setup>
  import { ref } from 'vue'
  import { Message } from 'promiseui-vue'
  const selected = ref('1')
  const options = [
    {
      label: '选项1',
      value: '1'
    },
    {
      label: '选项2',
      value: '2'
    },
    {
      label: '选项3',
      value: '3'
    },
    {
      label: '选项4',
      value: '4'
    }
  ]
  const onChange = (item) => {
    Message.success(\` label: \${item.label}  value :\${item.value} \`)
  }
<\/script>
`,
          direction: "",
          lang: "vue",
          height: "undefined"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-vue"${_scopeId2}><button title="Copy Code" class="copy"${_scopeId2}></button><span class="lang"${_scopeId2}>vue</span><pre class="shiki material-palenight"${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-select</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>selected</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>:options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>@change</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>onChange</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>h4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>selected value: {{ selected }}</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>h4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>setup</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>Message</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>promiseui-vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> selected </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>)</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> options </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> [</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>选项1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>},</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>选项2</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>2</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>},</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>选项3</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>3</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>},</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>选项4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  ]</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> onChange </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD", "font-style": "italic" })}"${_scopeId2}>item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>=&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>Message</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>success</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>\`</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}> label: </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>\${</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>  value :</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>\${</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>\`</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>)</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}></span></code></pre></div>`);
            } else {
              return [
                createVNode("div", { class: "language-vue" }, [
                  createVNode("button", {
                    title: "Copy Code",
                    class: "copy"
                  }),
                  createVNode("span", { class: "lang" }, "vue"),
                  createVNode("pre", { class: "shiki material-palenight" }, [
                    createVNode("code", null, [
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "template"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-select"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "selected"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, ":options"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "options"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "@change"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "onChange"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "selected value: {{ selected }}"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "template"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "script"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "setup"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "import"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "ref"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "from"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "vue"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "import"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "Message"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "from"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "promiseui-vue"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " selected "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "1"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " options "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " [")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "选项1"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "1"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "选项2"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "2"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "选项3"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "3"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "选项4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  ]")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " onChange "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                        createVNode("span", { style: { "color": "#A6ACCD", "font-style": "italic" } }, "item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ")"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "=>"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "    "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "Message"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "success"),
                        createVNode("span", { style: { "color": "#F07178" } }, "("),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "`"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, " label: "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "${"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "  value :"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "${"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "`"),
                        createVNode("span", { style: { "color": "#F07178" } }, ")")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "script"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" })
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_demo, {
            "initial-value": `<template>
  <p-select v-model="selected" :options="options" @change="onChange" />
  <h4>selected value: {{ selected }}</h4>
</template>
<script setup>
  import { ref } from 'vue'
  import { Message } from 'promiseui-vue'
  const selected = ref('1')
  const options = [
    {
      label: '选项1',
      value: '1'
    },
    {
      label: '选项2',
      value: '2'
    },
    {
      label: '选项3',
      value: '3'
    },
    {
      label: '选项4',
      value: '4'
    }
  ]
  const onChange = (item) => {
    Message.success(\` label: \${item.label}  value :\${item.value} \`)
  }
<\/script>
`,
            direction: "",
            lang: "vue",
            height: "undefined"
          }, {
            default: withCtx(() => [
              createVNode("div", { class: "language-vue" }, [
                createVNode("button", {
                  title: "Copy Code",
                  class: "copy"
                }),
                createVNode("span", { class: "lang" }, "vue"),
                createVNode("pre", { class: "shiki material-palenight" }, [
                  createVNode("code", null, [
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-select"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "selected"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, ":options"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "options"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "@change"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "onChange"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "selected value: {{ selected }}"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "script"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "setup"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "import"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "ref"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "from"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "vue"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "import"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "Message"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "from"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "promiseui-vue"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " selected "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " options "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " [")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "选项1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "选项2"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "2"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "选项3"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "3"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "选项4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  ]")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " onChange "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                      createVNode("span", { style: { "color": "#A6ACCD", "font-style": "italic" } }, "item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ")"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "=>"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "    "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "Message"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "success"),
                      createVNode("span", { style: { "color": "#F07178" } }, "("),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "`"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, " label: "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "${"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "  value :"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "${"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "`"),
                      createVNode("span", { style: { "color": "#F07178" } }, ")")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "script"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" })
                  ])
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="disabled" tabindex="-1">disabled <a class="header-anchor" href="#disabled" aria-hidden="true">#</a></h2><p><code>select</code> 的 <code>disabled</code> 和 <code>option</code> 的 <code>disabled</code></p>`);
  _push(ssrRenderComponent(_component_clientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_demo, {
          "initial-value": `<template>
  <p-select v-model="selected" :options="options" />
  <h4>disabled select</h4>
  <p-select v-model="selected" :options="options" disabled />
</template>
<script setup>
  import { ref } from 'vue'
  const selected = ref('1')
  const options = [
    {
      label: '选项1',
      value: '1'
    },
    {
      label: '选项2',
      value: '2',
      disabled: true
    },
    {
      label: '选项3',
      value: '3'
    },
    {
      label: '选项4',
      value: '4'
    }
  ]
<\/script>
`,
          direction: "",
          lang: "vue",
          height: "undefined"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-vue"${_scopeId2}><button title="Copy Code" class="copy"${_scopeId2}></button><span class="lang"${_scopeId2}>vue</span><pre class="shiki material-palenight"${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-select</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>selected</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>:options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>h4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>disabled select</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>h4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-select</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>selected</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>:options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>disabled</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>setup</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> selected </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>)</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> options </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> [</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>选项1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>},</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>选项2</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>2</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>disabled</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#FF9CAC" })}"${_scopeId2}>true</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>},</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>选项3</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>3</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>},</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>选项4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  ]</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}></span></code></pre></div>`);
            } else {
              return [
                createVNode("div", { class: "language-vue" }, [
                  createVNode("button", {
                    title: "Copy Code",
                    class: "copy"
                  }),
                  createVNode("span", { class: "lang" }, "vue"),
                  createVNode("pre", { class: "shiki material-palenight" }, [
                    createVNode("code", null, [
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "template"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-select"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "selected"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, ":options"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "options"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "disabled select"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-select"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "selected"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, ":options"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "options"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "disabled"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "template"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "script"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "setup"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "import"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "ref"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "from"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "vue"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " selected "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "1"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " options "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " [")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "选项1"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "1"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "选项2"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "2"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "disabled"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#FF9CAC" } }, "true")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "选项3"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "3"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "选项4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  ]")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "script"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" })
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_demo, {
            "initial-value": `<template>
  <p-select v-model="selected" :options="options" />
  <h4>disabled select</h4>
  <p-select v-model="selected" :options="options" disabled />
</template>
<script setup>
  import { ref } from 'vue'
  const selected = ref('1')
  const options = [
    {
      label: '选项1',
      value: '1'
    },
    {
      label: '选项2',
      value: '2',
      disabled: true
    },
    {
      label: '选项3',
      value: '3'
    },
    {
      label: '选项4',
      value: '4'
    }
  ]
<\/script>
`,
            direction: "",
            lang: "vue",
            height: "undefined"
          }, {
            default: withCtx(() => [
              createVNode("div", { class: "language-vue" }, [
                createVNode("button", {
                  title: "Copy Code",
                  class: "copy"
                }),
                createVNode("span", { class: "lang" }, "vue"),
                createVNode("pre", { class: "shiki material-palenight" }, [
                  createVNode("code", null, [
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-select"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "selected"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, ":options"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "options"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "disabled select"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-select"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "selected"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, ":options"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "options"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "disabled"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "script"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "setup"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "import"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "ref"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "from"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "vue"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " selected "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " options "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " [")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "选项1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "选项2"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "2"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "disabled"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#FF9CAC" } }, "true")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "选项3"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "3"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "选项4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  ]")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "script"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" })
                  ])
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="基础多选" tabindex="-1">基础多选 <a class="header-anchor" href="#基础多选" aria-hidden="true">#</a></h2><p>设置 <code>multiple</code> 属性即可启用多选， 此时 <code>v-model</code> 的值为当前选中值所组成的数组。</p>`);
  _push(ssrRenderComponent(_component_clientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_demo, {
          "initial-value": `<template>
  <p-select v-model="selected" :options="options" multiple />
  <h4>selected value :{{ selected }}</h4>
</template>
<script setup>
  import { ref } from 'vue'
  const selected = ref(['1'])
  const options = [
    {
      label: '选项1',
      value: '1'
    },
    {
      label: '选项2',
      value: '2'
    },
    {
      label: '选项3',
      value: '3'
    },
    {
      label: '选项4',
      value: '4'
    }
  ]
<\/script>
`,
          direction: "",
          lang: "vue",
          height: "undefined"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-vue"${_scopeId2}><button title="Copy Code" class="copy"${_scopeId2}></button><span class="lang"${_scopeId2}>vue</span><pre class="shiki material-palenight"${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-select</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>selected</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>:options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>multiple</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>h4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>selected value :{{ selected }}</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>h4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>setup</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> selected </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>([</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>])</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> options </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> [</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>选项1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>},</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>选项2</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>2</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>},</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>选项3</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>3</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>},</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>选项4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  ]</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}></span></code></pre></div>`);
            } else {
              return [
                createVNode("div", { class: "language-vue" }, [
                  createVNode("button", {
                    title: "Copy Code",
                    class: "copy"
                  }),
                  createVNode("span", { class: "lang" }, "vue"),
                  createVNode("pre", { class: "shiki material-palenight" }, [
                    createVNode("code", null, [
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "template"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-select"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "selected"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, ":options"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "options"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "multiple"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "selected value :{{ selected }}"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "template"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "script"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "setup"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "import"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "ref"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "from"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "vue"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " selected "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "(["),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "1"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "])")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " options "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " [")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "选项1"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "1"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "选项2"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "2"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "选项3"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "3"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "选项4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  ]")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "script"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" })
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_demo, {
            "initial-value": `<template>
  <p-select v-model="selected" :options="options" multiple />
  <h4>selected value :{{ selected }}</h4>
</template>
<script setup>
  import { ref } from 'vue'
  const selected = ref(['1'])
  const options = [
    {
      label: '选项1',
      value: '1'
    },
    {
      label: '选项2',
      value: '2'
    },
    {
      label: '选项3',
      value: '3'
    },
    {
      label: '选项4',
      value: '4'
    }
  ]
<\/script>
`,
            direction: "",
            lang: "vue",
            height: "undefined"
          }, {
            default: withCtx(() => [
              createVNode("div", { class: "language-vue" }, [
                createVNode("button", {
                  title: "Copy Code",
                  class: "copy"
                }),
                createVNode("span", { class: "lang" }, "vue"),
                createVNode("pre", { class: "shiki material-palenight" }, [
                  createVNode("code", null, [
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-select"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "selected"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, ":options"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "options"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "multiple"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "selected value :{{ selected }}"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "script"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "setup"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "import"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "ref"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "from"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "vue"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " selected "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "(["),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "])")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " options "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " [")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "选项1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "选项2"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "2"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "选项3"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "3"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "选项4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  ]")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "script"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" })
                  ])
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="筛选选项" tabindex="-1">筛选选项 <a class="header-anchor" href="#筛选选项" aria-hidden="true">#</a></h2><p><code>filterable</code> 属性即可启用筛选功能 <code>filter-method</code> 自定义筛选方法, 接收 两个参数 输入框值<code>inputValue</code> 和 选项值<code>optionItem</code></p>`);
  _push(ssrRenderComponent(_component_clientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_demo, {
          "initial-value": `<template>
  <p-space>
    <h4>默认</h4>
    <p-select v-model="active" :options="options" filterable />
    <h4>自定义 filter-method</h4>
    <p-select
      v-model="active"
      :options="options"
      filterable
      :filter-method="filterMethod"
    />
  </p-space>
</template>
<script setup>
  import { ref, watch } from 'vue'
  const list = []
  for (let i = 0; i < 20; i++) {
    list[i] = {
      label: 'label' + i,
      value: i
    }
  }
  const active = ref(1)
  const options = ref(list)
  const filterMethod = (inputValue, optionItem) =>
    optionItem.label.includes(inputValue.replaceAll(' ', ''))
<\/script>
`,
          direction: "",
          lang: "vue",
          height: "undefined"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-vue"${_scopeId2}><button title="Copy Code" class="copy"${_scopeId2}></button><span class="lang"${_scopeId2}>vue</span><pre class="shiki material-palenight"${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-space</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>h4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>默认</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>h4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-select</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>active</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>:options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>filterable</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>h4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>自定义 filter-method</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>h4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-select</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>active</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>:options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>filterable</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>:filter-method</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>filterMethod</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>    /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-space</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>setup</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>watch</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> list </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> []</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>for</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> (</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>let</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> i </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> i </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>20</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> i</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>++</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>) </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>list</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>[</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>i</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>] </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>+</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>i</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>i</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> active </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>)</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> options </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(list)</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> filterMethod </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD", "font-style": "italic" })}"${_scopeId2}>inputValue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD", "font-style": "italic" })}"${_scopeId2}>optionItem</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>=&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    optionItem</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>includes</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(inputValue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>replaceAll</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>))</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}></span></code></pre></div>`);
            } else {
              return [
                createVNode("div", { class: "language-vue" }, [
                  createVNode("button", {
                    title: "Copy Code",
                    class: "copy"
                  }),
                  createVNode("span", { class: "lang" }, "vue"),
                  createVNode("pre", { class: "shiki material-palenight" }, [
                    createVNode("code", null, [
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "template"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-space"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "默认"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-select"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "active"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, ":options"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "options"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "filterable"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "自定义 filter-method"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-select")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "      "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "active"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "      "),
                        createVNode("span", { style: { "color": "#C792EA" } }, ":options"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "options"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "      "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "filterable")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "      "),
                        createVNode("span", { style: { "color": "#C792EA" } }, ":filter-method"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "filterMethod"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "    />")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-space"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "template"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "script"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "setup"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "import"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "ref"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "watch"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "from"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "vue"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " list "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " []")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "for"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                        createVNode("span", { style: { "color": "#C792EA" } }, "let"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " i "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ";"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " i "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "20"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ";"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " i"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "++"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "    "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "list"),
                        createVNode("span", { style: { "color": "#F07178" } }, "["),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "i"),
                        createVNode("span", { style: { "color": "#F07178" } }, "] "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "      label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "+"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "i"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "      value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "i")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " active "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " options "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "(list)")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " filterMethod "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                        createVNode("span", { style: { "color": "#A6ACCD", "font-style": "italic" } }, "inputValue"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD", "font-style": "italic" } }, "optionItem"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ")"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "=>")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    optionItem"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "includes"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "(inputValue"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "replaceAll"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "))")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "script"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" })
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_demo, {
            "initial-value": `<template>
  <p-space>
    <h4>默认</h4>
    <p-select v-model="active" :options="options" filterable />
    <h4>自定义 filter-method</h4>
    <p-select
      v-model="active"
      :options="options"
      filterable
      :filter-method="filterMethod"
    />
  </p-space>
</template>
<script setup>
  import { ref, watch } from 'vue'
  const list = []
  for (let i = 0; i < 20; i++) {
    list[i] = {
      label: 'label' + i,
      value: i
    }
  }
  const active = ref(1)
  const options = ref(list)
  const filterMethod = (inputValue, optionItem) =>
    optionItem.label.includes(inputValue.replaceAll(' ', ''))
<\/script>
`,
            direction: "",
            lang: "vue",
            height: "undefined"
          }, {
            default: withCtx(() => [
              createVNode("div", { class: "language-vue" }, [
                createVNode("button", {
                  title: "Copy Code",
                  class: "copy"
                }),
                createVNode("span", { class: "lang" }, "vue"),
                createVNode("pre", { class: "shiki material-palenight" }, [
                  createVNode("code", null, [
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-space"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "默认"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-select"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "active"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, ":options"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "options"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "filterable"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "自定义 filter-method"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-select")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "active"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      "),
                      createVNode("span", { style: { "color": "#C792EA" } }, ":options"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "options"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "filterable")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      "),
                      createVNode("span", { style: { "color": "#C792EA" } }, ":filter-method"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "filterMethod"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-space"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "script"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "setup"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "import"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "ref"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "watch"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "from"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "vue"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " list "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " []")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "for"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                      createVNode("span", { style: { "color": "#C792EA" } }, "let"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " i "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " i "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "20"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " i"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "++"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "    "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "list"),
                      createVNode("span", { style: { "color": "#F07178" } }, "["),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "i"),
                      createVNode("span", { style: { "color": "#F07178" } }, "] "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "      label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "+"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "i"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "      value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "i")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " active "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " options "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "(list)")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " filterMethod "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                      createVNode("span", { style: { "color": "#A6ACCD", "font-style": "italic" } }, "inputValue"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD", "font-style": "italic" } }, "optionItem"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ")"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "=>")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    optionItem"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "includes"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "(inputValue"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "replaceAll"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "))")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "script"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" })
                  ])
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="可清空" tabindex="-1">可清空 <a class="header-anchor" href="#可清空" aria-hidden="true">#</a></h2><p>设置 <code>clearable</code> 属性</p>`);
  _push(ssrRenderComponent(_component_clientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_demo, {
          "initial-value": `<template>
  <p-select v-model="active" :options="options" clearable />
  <h4>selected value: {{ active }}</h4>
  <p-select v-model="actives" :options="options" multiple clearable />
  <h4>selected value: {{ actives }}</h4>
</template>
<script setup>
  import { ref } from 'vue'
  const active = ref('1')
  const actives = ref(['1'])
  const options = [
    {
      label: '选项1',
      value: '1'
    },
    {
      label: '选项2',
      value: '2'
    },
    {
      label: '选项3',
      value: '3'
    },
    {
      label: '选项4',
      value: '4'
    }
  ]
<\/script>
`,
          direction: "",
          lang: "vue",
          height: "undefined"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-vue"${_scopeId2}><button title="Copy Code" class="copy"${_scopeId2}></button><span class="lang"${_scopeId2}>vue</span><pre class="shiki material-palenight"${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-select</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>active</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>:options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>clearable</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>h4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>selected value: {{ active }}</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>h4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-select</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>actives</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>:options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>multiple</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>clearable</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>h4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>selected value: {{ actives }}</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>h4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>setup</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> active </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>)</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> actives </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>([</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>])</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> options </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> [</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>选项1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>},</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>选项2</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>2</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>},</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>选项3</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>3</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>},</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>选项4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  ]</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}></span></code></pre></div>`);
            } else {
              return [
                createVNode("div", { class: "language-vue" }, [
                  createVNode("button", {
                    title: "Copy Code",
                    class: "copy"
                  }),
                  createVNode("span", { class: "lang" }, "vue"),
                  createVNode("pre", { class: "shiki material-palenight" }, [
                    createVNode("code", null, [
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "template"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-select"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "active"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, ":options"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "options"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "clearable"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "selected value: {{ active }}"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-select"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "actives"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, ":options"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "options"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "multiple"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "clearable"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "selected value: {{ actives }}"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "template"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "script"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "setup"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "import"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "ref"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "from"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "vue"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " active "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "1"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " actives "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "(["),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "1"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "])")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " options "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " [")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "选项1"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "1"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "选项2"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "2"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "选项3"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "3"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "选项4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  ]")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "script"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" })
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_demo, {
            "initial-value": `<template>
  <p-select v-model="active" :options="options" clearable />
  <h4>selected value: {{ active }}</h4>
  <p-select v-model="actives" :options="options" multiple clearable />
  <h4>selected value: {{ actives }}</h4>
</template>
<script setup>
  import { ref } from 'vue'
  const active = ref('1')
  const actives = ref(['1'])
  const options = [
    {
      label: '选项1',
      value: '1'
    },
    {
      label: '选项2',
      value: '2'
    },
    {
      label: '选项3',
      value: '3'
    },
    {
      label: '选项4',
      value: '4'
    }
  ]
<\/script>
`,
            direction: "",
            lang: "vue",
            height: "undefined"
          }, {
            default: withCtx(() => [
              createVNode("div", { class: "language-vue" }, [
                createVNode("button", {
                  title: "Copy Code",
                  class: "copy"
                }),
                createVNode("span", { class: "lang" }, "vue"),
                createVNode("pre", { class: "shiki material-palenight" }, [
                  createVNode("code", null, [
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-select"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "active"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, ":options"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "options"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "clearable"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "selected value: {{ active }}"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-select"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "actives"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, ":options"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "options"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "multiple"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "clearable"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "selected value: {{ actives }}"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "script"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "setup"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "import"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "ref"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "from"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "vue"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " active "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " actives "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "(["),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "])")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " options "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " [")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "选项1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "选项2"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "2"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "选项3"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "3"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "选项4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  ]")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "script"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" })
                  ])
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="创建新的选项" tabindex="-1">创建新的选项 <a class="header-anchor" href="#创建新的选项" aria-hidden="true">#</a></h2><p>设置 <code>addible</code> 属性 ,</p><p>要想 <code>addible</code> 生效 必须设置 <code>filterable</code> 为 <code>true</code></p><p>按 Enter(回车)键或者手动选择 即可创建新选项</p>`);
  _push(ssrRenderComponent(_component_clientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_demo, {
          "initial-value": `<template>
  <p-select v-model="actives" :options="options" multiple filterable addible />
  <h4>selected value: {{ actives }}</h4>
</template>
<script setup>
  import { ref } from 'vue'

  const actives = ref(['1'])
  const options = [
    {
      label: '选项1',
      value: '1'
    },
    {
      label: '选项2',
      value: '2'
    },
    {
      label: '选项3',
      value: '3'
    },
    {
      label: '选项4',
      value: '4'
    }
  ]
<\/script>
`,
          direction: "",
          lang: "vue",
          height: "undefined"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-vue"${_scopeId2}><button title="Copy Code" class="copy"${_scopeId2}></button><span class="lang"${_scopeId2}>vue</span><pre class="shiki material-palenight"${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-select</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>actives</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>:options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>multiple</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>filterable</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>addible</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>h4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>selected value: {{ actives }}</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>h4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>setup</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> actives </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>([</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>])</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> options </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> [</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>选项1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>},</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>选项2</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>2</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>},</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>选项3</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>3</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>},</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>选项4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  ]</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}></span></code></pre></div>`);
            } else {
              return [
                createVNode("div", { class: "language-vue" }, [
                  createVNode("button", {
                    title: "Copy Code",
                    class: "copy"
                  }),
                  createVNode("span", { class: "lang" }, "vue"),
                  createVNode("pre", { class: "shiki material-palenight" }, [
                    createVNode("code", null, [
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "template"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-select"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "actives"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, ":options"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "options"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "multiple"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "filterable"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "addible"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "selected value: {{ actives }}"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "template"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "script"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "setup"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "import"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "ref"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "from"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "vue"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " actives "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "(["),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "1"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "])")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " options "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " [")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "选项1"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "1"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "选项2"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "2"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "选项3"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "3"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "选项4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  ]")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "script"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" })
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_demo, {
            "initial-value": `<template>
  <p-select v-model="actives" :options="options" multiple filterable addible />
  <h4>selected value: {{ actives }}</h4>
</template>
<script setup>
  import { ref } from 'vue'

  const actives = ref(['1'])
  const options = [
    {
      label: '选项1',
      value: '1'
    },
    {
      label: '选项2',
      value: '2'
    },
    {
      label: '选项3',
      value: '3'
    },
    {
      label: '选项4',
      value: '4'
    }
  ]
<\/script>
`,
            direction: "",
            lang: "vue",
            height: "undefined"
          }, {
            default: withCtx(() => [
              createVNode("div", { class: "language-vue" }, [
                createVNode("button", {
                  title: "Copy Code",
                  class: "copy"
                }),
                createVNode("span", { class: "lang" }, "vue"),
                createVNode("pre", { class: "shiki material-palenight" }, [
                  createVNode("code", null, [
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-select"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "actives"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, ":options"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "options"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "multiple"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "filterable"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "addible"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "selected value: {{ actives }}"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "script"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "setup"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "import"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "ref"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "from"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "vue"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " actives "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "(["),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "])")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " options "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " [")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "选项1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "选项2"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "2"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "选项3"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "3"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "选项4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  ]")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "script"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" })
                  ])
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="大量数据" tabindex="-1">大量数据 <a class="header-anchor" href="#大量数据" aria-hidden="true">#</a></h2><p><code>select</code> 使用了虚拟滚动技术,支持 大量数据</p>`);
  _push(ssrRenderComponent(_component_clientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_demo, {
          "initial-value": `<template>
  <h4>先来个 10 万条数据</h4>
  <p-select
    v-model="actives"
    clearable
    :options="options"
    multiple
    filterable
  ></p-select>
  <h4>actives value :{{ actives }}</h4>
</template>

<script setup>
  import { ref } from 'vue'
  const list = []
  for (let i = 0; i < 100000; i++) {
    list[i] = {
      label: 'label' + i,
      value: i
    }
  }
  const options = ref(list)
  const actives = ref([2])
<\/script>
`,
          direction: "",
          lang: "vue",
          height: "undefined"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-vue"${_scopeId2}><button title="Copy Code" class="copy"${_scopeId2}></button><span class="lang"${_scopeId2}>vue</span><pre class="shiki material-palenight"${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>h4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>先来个 10 万条数据</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>h4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-select</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>actives</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>clearable</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>:options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>multiple</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>filterable</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>  &gt;&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-select</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>h4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>actives value :{{ actives }}</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>h4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>setup</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> list </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> []</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>for</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> (</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>let</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> i </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> i </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100000</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> i</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>++</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>) </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>list</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>[</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>i</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>] </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>+</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>i</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>i</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> options </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(list)</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> actives </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>([</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>2</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>])</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}></span></code></pre></div>`);
            } else {
              return [
                createVNode("div", { class: "language-vue" }, [
                  createVNode("button", {
                    title: "Copy Code",
                    class: "copy"
                  }),
                  createVNode("span", { class: "lang" }, "vue"),
                  createVNode("pre", { class: "shiki material-palenight" }, [
                    createVNode("code", null, [
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "template"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "先来个 10 万条数据"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-select")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "actives"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "clearable")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                        createVNode("span", { style: { "color": "#C792EA" } }, ":options"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "options"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "multiple")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "filterable")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "  ></"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-select"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "actives value :{{ actives }}"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "template"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "script"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "setup"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "import"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "ref"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "from"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "vue"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " list "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " []")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "for"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                        createVNode("span", { style: { "color": "#C792EA" } }, "let"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " i "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ";"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " i "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "100000"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ";"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " i"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "++"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "    "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "list"),
                        createVNode("span", { style: { "color": "#F07178" } }, "["),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "i"),
                        createVNode("span", { style: { "color": "#F07178" } }, "] "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "      label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "+"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "i"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "      value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "i")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " options "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "(list)")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " actives "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "(["),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "2"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "])")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "script"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" })
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_demo, {
            "initial-value": `<template>
  <h4>先来个 10 万条数据</h4>
  <p-select
    v-model="actives"
    clearable
    :options="options"
    multiple
    filterable
  ></p-select>
  <h4>actives value :{{ actives }}</h4>
</template>

<script setup>
  import { ref } from 'vue'
  const list = []
  for (let i = 0; i < 100000; i++) {
    list[i] = {
      label: 'label' + i,
      value: i
    }
  }
  const options = ref(list)
  const actives = ref([2])
<\/script>
`,
            direction: "",
            lang: "vue",
            height: "undefined"
          }, {
            default: withCtx(() => [
              createVNode("div", { class: "language-vue" }, [
                createVNode("button", {
                  title: "Copy Code",
                  class: "copy"
                }),
                createVNode("span", { class: "lang" }, "vue"),
                createVNode("pre", { class: "shiki material-palenight" }, [
                  createVNode("code", null, [
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "先来个 10 万条数据"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-select")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "actives"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "clearable")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                      createVNode("span", { style: { "color": "#C792EA" } }, ":options"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "options"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "multiple")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "filterable")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "  ></"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-select"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "actives value :{{ actives }}"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "script"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "setup"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "import"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "ref"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "from"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "vue"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " list "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " []")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "for"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                      createVNode("span", { style: { "color": "#C792EA" } }, "let"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " i "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " i "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "100000"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " i"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "++"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "    "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "list"),
                      createVNode("span", { style: { "color": "#F07178" } }, "["),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "i"),
                      createVNode("span", { style: { "color": "#F07178" } }, "] "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "      label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "+"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "i"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "      value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "i")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " options "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "(list)")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " actives "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "(["),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "2"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "])")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "script"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" })
                  ])
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="多选数量限制" tabindex="-1">多选数量限制 <a class="header-anchor" href="#多选数量限制" aria-hidden="true">#</a></h2><p>设置<code>multipleLimit</code> 最多选择项</p>`);
  _push(ssrRenderComponent(_component_clientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_demo, {
          "initial-value": `<template>
  <h4>最多选三个</h4>
  <p-select
    v-model="actives"
    :options="options"
    multiple
    :multipleLimit="3"
  ></p-select>
  <h4>actives value :{{ actives }}</h4>
</template>

<script setup>
  import { ref } from 'vue'
  const list = []
  for (let i = 0; i < 10; i++) {
    list[i] = {
      label: 'label' + i,
      value: i
    }
  }
  const options = ref(list)
  const actives = ref([2])
<\/script>
`,
          direction: "",
          lang: "vue",
          height: "undefined"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-vue"${_scopeId2}><button title="Copy Code" class="copy"${_scopeId2}></button><span class="lang"${_scopeId2}>vue</span><pre class="shiki material-palenight"${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>h4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>最多选三个</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>h4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-select</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>actives</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>:options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>multiple</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>:multipleLimit</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>3</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>  &gt;&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-select</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>h4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>actives value :{{ actives }}</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>h4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>setup</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> list </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> []</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>for</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> (</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>let</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> i </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> i </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>10</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> i</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>++</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>) </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>list</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>[</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>i</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>] </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>+</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>i</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>i</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> options </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(list)</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> actives </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>([</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>2</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>])</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}></span></code></pre></div>`);
            } else {
              return [
                createVNode("div", { class: "language-vue" }, [
                  createVNode("button", {
                    title: "Copy Code",
                    class: "copy"
                  }),
                  createVNode("span", { class: "lang" }, "vue"),
                  createVNode("pre", { class: "shiki material-palenight" }, [
                    createVNode("code", null, [
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "template"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "最多选三个"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-select")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "actives"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                        createVNode("span", { style: { "color": "#C792EA" } }, ":options"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "options"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "multiple")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                        createVNode("span", { style: { "color": "#C792EA" } }, ":multipleLimit"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "3"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "  ></"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-select"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "actives value :{{ actives }}"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "template"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "script"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "setup"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "import"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "ref"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "from"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "vue"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " list "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " []")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "for"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                        createVNode("span", { style: { "color": "#C792EA" } }, "let"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " i "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ";"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " i "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "10"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ";"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " i"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "++"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "    "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "list"),
                        createVNode("span", { style: { "color": "#F07178" } }, "["),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "i"),
                        createVNode("span", { style: { "color": "#F07178" } }, "] "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "      label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "+"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "i"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "      value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "i")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " options "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "(list)")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " actives "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "(["),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "2"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "])")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "script"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" })
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_demo, {
            "initial-value": `<template>
  <h4>最多选三个</h4>
  <p-select
    v-model="actives"
    :options="options"
    multiple
    :multipleLimit="3"
  ></p-select>
  <h4>actives value :{{ actives }}</h4>
</template>

<script setup>
  import { ref } from 'vue'
  const list = []
  for (let i = 0; i < 10; i++) {
    list[i] = {
      label: 'label' + i,
      value: i
    }
  }
  const options = ref(list)
  const actives = ref([2])
<\/script>
`,
            direction: "",
            lang: "vue",
            height: "undefined"
          }, {
            default: withCtx(() => [
              createVNode("div", { class: "language-vue" }, [
                createVNode("button", {
                  title: "Copy Code",
                  class: "copy"
                }),
                createVNode("span", { class: "lang" }, "vue"),
                createVNode("pre", { class: "shiki material-palenight" }, [
                  createVNode("code", null, [
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "最多选三个"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-select")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "actives"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                      createVNode("span", { style: { "color": "#C792EA" } }, ":options"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "options"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "multiple")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                      createVNode("span", { style: { "color": "#C792EA" } }, ":multipleLimit"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "3"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "  ></"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-select"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "actives value :{{ actives }}"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "script"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "setup"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "import"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "ref"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "from"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "vue"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " list "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " []")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "for"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                      createVNode("span", { style: { "color": "#C792EA" } }, "let"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " i "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " i "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "10"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " i"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "++"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "    "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "list"),
                      createVNode("span", { style: { "color": "#F07178" } }, "["),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "i"),
                      createVNode("span", { style: { "color": "#F07178" } }, "] "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "      label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "+"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "i"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "      value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "i")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " options "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "(list)")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " actives "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "(["),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "2"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "])")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "script"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" })
                  ])
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="显示标签数量" tabindex="-1">显示标签数量 <a class="header-anchor" href="#显示标签数量" aria-hidden="true">#</a></h2><p>设置 <code>maxTagCount</code> 属性</p>`);
  _push(ssrRenderComponent(_component_clientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_demo, {
          "initial-value": `<template>
  <h4>两个以上折叠标签, hover 可显示隐藏掉的标签</h4>
  <p-select
    v-model="actives"
    :options="options"
    multiple
    :maxTagCount="2"
  ></p-select>
  <h4>actives value :{{ actives }}</h4>
</template>

<script setup>
  import { ref } from 'vue'
  const list = []
  for (let i = 0; i < 10; i++) {
    list[i] = {
      label: 'label' + i,
      value: i
    }
  }
  const options = ref(list)
  const actives = ref([2])
<\/script>
`,
          direction: "",
          lang: "vue",
          height: "undefined"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-vue"${_scopeId2}><button title="Copy Code" class="copy"${_scopeId2}></button><span class="lang"${_scopeId2}>vue</span><pre class="shiki material-palenight"${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>h4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>两个以上折叠标签, hover 可显示隐藏掉的标签</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>h4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-select</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>actives</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>:options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>multiple</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>:maxTagCount</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>2</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>  &gt;&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-select</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>h4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>actives value :{{ actives }}</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>h4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>setup</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> list </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> []</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>for</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> (</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>let</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> i </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> i </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>10</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> i</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>++</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>) </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>list</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>[</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>i</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>] </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>+</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>i</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>i</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> options </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(list)</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> actives </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>([</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>2</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>])</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}></span></code></pre></div>`);
            } else {
              return [
                createVNode("div", { class: "language-vue" }, [
                  createVNode("button", {
                    title: "Copy Code",
                    class: "copy"
                  }),
                  createVNode("span", { class: "lang" }, "vue"),
                  createVNode("pre", { class: "shiki material-palenight" }, [
                    createVNode("code", null, [
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "template"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "两个以上折叠标签, hover 可显示隐藏掉的标签"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-select")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "actives"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                        createVNode("span", { style: { "color": "#C792EA" } }, ":options"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "options"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "multiple")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                        createVNode("span", { style: { "color": "#C792EA" } }, ":maxTagCount"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "2"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "  ></"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-select"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "actives value :{{ actives }}"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "template"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "script"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "setup"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "import"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "ref"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "from"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "vue"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " list "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " []")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "for"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                        createVNode("span", { style: { "color": "#C792EA" } }, "let"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " i "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ";"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " i "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "10"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ";"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " i"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "++"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "    "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "list"),
                        createVNode("span", { style: { "color": "#F07178" } }, "["),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "i"),
                        createVNode("span", { style: { "color": "#F07178" } }, "] "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "      label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "+"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "i"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "      value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "i")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " options "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "(list)")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " actives "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "(["),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "2"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "])")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "script"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" })
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_demo, {
            "initial-value": `<template>
  <h4>两个以上折叠标签, hover 可显示隐藏掉的标签</h4>
  <p-select
    v-model="actives"
    :options="options"
    multiple
    :maxTagCount="2"
  ></p-select>
  <h4>actives value :{{ actives }}</h4>
</template>

<script setup>
  import { ref } from 'vue'
  const list = []
  for (let i = 0; i < 10; i++) {
    list[i] = {
      label: 'label' + i,
      value: i
    }
  }
  const options = ref(list)
  const actives = ref([2])
<\/script>
`,
            direction: "",
            lang: "vue",
            height: "undefined"
          }, {
            default: withCtx(() => [
              createVNode("div", { class: "language-vue" }, [
                createVNode("button", {
                  title: "Copy Code",
                  class: "copy"
                }),
                createVNode("span", { class: "lang" }, "vue"),
                createVNode("pre", { class: "shiki material-palenight" }, [
                  createVNode("code", null, [
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "两个以上折叠标签, hover 可显示隐藏掉的标签"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-select")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "actives"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                      createVNode("span", { style: { "color": "#C792EA" } }, ":options"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "options"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "multiple")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                      createVNode("span", { style: { "color": "#C792EA" } }, ":maxTagCount"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "2"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "  ></"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-select"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "actives value :{{ actives }}"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "script"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "setup"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "import"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "ref"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "from"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "vue"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " list "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " []")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "for"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                      createVNode("span", { style: { "color": "#C792EA" } }, "let"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " i "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " i "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "10"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " i"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "++"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "    "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "list"),
                      createVNode("span", { style: { "color": "#F07178" } }, "["),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "i"),
                      createVNode("span", { style: { "color": "#F07178" } }, "] "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "      label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "+"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "i"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "      value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "i")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " options "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "(list)")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " actives "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "(["),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "2"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "])")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "script"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" })
                  ])
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="显示-options-数量" tabindex="-1">显示 options 数量 <a class="header-anchor" href="#显示-options-数量" aria-hidden="true">#</a></h2><p>设置 <code>maxOptionCount</code> 属性</p>`);
  _push(ssrRenderComponent(_component_clientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_demo, {
          "initial-value": `<template>
  <h4>options一页最多显示5个</h4>
  <p-select
    v-model="actives"
    :options="options"
    multiple
    :maxOptionCount="5"
  ></p-select>
  <h4>actives value :{{ actives }}</h4>
</template>

<script setup>
  import { ref } from 'vue'
  const list = []
  for (let i = 0; i < 10; i++) {
    list[i] = {
      label: 'label' + i,
      value: i
    }
  }
  const options = ref(list)
  const actives = ref([2])
<\/script>
`,
          direction: "",
          lang: "vue",
          height: "undefined"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-vue"${_scopeId2}><button title="Copy Code" class="copy"${_scopeId2}></button><span class="lang"${_scopeId2}>vue</span><pre class="shiki material-palenight"${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>h4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>options一页最多显示5个</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>h4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-select</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>actives</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>:options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>multiple</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>:maxOptionCount</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>5</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>  &gt;&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-select</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>h4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>actives value :{{ actives }}</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>h4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>setup</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> list </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> []</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>for</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> (</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>let</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> i </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> i </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>10</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> i</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>++</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>) </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>list</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>[</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>i</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>] </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>+</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>i</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>i</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> options </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(list)</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> actives </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>([</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>2</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>])</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}></span></code></pre></div>`);
            } else {
              return [
                createVNode("div", { class: "language-vue" }, [
                  createVNode("button", {
                    title: "Copy Code",
                    class: "copy"
                  }),
                  createVNode("span", { class: "lang" }, "vue"),
                  createVNode("pre", { class: "shiki material-palenight" }, [
                    createVNode("code", null, [
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "template"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "options一页最多显示5个"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-select")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "actives"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                        createVNode("span", { style: { "color": "#C792EA" } }, ":options"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "options"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "multiple")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                        createVNode("span", { style: { "color": "#C792EA" } }, ":maxOptionCount"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "5"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "  ></"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-select"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "actives value :{{ actives }}"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "template"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "script"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "setup"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "import"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "ref"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "from"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "vue"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " list "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " []")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "for"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                        createVNode("span", { style: { "color": "#C792EA" } }, "let"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " i "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ";"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " i "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "10"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ";"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " i"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "++"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "    "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "list"),
                        createVNode("span", { style: { "color": "#F07178" } }, "["),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "i"),
                        createVNode("span", { style: { "color": "#F07178" } }, "] "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "      label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "+"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "i"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "      value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "i")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " options "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "(list)")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " actives "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "(["),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "2"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "])")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "script"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" })
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_demo, {
            "initial-value": `<template>
  <h4>options一页最多显示5个</h4>
  <p-select
    v-model="actives"
    :options="options"
    multiple
    :maxOptionCount="5"
  ></p-select>
  <h4>actives value :{{ actives }}</h4>
</template>

<script setup>
  import { ref } from 'vue'
  const list = []
  for (let i = 0; i < 10; i++) {
    list[i] = {
      label: 'label' + i,
      value: i
    }
  }
  const options = ref(list)
  const actives = ref([2])
<\/script>
`,
            direction: "",
            lang: "vue",
            height: "undefined"
          }, {
            default: withCtx(() => [
              createVNode("div", { class: "language-vue" }, [
                createVNode("button", {
                  title: "Copy Code",
                  class: "copy"
                }),
                createVNode("span", { class: "lang" }, "vue"),
                createVNode("pre", { class: "shiki material-palenight" }, [
                  createVNode("code", null, [
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "options一页最多显示5个"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-select")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "actives"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                      createVNode("span", { style: { "color": "#C792EA" } }, ":options"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "options"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "multiple")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                      createVNode("span", { style: { "color": "#C792EA" } }, ":maxOptionCount"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "5"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "  ></"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-select"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "actives value :{{ actives }}"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "script"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "setup"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "import"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "ref"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "from"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "vue"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " list "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " []")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "for"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                      createVNode("span", { style: { "color": "#C792EA" } }, "let"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " i "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " i "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "10"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " i"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "++"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "    "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "list"),
                      createVNode("span", { style: { "color": "#F07178" } }, "["),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "i"),
                      createVNode("span", { style: { "color": "#F07178" } }, "] "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "      label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "+"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "i"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "      value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "i")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " options "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "(list)")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " actives "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "(["),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "2"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "])")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "script"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" })
                  ])
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="多选标签类型" tabindex="-1">多选标签类型 <a class="header-anchor" href="#多选标签类型" aria-hidden="true">#</a></h2><p>设置 <code>tagType</code> 属性</p>`);
  _push(ssrRenderComponent(_component_clientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_demo, {
          "initial-value": `<template>
  <h4>设置标签类型</h4>
  <p-select
    v-model="actives1"
    :options="options1"
    multiple
    tagType="success"
  ></p-select>
  <h4>单独选项标签类型</h4>
  <p-select v-model="actives2" :options="options2" multiple></p-select>
</template>

<script setup>
  import { ref } from 'vue'
  const list1 = []
  const list2 = []
  const tagTypes = [
    'primary',
    'success',
    'danger',
    'warning',
    'info',
    'default'
  ]

  for (let i = 0; i < 10; i++) {
    list1[i] = {
      label: 'label' + i,
      value: i
    }
    list2[i] = {
      label: 'label' + i,
      value: i,
      tagType: tagTypes[i % 6]
    }
  }
  const options1 = ref(list1)
  const options2 = ref(list2)
  const actives1 = ref([0, 1, 2, 3, 4, 5])
  const actives2 = ref([0, 1, 2, 3, 4, 5])
<\/script>
`,
          direction: "",
          lang: "vue",
          height: "undefined"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-vue"${_scopeId2}><button title="Copy Code" class="copy"${_scopeId2}></button><span class="lang"${_scopeId2}>vue</span><pre class="shiki material-palenight"${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>h4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>设置标签类型</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>h4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-select</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>actives1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>:options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>options1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>multiple</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>tagType</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>success</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>  &gt;&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-select</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>h4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>单独选项标签类型</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>h4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-select</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>actives2</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>:options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>options2</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>multiple</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-select</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>setup</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> list1 </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> []</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> list2 </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> []</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> tagTypes </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> [</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>primary</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>success</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>danger</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>warning</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>info</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>default</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  ]</span></span>
<span class="line"${_scopeId2}></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>for</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> (</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>let</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> i </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> i </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>10</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> i</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>++</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>) </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>list1</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>[</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>i</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>] </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>+</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>i</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>i</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>list2</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>[</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>i</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>] </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>+</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>i</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>i</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      tagType</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>tagTypes</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>[</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>i</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>%</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>6</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>]</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> options1 </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(list1)</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> options2 </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(list2)</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> actives1 </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>([</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>2</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>3</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>5</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>])</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> actives2 </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>([</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>2</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>3</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>5</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>])</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}></span></code></pre></div>`);
            } else {
              return [
                createVNode("div", { class: "language-vue" }, [
                  createVNode("button", {
                    title: "Copy Code",
                    class: "copy"
                  }),
                  createVNode("span", { class: "lang" }, "vue"),
                  createVNode("pre", { class: "shiki material-palenight" }, [
                    createVNode("code", null, [
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "template"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "设置标签类型"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-select")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "actives1"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                        createVNode("span", { style: { "color": "#C792EA" } }, ":options"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "options1"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "multiple")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "tagType"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "success"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "  ></"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-select"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "单独选项标签类型"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-select"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "actives2"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, ":options"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "options2"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "multiple"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "></"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-select"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "template"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "script"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "setup"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "import"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "ref"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "from"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "vue"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " list1 "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " []")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " list2 "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " []")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " tagTypes "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " [")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "primary"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "success"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "danger"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "warning"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "info"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "default"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  ]")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "for"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                        createVNode("span", { style: { "color": "#C792EA" } }, "let"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " i "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ";"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " i "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "10"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ";"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " i"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "++"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "    "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "list1"),
                        createVNode("span", { style: { "color": "#F07178" } }, "["),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "i"),
                        createVNode("span", { style: { "color": "#F07178" } }, "] "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "      label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "+"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "i"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "      value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "i")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "    "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "list2"),
                        createVNode("span", { style: { "color": "#F07178" } }, "["),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "i"),
                        createVNode("span", { style: { "color": "#F07178" } }, "] "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "      label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "+"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "i"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "      value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "i"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "      tagType"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "tagTypes"),
                        createVNode("span", { style: { "color": "#F07178" } }, "["),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "i"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "%"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "6"),
                        createVNode("span", { style: { "color": "#F07178" } }, "]")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " options1 "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "(list1)")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " options2 "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "(list2)")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " actives1 "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "(["),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "2"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "3"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "5"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "])")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " actives2 "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "(["),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "2"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "3"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "5"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "])")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "script"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" })
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_demo, {
            "initial-value": `<template>
  <h4>设置标签类型</h4>
  <p-select
    v-model="actives1"
    :options="options1"
    multiple
    tagType="success"
  ></p-select>
  <h4>单独选项标签类型</h4>
  <p-select v-model="actives2" :options="options2" multiple></p-select>
</template>

<script setup>
  import { ref } from 'vue'
  const list1 = []
  const list2 = []
  const tagTypes = [
    'primary',
    'success',
    'danger',
    'warning',
    'info',
    'default'
  ]

  for (let i = 0; i < 10; i++) {
    list1[i] = {
      label: 'label' + i,
      value: i
    }
    list2[i] = {
      label: 'label' + i,
      value: i,
      tagType: tagTypes[i % 6]
    }
  }
  const options1 = ref(list1)
  const options2 = ref(list2)
  const actives1 = ref([0, 1, 2, 3, 4, 5])
  const actives2 = ref([0, 1, 2, 3, 4, 5])
<\/script>
`,
            direction: "",
            lang: "vue",
            height: "undefined"
          }, {
            default: withCtx(() => [
              createVNode("div", { class: "language-vue" }, [
                createVNode("button", {
                  title: "Copy Code",
                  class: "copy"
                }),
                createVNode("span", { class: "lang" }, "vue"),
                createVNode("pre", { class: "shiki material-palenight" }, [
                  createVNode("code", null, [
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "设置标签类型"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-select")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "actives1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                      createVNode("span", { style: { "color": "#C792EA" } }, ":options"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "options1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "multiple")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "tagType"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "success"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "  ></"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-select"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "单独选项标签类型"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-select"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "actives2"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, ":options"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "options2"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "multiple"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "></"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-select"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "script"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "setup"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "import"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "ref"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "from"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "vue"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " list1 "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " []")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " list2 "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " []")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " tagTypes "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " [")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "primary"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "success"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "danger"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "warning"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "info"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "default"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  ]")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "for"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                      createVNode("span", { style: { "color": "#C792EA" } }, "let"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " i "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " i "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "10"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " i"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "++"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "    "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "list1"),
                      createVNode("span", { style: { "color": "#F07178" } }, "["),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "i"),
                      createVNode("span", { style: { "color": "#F07178" } }, "] "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "      label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "+"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "i"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "      value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "i")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "    "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "list2"),
                      createVNode("span", { style: { "color": "#F07178" } }, "["),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "i"),
                      createVNode("span", { style: { "color": "#F07178" } }, "] "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "      label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "+"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "i"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "      value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "i"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "      tagType"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "tagTypes"),
                      createVNode("span", { style: { "color": "#F07178" } }, "["),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "i"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "%"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "6"),
                      createVNode("span", { style: { "color": "#F07178" } }, "]")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " options1 "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "(list1)")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " options2 "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "(list2)")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " actives1 "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "(["),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "2"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "3"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "5"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "])")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " actives2 "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "(["),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "2"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "3"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "5"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "])")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "script"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" })
                  ])
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="placeholder" tabindex="-1">placeholder <a class="header-anchor" href="#placeholder" aria-hidden="true">#</a></h2><p>设置 <code>placeholder</code> 属性,在没有选择任何值时展示</p>`);
  _push(ssrRenderComponent(_component_clientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_demo, {
          "initial-value": `<template>
  <h4>placeholder="请选择"</h4>
  <p-select
    v-model="actives"
    :options="options"
    placeholder="请选择"
    clearable
  ></p-select>
</template>

<script setup>
  import { ref } from 'vue'
  const list = []
  for (let i = 0; i < 10; i++) {
    list[i] = {
      label: 'label' + i,
      value: i
    }
  }
  const options = ref(list)
  const actives = ref()
<\/script>
`,
          direction: "",
          lang: "vue",
          height: "undefined"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-vue"${_scopeId2}><button title="Copy Code" class="copy"${_scopeId2}></button><span class="lang"${_scopeId2}>vue</span><pre class="shiki material-palenight"${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>h4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>placeholder=&quot;请选择&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>h4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-select</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>actives</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>:options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>placeholder</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>请选择</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>clearable</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>  &gt;&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-select</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>setup</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> list </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> []</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>for</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> (</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>let</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> i </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> i </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>10</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> i</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>++</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>) </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>list</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>[</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>i</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>] </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>+</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>i</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>i</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> options </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(list)</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> actives </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>()</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}></span></code></pre></div>`);
            } else {
              return [
                createVNode("div", { class: "language-vue" }, [
                  createVNode("button", {
                    title: "Copy Code",
                    class: "copy"
                  }),
                  createVNode("span", { class: "lang" }, "vue"),
                  createVNode("pre", { class: "shiki material-palenight" }, [
                    createVNode("code", null, [
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "template"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, 'placeholder="请选择"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-select")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "actives"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                        createVNode("span", { style: { "color": "#C792EA" } }, ":options"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "options"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "placeholder"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "请选择"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "clearable")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "  ></"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-select"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "template"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "script"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "setup"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "import"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "ref"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "from"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "vue"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " list "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " []")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "for"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                        createVNode("span", { style: { "color": "#C792EA" } }, "let"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " i "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ";"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " i "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "10"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ";"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " i"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "++"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "    "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "list"),
                        createVNode("span", { style: { "color": "#F07178" } }, "["),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "i"),
                        createVNode("span", { style: { "color": "#F07178" } }, "] "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "      label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "+"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "i"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "      value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "i")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " options "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "(list)")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " actives "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "()")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "script"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" })
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_demo, {
            "initial-value": `<template>
  <h4>placeholder="请选择"</h4>
  <p-select
    v-model="actives"
    :options="options"
    placeholder="请选择"
    clearable
  ></p-select>
</template>

<script setup>
  import { ref } from 'vue'
  const list = []
  for (let i = 0; i < 10; i++) {
    list[i] = {
      label: 'label' + i,
      value: i
    }
  }
  const options = ref(list)
  const actives = ref()
<\/script>
`,
            direction: "",
            lang: "vue",
            height: "undefined"
          }, {
            default: withCtx(() => [
              createVNode("div", { class: "language-vue" }, [
                createVNode("button", {
                  title: "Copy Code",
                  class: "copy"
                }),
                createVNode("span", { class: "lang" }, "vue"),
                createVNode("pre", { class: "shiki material-palenight" }, [
                  createVNode("code", null, [
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, 'placeholder="请选择"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-select")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "actives"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                      createVNode("span", { style: { "color": "#C792EA" } }, ":options"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "options"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "placeholder"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "请选择"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "clearable")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "  ></"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-select"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "script"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "setup"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "import"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "ref"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "from"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "vue"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " list "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " []")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "for"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                      createVNode("span", { style: { "color": "#C792EA" } }, "let"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " i "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " i "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "10"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " i"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "++"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "    "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "list"),
                      createVNode("span", { style: { "color": "#F07178" } }, "["),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "i"),
                      createVNode("span", { style: { "color": "#F07178" } }, "] "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "      label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "+"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "i"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "      value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "i")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " options "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "(list)")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " actives "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "()")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "script"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" })
                  ])
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="空数据插槽" tabindex="-1">空数据插槽 <a class="header-anchor" href="#空数据插槽" aria-hidden="true">#</a></h2><p>当 <code>filterable</code> 为 <code>true</code> , 过滤数据没有匹配到时显示的内容</p>`);
  _push(ssrRenderComponent(_component_clientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_demo, {
          "initial-value": `<template>
  <p-space>
    <p-select v-model="active" :options="options" filterable>
      <template #noMatch>
        <div class="no-match">没有搜索到内容...</div>
      </template>
    </p-select>
  </p-space>
</template>
<script setup>
  import { ref, watch } from 'vue'
  const list = []
  for (let i = 0; i < 20; i++) {
    list[i] = {
      label: 'label' + i,
      value: i
    }
  }
  const active = ref(1)
  const options = ref(list)
<\/script>
<style>
  .no-match {
    text-align: center;
    font-size: 25px;
    padding: 20px;
  }
</style>
`,
          direction: "",
          lang: "vue",
          height: "undefined"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-vue"${_scopeId2}><button title="Copy Code" class="copy"${_scopeId2}></button><span class="lang"${_scopeId2}>vue</span><pre class="shiki material-palenight"${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-space</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-select</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>active</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>:options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>filterable</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>#</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>noMatch</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>no-match</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>没有搜索到内容...</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-select</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-space</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>setup</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>watch</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> list </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> []</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>for</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> (</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>let</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> i </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> i </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>20</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> i</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>++</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>) </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>list</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>[</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>i</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>] </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>+</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>i</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>i</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> active </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>)</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> options </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(list)</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>style</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>no-match</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>text-align</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> center</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>font-size</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>25px</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>padding</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>20px</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>style</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}></span></code></pre></div>`);
            } else {
              return [
                createVNode("div", { class: "language-vue" }, [
                  createVNode("button", {
                    title: "Copy Code",
                    class: "copy"
                  }),
                  createVNode("span", { class: "lang" }, "vue"),
                  createVNode("pre", { class: "shiki material-palenight" }, [
                    createVNode("code", null, [
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "template"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-space"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-select"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "active"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, ":options"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "options"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "filterable"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "template"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "#"),
                        createVNode("span", { style: { "color": "#C792EA" } }, "noMatch"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "class"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "no-match"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "没有搜索到内容..."),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "template"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-select"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-space"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "template"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "script"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "setup"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "import"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "ref"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "watch"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "from"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "vue"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " list "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " []")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "for"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                        createVNode("span", { style: { "color": "#C792EA" } }, "let"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " i "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ";"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " i "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "20"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ";"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " i"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "++"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "    "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "list"),
                        createVNode("span", { style: { "color": "#F07178" } }, "["),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "i"),
                        createVNode("span", { style: { "color": "#F07178" } }, "] "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "      label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "+"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "i"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "      value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "i")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " active "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " options "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "(list)")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "script"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "style"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#FFCB6B" } }, "no-match"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#B2CCD6" } }, "text-align"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " center"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#B2CCD6" } }, "font-size"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "25px"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#B2CCD6" } }, "padding"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "20px"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "style"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" })
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_demo, {
            "initial-value": `<template>
  <p-space>
    <p-select v-model="active" :options="options" filterable>
      <template #noMatch>
        <div class="no-match">没有搜索到内容...</div>
      </template>
    </p-select>
  </p-space>
</template>
<script setup>
  import { ref, watch } from 'vue'
  const list = []
  for (let i = 0; i < 20; i++) {
    list[i] = {
      label: 'label' + i,
      value: i
    }
  }
  const active = ref(1)
  const options = ref(list)
<\/script>
<style>
  .no-match {
    text-align: center;
    font-size: 25px;
    padding: 20px;
  }
</style>
`,
            direction: "",
            lang: "vue",
            height: "undefined"
          }, {
            default: withCtx(() => [
              createVNode("div", { class: "language-vue" }, [
                createVNode("button", {
                  title: "Copy Code",
                  class: "copy"
                }),
                createVNode("span", { class: "lang" }, "vue"),
                createVNode("pre", { class: "shiki material-palenight" }, [
                  createVNode("code", null, [
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-space"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-select"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "active"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, ":options"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "options"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "filterable"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "#"),
                      createVNode("span", { style: { "color": "#C792EA" } }, "noMatch"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "no-match"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "没有搜索到内容..."),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-select"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-space"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "script"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "setup"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "import"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "ref"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "watch"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "from"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "vue"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " list "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " []")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "for"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                      createVNode("span", { style: { "color": "#C792EA" } }, "let"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " i "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " i "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "20"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " i"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "++"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, ") "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "    "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "list"),
                      createVNode("span", { style: { "color": "#F07178" } }, "["),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "i"),
                      createVNode("span", { style: { "color": "#F07178" } }, "] "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "      label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "+"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "i"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "      value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "i")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " active "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " options "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "(list)")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "script"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "style"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#FFCB6B" } }, "no-match"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "text-align"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " center"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "font-size"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "25px"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "padding"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "20px"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "style"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" })
                  ])
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="自定义选项渲染" tabindex="-1">自定义选项渲染 <a class="header-anchor" href="#自定义选项渲染" aria-hidden="true">#</a></h2><p><code>renderLabel</code> 接收一个函数需要返回<code>vnode</code></p>`);
  _push(ssrRenderComponent(_component_clientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_demo, {
          "initial-value": `<template>
  <p-space>
    <p-select v-model="active" :options="options" :renderLabel="renderLabel" />
  </p-space>
</template>
<script setup>
  import { ref, watch, h } from 'vue'
  import { Icon } from 'promiseui-vue'
  import { MusicalNotesSharp, FlameSharp } from '@vicons/ionicons5'

  const list = [
    'All Too Well',
    'evermore',
    'Cruel Summer',
    'You Belong With Me (Taylor’s Version)',
    "Love Story (Taylor's Version)",
    'exile',
    'Call It What You Want (Commentary)',
    'London Boy',
    'This Love (Commentary)',
    'Back To December'
  ].map((item) => ({ label: item, value: item }))

  const active = ref(1)
  const options = ref(list)
  const renderLabel = ({ row, rows, index }) => {
    return h(
      'div',
      {
        style: {
          color: index <= 2 ? 'red' : 'inherit'
        }
      },
      [
        h(Icon, { component: index <= 2 ? FlameSharp : MusicalNotesSharp }),
        h(
          'span',
          {
            style: 'padding: 0 10px'
          },
          row.label
        )
      ]
    )
  }
<\/script>
`,
          direction: "",
          lang: "vue",
          height: "undefined"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-vue"${_scopeId2}><button title="Copy Code" class="copy"${_scopeId2}></button><span class="lang"${_scopeId2}>vue</span><pre class="shiki material-palenight"${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-space</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-select</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>active</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>:options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>:renderLabel</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>renderLabel</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-space</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>setup</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>watch</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>h</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>Icon</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>promiseui-vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>MusicalNotesSharp</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>FlameSharp</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>@vicons/ionicons5</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> list </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> [</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>All Too Well</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>evermore</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>Cruel Summer</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>You Belong With Me (Taylor’s Version)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>Love Story (Taylor&#39;s Version)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>exile</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>Call It What You Want (Commentary)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>London Boy</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>This Love (Commentary)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>Back To December</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  ]</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>map</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD", "font-style": "italic" })}"${_scopeId2}>item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>=&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> (</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> item </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>))</span></span>
<span class="line"${_scopeId2}></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> active </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>)</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> options </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(list)</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> renderLabel </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>({</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD", "font-style": "italic" })}"${_scopeId2}>row</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD", "font-style": "italic" })}"${_scopeId2}>rows</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD", "font-style": "italic" })}"${_scopeId2}>index</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>})</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>=&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>return</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>h</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>(</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>        style</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>          color</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>index</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>2</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>?</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>red</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>inherit</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>},</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      [</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>h</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>Icon</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> component</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>index</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>2</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>?</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>FlameSharp</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>MusicalNotesSharp</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>h</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>(</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>span</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>            style</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>padding: 0 10px</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>},</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>row</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>label</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>        )</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      ]</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    )</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}></span></code></pre></div>`);
            } else {
              return [
                createVNode("div", { class: "language-vue" }, [
                  createVNode("button", {
                    title: "Copy Code",
                    class: "copy"
                  }),
                  createVNode("span", { class: "lang" }, "vue"),
                  createVNode("pre", { class: "shiki material-palenight" }, [
                    createVNode("code", null, [
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "template"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-space"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-select"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "active"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, ":options"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "options"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, ":renderLabel"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "renderLabel"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-space"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "template"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "script"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "setup"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "import"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "ref"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "watch"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "h"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "from"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "vue"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "import"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "Icon"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "from"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "promiseui-vue"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "import"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "MusicalNotesSharp"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "FlameSharp"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "from"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "@vicons/ionicons5"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " list "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " [")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "All Too Well"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "evermore"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "Cruel Summer"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "You Belong With Me (Taylor’s Version)"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "Love Story (Taylor's Version)"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "exile"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "Call It What You Want (Commentary)"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "London Boy"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "This Love (Commentary)"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "Back To December"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  ]"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "map"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                        createVNode("span", { style: { "color": "#A6ACCD", "font-style": "italic" } }, "item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ")"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "=>"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#F07178" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#F07178" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " item "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "))")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " active "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " options "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "(list)")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " renderLabel "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "({"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD", "font-style": "italic" } }, "row"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD", "font-style": "italic" } }, "rows"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD", "font-style": "italic" } }, "index"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "})"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "=>"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "return"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "h"),
                        createVNode("span", { style: { "color": "#F07178" } }, "(")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "        style"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "          color"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "index"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<="),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "2"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "?"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "red"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "inherit"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "      [")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "        "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "h"),
                        createVNode("span", { style: { "color": "#F07178" } }, "("),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "Icon"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                        createVNode("span", { style: { "color": "#F07178" } }, " component"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "index"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<="),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "2"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "?"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "FlameSharp"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "MusicalNotesSharp"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                        createVNode("span", { style: { "color": "#F07178" } }, ")"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "        "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "h"),
                        createVNode("span", { style: { "color": "#F07178" } }, "(")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "          "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "span"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "          "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "            style"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "padding: 0 10px"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "          "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "          "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "row"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "label")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "        )")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "      ]")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "    )")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "script"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" })
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_demo, {
            "initial-value": `<template>
  <p-space>
    <p-select v-model="active" :options="options" :renderLabel="renderLabel" />
  </p-space>
</template>
<script setup>
  import { ref, watch, h } from 'vue'
  import { Icon } from 'promiseui-vue'
  import { MusicalNotesSharp, FlameSharp } from '@vicons/ionicons5'

  const list = [
    'All Too Well',
    'evermore',
    'Cruel Summer',
    'You Belong With Me (Taylor’s Version)',
    "Love Story (Taylor's Version)",
    'exile',
    'Call It What You Want (Commentary)',
    'London Boy',
    'This Love (Commentary)',
    'Back To December'
  ].map((item) => ({ label: item, value: item }))

  const active = ref(1)
  const options = ref(list)
  const renderLabel = ({ row, rows, index }) => {
    return h(
      'div',
      {
        style: {
          color: index <= 2 ? 'red' : 'inherit'
        }
      },
      [
        h(Icon, { component: index <= 2 ? FlameSharp : MusicalNotesSharp }),
        h(
          'span',
          {
            style: 'padding: 0 10px'
          },
          row.label
        )
      ]
    )
  }
<\/script>
`,
            direction: "",
            lang: "vue",
            height: "undefined"
          }, {
            default: withCtx(() => [
              createVNode("div", { class: "language-vue" }, [
                createVNode("button", {
                  title: "Copy Code",
                  class: "copy"
                }),
                createVNode("span", { class: "lang" }, "vue"),
                createVNode("pre", { class: "shiki material-palenight" }, [
                  createVNode("code", null, [
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-space"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-select"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "active"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, ":options"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "options"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, ":renderLabel"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "renderLabel"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-space"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "script"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "setup"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "import"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "ref"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "watch"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "h"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "from"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "vue"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "import"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "Icon"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "from"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "promiseui-vue"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "import"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "MusicalNotesSharp"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "FlameSharp"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "from"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "@vicons/ionicons5"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " list "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " [")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "All Too Well"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "evermore"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "Cruel Summer"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "You Belong With Me (Taylor’s Version)"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "Love Story (Taylor's Version)"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "exile"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "Call It What You Want (Commentary)"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "London Boy"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "This Love (Commentary)"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "Back To December"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  ]"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "map"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                      createVNode("span", { style: { "color": "#A6ACCD", "font-style": "italic" } }, "item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ")"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "=>"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " ("),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#F07178" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#F07178" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " item "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "))")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " active "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " options "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "(list)")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " renderLabel "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "({"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD", "font-style": "italic" } }, "row"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD", "font-style": "italic" } }, "rows"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD", "font-style": "italic" } }, "index"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "})"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "=>"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "return"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "h"),
                      createVNode("span", { style: { "color": "#F07178" } }, "(")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "        style"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "          color"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "index"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<="),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "2"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "?"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "red"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "inherit"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "      [")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "        "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "h"),
                      createVNode("span", { style: { "color": "#F07178" } }, "("),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "Icon"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                      createVNode("span", { style: { "color": "#F07178" } }, " component"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "index"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<="),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "2"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "?"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "FlameSharp"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "MusicalNotesSharp"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                      createVNode("span", { style: { "color": "#F07178" } }, ")"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "        "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "h"),
                      createVNode("span", { style: { "color": "#F07178" } }, "(")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "          "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "span"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "          "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "            style"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "padding: 0 10px"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "          "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "          "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "row"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "label")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "        )")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "      ]")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "    )")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "script"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" })
                  ])
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="尺寸" tabindex="-1">尺寸 <a class="header-anchor" href="#尺寸" aria-hidden="true">#</a></h2>`);
  _push(ssrRenderComponent(_component_clientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_demo, {
          "initial-value": `<template>
  <p-space>
    <p-select v-model="selected" :options="options" size="sm" />
    <p-select v-model="selected" :options="options" size="md" />
    <p-select v-model="selected" :options="options" size="lg" />
  </p-space>
</template>
<script setup>
  import { ref } from 'vue'
  const selected = ref('1')
  const options = [
    {
      label: '选项1',
      value: '1'
    },
    {
      label: '选项2',
      value: '2'
    },
    {
      label: '选项3',
      value: '3'
    },
    {
      label: '选项4',
      value: '4'
    }
  ]
<\/script>
`,
          direction: "",
          lang: "vue",
          height: "undefined"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-vue"${_scopeId2}><button title="Copy Code" class="copy"${_scopeId2}></button><span class="lang"${_scopeId2}>vue</span><pre class="shiki material-palenight"${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-space</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-select</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>selected</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>:options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>size</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>sm</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-select</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>selected</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>:options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>size</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>md</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-select</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>selected</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>:options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>size</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>lg</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-space</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>setup</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> selected </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>)</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> options </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> [</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>选项1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>},</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>选项2</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>2</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>},</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>选项3</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>3</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>},</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>选项4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  ]</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}></span></code></pre></div>`);
            } else {
              return [
                createVNode("div", { class: "language-vue" }, [
                  createVNode("button", {
                    title: "Copy Code",
                    class: "copy"
                  }),
                  createVNode("span", { class: "lang" }, "vue"),
                  createVNode("pre", { class: "shiki material-palenight" }, [
                    createVNode("code", null, [
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "template"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-space"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-select"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "selected"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, ":options"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "options"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "size"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "sm"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-select"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "selected"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, ":options"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "options"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "size"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "md"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-select"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "selected"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, ":options"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "options"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "size"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "lg"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-space"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "template"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "script"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "setup"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "import"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "ref"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "from"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "vue"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " selected "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "1"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " options "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " [")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "选项1"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "1"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "选项2"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "2"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "选项3"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "3"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "选项4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  ]")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "script"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" })
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_demo, {
            "initial-value": `<template>
  <p-space>
    <p-select v-model="selected" :options="options" size="sm" />
    <p-select v-model="selected" :options="options" size="md" />
    <p-select v-model="selected" :options="options" size="lg" />
  </p-space>
</template>
<script setup>
  import { ref } from 'vue'
  const selected = ref('1')
  const options = [
    {
      label: '选项1',
      value: '1'
    },
    {
      label: '选项2',
      value: '2'
    },
    {
      label: '选项3',
      value: '3'
    },
    {
      label: '选项4',
      value: '4'
    }
  ]
<\/script>
`,
            direction: "",
            lang: "vue",
            height: "undefined"
          }, {
            default: withCtx(() => [
              createVNode("div", { class: "language-vue" }, [
                createVNode("button", {
                  title: "Copy Code",
                  class: "copy"
                }),
                createVNode("span", { class: "lang" }, "vue"),
                createVNode("pre", { class: "shiki material-palenight" }, [
                  createVNode("code", null, [
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-space"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-select"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "selected"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, ":options"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "options"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "size"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "sm"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-select"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "selected"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, ":options"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "options"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "size"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "md"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-select"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "selected"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, ":options"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "options"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "size"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "lg"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-space"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "script"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "setup"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "import"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "ref"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "from"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "vue"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " selected "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " options "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " [")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "选项1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "选项2"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "2"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "选项3"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "3"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "选项4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  ]")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "script"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" })
                  ])
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/select/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
