import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Popover 悬浮提示","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]},{"level":2,"title":"自定义内容","slug":"自定义内容","link":"#自定义内容","children":[]},{"level":2,"title":"弹出位置","slug":"弹出位置","link":"#弹出位置","children":[]},{"level":2,"title":"颜色","slug":"颜色","link":"#颜色","children":[]}],"relativePath":"components/popover/index.md"}');
const _sfc_main = { name: "components/popover/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_clientOnly = resolveComponent("clientOnly");
  const _component_demo = resolveComponent("demo");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="popover-悬浮提示" tabindex="-1">Popover 悬浮提示 <a class="header-anchor" href="#popover-悬浮提示" aria-hidden="true">#</a></h1><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-hidden="true">#</a></h2><p><code>content</code> 指定显示文字内容 , <code>trigger</code> 指定触发方式</p>`);
  _push(ssrRenderComponent(_component_clientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_demo, {
          "initial-value": '<template>\n  <p-space>\n    <p-popover content="hello world!">\n      <p-button>hover</p-button>\n    </p-popover>\n    <p-popover content="hello world!" trigger="click">\n      <p-button>click</p-button>\n    </p-popover>\n  </p-space>\n</template>\n',
          direction: "",
          lang: "vue",
          height: "undefined"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-vue"${_scopeId2}><button title="Copy Code" class="copy"${_scopeId2}></button><span class="lang"${_scopeId2}>vue</span><pre class="shiki material-palenight"${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-space</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-popover</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>content</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>hello world!</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>hover</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-popover</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-popover</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>content</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>hello world!</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>trigger</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>click</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>click</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-popover</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-space</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
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
                        createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "content"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "hello world!"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "hover"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "content"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "hello world!"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "trigger"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "click"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "click"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
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
            "initial-value": '<template>\n  <p-space>\n    <p-popover content="hello world!">\n      <p-button>hover</p-button>\n    </p-popover>\n    <p-popover content="hello world!" trigger="click">\n      <p-button>click</p-button>\n    </p-popover>\n  </p-space>\n</template>\n',
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
                      createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "content"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "hello world!"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "hover"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "content"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "hello world!"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "trigger"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "click"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "click"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
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
  _push(`<h2 id="自定义内容" tabindex="-1">自定义内容 <a class="header-anchor" href="#自定义内容" aria-hidden="true">#</a></h2><p>插槽 <code>content</code> 自定义内容, <code>class</code> ,<code>style</code>自定义 <code>popover</code> 类名和样式</p>`);
  _push(ssrRenderComponent(_component_clientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_demo, {
          "initial-value": `<template>
  <p-popover :style="{ padding: '20px' }">
    <p-button>自定义</p-button>
    <template #content>
      <h4>hello</h4>
      <h4>world</h4>
    </template>
  </p-popover>
</template>
<style>
  h4 {
    margin: 10px 0;
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
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-popover</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>:style</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>{ padding: &#39;20px&#39; }</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>自定义</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>#</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>content</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>h4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>hello</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>h4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>h4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>world</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>h4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-popover</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>style</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>h4</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>margin</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>10px</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
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
                        createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, ":style"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "{ padding: '20px' }"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "自定义"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "template"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "#"),
                        createVNode("span", { style: { "color": "#C792EA" } }, "content"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "hello"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "world"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "template"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
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
                        createVNode("span", { style: { "color": "#F07178" } }, "style"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#FFCB6B" } }, "h4"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#B2CCD6" } }, "margin"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "10px"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
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
  <p-popover :style="{ padding: '20px' }">
    <p-button>自定义</p-button>
    <template #content>
      <h4>hello</h4>
      <h4>world</h4>
    </template>
  </p-popover>
</template>
<style>
  h4 {
    margin: 10px 0;
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
                      createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, ":style"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "{ padding: '20px' }"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "自定义"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "#"),
                      createVNode("span", { style: { "color": "#C792EA" } }, "content"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "hello"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "world"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "h4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
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
                      createVNode("span", { style: { "color": "#F07178" } }, "style"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#FFCB6B" } }, "h4"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "margin"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "10px"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
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
  _push(`<h2 id="弹出位置" tabindex="-1">弹出位置 <a class="header-anchor" href="#弹出位置" aria-hidden="true">#</a></h2>`);
  _push(ssrRenderComponent(_component_clientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_demo, {
          "initial-value": '<template>\n  <div class="popover-demo-item-horizontal">\n    <p-popover position="top-start">\n      <template #content>\n        <div>\n          <div>top-start</div>\n          <div>top-start</div>\n        </div>\n      </template>\n      <p-button style="width: 130px;">top-start</p-button>\n    </p-popover>\n    <p-popover position="top">\n      <template #content>\n        <div>top</div>\n      </template>\n      <p-button style="width: 130px;">top</p-button>\n    </p-popover>\n    <p-popover position="top-end">\n      <template #content>\n        <div>\n          <div>top-end</div>\n          <div>top-end</div>\n        </div>\n      </template>\n      <p-button style="width: 130px;">top-end</p-button>\n    </p-popover>\n  </div>\n\n  <div class="popover-demo-vertical-wrapper">\n    <div class="popover-demo-item-vertical">\n      <p-popover position="left-start">\n        <template #content>\n          <div>\n            <div>left-start</div>\n            <div>left-start</div>\n          </div>\n        </template>\n        <p-button style="width: 130px;">left-start</p-button>\n      </p-popover>\n      <p-popover position="left">\n        <template #content>\n          <div>left</div>\n        </template>\n        <p-button style="width: 130px;">left</p-button>\n      </p-popover>\n      <p-popover position="left-end">\n        <template #content>\n          <div>\n            <div>left-end</div>\n            <div>left-end</div>\n          </div>\n        </template>\n        <p-button style="width: 130px;">left-end</p-button>\n      </p-popover>\n    </div>\n    <div class="popover-demo-item-vertical">\n      <p-popover position="right-start">\n        <template #content>\n          <div>\n            <div>right-start</div>\n            <div>right-start</div>\n          </div>\n        </template>\n        <p-button style="width: 130px;">right-start</p-button>\n      </p-popover>\n      <p-popover position="right">\n        <template #content>\n          <div>right</div>\n        </template>\n        <p-button style="width: 130px;">right</p-button>\n      </p-popover>\n      <p-popover position="right-end">\n        <template #content>\n          <div>\n            <div>right-end</div>\n            <div>right-end</div>\n          </div>\n        </template>\n        <p-button style="width: 130px;">right-end</p-button>\n      </p-popover>\n    </div>\n  </div>\n  <div class="popover-demo-item-horizontal">\n    <p-popover position="bottom-start">\n      <template #content>\n        <div>\n          <div>bottom-start</div>\n          <div>bottom-start</div>\n        </div>\n      </template>\n      <p-button style="width: 130px;">bottom-start</p-button>\n    </p-popover>\n    <p-popover position="bottom">\n      <template #content>\n        <div>bottom</div>\n      </template>\n      <p-button style="width: 130px;">bottom</p-button>\n    </p-popover>\n    <p-popover position="bottom-end">\n      <template #content>\n        <div>\n          <div>bottom-end</div>\n          <div>bottom-end</div>\n        </div>\n      </template>\n      <p-button style="width: 130px;">bottom-end</p-button>\n    </p-popover>\n  </div>\n</template>\n<style>\n  .popover-demo-item-horizontal {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 440px;\n    margin-bottom: 4px;\n  }\n  .popover-demo-item-horizontal > * {\n    margin-right: 4px;\n  }\n  .popover-demo-vertical-wrapper {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 440px;\n  }\n  .popover-demo-item-vertical {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 4px;\n  }\n  .popover-demo-item-vertical > * {\n    margin-bottom: 4px;\n  }\n</style>\n',
          direction: "",
          lang: "vue",
          height: "undefined"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-vue"${_scopeId2}><button title="Copy Code" class="copy"${_scopeId2}></button><span class="lang"${_scopeId2}>vue</span><pre class="shiki material-palenight"${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>popover-demo-item-horizontal</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-popover</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>position</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>top-start</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>#</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>content</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>top-start</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>top-start</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>style</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>width: 130px;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>top-start</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-popover</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-popover</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>position</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>top</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>#</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>content</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>top</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>style</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>width: 130px;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>top</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-popover</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-popover</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>position</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>top-end</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>#</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>content</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>top-end</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>top-end</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>style</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>width: 130px;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>top-end</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-popover</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>popover-demo-vertical-wrapper</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>popover-demo-item-vertical</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-popover</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>position</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>left-start</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>#</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>content</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>            </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>left-start</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>            </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>left-start</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>style</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>width: 130px;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>left-start</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-popover</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-popover</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>position</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>left</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>#</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>content</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>left</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>style</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>width: 130px;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>left</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-popover</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-popover</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>position</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>left-end</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>#</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>content</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>            </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>left-end</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>            </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>left-end</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>style</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>width: 130px;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>left-end</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-popover</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>popover-demo-item-vertical</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-popover</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>position</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>right-start</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>#</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>content</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>            </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>right-start</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>            </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>right-start</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>style</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>width: 130px;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>right-start</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-popover</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-popover</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>position</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>right</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>#</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>content</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>right</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>style</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>width: 130px;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>right</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-popover</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-popover</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>position</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>right-end</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>#</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>content</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>            </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>right-end</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>            </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>right-end</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>style</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>width: 130px;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>right-end</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-popover</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>popover-demo-item-horizontal</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-popover</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>position</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>bottom-start</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>#</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>content</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>bottom-start</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>bottom-start</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>style</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>width: 130px;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>bottom-start</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-popover</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-popover</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>position</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>bottom</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>#</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>content</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>bottom</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>style</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>width: 130px;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>bottom</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-popover</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-popover</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>position</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>bottom-end</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>#</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>content</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>bottom-end</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>bottom-end</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>style</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>width: 130px;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>bottom-end</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-popover</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>style</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>popover-demo-item-horizontal</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>display</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> flex</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>justify-content</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> center</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>align-items</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> center</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>width</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>440px</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>margin-bottom</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>4px</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>popover-demo-item-horizontal</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>margin-right</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>4px</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>popover-demo-vertical-wrapper</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>display</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> flex</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>justify-content</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> space-between</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>align-items</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> center</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>width</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>440px</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>popover-demo-item-vertical</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>display</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> flex</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>flex-direction</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> column</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>justify-content</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> center</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>align-items</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> center</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>margin-bottom</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>4px</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>popover-demo-item-vertical</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>*</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>margin-bottom</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>4px</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
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
                        createVNode("span", { style: { "color": "#C3E88D" } }, "popover-demo-item-horizontal"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "position"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "top-start"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "template"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "#"),
                        createVNode("span", { style: { "color": "#C792EA" } }, "content"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "top-start"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "top-start"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
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
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "style"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "width: 130px;"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "top-start"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "position"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "top"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "template"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "#"),
                        createVNode("span", { style: { "color": "#C792EA" } }, "content"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "top"),
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
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "style"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "width: 130px;"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "top"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "position"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "top-end"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "template"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "#"),
                        createVNode("span", { style: { "color": "#C792EA" } }, "content"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "top-end"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "top-end"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
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
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "style"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "width: 130px;"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "top-end"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
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
                      createVNode("span", { class: "line" }),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "class"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "popover-demo-vertical-wrapper"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "class"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "popover-demo-item-vertical"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "position"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "left-start"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "template"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "#"),
                        createVNode("span", { style: { "color": "#C792EA" } }, "content"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "            "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "left-start"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "            "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "left-start"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "template"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "style"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "width: 130px;"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "left-start"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "position"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "left"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "template"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "#"),
                        createVNode("span", { style: { "color": "#C792EA" } }, "content"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "left"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "template"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "style"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "width: 130px;"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "left"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "position"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "left-end"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "template"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "#"),
                        createVNode("span", { style: { "color": "#C792EA" } }, "content"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "            "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "left-end"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "            "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "left-end"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "template"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "style"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "width: 130px;"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "left-end"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "class"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "popover-demo-item-vertical"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "position"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "right-start"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "template"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "#"),
                        createVNode("span", { style: { "color": "#C792EA" } }, "content"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "            "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "right-start"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "            "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "right-start"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "template"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "style"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "width: 130px;"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "right-start"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "position"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "right"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "template"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "#"),
                        createVNode("span", { style: { "color": "#C792EA" } }, "content"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "right"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "template"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "style"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "width: 130px;"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "right"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "position"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "right-end"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "template"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "#"),
                        createVNode("span", { style: { "color": "#C792EA" } }, "content"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "            "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "right-end"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "            "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "right-end"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "template"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "style"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "width: 130px;"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "right-end"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
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
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "class"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "popover-demo-item-horizontal"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "position"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "bottom-start"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "template"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "#"),
                        createVNode("span", { style: { "color": "#C792EA" } }, "content"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "bottom-start"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "bottom-start"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
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
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "style"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "width: 130px;"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "bottom-start"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "position"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "bottom"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "template"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "#"),
                        createVNode("span", { style: { "color": "#C792EA" } }, "content"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "bottom"),
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
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "style"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "width: 130px;"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "bottom"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "position"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "bottom-end"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "template"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "#"),
                        createVNode("span", { style: { "color": "#C792EA" } }, "content"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "bottom-end"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "bottom-end"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "div"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
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
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "style"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "width: 130px;"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "bottom-end"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
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
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "style"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#FFCB6B" } }, "popover-demo-item-horizontal"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#B2CCD6" } }, "display"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " flex"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#B2CCD6" } }, "justify-content"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " center"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#B2CCD6" } }, "align-items"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " center"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#B2CCD6" } }, "width"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "440px"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#B2CCD6" } }, "margin-bottom"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "4px"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#FFCB6B" } }, "popover-demo-item-horizontal"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#FFCB6B" } }, "*"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#B2CCD6" } }, "margin-right"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "4px"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#FFCB6B" } }, "popover-demo-vertical-wrapper"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#B2CCD6" } }, "display"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " flex"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#B2CCD6" } }, "justify-content"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " space-between"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#B2CCD6" } }, "align-items"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " center"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#B2CCD6" } }, "width"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "440px"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#FFCB6B" } }, "popover-demo-item-vertical"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#B2CCD6" } }, "display"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " flex"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#B2CCD6" } }, "flex-direction"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " column"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#B2CCD6" } }, "justify-content"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " center"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#B2CCD6" } }, "align-items"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " center"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#B2CCD6" } }, "margin-bottom"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "4px"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#FFCB6B" } }, "popover-demo-item-vertical"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#FFCB6B" } }, "*"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#B2CCD6" } }, "margin-bottom"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "4px"),
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
            "initial-value": '<template>\n  <div class="popover-demo-item-horizontal">\n    <p-popover position="top-start">\n      <template #content>\n        <div>\n          <div>top-start</div>\n          <div>top-start</div>\n        </div>\n      </template>\n      <p-button style="width: 130px;">top-start</p-button>\n    </p-popover>\n    <p-popover position="top">\n      <template #content>\n        <div>top</div>\n      </template>\n      <p-button style="width: 130px;">top</p-button>\n    </p-popover>\n    <p-popover position="top-end">\n      <template #content>\n        <div>\n          <div>top-end</div>\n          <div>top-end</div>\n        </div>\n      </template>\n      <p-button style="width: 130px;">top-end</p-button>\n    </p-popover>\n  </div>\n\n  <div class="popover-demo-vertical-wrapper">\n    <div class="popover-demo-item-vertical">\n      <p-popover position="left-start">\n        <template #content>\n          <div>\n            <div>left-start</div>\n            <div>left-start</div>\n          </div>\n        </template>\n        <p-button style="width: 130px;">left-start</p-button>\n      </p-popover>\n      <p-popover position="left">\n        <template #content>\n          <div>left</div>\n        </template>\n        <p-button style="width: 130px;">left</p-button>\n      </p-popover>\n      <p-popover position="left-end">\n        <template #content>\n          <div>\n            <div>left-end</div>\n            <div>left-end</div>\n          </div>\n        </template>\n        <p-button style="width: 130px;">left-end</p-button>\n      </p-popover>\n    </div>\n    <div class="popover-demo-item-vertical">\n      <p-popover position="right-start">\n        <template #content>\n          <div>\n            <div>right-start</div>\n            <div>right-start</div>\n          </div>\n        </template>\n        <p-button style="width: 130px;">right-start</p-button>\n      </p-popover>\n      <p-popover position="right">\n        <template #content>\n          <div>right</div>\n        </template>\n        <p-button style="width: 130px;">right</p-button>\n      </p-popover>\n      <p-popover position="right-end">\n        <template #content>\n          <div>\n            <div>right-end</div>\n            <div>right-end</div>\n          </div>\n        </template>\n        <p-button style="width: 130px;">right-end</p-button>\n      </p-popover>\n    </div>\n  </div>\n  <div class="popover-demo-item-horizontal">\n    <p-popover position="bottom-start">\n      <template #content>\n        <div>\n          <div>bottom-start</div>\n          <div>bottom-start</div>\n        </div>\n      </template>\n      <p-button style="width: 130px;">bottom-start</p-button>\n    </p-popover>\n    <p-popover position="bottom">\n      <template #content>\n        <div>bottom</div>\n      </template>\n      <p-button style="width: 130px;">bottom</p-button>\n    </p-popover>\n    <p-popover position="bottom-end">\n      <template #content>\n        <div>\n          <div>bottom-end</div>\n          <div>bottom-end</div>\n        </div>\n      </template>\n      <p-button style="width: 130px;">bottom-end</p-button>\n    </p-popover>\n  </div>\n</template>\n<style>\n  .popover-demo-item-horizontal {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 440px;\n    margin-bottom: 4px;\n  }\n  .popover-demo-item-horizontal > * {\n    margin-right: 4px;\n  }\n  .popover-demo-vertical-wrapper {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 440px;\n  }\n  .popover-demo-item-vertical {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 4px;\n  }\n  .popover-demo-item-vertical > * {\n    margin-bottom: 4px;\n  }\n</style>\n',
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
                      createVNode("span", { style: { "color": "#C3E88D" } }, "popover-demo-item-horizontal"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "position"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "top-start"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "#"),
                      createVNode("span", { style: { "color": "#C792EA" } }, "content"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "top-start"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "top-start"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
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
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "style"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "width: 130px;"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "top-start"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "position"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "top"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "#"),
                      createVNode("span", { style: { "color": "#C792EA" } }, "content"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "top"),
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
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "style"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "width: 130px;"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "top"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "position"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "top-end"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "#"),
                      createVNode("span", { style: { "color": "#C792EA" } }, "content"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "top-end"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "top-end"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
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
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "style"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "width: 130px;"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "top-end"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
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
                    createVNode("span", { class: "line" }),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "popover-demo-vertical-wrapper"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "popover-demo-item-vertical"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "position"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "left-start"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "#"),
                      createVNode("span", { style: { "color": "#C792EA" } }, "content"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "            "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "left-start"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "            "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "left-start"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "style"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "width: 130px;"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "left-start"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "position"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "left"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "#"),
                      createVNode("span", { style: { "color": "#C792EA" } }, "content"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "left"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "style"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "width: 130px;"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "left"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "position"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "left-end"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "#"),
                      createVNode("span", { style: { "color": "#C792EA" } }, "content"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "            "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "left-end"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "            "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "left-end"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "style"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "width: 130px;"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "left-end"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "popover-demo-item-vertical"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "position"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "right-start"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "#"),
                      createVNode("span", { style: { "color": "#C792EA" } }, "content"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "            "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "right-start"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "            "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "right-start"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "style"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "width: 130px;"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "right-start"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "position"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "right"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "#"),
                      createVNode("span", { style: { "color": "#C792EA" } }, "content"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "right"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "style"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "width: 130px;"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "right"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "position"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "right-end"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "#"),
                      createVNode("span", { style: { "color": "#C792EA" } }, "content"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "            "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "right-end"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "            "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "right-end"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "style"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "width: 130px;"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "right-end"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
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
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "popover-demo-item-horizontal"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "position"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "bottom-start"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "#"),
                      createVNode("span", { style: { "color": "#C792EA" } }, "content"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "bottom-start"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "bottom-start"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
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
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "style"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "width: 130px;"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "bottom-start"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "position"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "bottom"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "#"),
                      createVNode("span", { style: { "color": "#C792EA" } }, "content"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "bottom"),
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
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "style"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "width: 130px;"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "bottom"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "position"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "bottom-end"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "#"),
                      createVNode("span", { style: { "color": "#C792EA" } }, "content"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "bottom-end"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "bottom-end"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
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
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "style"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "width: 130px;"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "bottom-end"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
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
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "style"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#FFCB6B" } }, "popover-demo-item-horizontal"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "display"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " flex"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "justify-content"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " center"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "align-items"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " center"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "width"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "440px"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "margin-bottom"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "4px"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#FFCB6B" } }, "popover-demo-item-horizontal"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#FFCB6B" } }, "*"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "margin-right"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "4px"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#FFCB6B" } }, "popover-demo-vertical-wrapper"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "display"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " flex"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "justify-content"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " space-between"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "align-items"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " center"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "width"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "440px"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#FFCB6B" } }, "popover-demo-item-vertical"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "display"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " flex"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "flex-direction"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " column"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "justify-content"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " center"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "align-items"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " center"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "margin-bottom"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "4px"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#FFCB6B" } }, "popover-demo-item-vertical"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#FFCB6B" } }, "*"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "margin-bottom"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "4px"),
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
  _push(`<h2 id="颜色" tabindex="-1">颜色 <a class="header-anchor" href="#颜色" aria-hidden="true">#</a></h2><p>默认 颜色为 <code>dark</code> ,要想使用白色设置 <code>dark</code> 为 <code>false</code></p>`);
  _push(ssrRenderComponent(_component_clientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_demo, {
          "initial-value": '<template>\n  <p-space>\n    <p-popover content="hello world!" :dark="false">\n      <p-button>hover</p-button>\n    </p-popover>\n    <p-popover content="hello world!" trigger="click" :dark="false">\n      <p-button>click</p-button>\n    </p-popover>\n  </p-space>\n</template>\n',
          direction: "",
          lang: "vue",
          height: "undefined"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-vue"${_scopeId2}><button title="Copy Code" class="copy"${_scopeId2}></button><span class="lang"${_scopeId2}>vue</span><pre class="shiki material-palenight"${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-space</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-popover</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>content</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>hello world!</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>:dark</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>false</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>hover</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-popover</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-popover</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>content</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>hello world!</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>trigger</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>click</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>:dark</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>false</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>click</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-popover</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>p-space</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
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
                        createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "content"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "hello world!"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, ":dark"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "false"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "hover"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "content"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "hello world!"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "trigger"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "click"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, ":dark"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "false"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "click"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                        createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
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
            "initial-value": '<template>\n  <p-space>\n    <p-popover content="hello world!" :dark="false">\n      <p-button>hover</p-button>\n    </p-popover>\n    <p-popover content="hello world!" trigger="click" :dark="false">\n      <p-button>click</p-button>\n    </p-popover>\n  </p-space>\n</template>\n',
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
                      createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "content"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "hello world!"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, ":dark"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "false"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "hover"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "content"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "hello world!"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "trigger"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "click"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, ":dark"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "false"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "click"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "p-popover"),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/popover/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
