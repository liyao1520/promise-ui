import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"AutoComplete 自动填充","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]},{"level":2,"title":"尺寸","slug":"尺寸","link":"#尺寸","children":[]},{"level":2,"title":"禁用","slug":"禁用","link":"#禁用","children":[]},{"level":2,"title":"自定义选项渲染","slug":"自定义选项渲染","link":"#自定义选项渲染","children":[]}],"relativePath":"components/autoComplete/index.md"}');
const _sfc_main = { name: "components/autoComplete/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_clientOnly = resolveComponent("clientOnly");
  const _component_demo = resolveComponent("demo");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="autocomplete-自动填充" tabindex="-1">AutoComplete 自动填充 <a class="header-anchor" href="#autocomplete-自动填充" aria-hidden="true">#</a></h1><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-hidden="true">#</a></h2>`);
  _push(ssrRenderComponent(_component_clientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_demo, {
          "initial-value": `<template>
  <p-auto-complete
    v-model="inputValue"
    placeholder="请输入邮箱"
    :options="options"
  />
</template>
<script setup>
  import { ref, computed } from 'vue'
  const inputValue = ref('')
  const options = computed(() =>
    ['@gmail.com', '@163.com', '@qq.com'].map((suffix) => {
      const prefix = inputValue.value.split('@')[0]
      return {
        label: prefix + suffix,
        value: prefix + suffix
      }
    })
  )
<\/script>
`,
          direction: "",
          lang: "vue",
          height: "undefined"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-vue"${_scopeId2}><button title="Copy Code" class="copy"${_scopeId2}></button><span class="lang"${_scopeId2}>vue</span><pre class="shiki material-palenight"${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-auto-complete</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>inputValue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>placeholder</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>请输入邮箱</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>:options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>  /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>setup</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>computed</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> inputValue </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>)</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> options </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>computed</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>()</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>=&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    [</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>@gmail.com</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>@163.com</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>@qq.com</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>]</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>map</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD", "font-style": "italic" })}"${_scopeId2}>suffix</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>=&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>prefix</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>inputValue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>split</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>@</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>)[</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>]</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>return</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>        label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>prefix</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>+</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>suffix</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>        value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>prefix</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>+</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>suffix</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>)</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  )</span></span>
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
                        createVNode("span", { style: { "color": "#F07178" } }, "p-auto-complete")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "inputValue"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "placeholder"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "请输入邮箱"),
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
                        createVNode("span", { style: { "color": "#89DDFF" } }, "  />")
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
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "computed"),
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
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " inputValue "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " options "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "computed"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "()"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "=>")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    ["),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "@gmail.com"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "@163.com"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "@qq.com"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "]"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "map"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                        createVNode("span", { style: { "color": "#A6ACCD", "font-style": "italic" } }, "suffix"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ")"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "=>"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "      "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "prefix"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "inputValue"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "split"),
                        createVNode("span", { style: { "color": "#F07178" } }, "("),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "@"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#F07178" } }, ")["),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                        createVNode("span", { style: { "color": "#F07178" } }, "]")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "return"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "        label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "prefix"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "+"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "suffix"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "        value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "prefix"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "+"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "suffix")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  )")
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
  <p-auto-complete
    v-model="inputValue"
    placeholder="请输入邮箱"
    :options="options"
  />
