import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"🎉 0.0.18-beta (2022-07-17)","slug":"🎉-0-0-18-beta-2022-07-17","link":"#🎉-0-0-18-beta-2022-07-17","children":[{"level":3,"title":"📃【Docs】","slug":"📃【docs】","link":"#📃【docs】","children":[]}]}],"relativePath":"change-log/index.md"}');
const _sfc_main = { name: "change-log/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="🎉-0-0-18-beta-2022-07-17" tabindex="-1">🎉 0.0.18-beta (2022-07-17) <a class="header-anchor" href="#🎉-0-0-18-beta-2022-07-17" aria-hidden="true">#</a></h2><h3 id="📃【docs】" tabindex="-1">📃【Docs】 <a class="header-anchor" href="#📃【docs】" aria-hidden="true">#</a></h3><ul><li>新的文档官网</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("change-log/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
