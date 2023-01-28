import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"PromiseUI","text":"一个 Vue3 组件库","tagline":"主题可调，使用 TypeScript，交互式Demo","actions":[{"theme":"brand","text":"快速开始","link":"/quick-start/"},{"theme":"alt","text":"View on GitHub","link":"https://github.com/liyao1520/promise-ui"}]},"features":[{"icon":"🔑","title":"使用 Typescript","details":"更好的代码提示"},{"icon":"⚡","title":"按需引入","details":"支持按需引入"},{"icon":"🎁","title":"组件精美","details":"还算好看"},{"icon":"🌙","title":"黑暗模式","details":"支持黑暗模式"},{"icon":"🎨","title":"主题化","details":"支持自定义定制主题"},{"icon":"🛠️","title":"交互式","details":"组件文档采用交互式,可在线编辑实时"}]},"headers":[],"relativePath":"index.md"}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