</template>
<script setup>
  import { ref, computed } from 'vue'
  const inputValue = ref('')
  const options = computed(() =>
    ['@gmail.com', '@163.com', '@qq.com'].map((suffix) => {
      const prefix = inputValue.value.split('@')[0]
      return {
        label: prefix + suffix,
        value: prefix + suffix
      }
    })
  )
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
                      createVNode("span", { style: { "color": "#F07178" } }, "p-auto-complete")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "inputValue"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "placeholder"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "请输入邮箱"),
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
                      createVNode("span", { style: { "color": "#89DDFF" } }, "  />")
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
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "computed"),
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
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " inputValue "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " options "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "computed"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "()"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "=>")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    ["),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "@gmail.com"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "@163.com"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "@qq.com"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "]"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "map"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                      createVNode("span", { style: { "color": "#A6ACCD", "font-style": "italic" } }, "suffix"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ")"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "=>"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "      "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "prefix"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "inputValue"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "split"),
                      createVNode("span", { style: { "color": "#F07178" } }, "("),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "@"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#F07178" } }, ")["),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                      createVNode("span", { style: { "color": "#F07178" } }, "]")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "return"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "        label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "prefix"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "+"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "suffix"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "        value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "prefix"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "+"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "suffix")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  )")
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
    <p-auto-complete
      v-model="inputValue"
      placeholder="请输入邮箱"
      :options="options"
      size="sm"
    />
    <p-auto-complete
      v-model="inputValue"
      placeholder="请输入邮箱"
      :options="options"
      size="md"
    />
    <p-auto-complete
      v-model="inputValue"
      placeholder="请输入邮箱"
      :options="options"
      size="lg"
    />
  </p-space>
</template>
<script setup>
  import { ref, computed } from 'vue'
  const inputValue = ref('')
  const options = computed(() =>
    ['@gmail.com', '@163.com', '@qq.com'].map((suffix) => {
      const prefix = inputValue.value.split('@')[0]
      return {
        label: prefix + suffix,
        value: prefix + suffix
      }
    })
  )
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
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-auto-complete</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>inputValue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>placeholder</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>请输入邮箱</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>:options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>size</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>sm</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>    /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-auto-complete</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>inputValue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>placeholder</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>请输入邮箱</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>:options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>size</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>md</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>    /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-auto-complete</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>inputValue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>placeholder</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>请输入邮箱</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>:options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>size</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>lg</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>    /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-space</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>setup</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>computed</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> inputValue </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>)</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> options </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>computed</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>()</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>=&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    [</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>@gmail.com</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>@163.com</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>@qq.com</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>]</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>map</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD", "font-style": "italic" })}"${_scopeId2}>suffix</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>=&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>prefix</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>inputValue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>split</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>@</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>)[</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>]</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>return</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>        label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>prefix</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>+</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>suffix</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>        value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>prefix</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>+</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>suffix</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>)</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  )</span></span>
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
                        createVNode("span", { style: { "color": "#F07178" } }, "p-auto-complete")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "      "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "inputValue"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "      "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "placeholder"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "请输入邮箱"),
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
                        createVNode("span", { style: { "color": "#C792EA" } }, "size"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "sm"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "    />")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-auto-complete")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "      "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "inputValue"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "      "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "placeholder"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "请输入邮箱"),
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
                        createVNode("span", { style: { "color": "#C792EA" } }, "size"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "md"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "    />")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-auto-complete")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "      "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "inputValue"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "      "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "placeholder"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "请输入邮箱"),
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
                        createVNode("span", { style: { "color": "#C792EA" } }, "size"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "lg"),
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
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "computed"),
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
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " inputValue "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " options "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "computed"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "()"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "=>")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    ["),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "@gmail.com"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "@163.com"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "@qq.com"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "]"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "map"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                        createVNode("span", { style: { "color": "#A6ACCD", "font-style": "italic" } }, "suffix"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ")"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "=>"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "      "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "prefix"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "inputValue"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "split"),
                        createVNode("span", { style: { "color": "#F07178" } }, "("),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "@"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#F07178" } }, ")["),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                        createVNode("span", { style: { "color": "#F07178" } }, "]")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "return"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "        label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "prefix"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "+"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "suffix"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "        value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "prefix"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "+"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "suffix")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  )")
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
    <p-auto-complete
      v-model="inputValue"
      placeholder="请输入邮箱"
      :options="options"
      size="sm"
    />
    <p-auto-complete
      v-model="inputValue"
      placeholder="请输入邮箱"
      :options="options"
      size="md"
    />
    <p-auto-complete
      v-model="inputValue"
      placeholder="请输入邮箱"
      :options="options"
      size="lg"
    />
  </p-space>
