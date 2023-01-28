import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Form 表单","description":"","frontmatter":{},"headers":[{"level":2,"title":"典型表单","slug":"典型表单","link":"#典型表单","children":[]},{"level":2,"title":"表单样式","slug":"表单样式","link":"#表单样式","children":[]},{"level":2,"title":"行内表单","slug":"行内表单","link":"#行内表单","children":[]},{"level":2,"title":"表单验证","slug":"表单验证","link":"#表单验证","children":[]},{"level":2,"title":"只执行部分规则","slug":"只执行部分规则","link":"#只执行部分规则","children":[]},{"level":2,"title":"必填项","slug":"必填项","link":"#必填项","children":[]},{"level":2,"title":"自定义 labelWidth","slug":"自定义-labelwidth","link":"#自定义-labelwidth","children":[]},{"level":2,"title":"展示 label","slug":"展示-label","link":"#展示-label","children":[]}],"relativePath":"components/form/index.md"}');
const _sfc_main = { name: "components/form/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_clientOnly = resolveComponent("clientOnly");
  const _component_demo = resolveComponent("demo");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="form-表单" tabindex="-1">Form 表单 <a class="header-anchor" href="#form-表单" aria-hidden="true">#</a></h1><h2 id="典型表单" tabindex="-1">典型表单 <a class="header-anchor" href="#典型表单" aria-hidden="true">#</a></h2><p>最基础的表单包括各种输入表单项，比如 <code>input</code>、<code>select</code>、<code>radio</code>、<code>checkbox</code>等。</p><p>在每一个 <code>form</code> 组件中，你需要一个 <code>form-item</code> 字段作为输入项的容器，用于获取值与验证值。</p><p><code>help-tips</code> 如果传值会出现一个问好图标,可以给用户提示信息</p>`);
  _push(ssrRenderComponent(_component_clientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_demo, {
          "initial-value": `<template>
  <p-form>
    <p-form-item label="username" help-tips="This is the username.">
      <p-input v-model="formData.username" />
    </p-form-item>
    <p-form-item label="password" help-tips="This is the password.">
      <p-input v-model="formData.password" show-password />
    </p-form-item>
    <p-form-item>
      <p-checkbox v-model="formData.rememberMe" label="Remember me" />
    </p-form-item>
    <p-form-item>
      <p-button type="primary" @click="submit">Submit</p-button>
    </p-form-item>
  </p-form>
</template>
<script setup>
  import { reactive } from 'vue'
  import { Message } from 'promiseui-vue'
  const formData = reactive({
    username: '',
    password: '',
    rememberMe: true
  })
  const submit = () => {
    Message.info(
      \`username: "\${formData.username}" , password: "\${formData.password}"\`
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
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>username</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>help-tips</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>This is the username.</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-input</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>formData.username</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>password</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>help-tips</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>This is the password.</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-input</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>formData.password</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>show-password</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-checkbox</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>formData.rememberMe</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>Remember me</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>type</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>primary</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>@click</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>submit</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>Submit</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>setup</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>reactive</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>Message</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>promiseui-vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> formData </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>reactive</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>username</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>password</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>rememberMe</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#FF9CAC" })}"${_scopeId2}>true</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>)</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> submit </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>()</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>=&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>Message</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>info</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>(</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>\`</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>username: &quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>\${</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>formData</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>username</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>&quot; , password: &quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>\${</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>formData</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>password</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>\`</span></span>
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
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "username"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "help-tips"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "This is the username."),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-input"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "formData.username"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "password"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "help-tips"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "This is the password."),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-input"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "formData.password"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "show-password"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-checkbox"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "formData.rememberMe"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "Remember me"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "type"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "primary"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "@click"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "submit"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "Submit"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form"),
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
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "reactive"),
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
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " formData "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "reactive"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#F07178" } }, "username"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#F07178" } }, "password"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#F07178" } }, "rememberMe"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#FF9CAC" } }, "true")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " submit "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "()"),
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
                        createVNode("span", { style: { "color": "#82AAFF" } }, "info"),
                        createVNode("span", { style: { "color": "#F07178" } }, "(")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "`"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, 'username: "'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "${"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "formData"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "username"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, '" , password: "'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "${"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "formData"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "password"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "`")
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
  <p-form>
    <p-form-item label="username" help-tips="This is the username.">
      <p-input v-model="formData.username" />
    </p-form-item>
    <p-form-item label="password" help-tips="This is the password.">
      <p-input v-model="formData.password" show-password />
    </p-form-item>
    <p-form-item>
      <p-checkbox v-model="formData.rememberMe" label="Remember me" />
    </p-form-item>
    <p-form-item>
      <p-button type="primary" @click="submit">Submit</p-button>
    </p-form-item>
  </p-form>
</template>
<script setup>
  import { reactive } from 'vue'
  import { Message } from 'promiseui-vue'
  const formData = reactive({
    username: '',
    password: '',
    rememberMe: true
  })
  const submit = () => {
    Message.info(
      \`username: "\${formData.username}" , password: "\${formData.password}"\`
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
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "username"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "help-tips"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "This is the username."),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-input"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "formData.username"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "password"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "help-tips"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "This is the password."),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-input"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "formData.password"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "show-password"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-checkbox"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "formData.rememberMe"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "Remember me"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "type"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "primary"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "@click"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "submit"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "Submit"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form"),
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
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "reactive"),
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
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " formData "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "reactive"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#F07178" } }, "username"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#F07178" } }, "password"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#F07178" } }, "rememberMe"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#FF9CAC" } }, "true")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " submit "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "()"),
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
                      createVNode("span", { style: { "color": "#82AAFF" } }, "info"),
                      createVNode("span", { style: { "color": "#F07178" } }, "(")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "`"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, 'username: "'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "${"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "formData"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "username"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, '" , password: "'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "${"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "formData"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "password"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "`")
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
  _push(`<h2 id="表单样式" tabindex="-1">表单样式 <a class="header-anchor" href="#表单样式" aria-hidden="true">#</a></h2>`);
  _push(ssrRenderComponent(_component_clientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_demo, {
          "initial-value": `<template>
  <div class="demo">
    <p-space>
      <p-radio-group v-model="formSize">
        <p-radio-button value="sm">小</p-radio-button>
        <p-radio-button value="md">中</p-radio-button>
        <p-radio-button value="lg">大</p-radio-button>
      </p-radio-group>
      <p-radio-group v-model="labelPosition">
        <p-radio-button value="left">left</p-radio-button>
        <p-radio-button value="center">center</p-radio-button>
        <p-radio-button value="right">right</p-radio-button>
        <p-radio-button value="top">top</p-radio-button>
      </p-radio-group>
    </p-space>
    <hr />
    <p-form :size="formSize" :label-position="labelPosition">
      <p-form-item label="textInput">
        <p-input v-model="formData.textInput" placeholder="请输入" />
      </p-form-item>
      <p-form-item label="numberInput">
        <p-input
          v-model="formData.numberInput"
          type="number"
          placeholder="请输入"
        />
      </p-form-item>
      <p-form-item label="select">
        <p-select
          v-model="formData.select"
          placeholder="请选择"
          :options="selectOptions"
        />
      </p-form-item>
      <p-form-item label="autoComplete">
        <p-auto-complete
          v-model="formData.autoComplete"
          placeholder="请输入"
          :options="autoCompleteOptions"
        />
      </p-form-item>
      <p-form-item label="radio">
        <p-radio-group v-model="formData.radio">
          <p-radio value="radio1" label="radio1" />
          <p-radio value="radio2" label="radio2" />
          <p-radio value="radio3" label="radio3" />
        </p-radio-group>
      </p-form-item>
      <p-form-item label="radioButton">
        <p-radio-group v-model="formData.radioButton">
          <p-radio-button value="radio1">radio1</p-radio-button>
          <p-radio-button value="radio2">radio2</p-radio-button>
          <p-radio-button value="radio3">radio3</p-radio-button>
        </p-radio-group>
      </p-form-item>
      <p-form-item label="switch">
        <p-switch v-model="formData.switch" />
      </p-form-item>
      <p-form-item label="checkbox">
        <p-checkbox-group v-model="formData.checkbox">
          <p-checkbox label="checkbox1" value="checkbox1" />
          <p-checkbox label="checkbox2" value="checkbox2" />
          <p-checkbox label="checkbox3" value="checkbox3" />
        </p-checkbox-group>
      </p-form-item>
    </p-form>
    <pre><code>{{  JSON.stringify(formData, null, 2) }}</code></pre>
  </div>
</template>

<script setup>
  import { reactive, ref, watchEffect } from 'vue'
  const formSize = ref('md')
  const labelPosition = ref('right')
  const formData = reactive({
    textInput: '',
    numberInput: '',
    select: '',
    autoComplete: '',
    radio: '',
    radioButton: '',
    switch: false,
    checkbox: []
  })
  const selectOptions = [
    {
      label: 'select1',
      value: 'select1'
    },
    {
      label: 'select2',
      value: 'select2'
    },
    {
      label: 'select3',
      value: 'select3'
    }
  ]
  const autoCompleteOptions = ref([])
  watchEffect(() => {
    const autoCompleteValue = formData.autoComplete
    autoCompleteOptions.value = ['@gmail.com', '@163.com', '@qq.com'].map(
      (suffix) => {
        const prefix = autoCompleteValue.split('@')[0]
        return {
          label: prefix + suffix,
          value: prefix + suffix
        }
      }
    )
  })
<\/script>
<style>
  .demo {
    padding: 0 20px;
  }
</style>
`,
          direction: "column",
          lang: "vue",
          height: "undefined"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-vue"${_scopeId2}><button title="Copy Code" class="copy"${_scopeId2}></button><span class="lang"${_scopeId2}>vue</span><pre class="shiki material-palenight"${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>demo</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-space</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-radio-group</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>formSize</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-radio-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>sm</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>小</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-radio-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-radio-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>md</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>中</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-radio-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-radio-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>lg</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>大</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-radio-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-radio-group</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-radio-group</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>labelPosition</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-radio-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>left</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>left</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-radio-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-radio-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>center</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>center</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-radio-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-radio-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>right</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>right</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-radio-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-radio-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>top</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>top</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-radio-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-radio-group</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-space</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>hr</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>:size</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>formSize</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>:label-position</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>labelPosition</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>textInput</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-input</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>formData.textInput</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>placeholder</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>请输入</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>numberInput</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-input</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>formData.numberInput</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>type</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>number</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>placeholder</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>请输入</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>        /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>select</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-select</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>formData.select</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>placeholder</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>请选择</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>:options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>selectOptions</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>        /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>autoComplete</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-auto-complete</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>formData.autoComplete</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>placeholder</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>请输入</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>:options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>autoCompleteOptions</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>        /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>radio</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-radio-group</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>formData.radio</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-radio</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>radio1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>radio1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-radio</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>radio2</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>radio2</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-radio</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>radio3</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>radio3</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-radio-group</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>radioButton</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-radio-group</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>formData.radioButton</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-radio-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>radio1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>radio1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-radio-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-radio-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>radio2</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>radio2</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-radio-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-radio-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>radio3</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>radio3</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-radio-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-radio-group</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>switch</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-switch</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>formData.switch</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>checkbox</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-checkbox-group</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>formData.checkbox</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-checkbox</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>checkbox1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>checkbox1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-checkbox</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>checkbox2</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>checkbox2</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-checkbox</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>checkbox3</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>checkbox3</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-checkbox-group</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>pre</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>code</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>{{  JSON.stringify(formData, null, 2) }}</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>code</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>pre</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>setup</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>reactive</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>watchEffect</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> formSize </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>md</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>)</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> labelPosition </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>right</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>)</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> formData </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>reactive</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>textInput</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>numberInput</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>select</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>autoComplete</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>radio</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>radioButton</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>switch</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#FF9CAC" })}"${_scopeId2}>false</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>checkbox</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> []</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>)</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> selectOptions </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> [</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>select1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>select1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>},</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>select2</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>select2</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>},</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>select3</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>select3</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  ]</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> autoCompleteOptions </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>([])</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>watchEffect</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>()</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>=&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>autoCompleteValue</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>formData</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>autoComplete</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>autoCompleteOptions</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> [</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>@gmail.com</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>@163.com</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>@qq.com</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>]</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>map</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>(</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD", "font-style": "italic" })}"${_scopeId2}>suffix</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>=&gt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>prefix</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>autoCompleteValue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>split</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>@</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>)[</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>]</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>return</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>          label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>prefix</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>+</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>suffix</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>          value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>prefix</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>+</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>suffix</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    )</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>)</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>style</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>demo</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>padding</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>20px</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
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
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "class"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "demo"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-space"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-radio-group"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "formSize"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-radio-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "sm"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "小"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-radio-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-radio-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "md"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "中"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-radio-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-radio-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "lg"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "大"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-radio-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-radio-group"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-radio-group"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "labelPosition"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-radio-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "left"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "left"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-radio-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-radio-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "center"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "center"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-radio-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-radio-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "right"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "right"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-radio-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-radio-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "top"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "top"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-radio-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-radio-group"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-space"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "hr"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, ":size"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "formSize"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, ":label-position"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "labelPosition"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "textInput"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-input"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "formData.textInput"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "placeholder"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "请输入"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "numberInput"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-input")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "          "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "formData.numberInput"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "          "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "type"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "number"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "          "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "placeholder"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "请输入"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "        />")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "select"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-select")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "          "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "formData.select"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "          "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "placeholder"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "请选择"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "          "),
                        createVNode("span", { style: { "color": "#C792EA" } }, ":options"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "selectOptions"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "        />")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "autoComplete"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-auto-complete")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "          "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "formData.autoComplete"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "          "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "placeholder"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "请输入"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "          "),
                        createVNode("span", { style: { "color": "#C792EA" } }, ":options"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "autoCompleteOptions"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "        />")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "radio"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-radio-group"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "formData.radio"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-radio"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "radio1"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "radio1"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-radio"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "radio2"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "radio2"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-radio"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "radio3"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "radio3"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-radio-group"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "radioButton"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-radio-group"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "formData.radioButton"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-radio-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "radio1"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "radio1"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-radio-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-radio-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "radio2"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "radio2"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-radio-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-radio-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "radio3"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "radio3"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-radio-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-radio-group"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "switch"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-switch"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "formData.switch"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "checkbox"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-checkbox-group"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "formData.checkbox"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-checkbox"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "checkbox1"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "checkbox1"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-checkbox"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "checkbox2"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "checkbox2"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-checkbox"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "checkbox3"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "checkbox3"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-checkbox-group"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "pre"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "><"),
                        createVNode("span", { style: { "color": "#F07178" } }, "code"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "{{  JSON.stringify(formData, null, 2) }}"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "code"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "></"),
                        createVNode("span", { style: { "color": "#F07178" } }, "pre"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
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
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "reactive"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "ref"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "watchEffect"),
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
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " formSize "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "md"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " labelPosition "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "right"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " formData "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "reactive"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#F07178" } }, "textInput"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#F07178" } }, "numberInput"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#F07178" } }, "select"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#F07178" } }, "autoComplete"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#F07178" } }, "radio"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#F07178" } }, "radioButton"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#F07178" } }, "switch"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#FF9CAC" } }, "false"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#F07178" } }, "checkbox"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " []")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " selectOptions "),
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
                        createVNode("span", { style: { "color": "#C3E88D" } }, "select1"),
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
                        createVNode("span", { style: { "color": "#C3E88D" } }, "select1"),
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
                        createVNode("span", { style: { "color": "#C3E88D" } }, "select2"),
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
                        createVNode("span", { style: { "color": "#C3E88D" } }, "select2"),
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
                        createVNode("span", { style: { "color": "#C3E88D" } }, "select3"),
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
                        createVNode("span", { style: { "color": "#C3E88D" } }, "select3"),
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
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " autoCompleteOptions "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "([])")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "watchEffect"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "()"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "=>"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "    "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "autoCompleteValue"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "formData"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "autoComplete")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "    "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "autoCompleteOptions"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#F07178" } }, " ["),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "@gmail.com"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "@163.com"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "@qq.com"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#F07178" } }, "]"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "map"),
                        createVNode("span", { style: { "color": "#F07178" } }, "(")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                        createVNode("span", { style: { "color": "#A6ACCD", "font-style": "italic" } }, "suffix"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ")"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "=>"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "        "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "prefix"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "autoCompleteValue"),
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
                        createVNode("span", { style: { "color": "#F07178" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "return"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "          label"),
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
                        createVNode("span", { style: { "color": "#F07178" } }, "          value"),
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
                        createVNode("span", { style: { "color": "#F07178" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "    )")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
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
                        createVNode("span", { style: { "color": "#FFCB6B" } }, "demo"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#B2CCD6" } }, "padding"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
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
  <div class="demo">
    <p-space>
      <p-radio-group v-model="formSize">
        <p-radio-button value="sm">小</p-radio-button>
        <p-radio-button value="md">中</p-radio-button>
        <p-radio-button value="lg">大</p-radio-button>
      </p-radio-group>
      <p-radio-group v-model="labelPosition">
        <p-radio-button value="left">left</p-radio-button>
        <p-radio-button value="center">center</p-radio-button>
        <p-radio-button value="right">right</p-radio-button>
        <p-radio-button value="top">top</p-radio-button>
      </p-radio-group>
    </p-space>
    <hr />
    <p-form :size="formSize" :label-position="labelPosition">
      <p-form-item label="textInput">
        <p-input v-model="formData.textInput" placeholder="请输入" />
      </p-form-item>
      <p-form-item label="numberInput">
        <p-input
          v-model="formData.numberInput"
          type="number"
          placeholder="请输入"
        />
      </p-form-item>
      <p-form-item label="select">
        <p-select
          v-model="formData.select"
          placeholder="请选择"
          :options="selectOptions"
        />
      </p-form-item>
      <p-form-item label="autoComplete">
        <p-auto-complete
          v-model="formData.autoComplete"
          placeholder="请输入"
          :options="autoCompleteOptions"
        />
      </p-form-item>
      <p-form-item label="radio">
        <p-radio-group v-model="formData.radio">
          <p-radio value="radio1" label="radio1" />
          <p-radio value="radio2" label="radio2" />
          <p-radio value="radio3" label="radio3" />
        </p-radio-group>
      </p-form-item>
      <p-form-item label="radioButton">
        <p-radio-group v-model="formData.radioButton">
          <p-radio-button value="radio1">radio1</p-radio-button>
          <p-radio-button value="radio2">radio2</p-radio-button>
          <p-radio-button value="radio3">radio3</p-radio-button>
        </p-radio-group>
      </p-form-item>
      <p-form-item label="switch">
        <p-switch v-model="formData.switch" />
      </p-form-item>
      <p-form-item label="checkbox">
        <p-checkbox-group v-model="formData.checkbox">
          <p-checkbox label="checkbox1" value="checkbox1" />
          <p-checkbox label="checkbox2" value="checkbox2" />
          <p-checkbox label="checkbox3" value="checkbox3" />
        </p-checkbox-group>
      </p-form-item>
    </p-form>
    <pre><code>{{  JSON.stringify(formData, null, 2) }}</code></pre>
  </div>
</template>

<script setup>
  import { reactive, ref, watchEffect } from 'vue'
  const formSize = ref('md')
  const labelPosition = ref('right')
  const formData = reactive({
    textInput: '',
    numberInput: '',
    select: '',
    autoComplete: '',
    radio: '',
    radioButton: '',
    switch: false,
    checkbox: []
  })
  const selectOptions = [
    {
      label: 'select1',
      value: 'select1'
    },
    {
      label: 'select2',
      value: 'select2'
    },
    {
      label: 'select3',
      value: 'select3'
    }
  ]
  const autoCompleteOptions = ref([])
  watchEffect(() => {
    const autoCompleteValue = formData.autoComplete
    autoCompleteOptions.value = ['@gmail.com', '@163.com', '@qq.com'].map(
      (suffix) => {
        const prefix = autoCompleteValue.split('@')[0]
        return {
          label: prefix + suffix,
          value: prefix + suffix
        }
      }
    )
  })
<\/script>
<style>
  .demo {
    padding: 0 20px;
  }
</style>
`,
            direction: "column",
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
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "demo"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-space"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-radio-group"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "formSize"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-radio-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "sm"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "小"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-radio-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-radio-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "md"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "中"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-radio-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-radio-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "lg"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "大"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-radio-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-radio-group"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-radio-group"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "labelPosition"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-radio-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "left"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "left"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-radio-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-radio-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "center"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "center"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-radio-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-radio-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "right"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "right"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-radio-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-radio-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "top"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "top"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-radio-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-radio-group"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-space"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "hr"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, ":size"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "formSize"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, ":label-position"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "labelPosition"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "textInput"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-input"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "formData.textInput"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "placeholder"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "请输入"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "numberInput"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-input")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "          "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "formData.numberInput"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "          "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "type"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "number"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "          "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "placeholder"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "请输入"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "select"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-select")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "          "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "formData.select"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "          "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "placeholder"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "请选择"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "          "),
                      createVNode("span", { style: { "color": "#C792EA" } }, ":options"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "selectOptions"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "autoComplete"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-auto-complete")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "          "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "formData.autoComplete"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "          "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "placeholder"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "请输入"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "          "),
                      createVNode("span", { style: { "color": "#C792EA" } }, ":options"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "autoCompleteOptions"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "radio"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-radio-group"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "formData.radio"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-radio"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "radio1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "radio1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-radio"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "radio2"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "radio2"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-radio"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "radio3"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "radio3"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-radio-group"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "radioButton"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-radio-group"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "formData.radioButton"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-radio-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "radio1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "radio1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-radio-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-radio-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "radio2"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "radio2"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-radio-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-radio-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "radio3"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "radio3"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-radio-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-radio-group"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "switch"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-switch"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "formData.switch"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "checkbox"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-checkbox-group"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "formData.checkbox"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-checkbox"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "checkbox1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "checkbox1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-checkbox"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "checkbox2"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "checkbox2"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-checkbox"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "checkbox3"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "checkbox3"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-checkbox-group"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "pre"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "><"),
                      createVNode("span", { style: { "color": "#F07178" } }, "code"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "{{  JSON.stringify(formData, null, 2) }}"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "code"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "></"),
                      createVNode("span", { style: { "color": "#F07178" } }, "pre"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
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
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "reactive"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "ref"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "watchEffect"),
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
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " formSize "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "md"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " labelPosition "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "right"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " formData "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "reactive"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#F07178" } }, "textInput"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#F07178" } }, "numberInput"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#F07178" } }, "select"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#F07178" } }, "autoComplete"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#F07178" } }, "radio"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#F07178" } }, "radioButton"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#F07178" } }, "switch"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#FF9CAC" } }, "false"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#F07178" } }, "checkbox"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " []")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " selectOptions "),
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
                      createVNode("span", { style: { "color": "#C3E88D" } }, "select1"),
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
                      createVNode("span", { style: { "color": "#C3E88D" } }, "select1"),
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
                      createVNode("span", { style: { "color": "#C3E88D" } }, "select2"),
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
                      createVNode("span", { style: { "color": "#C3E88D" } }, "select2"),
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
                      createVNode("span", { style: { "color": "#C3E88D" } }, "select3"),
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
                      createVNode("span", { style: { "color": "#C3E88D" } }, "select3"),
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
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " autoCompleteOptions "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "([])")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "watchEffect"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "()"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "=>"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "    "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "autoCompleteValue"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "formData"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "autoComplete")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "    "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "autoCompleteOptions"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#F07178" } }, " ["),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "@gmail.com"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "@163.com"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "@qq.com"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#F07178" } }, "]"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "map"),
                      createVNode("span", { style: { "color": "#F07178" } }, "(")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                      createVNode("span", { style: { "color": "#A6ACCD", "font-style": "italic" } }, "suffix"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ")"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "=>"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "        "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "prefix"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "autoCompleteValue"),
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
                      createVNode("span", { style: { "color": "#F07178" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "return"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "          label"),
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
                      createVNode("span", { style: { "color": "#F07178" } }, "          value"),
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
                      createVNode("span", { style: { "color": "#F07178" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "    )")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
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
                      createVNode("span", { style: { "color": "#FFCB6B" } }, "demo"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "padding"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
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
  _push(`<h2 id="行内表单" tabindex="-1">行内表单 <a class="header-anchor" href="#行内表单" aria-hidden="true">#</a></h2><p>设置 <code>inline</code> , 当垂直方向空间受限且表单较简单时，可以在一行内放置表单。</p>`);
  _push(ssrRenderComponent(_component_clientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_demo, {
          "initial-value": `<template>
  <p-form inline>
    <p-form-item label="姓名">
      <p-input v-model="formData.name" placeholder="请输入姓名" />
    </p-form-item>
    <p-form-item label="年龄">
      <p-input v-model="formData.age" placeholder="请输入年龄" />
    </p-form-item>
    <p-form-item label="电话号码">
      <p-input v-model="formData.phone" placeholder="请输入电话号码" />
    </p-form-item>
    <p-form-item>
      <p-button>查询</p-button>
    </p-form-item>
  </p-form>
</template>
<script setup>
  import { reactive } from 'vue'
  const formData = reactive({
    name: '',
    age: '',
    phone: ''
  })
<\/script>
`,
          direction: "column",
          lang: "vue",
          height: "undefined"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-vue"${_scopeId2}><button title="Copy Code" class="copy"${_scopeId2}></button><span class="lang"${_scopeId2}>vue</span><pre class="shiki material-palenight"${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>inline</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>姓名</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-input</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>formData.name</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>placeholder</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>请输入姓名</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>年龄</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-input</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>formData.age</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>placeholder</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>请输入年龄</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>电话号码</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-input</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>formData.phone</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>placeholder</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>请输入电话号码</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>查询</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>setup</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>reactive</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> formData </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>reactive</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>name</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>age</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>phone</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>)</span></span>
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
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "inline"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "姓名"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-input"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "formData.name"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "placeholder"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "请输入姓名"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "年龄"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-input"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "formData.age"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "placeholder"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "请输入年龄"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "电话号码"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-input"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "formData.phone"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "placeholder"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "请输入电话号码"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "查询"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form"),
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
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "reactive"),
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
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " formData "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "reactive"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#F07178" } }, "name"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#F07178" } }, "age"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#F07178" } }, "phone"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "''")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
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
  <p-form inline>
    <p-form-item label="姓名">
      <p-input v-model="formData.name" placeholder="请输入姓名" />
    </p-form-item>
    <p-form-item label="年龄">
      <p-input v-model="formData.age" placeholder="请输入年龄" />
    </p-form-item>
    <p-form-item label="电话号码">
      <p-input v-model="formData.phone" placeholder="请输入电话号码" />
    </p-form-item>
    <p-form-item>
      <p-button>查询</p-button>
    </p-form-item>
  </p-form>
</template>
<script setup>
  import { reactive } from 'vue'
  const formData = reactive({
    name: '',
    age: '',
    phone: ''
  })
<\/script>
`,
            direction: "column",
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
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "inline"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "姓名"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-input"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "formData.name"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "placeholder"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "请输入姓名"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "年龄"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-input"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "formData.age"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "placeholder"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "请输入年龄"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "电话号码"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-input"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "formData.phone"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "placeholder"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "请输入电话号码"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "查询"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form"),
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
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "reactive"),
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
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " formData "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "reactive"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#F07178" } }, "name"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#F07178" } }, "age"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#F07178" } }, "phone"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "''")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
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
  _push(`<h2 id="表单验证" tabindex="-1">表单验证 <a class="header-anchor" href="#表单验证" aria-hidden="true">#</a></h2>`);
  _push(ssrRenderComponent(_component_clientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_demo, {
          "initial-value": `<template>
  <div class="demo">
    <p-form ref="formRef" :model="formData" :rules="rules">
      <p-form-item label="用户名" prop="user.name">
        <p-input v-model="formData.user.name" placeholder="请输入用户名" />
      </p-form-item>
      <p-form-item label="年龄" prop="user.age">
        <p-input
          v-model="formData.user.age"
          type="number"
          placeholder="请输入年龄"
        />
      </p-form-item>
      <p-form-item label="学历" prop="education">
        <p-select
          v-model="formData.education"
          placeholder="请选择学历"
          :options="[
            { label: '本科', value: '本科' },
            { label: '专科', value: '专科' }
          ]"
        />
      </p-form-item>
      <p-form-item label="邮箱" prop="email">
        <p-auto-complete
          v-model="formData.email"
          placeholder="请输入"
          :options="autoCompleteOptions"
        />
      </p-form-item>
      <p-form-item label="性别" prop="user.gender">
        <p-radio-group v-model="formData.user.gender">
          <p-radio value="男" label="男" />
          <p-radio value="女" label="女" />
        </p-radio-group>
      </p-form-item>
      <p-form-item label="爱好" prop="likes">
        <p-checkbox-group v-model="formData.likes">
          <p-checkbox value="唱" label="唱" />
          <p-checkbox value="跳" label="跳" />
          <p-checkbox value="rap" label="rap" />
        </p-checkbox-group>
      </p-form-item>
      <p-form-item>
        <p-button type="primary" @click="submit">提交</p-button>
      </p-form-item>
    </p-form>
  </div>
</template>

<script setup>
  import { reactive, ref, watchEffect } from 'vue'
  import { Message } from 'promiseui-vue'
  const formRef = ref()
  const formData = reactive({
    user: {
      name: '',
      age: '',
      gender: '男'
    },
    email: '',
    education: '',
    likes: []
  })

  const rules = {
    user: {
      name: {
        required: true,
        message: '用户名不能为空'
      },
      age: {
        required: true,
        validator(rule, value) {
          const val = parseInt(value)
          return val >= 12 && val <= 100
        },
        message: '年龄必须>=12且<=100'
      },
      gender: { required: true }
    },
    email: {
      required: true,
      type: 'email'
    },
    education: {
      required: true
    },
    likes: {
      type: 'array',
      required: true
    }
  }

  const autoCompleteOptions = ref([])
  watchEffect(() => {
    const email = formData.email
    autoCompleteOptions.value = ['@gmail.com', '@163.com', '@qq.com'].map(
      (suffix) => {
        const prefix = email.split('@')[0]
        return {
          label: prefix + suffix,
          value: prefix + suffix
        }
      }
    )
  })
  const submit = () => {
    formRef.value?.validate((valid) => {
      if (valid) {
        Message.success('提交成功~')
      } else {
        Message.error('提交失败,请验证表单正确性~')
      }
    })
  }
<\/script>
<style>
  .demo {
    padding: 0 20px;
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
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>demo</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>formRef</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>:model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>formData</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>:rules</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>rules</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>用户名</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>prop</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>user.name</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-input</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>formData.user.name</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>placeholder</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>请输入用户名</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>年龄</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>prop</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>user.age</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-input</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>formData.user.age</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>type</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>number</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>placeholder</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>请输入年龄</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>        /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>学历</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>prop</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>education</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-select</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>formData.education</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>placeholder</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>请选择学历</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>:options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>[</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>            { label: &#39;本科&#39;, value: &#39;本科&#39; },</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>            { label: &#39;专科&#39;, value: &#39;专科&#39; }</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>          ]</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>        /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>邮箱</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>prop</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>email</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-auto-complete</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>formData.email</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>placeholder</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>请输入</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>:options</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>autoCompleteOptions</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>        /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>性别</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>prop</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>user.gender</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-radio-group</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>formData.user.gender</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-radio</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>男</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>男</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-radio</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>女</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>女</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-radio-group</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>爱好</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>prop</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>likes</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-checkbox-group</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>formData.likes</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-checkbox</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>唱</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>唱</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-checkbox</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>跳</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>跳</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-checkbox</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>rap</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>rap</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-checkbox-group</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>type</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>primary</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>@click</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>submit</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>提交</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>setup</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>reactive</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>watchEffect</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>Message</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>promiseui-vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> formRef </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>()</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> formData </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>reactive</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>user</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>name</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>age</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>gender</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>男</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>},</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>email</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>education</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>likes</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> []</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>)</span></span>
<span class="line"${_scopeId2}></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> rules </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>user</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>name</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>required</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#FF9CAC" })}"${_scopeId2}>true</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>message</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>用户名不能为空</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>},</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>age</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>required</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#FF9CAC" })}"${_scopeId2}>true</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>validator</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD", "font-style": "italic" })}"${_scopeId2}>rule</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD", "font-style": "italic" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>val</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>parseInt</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>)</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>return</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>val</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>12</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&amp;&amp;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>val</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>},</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>message</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>年龄必须&gt;=12且&lt;=100</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>},</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>gender</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>required</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#FF9CAC" })}"${_scopeId2}>true</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>},</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>email</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>required</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#FF9CAC" })}"${_scopeId2}>true</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>type</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>email</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>},</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>education</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>required</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#FF9CAC" })}"${_scopeId2}>true</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>},</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>likes</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>type</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>array</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>required</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#FF9CAC" })}"${_scopeId2}>true</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> autoCompleteOptions </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>([])</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>watchEffect</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>()</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>=&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>email</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>formData</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>email</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>autoCompleteOptions</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> [</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>@gmail.com</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>@163.com</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>@qq.com</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>]</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>map</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>(</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD", "font-style": "italic" })}"${_scopeId2}>suffix</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>=&gt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>prefix</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>email</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>split</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>@</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>)[</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>]</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>return</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>          label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>prefix</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>+</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>suffix</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>          value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>prefix</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>+</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>suffix</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    )</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>)</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> submit </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>()</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>=&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>formRef</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>?.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>validate</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD", "font-style": "italic" })}"${_scopeId2}>valid</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>=&gt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>if</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> (</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>valid</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>) </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>Message</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>success</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>提交成功~</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>)</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>else</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>Message</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>error</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>提交失败,请验证表单正确性~</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>)</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>)</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>style</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>demo</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>padding</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>20px</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
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
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "class"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "demo"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "ref"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "formRef"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, ":model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "formData"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, ":rules"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "rules"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "用户名"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "prop"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "user.name"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-input"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "formData.user.name"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "placeholder"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "请输入用户名"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "年龄"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "prop"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "user.age"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-input")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "          "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "formData.user.age"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "          "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "type"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "number"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "          "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "placeholder"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "请输入年龄"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "        />")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "学历"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "prop"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "education"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-select")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "          "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "formData.education"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "          "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "placeholder"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "请选择学历"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "          "),
                        createVNode("span", { style: { "color": "#C792EA" } }, ":options"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "[")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#C3E88D" } }, "            { label: '本科', value: '本科' },")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#C3E88D" } }, "            { label: '专科', value: '专科' }")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#C3E88D" } }, "          ]"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "        />")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "邮箱"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "prop"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "email"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-auto-complete")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "          "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "formData.email"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "          "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "placeholder"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "请输入"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "          "),
                        createVNode("span", { style: { "color": "#C792EA" } }, ":options"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "autoCompleteOptions"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "        />")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "性别"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "prop"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "user.gender"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-radio-group"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "formData.user.gender"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-radio"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "男"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "男"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-radio"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "女"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "女"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-radio-group"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "爱好"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "prop"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "likes"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-checkbox-group"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "formData.likes"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-checkbox"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "唱"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "唱"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-checkbox"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "跳"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "跳"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-checkbox"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "rap"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "rap"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-checkbox-group"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "type"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "primary"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "@click"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "submit"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "提交"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
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
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "reactive"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "ref"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "watchEffect"),
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
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " formRef "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "()")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " formData "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "reactive"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#F07178" } }, "user"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "name"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "age"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "gender"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "男"),
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
                        createVNode("span", { style: { "color": "#F07178" } }, "email"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#F07178" } }, "education"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#F07178" } }, "likes"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " []")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " rules "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#F07178" } }, "user"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "name"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#F07178" } }, "required"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#FF9CAC" } }, "true"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#F07178" } }, "message"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "用户名不能为空"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "age"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#F07178" } }, "required"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#FF9CAC" } }, "true"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#F07178" } }, "validator"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                        createVNode("span", { style: { "color": "#A6ACCD", "font-style": "italic" } }, "rule"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD", "font-style": "italic" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ")"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "          "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "val"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "parseInt"),
                        createVNode("span", { style: { "color": "#F07178" } }, "("),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                        createVNode("span", { style: { "color": "#F07178" } }, ")")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "          "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "return"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "val"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">="),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "12"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "&&"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "val"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<="),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "100")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#F07178" } }, "message"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "年龄必须>=12且<=100"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "gender"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#F07178" } }, "required"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#FF9CAC" } }, "true"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#F07178" } }, "email"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "required"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#FF9CAC" } }, "true"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "type"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "email"),
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
                        createVNode("span", { style: { "color": "#F07178" } }, "education"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "required"),
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
                        createVNode("span", { style: { "color": "#F07178" } }, "likes"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "type"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "array"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "required"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#FF9CAC" } }, "true")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " autoCompleteOptions "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "([])")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "watchEffect"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "()"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "=>"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "    "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "email"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "formData"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "email")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "    "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "autoCompleteOptions"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#F07178" } }, " ["),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "@gmail.com"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "@163.com"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "@qq.com"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#F07178" } }, "]"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "map"),
                        createVNode("span", { style: { "color": "#F07178" } }, "(")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                        createVNode("span", { style: { "color": "#A6ACCD", "font-style": "italic" } }, "suffix"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ")"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "=>"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "        "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "prefix"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "email"),
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
                        createVNode("span", { style: { "color": "#F07178" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "return"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "          label"),
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
                        createVNode("span", { style: { "color": "#F07178" } }, "          value"),
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
                        createVNode("span", { style: { "color": "#F07178" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "    )")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " submit "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "()"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "=>"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "    "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "formRef"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "?."),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "validate"),
                        createVNode("span", { style: { "color": "#F07178" } }, "("),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                        createVNode("span", { style: { "color": "#A6ACCD", "font-style": "italic" } }, "valid"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ")"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "=>"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "if"),
                        createVNode("span", { style: { "color": "#F07178" } }, " ("),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "valid"),
                        createVNode("span", { style: { "color": "#F07178" } }, ") "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "        "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "Message"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "success"),
                        createVNode("span", { style: { "color": "#F07178" } }, "("),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "提交成功~"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#F07178" } }, ")")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "else"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "        "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "Message"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "error"),
                        createVNode("span", { style: { "color": "#F07178" } }, "("),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "提交失败,请验证表单正确性~"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#F07178" } }, ")")
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
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "style"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#FFCB6B" } }, "demo"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#B2CCD6" } }, "padding"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
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
  <div class="demo">
    <p-form ref="formRef" :model="formData" :rules="rules">
      <p-form-item label="用户名" prop="user.name">
        <p-input v-model="formData.user.name" placeholder="请输入用户名" />
      </p-form-item>
      <p-form-item label="年龄" prop="user.age">
        <p-input
          v-model="formData.user.age"
          type="number"
          placeholder="请输入年龄"
        />
      </p-form-item>
      <p-form-item label="学历" prop="education">
        <p-select
          v-model="formData.education"
          placeholder="请选择学历"
          :options="[
            { label: '本科', value: '本科' },
            { label: '专科', value: '专科' }
          ]"
        />
      </p-form-item>
      <p-form-item label="邮箱" prop="email">
        <p-auto-complete
          v-model="formData.email"
          placeholder="请输入"
          :options="autoCompleteOptions"
        />
      </p-form-item>
      <p-form-item label="性别" prop="user.gender">
        <p-radio-group v-model="formData.user.gender">
          <p-radio value="男" label="男" />
          <p-radio value="女" label="女" />
        </p-radio-group>
      </p-form-item>
      <p-form-item label="爱好" prop="likes">
        <p-checkbox-group v-model="formData.likes">
          <p-checkbox value="唱" label="唱" />
          <p-checkbox value="跳" label="跳" />
          <p-checkbox value="rap" label="rap" />
        </p-checkbox-group>
      </p-form-item>
      <p-form-item>
        <p-button type="primary" @click="submit">提交</p-button>
      </p-form-item>
    </p-form>
  </div>
</template>

<script setup>
  import { reactive, ref, watchEffect } from 'vue'
  import { Message } from 'promiseui-vue'
  const formRef = ref()
  const formData = reactive({
    user: {
      name: '',
      age: '',
      gender: '男'
    },
    email: '',
    education: '',
    likes: []
  })

  const rules = {
    user: {
      name: {
        required: true,
        message: '用户名不能为空'
      },
      age: {
        required: true,
        validator(rule, value) {
          const val = parseInt(value)
          return val >= 12 && val <= 100
        },
        message: '年龄必须>=12且<=100'
      },
      gender: { required: true }
    },
    email: {
      required: true,
      type: 'email'
    },
    education: {
      required: true
    },
    likes: {
      type: 'array',
      required: true
    }
  }

  const autoCompleteOptions = ref([])
  watchEffect(() => {
    const email = formData.email
    autoCompleteOptions.value = ['@gmail.com', '@163.com', '@qq.com'].map(
      (suffix) => {
        const prefix = email.split('@')[0]
        return {
          label: prefix + suffix,
          value: prefix + suffix
        }
      }
    )
  })
  const submit = () => {
    formRef.value?.validate((valid) => {
      if (valid) {
        Message.success('提交成功~')
      } else {
        Message.error('提交失败,请验证表单正确性~')
      }
    })
  }
<\/script>
<style>
  .demo {
    padding: 0 20px;
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
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "demo"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "ref"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "formRef"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, ":model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "formData"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, ":rules"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "rules"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "用户名"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "prop"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "user.name"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-input"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "formData.user.name"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "placeholder"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "请输入用户名"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "年龄"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "prop"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "user.age"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-input")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "          "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "formData.user.age"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "          "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "type"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "number"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "          "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "placeholder"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "请输入年龄"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "学历"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "prop"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "education"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-select")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "          "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "formData.education"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "          "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "placeholder"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "请选择学历"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "          "),
                      createVNode("span", { style: { "color": "#C792EA" } }, ":options"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "[")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#C3E88D" } }, "            { label: '本科', value: '本科' },")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#C3E88D" } }, "            { label: '专科', value: '专科' }")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#C3E88D" } }, "          ]"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "邮箱"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "prop"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "email"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-auto-complete")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "          "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "formData.email"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "          "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "placeholder"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "请输入"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "          "),
                      createVNode("span", { style: { "color": "#C792EA" } }, ":options"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "autoCompleteOptions"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "性别"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "prop"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "user.gender"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-radio-group"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "formData.user.gender"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-radio"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "男"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "男"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-radio"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "女"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "女"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-radio-group"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "爱好"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "prop"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "likes"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-checkbox-group"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "formData.likes"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-checkbox"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "唱"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "唱"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-checkbox"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "跳"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "跳"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-checkbox"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "rap"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "rap"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-checkbox-group"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "type"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "primary"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "@click"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "submit"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "提交"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
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
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "reactive"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "ref"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "watchEffect"),
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
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " formRef "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "()")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " formData "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "reactive"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#F07178" } }, "user"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "name"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "age"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "gender"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "男"),
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
                      createVNode("span", { style: { "color": "#F07178" } }, "email"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#F07178" } }, "education"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#F07178" } }, "likes"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " []")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " rules "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#F07178" } }, "user"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "name"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#F07178" } }, "required"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#FF9CAC" } }, "true"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#F07178" } }, "message"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "用户名不能为空"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "age"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#F07178" } }, "required"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#FF9CAC" } }, "true"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#F07178" } }, "validator"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                      createVNode("span", { style: { "color": "#A6ACCD", "font-style": "italic" } }, "rule"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD", "font-style": "italic" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ")"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "          "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "val"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "parseInt"),
                      createVNode("span", { style: { "color": "#F07178" } }, "("),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                      createVNode("span", { style: { "color": "#F07178" } }, ")")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "          "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "return"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "val"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">="),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "12"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "&&"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "val"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<="),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "100")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#F07178" } }, "message"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "年龄必须>=12且<=100"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "gender"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#F07178" } }, "required"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#FF9CAC" } }, "true"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#F07178" } }, "email"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "required"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#FF9CAC" } }, "true"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "type"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "email"),
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
                      createVNode("span", { style: { "color": "#F07178" } }, "education"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "required"),
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
                      createVNode("span", { style: { "color": "#F07178" } }, "likes"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "type"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "array"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "required"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#FF9CAC" } }, "true")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " autoCompleteOptions "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "([])")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "watchEffect"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "()"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "=>"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "    "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "email"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "formData"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "email")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "    "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "autoCompleteOptions"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#F07178" } }, " ["),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "@gmail.com"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "@163.com"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "@qq.com"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#F07178" } }, "]"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "map"),
                      createVNode("span", { style: { "color": "#F07178" } }, "(")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                      createVNode("span", { style: { "color": "#A6ACCD", "font-style": "italic" } }, "suffix"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ")"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "=>"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "        "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "prefix"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "email"),
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
                      createVNode("span", { style: { "color": "#F07178" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "return"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "          label"),
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
                      createVNode("span", { style: { "color": "#F07178" } }, "          value"),
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
                      createVNode("span", { style: { "color": "#F07178" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "    )")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " submit "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "()"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "=>"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "    "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "formRef"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "?."),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "validate"),
                      createVNode("span", { style: { "color": "#F07178" } }, "("),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                      createVNode("span", { style: { "color": "#A6ACCD", "font-style": "italic" } }, "valid"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ")"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "=>"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "if"),
                      createVNode("span", { style: { "color": "#F07178" } }, " ("),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "valid"),
                      createVNode("span", { style: { "color": "#F07178" } }, ") "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "        "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "Message"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "success"),
                      createVNode("span", { style: { "color": "#F07178" } }, "("),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "提交成功~"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#F07178" } }, ")")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "else"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "        "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "Message"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "error"),
                      createVNode("span", { style: { "color": "#F07178" } }, "("),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "提交失败,请验证表单正确性~"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#F07178" } }, ")")
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
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "style"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#FFCB6B" } }, "demo"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "padding"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
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
  _push(`<h2 id="只执行部分规则" tabindex="-1">只执行部分规则 <a class="header-anchor" href="#只执行部分规则" aria-hidden="true">#</a></h2><p>执行部分规则可以使用 <code>form.validateFields</code>, 传入 <code>fields</code> 指定部分字段进行验证,</p><p>清除验证可以用 <code>form.clearValidate</code> 传入 <code>fields</code> 指定部分字段进行清除,若 <code>fields</code> 没传,则清除全部</p>`);
  _push(ssrRenderComponent(_component_clientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_demo, {
          "initial-value": `<template>
  <p-space>
    <p-button @click="validateAll">验证全部</p-button>
    <p-button @click="validatePartial('input1')">验证第一个input</p-button>
    <p-button @click="validatePartial('input2')">验证第二个input</p-button>
    <p-button @click="clearValidate">清空验证</p-button>
  </p-space>
  <p-form ref="formRef" :model="formData" :rules="rules" label-position="top">
    <p-form-item label="最短长度为2" prop="input1">
      <p-input v-model="formData.input1" />
    </p-form-item>
    <p-form-item label="最短长度为3" prop="input2">
      <p-input v-model="formData.input2" />
    </p-form-item>
  </p-form>
</template>

<script setup>
  import { reactive, ref } from 'vue'
  const formRef = ref()
  const formData = reactive({
    input1: '',
    input2: ''
  })
  const rules = {
    input1: {
      required: true,
      min: 2,
      message: '最小长度2'
    },
    input2: {
      required: true,
      min: 3,
      message: '最小长度3'
    }
  }
  const validateAll = () => {
    formRef.value?.validate()
  }
  const validatePartial = (prop) => {
    formRef.value?.validateFields([prop])
  }
  const clearValidate = () => {
    formRef.value?.clearValidate()
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
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>@click</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>validateAll</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>验证全部</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>@click</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>validatePartial(&#39;input1&#39;)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>验证第一个input</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>@click</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>validatePartial(&#39;input2&#39;)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>验证第二个input</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>@click</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>clearValidate</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>清空验证</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-space</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>formRef</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>:model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>formData</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>:rules</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>rules</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>label-position</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>top</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>最短长度为2</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>prop</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>input1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-input</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>formData.input1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>最短长度为3</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>prop</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>input2</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-input</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>formData.input2</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>setup</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>reactive</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> formRef </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>()</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> formData </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>reactive</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>input1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>input2</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>)</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> rules </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>input1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>required</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#FF9CAC" })}"${_scopeId2}>true</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>min</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>2</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>message</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>最小长度2</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>},</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>input2</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>required</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#FF9CAC" })}"${_scopeId2}>true</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>min</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>3</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>message</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>最小长度3</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> validateAll </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>()</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>=&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>formRef</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>?.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>validate</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>()</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> validatePartial </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD", "font-style": "italic" })}"${_scopeId2}>prop</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>=&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>formRef</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>?.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>validateFields</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>([</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>prop</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>])</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> clearValidate </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>()</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>=&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>formRef</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>?.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>clearValidate</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>()</span></span>
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
                        createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "@click"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "validateAll"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "验证全部"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "@click"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "validatePartial('input1')"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "验证第一个input"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "@click"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "validatePartial('input2')"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "验证第二个input"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "@click"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "clearValidate"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "清空验证"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
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
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "ref"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "formRef"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, ":model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "formData"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, ":rules"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "rules"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "label-position"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "top"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "最短长度为2"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "prop"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "input1"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-input"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "formData.input1"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "最短长度为3"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "prop"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "input2"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-input"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "formData.input2"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form"),
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
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "reactive"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
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
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " formRef "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "()")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " formData "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "reactive"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#F07178" } }, "input1"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#F07178" } }, "input2"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "''")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " rules "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#F07178" } }, "input1"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "required"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#FF9CAC" } }, "true"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "min"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "2"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "message"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "最小长度2"),
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
                        createVNode("span", { style: { "color": "#F07178" } }, "input2"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "required"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#FF9CAC" } }, "true"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "min"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "3"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#F07178" } }, "message"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "最小长度3"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " validateAll "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "()"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "=>"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "    "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "formRef"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "?."),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "validate"),
                        createVNode("span", { style: { "color": "#F07178" } }, "()")
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
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " validatePartial "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                        createVNode("span", { style: { "color": "#A6ACCD", "font-style": "italic" } }, "prop"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ")"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "=>"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "    "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "formRef"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "?."),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "validateFields"),
                        createVNode("span", { style: { "color": "#F07178" } }, "(["),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "prop"),
                        createVNode("span", { style: { "color": "#F07178" } }, "])")
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
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " clearValidate "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "()"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "=>"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "    "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "formRef"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "?."),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "clearValidate"),
                        createVNode("span", { style: { "color": "#F07178" } }, "()")
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
    <p-button @click="validateAll">验证全部</p-button>
    <p-button @click="validatePartial('input1')">验证第一个input</p-button>
    <p-button @click="validatePartial('input2')">验证第二个input</p-button>
    <p-button @click="clearValidate">清空验证</p-button>
  </p-space>
  <p-form ref="formRef" :model="formData" :rules="rules" label-position="top">
    <p-form-item label="最短长度为2" prop="input1">
      <p-input v-model="formData.input1" />
    </p-form-item>
    <p-form-item label="最短长度为3" prop="input2">
      <p-input v-model="formData.input2" />
    </p-form-item>
  </p-form>
</template>

<script setup>
  import { reactive, ref } from 'vue'
  const formRef = ref()
  const formData = reactive({
    input1: '',
    input2: ''
  })
  const rules = {
    input1: {
      required: true,
      min: 2,
      message: '最小长度2'
    },
    input2: {
      required: true,
      min: 3,
      message: '最小长度3'
    }
  }
  const validateAll = () => {
    formRef.value?.validate()
  }
  const validatePartial = (prop) => {
    formRef.value?.validateFields([prop])
  }
  const clearValidate = () => {
    formRef.value?.clearValidate()
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
                      createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "@click"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "validateAll"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "验证全部"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "@click"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "validatePartial('input1')"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "验证第一个input"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "@click"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "validatePartial('input2')"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "验证第二个input"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "@click"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "clearValidate"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "清空验证"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
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
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "ref"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "formRef"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, ":model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "formData"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, ":rules"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "rules"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "label-position"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "top"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "最短长度为2"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "prop"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "input1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-input"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "formData.input1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "最短长度为3"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "prop"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "input2"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-input"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "formData.input2"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form"),
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
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "reactive"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
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
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " formRef "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "()")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " formData "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "reactive"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#F07178" } }, "input1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#F07178" } }, "input2"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "''")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " rules "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#F07178" } }, "input1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "required"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#FF9CAC" } }, "true"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "min"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "2"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "message"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "最小长度2"),
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
                      createVNode("span", { style: { "color": "#F07178" } }, "input2"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "required"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#FF9CAC" } }, "true"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "min"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "3"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#F07178" } }, "message"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "最小长度3"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " validateAll "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "()"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "=>"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "    "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "formRef"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "?."),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "validate"),
                      createVNode("span", { style: { "color": "#F07178" } }, "()")
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
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " validatePartial "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                      createVNode("span", { style: { "color": "#A6ACCD", "font-style": "italic" } }, "prop"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ")"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "=>"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "    "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "formRef"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "?."),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "validateFields"),
                      createVNode("span", { style: { "color": "#F07178" } }, "(["),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "prop"),
                      createVNode("span", { style: { "color": "#F07178" } }, "])")
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
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " clearValidate "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "()"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "=>"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "    "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "formRef"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "?."),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "clearValidate"),
                      createVNode("span", { style: { "color": "#F07178" } }, "()")
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
  _push(`<h2 id="必填项" tabindex="-1">必填项 <a class="header-anchor" href="#必填项" aria-hidden="true">#</a></h2><p>除了设置 <code>form rules</code>,也可以设置<code>form-item</code> 的 <code>required</code> 属性,如果为 <code>truly</code> 则为 必填项, 当 <code>required</code> 为 <code>string</code>类型时,为作为 <code>rule</code> 的 <code>message</code></p><p>必选项会出现小红点,若不想要,则设置<code>show-require-mark</code>为<code>false</code></p>`);
  _push(ssrRenderComponent(_component_clientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_demo, {
          "initial-value": `<template>
  <p-form :model="formData">
    <p-form-item label="名字" prop="name" required="名字不能为空">
      <p-input v-model="formData.name" />
    </p-form-item>
    <p-form-item
      label="年龄"
      prop="age"
      required="年龄不能为空"
      :showRequireMark="false"
    >
      <p-input v-model="formData.age" />
    </p-form-item>
  </p-form>
</template>

<script setup>
  import { reactive, ref } from 'vue'
  const formRef = ref()
  const formData = reactive({
    name: '',
    age: ''
  })
<\/script>
`,
          direction: "",
          lang: "vue",
          height: "undefined"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-vue"${_scopeId2}><button title="Copy Code" class="copy"${_scopeId2}></button><span class="lang"${_scopeId2}>vue</span><pre class="shiki material-palenight"${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>:model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>formData</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>名字</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>prop</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>name</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>required</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>名字不能为空</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-input</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>formData.name</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>年龄</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>prop</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>age</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>required</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>年龄不能为空</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>:showRequireMark</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>false</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>    &gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-input</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>formData.age</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>setup</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>reactive</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> formRef </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>()</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> formData </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>reactive</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>name</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>age</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>)</span></span>
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
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, ":model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "formData"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "名字"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "prop"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "name"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "required"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "名字不能为空"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-input"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "formData.name"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "      "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "年龄"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "      "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "prop"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "age"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "      "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "required"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "年龄不能为空"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "      "),
                        createVNode("span", { style: { "color": "#C792EA" } }, ":showRequireMark"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "false"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "    >")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-input"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "formData.age"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form"),
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
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "reactive"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
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
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " formRef "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "()")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " formData "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "reactive"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#F07178" } }, "name"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#F07178" } }, "age"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "''")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
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
  <p-form :model="formData">
    <p-form-item label="名字" prop="name" required="名字不能为空">
      <p-input v-model="formData.name" />
    </p-form-item>
    <p-form-item
      label="年龄"
      prop="age"
      required="年龄不能为空"
      :showRequireMark="false"
    >
      <p-input v-model="formData.age" />
    </p-form-item>
  </p-form>
</template>

<script setup>
  import { reactive, ref } from 'vue'
  const formRef = ref()
  const formData = reactive({
    name: '',
    age: ''
  })
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
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, ":model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "formData"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "名字"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "prop"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "name"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "required"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "名字不能为空"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-input"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "formData.name"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "年龄"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "prop"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "age"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "required"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "年龄不能为空"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      "),
                      createVNode("span", { style: { "color": "#C792EA" } }, ":showRequireMark"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "false"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    >")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-input"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "formData.age"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form"),
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
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "reactive"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
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
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " formRef "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "()")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " formData "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "reactive"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#F07178" } }, "name"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#F07178" } }, "age"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "''")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
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
  _push(`<h2 id="自定义-labelwidth" tabindex="-1">自定义 labelWidth <a class="header-anchor" href="#自定义-labelwidth" aria-hidden="true">#</a></h2><p><code>labelWidth</code> 默认为<code>auto</code>,会根据所有的 <code>form-item</code> 的 <code>label</code> 宽度计算出最大值,作为<code>labelWidth</code> 的宽度, 若不想这样,可以传固定值</p>`);
  _push(ssrRenderComponent(_component_clientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_demo, {
          "initial-value": `<template>
  <p-form :model="formData" labelWidth="100px">
    <p-form-item label="名字" prop="name" required="名字不能为空">
      <p-input v-model="formData.name" />
    </p-form-item>
    <p-form-item label="年龄" prop="age" required="年龄不能为空">
      <p-input v-model="formData.age" />
    </p-form-item>
  </p-form>
</template>

<script setup>
  import { reactive, ref } from 'vue'
  const formRef = ref()
  const formData = reactive({
    name: '',
    age: ''
  })
<\/script>
`,
          direction: "",
          lang: "vue",
          height: "undefined"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-vue"${_scopeId2}><button title="Copy Code" class="copy"${_scopeId2}></button><span class="lang"${_scopeId2}>vue</span><pre class="shiki material-palenight"${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>:model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>formData</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>labelWidth</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>100px</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>名字</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>prop</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>name</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>required</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>名字不能为空</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-input</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>formData.name</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>年龄</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>prop</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>age</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>required</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>年龄不能为空</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-input</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>formData.age</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>setup</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>reactive</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> formRef </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>()</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> formData </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>reactive</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>name</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>age</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>)</span></span>
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
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, ":model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "formData"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "labelWidth"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "100px"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "名字"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "prop"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "name"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "required"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "名字不能为空"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-input"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "formData.name"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "年龄"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "prop"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "age"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "required"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "年龄不能为空"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-input"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "formData.age"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form"),
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
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "reactive"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
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
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " formRef "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "()")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " formData "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "reactive"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#F07178" } }, "name"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#F07178" } }, "age"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "''")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
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
  <p-form :model="formData" labelWidth="100px">
    <p-form-item label="名字" prop="name" required="名字不能为空">
      <p-input v-model="formData.name" />
    </p-form-item>
    <p-form-item label="年龄" prop="age" required="年龄不能为空">
      <p-input v-model="formData.age" />
    </p-form-item>
  </p-form>
</template>

<script setup>
  import { reactive, ref } from 'vue'
  const formRef = ref()
  const formData = reactive({
    name: '',
    age: ''
  })
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
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, ":model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "formData"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "labelWidth"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "100px"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "名字"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "prop"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "name"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "required"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "名字不能为空"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-input"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "formData.name"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "年龄"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "prop"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "age"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "required"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "年龄不能为空"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-input"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "formData.age"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form"),
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
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "reactive"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
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
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " formRef "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "()")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " formData "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "reactive"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#F07178" } }, "name"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#F07178" } }, "age"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "''")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
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
  _push(`<h2 id="展示-label" tabindex="-1">展示 label <a class="header-anchor" href="#展示-label" aria-hidden="true">#</a></h2><p>设置 <code>showLabel</code> 确定是否展示 label</p>`);
  _push(ssrRenderComponent(_component_clientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_demo, {
          "initial-value": `<template>
  <p-space> 展示label <p-switch v-model="showLabel" /> </p-space>

  <p-form :model="formData" :showLabel="showLabel">
    <p-form-item label="名字" prop="name" required="名字不能为空">
      <p-input v-model="formData.name" />
    </p-form-item>
    <p-form-item label="年龄" prop="age" required="年龄不能为空">
      <p-input v-model="formData.age" />
    </p-form-item>
  </p-form>
</template>

<script setup>
  import { reactive, ref } from 'vue'
  const formRef = ref()
  const showLabel = ref(true)
  const formData = reactive({
    name: '',
    age: ''
  })
<\/script>
`,
          direction: "",
          lang: "vue",
          height: "undefined"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-vue"${_scopeId2}><button title="Copy Code" class="copy"${_scopeId2}></button><span class="lang"${_scopeId2}>vue</span><pre class="shiki material-palenight"${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-space</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> 展示label </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-switch</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>showLabel</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> /&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-space</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>:model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>formData</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>:showLabel</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>showLabel</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>名字</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>prop</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>name</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>required</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>名字不能为空</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-input</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>formData.name</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>年龄</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>prop</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>age</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>required</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>年龄不能为空</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-input</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>formData.age</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form-item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-form</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>setup</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>reactive</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> formRef </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>()</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> showLabel </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#FF9CAC" })}"${_scopeId2}>true</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>)</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> formData </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>reactive</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>name</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>age</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>)</span></span>
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
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " 展示label "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-switch"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "showLabel"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " />"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-space"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, ":model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "formData"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, ":showLabel"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "showLabel"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "名字"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "prop"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "name"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "required"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "名字不能为空"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-input"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "formData.name"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "年龄"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "prop"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "age"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "required"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "年龄不能为空"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-input"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "formData.age"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-form"),
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
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "reactive"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
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
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " formRef "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "()")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " showLabel "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                        createVNode("span", { style: { "color": "#FF9CAC" } }, "true"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " formData "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "reactive"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#F07178" } }, "name"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#F07178" } }, "age"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "''")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
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
  <p-space> 展示label <p-switch v-model="showLabel" /> </p-space>

  <p-form :model="formData" :showLabel="showLabel">
    <p-form-item label="名字" prop="name" required="名字不能为空">
      <p-input v-model="formData.name" />
    </p-form-item>
    <p-form-item label="年龄" prop="age" required="年龄不能为空">
      <p-input v-model="formData.age" />
    </p-form-item>
  </p-form>
</template>

<script setup>
  import { reactive, ref } from 'vue'
  const formRef = ref()
  const showLabel = ref(true)
  const formData = reactive({
    name: '',
    age: ''
  })
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
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " 展示label "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-switch"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "showLabel"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-space"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, ":model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "formData"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, ":showLabel"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "showLabel"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "名字"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "prop"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "name"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "required"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "名字不能为空"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-input"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "formData.name"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "年龄"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "prop"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "age"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "required"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "年龄不能为空"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-input"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "formData.age"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form-item"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-form"),
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
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "reactive"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
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
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " formRef "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "()")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " showLabel "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                      createVNode("span", { style: { "color": "#FF9CAC" } }, "true"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " formData "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "reactive"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#F07178" } }, "name"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#F07178" } }, "age"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "''")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, ")")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