</template>
<script setup>
  import { ref, computed } from 'vue'
  const inputValue = ref('')
  const options = computed(() =>
    ['@gmail.com', '@163.com', '@qq.com'].map((suffix) => {
      const prefix = inputValue.value.split('@')[0]
      return {
        label: prefix + suffix,
        value: prefix + suffix
      }
    })
  )
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
                      createVNode("span", { style: { "color": "#F07178" } }, "p-auto-complete")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "inputValue"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "placeholder"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "请输入邮箱"),
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
                      createVNode("span", { style: { "color": "#C792EA" } }, "size"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "sm"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-auto-complete")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "inputValue"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "placeholder"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "请输入邮箱"),
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
                      createVNode("span", { style: { "color": "#C792EA" } }, "size"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "md"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-auto-complete")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "inputValue"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "placeholder"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "请输入邮箱"),
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
                      createVNode("span", { style: { "color": "#C792EA" } }, "size"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "lg"),
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
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "computed"),
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
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " inputValue "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " options "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "computed"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "()"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "=>")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    ["),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "@gmail.com"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "@163.com"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "@qq.com"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "]"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "map"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                      createVNode("span", { style: { "color": "#A6ACCD", "font-style": "italic" } }, "suffix"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ")"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "=>"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "      "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "prefix"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "inputValue"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "split"),
                      createVNode("span", { style: { "color": "#F07178" } }, "("),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "@"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#F07178" } }, ")["),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                      createVNode("span", { style: { "color": "#F07178" } }, "]")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "return"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "        label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "prefix"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "+"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "suffix"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "        value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "prefix"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "+"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "suffix")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  )")
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
  _push(`<h2 id="禁用" tabindex="-1">禁用 <a class="header-anchor" href="#禁用" aria-hidden="true">#</a></h2>`);
  _push(ssrRenderComponent(_component_clientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_demo, {
          "initial-value": `<template>
  <p-space>
    <p-auto-complete
      v-model="inputValue"
      placeholder="请输入邮箱"
      :options="options"
    />
    <p-auto-complete
      v-model="inputValue"
      placeholder="请输入邮箱"
      :options="options"
      disabled
    />
  </p-space>
</template>
<script setup>
  import { ref, computed } from 'vue'
  const inputValue = ref('')
  const options = computed(() =>
    ['@gmail.com', '@163.com', '@qq.com'].map((suffix) => {
      const prefix = inputValue.value.split('@')[0]
      return {
        label: prefix + suffix,
        value: prefix + suffix
      }
    })
  )
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
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-auto-complete</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>inputValue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>placeholder</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>请输入邮箱</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>:options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>    /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-auto-complete</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>inputValue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>placeholder</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>请输入邮箱</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>:options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>disabled</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>    /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-space</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>setup</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>computed</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> inputValue </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>)</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> options </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>computed</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>()</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>=&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    [</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>@gmail.com</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>@163.com</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>@qq.com</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>]</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>map</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD", "font-style": "italic" })}"${_scopeId2}>suffix</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>=&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>prefix</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>inputValue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>split</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>@</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>)[</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>]</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>return</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>        label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>prefix</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>+</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>suffix</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>        value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>prefix</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>+</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>suffix</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>)</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  )</span></span>
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
                        createVNode("span", { style: { "color": "#F07178" } }, "p-auto-complete")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "      "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "inputValue"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "      "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "placeholder"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "请输入邮箱"),
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
                        createVNode("span", { style: { "color": "#89DDFF" } }, "    />")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-auto-complete")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "      "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "inputValue"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "      "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "placeholder"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "请输入邮箱"),
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
                        createVNode("span", { style: { "color": "#C792EA" } }, "disabled")
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
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "computed"),
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
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " inputValue "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " options "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "computed"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "()"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "=>")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    ["),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "@gmail.com"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "@163.com"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "@qq.com"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "]"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "map"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                        createVNode("span", { style: { "color": "#A6ACCD", "font-style": "italic" } }, "suffix"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ")"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "=>"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "      "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "prefix"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "inputValue"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "split"),
                        createVNode("span", { style: { "color": "#F07178" } }, "("),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "@"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#F07178" } }, ")["),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                        createVNode("span", { style: { "color": "#F07178" } }, "]")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "return"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "        label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "prefix"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "+"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "suffix"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "        value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "prefix"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "+"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "suffix")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  )")
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
    <p-auto-complete
      v-model="inputValue"
      placeholder="请输入邮箱"
      :options="options"
    />
    <p-auto-complete
      v-model="inputValue"
      placeholder="请输入邮箱"
      :options="options"
      disabled
    />
  </p-space>
</template>
<script setup>
  import { ref, computed } from 'vue'
  const inputValue = ref('')
  const options = computed(() =>
    ['@gmail.com', '@163.com', '@qq.com'].map((suffix) => {
      const prefix = inputValue.value.split('@')[0]
      return {
        label: prefix + suffix,
        value: prefix + suffix
      }
    })
  )
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
                      createVNode("span", { style: { "color": "#F07178" } }, "p-auto-complete")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "inputValue"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "placeholder"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "请输入邮箱"),
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
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-auto-complete")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "inputValue"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "placeholder"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "请输入邮箱"),
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
                      createVNode("span", { style: { "color": "#C792EA" } }, "disabled")
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
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "computed"),
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
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " inputValue "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " options "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "computed"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "()"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "=>")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    ["),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "@gmail.com"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "@163.com"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "@qq.com"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "]"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "map"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                      createVNode("span", { style: { "color": "#A6ACCD", "font-style": "italic" } }, "suffix"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ")"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "=>"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "      "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "prefix"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "inputValue"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "split"),
                      createVNode("span", { style: { "color": "#F07178" } }, "("),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "@"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#F07178" } }, ")["),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                      createVNode("span", { style: { "color": "#F07178" } }, "]")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "return"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "        label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "prefix"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "+"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "suffix"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "        value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "prefix"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "+"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "suffix")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  )")
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
  _push(`<h2 id="自定义选项渲染" tabindex="-1">自定义选项渲染 <a class="header-anchor" href="#自定义选项渲染" aria-hidden="true">#</a></h2><p>renderLabel 接收一个函数需要返回 vnode</p>`);
  _push(ssrRenderComponent(_component_clientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_demo, {
          "initial-value": `<template>
  <p-space>
    <p-auto-complete
      v-model="inputValue"
      placeholder="请输入邮箱"
      :options="options"
      :renderLabel="renderLabel"
    />
  </p-space>
</template>
<script setup>
  import { ref, computed, h } from 'vue'
  import { Tag } from 'promiseui-vue'
  const inputValue = ref('')
  const options = computed(() =>
    ['@gmail.com', '@163.com', '@qq.com'].map((suffix) => {
      const prefix = inputValue.value.split('@')[0]
      return {
        label: prefix + suffix,
        value: prefix + suffix
      }
    })
  )
  const renderLabel = ({ row }) => {
    return h('div', [
      h(
        'span',
        {
          style: 'padding-right:10px'
        },
        row.label
      ),
      h(
        Tag,
        {
          type: 'primary'
        },
        'Email'
      )
    ])
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
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-auto-complete</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>inputValue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>placeholder</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>请输入邮箱</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>:options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>:renderLabel</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>renderLabel</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>    /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-space</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>setup</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>computed</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>h</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>Tag</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>promiseui-vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> inputValue </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>)</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> options </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>computed</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>()</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>=&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    [</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>@gmail.com</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>@163.com</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>@qq.com</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>]</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>map</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD", "font-style": "italic" })}"${_scopeId2}>suffix</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>=&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>prefix</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>inputValue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>split</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>@</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>)[</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>]</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>return</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>        label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>prefix</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>+</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>suffix</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>        value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>prefix</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>+</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>suffix</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>)</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  )</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> renderLabel </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>({</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD", "font-style": "italic" })}"${_scopeId2}>row</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>})</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>=&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>return</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>h</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> [</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>h</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>(</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>span</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>          style</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>padding-right:10px</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>},</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>row</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>label</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      )</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>h</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>(</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>Tag</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>          type</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>primary</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>},</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>Email</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      )</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    ])</span></span>
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
                        createVNode("span", { style: { "color": "#F07178" } }, "p-auto-complete")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "      "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "inputValue"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "      "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "placeholder"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "请输入邮箱"),
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
                        createVNode("span", { style: { "color": "#C792EA" } }, ":renderLabel"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "renderLabel"),
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
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "computed"),
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
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "Tag"),
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
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " inputValue "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " options "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "computed"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "()"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "=>")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    ["),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "@gmail.com"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "@163.com"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "@qq.com"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "]"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "map"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                        createVNode("span", { style: { "color": "#A6ACCD", "font-style": "italic" } }, "suffix"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ")"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "=>"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "      "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "prefix"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "inputValue"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "split"),
                        createVNode("span", { style: { "color": "#F07178" } }, "("),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "@"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#F07178" } }, ")["),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                        createVNode("span", { style: { "color": "#F07178" } }, "]")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "return"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "        label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "prefix"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "+"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "suffix"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "        value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "prefix"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "+"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "suffix")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  )")
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
                        createVNode("span", { style: { "color": "#F07178" } }, "("),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                        createVNode("span", { style: { "color": "#F07178" } }, " [")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "      "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "h"),
                        createVNode("span", { style: { "color": "#F07178" } }, "(")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "span"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "          style"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "padding-right:10px"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "        "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "row"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "label")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "      )"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "      "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "h"),
                        createVNode("span", { style: { "color": "#F07178" } }, "(")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "        "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "Tag"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "          type"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "primary"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "Email"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "      )")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "    ])")
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
    <p-auto-complete
      v-model="inputValue"
      placeholder="请输入邮箱"
      :options="options"
      :renderLabel="renderLabel"
    />
  </p-space>
</template>
<script setup>
  import { ref, computed, h } from 'vue'
  import { Tag } from 'promiseui-vue'
  const inputValue = ref('')
  const options = computed(() =>
    ['@gmail.com', '@163.com', '@qq.com'].map((suffix) => {
      const prefix = inputValue.value.split('@')[0]
      return {
        label: prefix + suffix,
        value: prefix + suffix
      }
    })
  )
  const renderLabel = ({ row }) => {
    return h('div', [
      h(
        'span',
        {
          style: 'padding-right:10px'
        },
        row.label
      ),
      h(
        Tag,
        {
          type: 'primary'
        },
        'Email'
      )
    ])
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
                      createVNode("span", { style: { "color": "#F07178" } }, "p-auto-complete")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "inputValue"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "placeholder"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "请输入邮箱"),
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
                      createVNode("span", { style: { "color": "#C792EA" } }, ":renderLabel"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "renderLabel"),
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
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "computed"),
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
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "Tag"),
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
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " inputValue "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " options "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "computed"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "()"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "=>")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    ["),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "@gmail.com"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "@163.com"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "@qq.com"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "]"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "map"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                      createVNode("span", { style: { "color": "#A6ACCD", "font-style": "italic" } }, "suffix"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ")"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "=>"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "      "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "prefix"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "inputValue"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "split"),
                      createVNode("span", { style: { "color": "#F07178" } }, "("),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "@"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#F07178" } }, ")["),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                      createVNode("span", { style: { "color": "#F07178" } }, "]")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "return"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "        label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "prefix"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "+"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "suffix"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "        value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "prefix"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "+"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "suffix")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  )")
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
                      createVNode("span", { style: { "color": "#F07178" } }, "("),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#F07178" } }, " [")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "      "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "h"),
                      createVNode("span", { style: { "color": "#F07178" } }, "(")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "span"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "          style"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "padding-right:10px"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "        "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "row"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "label")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "      )"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "      "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "h"),
                      createVNode("span", { style: { "color": "#F07178" } }, "(")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "        "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "Tag"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "          type"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "primary"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "Email"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "      )")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "    ])")
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
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/autoComplete/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
