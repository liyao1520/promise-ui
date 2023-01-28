import { shallowRef, inject, computed, ref, reactive, markRaw, readonly, nextTick, defineComponent, onUpdated, h, watchEffect, onMounted, onUnmounted, watch, useSSRContext, mergeProps, resolveComponent, unref, createVNode, resolveDynamicComponent, withCtx, renderSlot, openBlock, createBlock, createCommentVNode, createTextVNode, toDisplayString, Fragment, renderList, provide, watchPostEffect, createSSRApp } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderVNode, ssrRenderSlot, ssrRenderList, ssrRenderClass, ssrRenderStyle, renderToString } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
import "body-scroll-lock";
import { useMediaQuery } from "@vueuse/core";
import { addImportMap, vuePlugin } from "vitepress-demo-editor";
import { AirplaneSharp, AccessibilitySharp, Ban, SearchSharp, ChatboxSharp, PawSharp, CheckmarkSharp, CloseSharp, MusicalNotesSharp, FlameSharp, HappyOutline } from "@vicons/ionicons5";
const fonts = "";
const vars = "";
const base = "";
const utils = "";
const customBlock = "";
const vpCode = "";
const vpSponsor = "";
const siteData = JSON.parse('{"lang":"zh-CN","dir":"ltr","title":"PromiseUI","description":"一个vue3组件库","base":"/","head":[],"appearance":true,"themeConfig":{"sidebar":{"/":[{"text":"开始","items":[{"text":"安装使用","link":"/quick-start/"},{"text":"变更日志","link":"/change-log/"}]},{"text":"通用","items":[{"text":"Button 按钮","link":"/components/button/"},{"text":"Overlay 遮罩层","link":"/components/overlay/"},{"text":"Scrollbar 滚动条","link":"/components/scrollbar/"},{"text":"VirtualScroll 虚拟滚动","link":"/components/virtualScroll/"}]},{"text":"数据展示","items":[{"text":"Table 表格","link":"/components/table/"},{"text":"Tag 标签","link":"/components/tag/"}]},{"text":"导航","items":[{"text":"Dropdown 下拉菜单","link":"/components/dropdown/"},{"text":"LoadingBar 加载条","link":"/components/loadingBar/"},{"text":"Tabs 标签页","link":"/components/tabs/"}]},{"text":"反馈","items":[{"text":"Message 消息","link":"/components/message/"},{"text":"MessageBox 消息弹出框","link":"/components/messageBox/"},{"text":"Modal 模态框","link":"/components/modal/"},{"text":"Popover 悬浮提示","link":"/components/popover/"}]},{"text":"数据录入","items":[{"text":"AutoComplete 自动填充","link":"/components/autoComplete/"},{"text":"Checkbox 多选框","link":"/components/checkbox/"},{"text":"Form 表单","link":"/components/form/"},{"text":"Input 输入框","link":"/components/input/"},{"text":"Radio 单选框","link":"/components/radio/"},{"text":"Select 选择器","link":"/components/select/"},{"text":"Switch 开关","link":"/components/switch/"},{"text":"DatePicker 日期选择器","link":"/components/datePicker/"}]},{"text":"布局","items":[]}]},"nav":[{"text":"组件文档","link":"/quick-start/","target":"_self"},{"text":"playground","link":"/playground/"},{"text":"Github","link":"https://github.com/liyao1520/promise-ui","target":"_blank","rel":""}],"search":true,"logo":"/logo.svg"},"locales":{},"scrollOffset":90,"cleanUrls":"disabled"}');
const EXTERNAL_URL_RE = /^[a-z]+:/i;
const HASH_RE$1 = /#.*$/;
const EXT_RE$1 = /(index)?\.(md|html)$/;
const inBrowser$1 = typeof window !== "undefined";
const notFoundPageData = {
  relativePath: "",
  title: "404",
  description: "Not Found",
  headers: [],
  frontmatter: { sidebar: false, layout: "page" },
  lastUpdated: 0
};
function isActive$1(currentPath, matchPath, asRegex = false) {
  if (matchPath === void 0) {
    return false;
  }
  currentPath = normalize$1(`/${currentPath}`);
  if (asRegex) {
    return new RegExp(matchPath).test(currentPath);
  }
  if (normalize$1(matchPath) !== currentPath) {
    return false;
  }
  const hashMatch = matchPath.match(HASH_RE$1);
  if (hashMatch) {
    return (inBrowser$1 ? location.hash : "") === hashMatch[0];
  }
  return true;
}
function normalize$1(path) {
  return decodeURI(path).replace(HASH_RE$1, "").replace(EXT_RE$1, "");
}
function isExternal$1(path) {
  return EXTERNAL_URL_RE.test(path);
}
function resolveSiteDataByRoute(siteData2, relativePath) {
  var _a, _b, _c, _d, _e, _f, _g;
  const localeIndex = Object.keys(siteData2.locales).find((key) => key !== "root" && !isExternal$1(key) && isActive$1(relativePath, `/${key}/`, true)) || "root";
  return Object.assign({}, siteData2, {
    localeIndex,
    lang: ((_a = siteData2.locales[localeIndex]) == null ? void 0 : _a.lang) ?? siteData2.lang,
    dir: ((_b = siteData2.locales[localeIndex]) == null ? void 0 : _b.dir) ?? siteData2.dir,
    title: ((_c = siteData2.locales[localeIndex]) == null ? void 0 : _c.title) ?? siteData2.title,
    titleTemplate: ((_d = siteData2.locales[localeIndex]) == null ? void 0 : _d.titleTemplate) ?? siteData2.titleTemplate,
    description: ((_e = siteData2.locales[localeIndex]) == null ? void 0 : _e.description) ?? siteData2.description,
    head: mergeHead(siteData2.head, ((_f = siteData2.locales[localeIndex]) == null ? void 0 : _f.head) ?? []),
    themeConfig: {
      ...siteData2.themeConfig,
      ...(_g = siteData2.locales[localeIndex]) == null ? void 0 : _g.themeConfig
    }
  });
}
function createTitle(siteData2, pageData) {
  const title = pageData.title || siteData2.title;
  const template = pageData.titleTemplate ?? siteData2.titleTemplate;
  if (typeof template === "string" && template.includes(":title")) {
    return template.replace(/:title/g, title);
  }
  const templateString = createTitleTemplate(siteData2.title, template);
  return `${title}${templateString}`;
}
function createTitleTemplate(siteTitle, template) {
  if (template === false) {
    return "";
  }
  if (template === true || template === void 0) {
    return ` | ${siteTitle}`;
  }
  if (siteTitle === template) {
    return "";
  }
  return ` | ${template}`;
}
function hasTag(head, tag) {
  const [tagType, tagAttrs] = tag;
  if (tagType !== "meta")
    return false;
  const keyAttr = Object.entries(tagAttrs)[0];
  if (keyAttr == null)
    return false;
  return head.some(([type, attrs]) => type === tagType && attrs[keyAttr[0]] === keyAttr[1]);
}
function mergeHead(prev, curr) {
  return [...prev.filter((tagAttrs) => !hasTag(curr, tagAttrs)), ...curr];
}
const INVALID_CHAR_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;
function sanitizeFileName(name) {
  const match = DRIVE_LETTER_REGEX.exec(name);
  const driveLetter = match ? match[0] : "";
  return driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "_").replace(/(^|\/)_+(?=[^/]*$)/, "$1");
}
const dataSymbol = Symbol();
const siteDataRef = shallowRef(siteData);
function initData(route) {
  const site = computed(() => resolveSiteDataByRoute(siteDataRef.value, route.data.relativePath));
  return {
    site,
    theme: computed(() => site.value.themeConfig),
    page: computed(() => route.data),
    frontmatter: computed(() => route.data.frontmatter),
    lang: computed(() => site.value.lang),
    dir: computed(() => site.value.dir),
    localeIndex: computed(() => site.value.localeIndex || "root"),
    title: computed(() => {
      return createTitle(site.value, route.data);
    }),
    description: computed(() => {
      return route.data.description || site.value.description;
    }),
    isDark: ref(false)
  };
}
function useData() {
  const data = inject(dataSymbol);
  if (!data) {
    throw new Error("vitepress data not properly injected in app");
  }
  return data;
}
function joinPath(base2, path) {
  return `${base2}${path}`.replace(/\/+/g, "/");
}
function withBase(path) {
  return EXTERNAL_URL_RE.test(path) || path.startsWith(".") ? path : joinPath(siteDataRef.value.base, path);
}
function pathToFile(path) {
  let pagePath = path.replace(/\.html$/, "");
  pagePath = decodeURIComponent(pagePath);
  pagePath = pagePath.replace(/\/$/, "/index");
  {
    if (inBrowser$1) {
      const base2 = "/";
      pagePath = sanitizeFileName(pagePath.slice(base2.length).replace(/\//g, "_") || "index") + ".md";
      let pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()];
      if (!pageHash) {
        pagePath = pagePath.endsWith("_index.md") ? pagePath.slice(0, -9) + ".md" : pagePath.slice(0, -3) + "_index.md";
        pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()];
      }
      pagePath = `${base2}assets/${pagePath}.${pageHash}.js`;
    } else {
      pagePath = `./${sanitizeFileName(pagePath.slice(1).replace(/\//g, "_"))}.md.js`;
    }
  }
  return pagePath;
}
const RouterSymbol = Symbol();
const fakeHost = `http://a.com`;
const getDefaultRoute = () => ({
  path: "/",
  component: null,
  data: notFoundPageData
});
function createRouter(loadPageModule, fallbackComponent) {
  const route = reactive(getDefaultRoute());
  const router = {
    route,
    go
  };
  async function go(href = inBrowser$1 ? location.href : "/") {
    var _a, _b;
    await ((_a = router.onBeforeRouteChange) == null ? void 0 : _a.call(router, href));
    const url = new URL(href, fakeHost);
    if (siteDataRef.value.cleanUrls === "disabled") {
      if (!url.pathname.endsWith("/") && !url.pathname.endsWith(".html")) {
        url.pathname += ".html";
        href = url.pathname + url.search + url.hash;
      }
    }
    if (inBrowser$1) {
      history.replaceState({ scrollPosition: window.scrollY }, document.title);
      history.pushState(null, "", href);
    }
    await loadPage(href);
    await ((_b = router.onAfterRouteChanged) == null ? void 0 : _b.call(router, href));
  }
  let latestPendingPath = null;
  async function loadPage(href, scrollPosition = 0, isRetry = false) {
    const targetLoc = new URL(href, fakeHost);
    const pendingPath = latestPendingPath = targetLoc.pathname;
    try {
      let page = await loadPageModule(pendingPath);
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        const { default: comp, __pageData } = page;
        if (!comp) {
          throw new Error(`Invalid route component: ${comp}`);
        }
        route.path = inBrowser$1 ? pendingPath : withBase(pendingPath);
        route.component = markRaw(comp);
        route.data = true ? markRaw(__pageData) : readonly(__pageData);
        if (inBrowser$1) {
          nextTick(() => {
            if (targetLoc.hash && !scrollPosition) {
              let target = null;
              try {
                target = document.querySelector(decodeURIComponent(targetLoc.hash));
              } catch (e) {
                console.warn(e);
              }
              if (target) {
                scrollTo(target, targetLoc.hash);
                return;
              }
            }
            window.scrollTo(0, scrollPosition);
          });
        }
      }
    } catch (err) {
      if (!/fetch/.test(err.message) && !/^\/404(\.html|\/)?$/.test(href)) {
        console.error(err);
      }
      if (!isRetry) {
        try {
          const res = await fetch(siteDataRef.value.base + "hashmap.json");
          window.__VP_HASH_MAP__ = await res.json();
          await loadPage(href, scrollPosition, true);
          return;
        } catch (e) {
        }
      }
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        route.path = inBrowser$1 ? pendingPath : withBase(pendingPath);
        route.component = fallbackComponent ? markRaw(fallbackComponent) : null;
        route.data = notFoundPageData;
      }
    }
  }
  if (inBrowser$1) {
    window.addEventListener("click", (e) => {
      const button = e.target.closest("button");
      if (button)
        return;
      const link2 = e.target.closest("a");
      if (link2 && !link2.closest(".vp-raw") && !link2.download) {
        const { href, origin, pathname, hash, search, target } = link2;
        const currentUrl = window.location;
        const extMatch = pathname.match(/\.\w+$/);
        if (!e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey && target !== `_blank` && origin === currentUrl.origin && // don't intercept if non-html extension is present
        !(extMatch && extMatch[0] !== ".html")) {
          e.preventDefault();
          if (pathname === currentUrl.pathname && search === currentUrl.search) {
            if (hash && hash !== currentUrl.hash) {
              history.pushState(null, "", hash);
              window.dispatchEvent(new Event("hashchange"));
              scrollTo(link2, hash, link2.classList.contains("header-anchor"));
            }
          } else {
            go(href);
          }
        }
      }
    }, { capture: true });
    window.addEventListener("popstate", (e) => {
      loadPage(location.href, e.state && e.state.scrollPosition || 0);
    });
    window.addEventListener("hashchange", (e) => {
      e.preventDefault();
    });
  }
  return router;
}
function useRouter() {
  const router = inject(RouterSymbol);
  if (!router) {
    throw new Error("useRouter() is called without provider.");
  }
  return router;
}
function useRoute() {
  return useRouter().route;
}
function scrollTo(el, hash, smooth = false) {
  let target = null;
  try {
    target = el.classList.contains("header-anchor") ? el : document.querySelector(decodeURIComponent(hash));
  } catch (e) {
    console.warn(e);
  }
  if (target) {
    let offset = siteDataRef.value.scrollOffset;
    if (typeof offset === "string") {
      offset = document.querySelector(offset).getBoundingClientRect().bottom + 24;
    }
    const targetPadding = parseInt(window.getComputedStyle(target).paddingTop, 10);
    const targetTop = window.scrollY + target.getBoundingClientRect().top - offset + targetPadding;
    if (!smooth || Math.abs(targetTop - window.scrollY) > window.innerHeight) {
      window.scrollTo(0, targetTop);
    } else {
      window.scrollTo({
        left: 0,
        top: targetTop,
        behavior: "smooth"
      });
    }
  }
}
const Content = defineComponent({
  name: "VitePressContent",
  props: {
    onContentUpdated: Function
  },
  setup(props) {
    const route = useRoute();
    onUpdated(() => {
      var _a;
      (_a = props.onContentUpdated) == null ? void 0 : _a.call(props);
    });
    return () => h("div", { style: { position: "relative" } }, [
      route.component ? h(route.component) : null
    ]);
  }
});
const HASH_RE = /#.*$/;
const EXT_RE = /(index)?\.(md|html)$/;
const OUTBOUND_RE = /^[a-z]+:/i;
const inBrowser = typeof window !== "undefined";
const hashRef = ref(inBrowser ? location.hash : "");
function isExternal(path) {
  return OUTBOUND_RE.test(path);
}
function throttleAndDebounce(fn, delay) {
  let timeout;
  let called = false;
  return () => {
    if (timeout) {
      clearTimeout(timeout);
    }
    if (!called) {
      fn();
      called = true;
      setTimeout(() => {
        called = false;
      }, delay);
    } else {
      timeout = setTimeout(fn, delay);
    }
  };
}
function isActive(currentPath, matchPath, asRegex = false) {
  if (matchPath === void 0) {
    return false;
  }
  currentPath = normalize(`/${currentPath}`);
  if (asRegex) {
    return new RegExp(matchPath).test(currentPath);
  }
  if (normalize(matchPath) !== currentPath) {
    return false;
  }
  const hashMatch = matchPath.match(HASH_RE);
  if (hashMatch) {
    return hashRef.value === hashMatch[0];
  }
  return true;
}
function ensureStartingSlash(path) {
  return /^\//.test(path) ? path : `/${path}`;
}
function normalize(path) {
  return decodeURI(path).replace(HASH_RE, "").replace(EXT_RE, "");
}
function normalizeLink(url) {
  if (isExternal(url)) {
    return url;
  }
  const { pathname, search, hash } = new URL(url, "http://example.com");
  const normalizedPath = pathname.endsWith("/") || pathname.endsWith(".html") ? url : `${pathname.replace(/(\.md)?$/, ".html")}${search}${hash}`;
  return withBase(normalizedPath);
}
function getSidebar(sidebar, path) {
  if (Array.isArray(sidebar)) {
    return sidebar;
  }
  path = ensureStartingSlash(path);
  for (const dir in sidebar) {
    if (path.startsWith(ensureStartingSlash(dir))) {
      return sidebar[dir];
    }
  }
  return [];
}
function getFlatSideBarLinks(sidebar) {
  const links = [];
  for (const group of sidebar) {
    for (const link2 of group.items) {
      links.push(link2);
    }
  }
  return links;
}
function useSidebar() {
  const route = useRoute();
  const { theme: theme2, frontmatter } = useData();
  const isOpen = ref(false);
  const sidebar = computed(() => {
    const sidebarConfig = theme2.value.sidebar;
    const relativePath = route.data.relativePath;
    return sidebarConfig ? getSidebar(sidebarConfig, relativePath) : [];
  });
  const hasSidebar = computed(() => {
    return frontmatter.value.sidebar !== false && sidebar.value.length > 0 && frontmatter.value.layout !== "home";
  });
  function open() {
    isOpen.value = true;
  }
  function close() {
    isOpen.value = false;
  }
  function toggle() {
    isOpen.value ? close() : open();
  }
  return {
    isOpen,
    sidebar,
    hasSidebar,
    open,
    close,
    toggle
  };
}
function useCloseSidebarOnEscape(isOpen, close) {
  let triggerElement;
  watchEffect(() => {
    triggerElement = isOpen.value ? document.activeElement : void 0;
  });
  onMounted(() => {
    window.addEventListener("keyup", onEscape);
  });
  onUnmounted(() => {
    window.removeEventListener("keyup", onEscape);
  });
  function onEscape(e) {
    if (e.key === "Escape" && isOpen.value) {
      close();
      triggerElement == null ? void 0 : triggerElement.focus();
    }
  }
}
const _sfc_main$1k = /* @__PURE__ */ defineComponent({
  __name: "VPSkipLink",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const backToTop = ref();
    watch(() => route.path, () => backToTop.value.focus());
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><span tabindex="-1" data-v-f0f9d4ba></span><a href="#VPContent" class="VPSkipLink visually-hidden" data-v-f0f9d4ba> Skip to content </a><!--]-->`);
    };
  }
});
const VPSkipLink_vue_vue_type_style_index_0_scoped_f0f9d4ba_lang = "";
const _sfc_setup$1k = _sfc_main$1k.setup;
_sfc_main$1k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPSkipLink.vue");
  return _sfc_setup$1k ? _sfc_setup$1k(props, ctx) : void 0;
};
const VPSkipLink = /* @__PURE__ */ _export_sfc(_sfc_main$1k, [["__scopeId", "data-v-f0f9d4ba"]]);
const _sfc_main$1j = /* @__PURE__ */ defineComponent({
  __name: "VPBackdrop",
  __ssrInlineRender: true,
  props: {
    show: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.show) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPBackdrop" }, _attrs))} data-v-84b730bb></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPBackdrop_vue_vue_type_style_index_0_scoped_84b730bb_lang = "";
const _sfc_setup$1j = _sfc_main$1j.setup;
_sfc_main$1j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPBackdrop.vue");
  return _sfc_setup$1j ? _sfc_setup$1j(props, ctx) : void 0;
};
const VPBackdrop = /* @__PURE__ */ _export_sfc(_sfc_main$1j, [["__scopeId", "data-v-84b730bb"]]);
function useNav() {
  const isScreenOpen = ref(false);
  function openScreen() {
    isScreenOpen.value = true;
    window.addEventListener("resize", closeScreenOnTabletWindow);
  }
  function closeScreen() {
    isScreenOpen.value = false;
    window.removeEventListener("resize", closeScreenOnTabletWindow);
  }
  function toggleScreen() {
    isScreenOpen.value ? closeScreen() : openScreen();
  }
  function closeScreenOnTabletWindow() {
    window.outerWidth >= 768 && closeScreen();
  }
  return {
    isScreenOpen,
    openScreen,
    closeScreen,
    toggleScreen
  };
}
const __default__ = {
  inheritAttrs: false
};
const _sfc_main$1i = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "VPImage",
  __ssrInlineRender: true,
  props: {
    image: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VPImage = resolveComponent("VPImage", true);
      if (__props.image) {
        _push(`<!--[-->`);
        if (typeof __props.image === "string" || "src" in __props.image) {
          _push(`<img${ssrRenderAttrs(mergeProps({ class: "VPImage" }, typeof __props.image === "string" ? _ctx.$attrs : { ...__props.image, ..._ctx.$attrs }, {
            src: unref(withBase)(typeof __props.image === "string" ? __props.image : __props.image.src)
          }))} data-v-64d21350>`);
        } else {
          _push(`<!--[-->`);
          _push(ssrRenderComponent(_component_VPImage, mergeProps({
            class: "dark",
            image: __props.image.dark
          }, _ctx.$attrs), null, _parent));
          _push(ssrRenderComponent(_component_VPImage, mergeProps({
            class: "light",
            image: __props.image.light
          }, _ctx.$attrs), null, _parent));
          _push(`<!--]-->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPImage_vue_vue_type_style_index_0_scoped_64d21350_lang = "";
const _sfc_setup$1i = _sfc_main$1i.setup;
_sfc_main$1i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPImage.vue");
  return _sfc_setup$1i ? _sfc_setup$1i(props, ctx) : void 0;
};
const VPImage = /* @__PURE__ */ _export_sfc(_sfc_main$1i, [["__scopeId", "data-v-64d21350"]]);
const _sfc_main$1h = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarTitle",
  __ssrInlineRender: true,
  setup(__props) {
    const { site, theme: theme2 } = useData();
    const { hasSidebar } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPNavBarTitle", { "has-sidebar": unref(hasSidebar) }]
      }, _attrs))} data-v-e1971e4e><a class="title"${ssrRenderAttr("href", unref(site).base)} data-v-e1971e4e>`);
      _push(ssrRenderComponent(VPImage, {
        class: "logo",
        image: unref(theme2).logo
      }, null, _parent));
      if (unref(theme2).siteTitle) {
        _push(`<!--[-->${ssrInterpolate(unref(theme2).siteTitle)}<!--]-->`);
      } else if (unref(theme2).siteTitle === void 0) {
        _push(`<!--[-->${ssrInterpolate(unref(site).title)}<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</a></div>`);
    };
  }
});
const VPNavBarTitle_vue_vue_type_style_index_0_scoped_e1971e4e_lang = "";
const _sfc_setup$1h = _sfc_main$1h.setup;
_sfc_main$1h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPNavBarTitle.vue");
  return _sfc_setup$1h ? _sfc_setup$1h(props, ctx) : void 0;
};
const VPNavBarTitle = /* @__PURE__ */ _export_sfc(_sfc_main$1h, [["__scopeId", "data-v-e1971e4e"]]);
const style$1 = "";
const _sfc_main$1g = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarSearch",
  __ssrInlineRender: true,
  setup(__props) {
    const VPAlgoliaSearchBox = () => null;
    const { theme: theme2 } = useData();
    const loaded = ref(false);
    const metaKey = ref();
    onMounted(() => {
      if (!theme2.value.algolia) {
        return;
      }
      metaKey.value.textContent = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? "⌘" : "Ctrl";
      const handleSearchHotKey = (e) => {
        if (e.key === "k" && (e.ctrlKey || e.metaKey)) {
          e.preventDefault();
          load();
          remove();
        }
      };
      const remove = () => {
        window.removeEventListener("keydown", handleSearchHotKey);
      };
      window.addEventListener("keydown", handleSearchHotKey);
      onUnmounted(remove);
    });
    function load() {
      if (!loaded.value) {
        loaded.value = true;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).algolia) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPNavBarSearch" }, _attrs))}>`);
        if (loaded.value) {
          _push(ssrRenderComponent(unref(VPAlgoliaSearchBox), null, null, _parent));
        } else {
          _push(`<div id="docsearch"><button type="button" class="DocSearch DocSearch-Button" aria-label="Search"><span class="DocSearch-Button-Container"><svg class="DocSearch-Search-Icon" width="20" height="20" viewBox="0 0 20 20"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="DocSearch-Button-Placeholder">Search</span></span><span class="DocSearch-Button-Keys"><kbd class="DocSearch-Button-Key">Meta</kbd><kbd class="DocSearch-Button-Key">K</kbd></span></button></div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavBarSearch_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$1g = _sfc_main$1g.setup;
_sfc_main$1g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPNavBarSearch.vue");
  return _sfc_setup$1g ? _sfc_setup$1g(props, ctx) : void 0;
};
const _sfc_main$1f = {};
function _sfc_ssrRender$l(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    height: "24px",
    viewBox: "0 0 24 24",
    width: "24px"
  }, _attrs))}><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"></path></svg>`);
}
const _sfc_setup$1f = _sfc_main$1f.setup;
_sfc_main$1f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/icons/VPIconExternalLink.vue");
  return _sfc_setup$1f ? _sfc_setup$1f(props, ctx) : void 0;
};
const VPIconExternalLink = /* @__PURE__ */ _export_sfc(_sfc_main$1f, [["ssrRender", _sfc_ssrRender$l]]);
const _sfc_main$1e = /* @__PURE__ */ defineComponent({
  __name: "VPLink",
  __ssrInlineRender: true,
  props: {
    href: null,
    noIcon: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const isExternal2 = computed(() => props.href && /^[a-z]+:/i.test(props.href));
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.href ? "a" : "span"), mergeProps({
        class: ["VPLink", { link: __props.href }],
        href: __props.href ? unref(normalizeLink)(__props.href) : void 0,
        target: unref(isExternal2) ? "_blank" : void 0,
        rel: unref(isExternal2) ? "noopener noreferrer" : void 0
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            if (unref(isExternal2) && !__props.noIcon) {
              _push2(ssrRenderComponent(VPIconExternalLink, { class: "icon" }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, void 0, true),
              unref(isExternal2) && !__props.noIcon ? (openBlock(), createBlock(VPIconExternalLink, {
                key: 0,
                class: "icon"
              })) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const VPLink_vue_vue_type_style_index_0_scoped_081c93d1_lang = "";
const _sfc_setup$1e = _sfc_main$1e.setup;
_sfc_main$1e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPLink.vue");
  return _sfc_setup$1e ? _sfc_setup$1e(props, ctx) : void 0;
};
const VPLink = /* @__PURE__ */ _export_sfc(_sfc_main$1e, [["__scopeId", "data-v-081c93d1"]]);
const _sfc_main$1d = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenuLink",
  __ssrInlineRender: true,
  props: {
    item: null
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VPLink, mergeProps({
        class: {
          VPNavBarMenuLink: true,
          active: unref(isActive)(
            unref(page).relativePath,
            __props.item.activeMatch || __props.item.link,
            !!__props.item.activeMatch
          )
        },
        href: __props.item.link,
        noIcon: true
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.item.text)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.item.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const VPNavBarMenuLink_vue_vue_type_style_index_0_scoped_c483828e_lang = "";
const _sfc_setup$1d = _sfc_main$1d.setup;
_sfc_main$1d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPNavBarMenuLink.vue");
  return _sfc_setup$1d ? _sfc_setup$1d(props, ctx) : void 0;
};
const VPNavBarMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$1d, [["__scopeId", "data-v-c483828e"]]);
const focusedElement = ref();
let active = false;
let listeners = 0;
function useFlyout(options) {
  const focus = ref(false);
  if (typeof window !== "undefined") {
    !active && activateFocusTracking();
    listeners++;
    const unwatch = watch(focusedElement, (el) => {
      var _a, _b, _c;
      if (el === options.el.value || ((_a = options.el.value) == null ? void 0 : _a.contains(el))) {
        focus.value = true;
        (_b = options.onFocus) == null ? void 0 : _b.call(options);
      } else {
        focus.value = false;
        (_c = options.onBlur) == null ? void 0 : _c.call(options);
      }
    });
    onUnmounted(() => {
      unwatch();
      listeners--;
      if (!listeners) {
        deactivateFocusTracking();
      }
    });
  }
  return readonly(focus);
}
function activateFocusTracking() {
  document.addEventListener("focusin", handleFocusIn);
  active = true;
  focusedElement.value = document.activeElement;
}
function deactivateFocusTracking() {
  document.removeEventListener("focusin", handleFocusIn);
}
function handleFocusIn() {
  focusedElement.value = document.activeElement;
}
const _sfc_main$1c = {};
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z"></path></svg>`);
}
const _sfc_setup$1c = _sfc_main$1c.setup;
_sfc_main$1c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/icons/VPIconChevronDown.vue");
  return _sfc_setup$1c ? _sfc_setup$1c(props, ctx) : void 0;
};
const VPIconChevronDown = /* @__PURE__ */ _export_sfc(_sfc_main$1c, [["ssrRender", _sfc_ssrRender$k]]);
const _sfc_main$1b = {};
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle><circle cx="5" cy="12" r="2"></circle></svg>`);
}
const _sfc_setup$1b = _sfc_main$1b.setup;
_sfc_main$1b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/icons/VPIconMoreHorizontal.vue");
  return _sfc_setup$1b ? _sfc_setup$1b(props, ctx) : void 0;
};
const VPIconMoreHorizontal = /* @__PURE__ */ _export_sfc(_sfc_main$1b, [["ssrRender", _sfc_ssrRender$j]]);
const _sfc_main$1a = /* @__PURE__ */ defineComponent({
  __name: "VPMenuLink",
  __ssrInlineRender: true,
  props: {
    item: null
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPMenuLink" }, _attrs))} data-v-a76962c6>`);
      _push(ssrRenderComponent(VPLink, {
        class: { active: unref(isActive)(unref(page).relativePath, __props.item.activeMatch || __props.item.link) },
        href: __props.item.link
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.item.text)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.item.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const VPMenuLink_vue_vue_type_style_index_0_scoped_a76962c6_lang = "";
const _sfc_setup$1a = _sfc_main$1a.setup;
_sfc_main$1a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPMenuLink.vue");
  return _sfc_setup$1a ? _sfc_setup$1a(props, ctx) : void 0;
};
const VPMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$1a, [["__scopeId", "data-v-a76962c6"]]);
const _sfc_main$19 = /* @__PURE__ */ defineComponent({
  __name: "VPMenuGroup",
  __ssrInlineRender: true,
  props: {
    text: null,
    items: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPMenuGroup" }, _attrs))} data-v-fa9601ff>`);
      if (__props.text) {
        _push(`<p class="title" data-v-fa9601ff>${ssrInterpolate(__props.text)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(__props.items, (item) => {
        _push(`<!--[-->`);
        if ("link" in item) {
          _push(ssrRenderComponent(VPMenuLink, { item }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const VPMenuGroup_vue_vue_type_style_index_0_scoped_fa9601ff_lang = "";
const _sfc_setup$19 = _sfc_main$19.setup;
_sfc_main$19.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPMenuGroup.vue");
  return _sfc_setup$19 ? _sfc_setup$19(props, ctx) : void 0;
};
const VPMenuGroup = /* @__PURE__ */ _export_sfc(_sfc_main$19, [["__scopeId", "data-v-fa9601ff"]]);
const _sfc_main$18 = /* @__PURE__ */ defineComponent({
  __name: "VPMenu",
  __ssrInlineRender: true,
  props: {
    items: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPMenu" }, _attrs))} data-v-de7bf24f>`);
      if (__props.items) {
        _push(`<div class="items" data-v-de7bf24f><!--[-->`);
        ssrRenderList(__props.items, (item) => {
          _push(`<!--[-->`);
          if ("link" in item) {
            _push(ssrRenderComponent(VPMenuLink, { item }, null, _parent));
          } else {
            _push(ssrRenderComponent(VPMenuGroup, {
              text: item.text,
              items: item.items
            }, null, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const VPMenu_vue_vue_type_style_index_0_scoped_de7bf24f_lang = "";
const _sfc_setup$18 = _sfc_main$18.setup;
_sfc_main$18.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPMenu.vue");
  return _sfc_setup$18 ? _sfc_setup$18(props, ctx) : void 0;
};
const VPMenu = /* @__PURE__ */ _export_sfc(_sfc_main$18, [["__scopeId", "data-v-de7bf24f"]]);
const _sfc_main$17 = /* @__PURE__ */ defineComponent({
  __name: "VPFlyout",
  __ssrInlineRender: true,
  props: {
    icon: null,
    button: null,
    label: null,
    items: null
  },
  setup(__props) {
    const open = ref(false);
    const el = ref();
    useFlyout({ el, onBlur });
    function onBlur() {
      open.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "VPFlyout",
        ref_key: "el",
        ref: el
      }, _attrs))} data-v-8e1d81ed><button type="button" class="button" aria-haspopup="true"${ssrRenderAttr("aria-expanded", open.value)}${ssrRenderAttr("aria-label", __props.label)} data-v-8e1d81ed>`);
      if (__props.button || __props.icon) {
        _push(`<span class="text" data-v-8e1d81ed>`);
        if (__props.icon) {
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.icon), { class: "option-icon" }, null), _parent);
        } else {
          _push(`<!---->`);
        }
        _push(` ${ssrInterpolate(__props.button)} `);
        _push(ssrRenderComponent(VPIconChevronDown, { class: "text-icon" }, null, _parent));
        _push(`</span>`);
      } else {
        _push(ssrRenderComponent(VPIconMoreHorizontal, { class: "icon" }, null, _parent));
      }
      _push(`</button><div class="menu" data-v-8e1d81ed>`);
      _push(ssrRenderComponent(VPMenu, { items: __props.items }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const VPFlyout_vue_vue_type_style_index_0_scoped_8e1d81ed_lang = "";
const _sfc_setup$17 = _sfc_main$17.setup;
_sfc_main$17.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPFlyout.vue");
  return _sfc_setup$17 ? _sfc_setup$17(props, ctx) : void 0;
};
const VPFlyout = /* @__PURE__ */ _export_sfc(_sfc_main$17, [["__scopeId", "data-v-8e1d81ed"]]);
const _sfc_main$16 = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenuGroup",
  __ssrInlineRender: true,
  props: {
    item: null
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VPFlyout, mergeProps({
        class: {
          VPNavBarMenuGroup: true,
          active: unref(isActive)(
            unref(page).relativePath,
            __props.item.activeMatch,
            !!__props.item.activeMatch
          )
        },
        button: __props.item.text,
        items: __props.item.items
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$16 = _sfc_main$16.setup;
_sfc_main$16.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPNavBarMenuGroup.vue");
  return _sfc_setup$16 ? _sfc_setup$16(props, ctx) : void 0;
};
const _sfc_main$15 = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).nav) {
        _push(`<nav${ssrRenderAttrs(mergeProps({
          "aria-labelledby": "main-nav-aria-label",
          class: "VPNavBarMenu"
        }, _attrs))} data-v-f1061362><span id="main-nav-aria-label" class="visually-hidden" data-v-f1061362>Main Navigation</span><!--[-->`);
        ssrRenderList(unref(theme2).nav, (item) => {
          _push(`<!--[-->`);
          if ("link" in item) {
            _push(ssrRenderComponent(VPNavBarMenuLink, { item }, null, _parent));
          } else {
            _push(ssrRenderComponent(_sfc_main$16, { item }, null, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavBarMenu_vue_vue_type_style_index_0_scoped_f1061362_lang = "";
const _sfc_setup$15 = _sfc_main$15.setup;
_sfc_main$15.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPNavBarMenu.vue");
  return _sfc_setup$15 ? _sfc_setup$15(props, ctx) : void 0;
};
const VPNavBarMenu = /* @__PURE__ */ _export_sfc(_sfc_main$15, [["__scopeId", "data-v-f1061362"]]);
const _sfc_main$14 = {};
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M0 0h24v24H0z" fill="none"></path><path d=" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z " class="css-c4d79v"></path></svg>`);
}
const _sfc_setup$14 = _sfc_main$14.setup;
_sfc_main$14.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/icons/VPIconLanguages.vue");
  return _sfc_setup$14 ? _sfc_setup$14(props, ctx) : void 0;
};
const VPIconLanguages = /* @__PURE__ */ _export_sfc(_sfc_main$14, [["ssrRender", _sfc_ssrRender$i]]);
const _sfc_main$13 = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarTranslations",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).localeLinks) {
        _push(ssrRenderComponent(VPFlyout, mergeProps({
          class: "VPNavBarTranslations",
          icon: VPIconLanguages
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="items" data-v-2569f9c3${_scopeId}><p class="title" data-v-2569f9c3${_scopeId}>${ssrInterpolate(unref(theme2).localeLinks.text)}</p><!--[-->`);
              ssrRenderList(unref(theme2).localeLinks.items, (locale) => {
                _push2(ssrRenderComponent(VPMenuLink, { item: locale }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              return [
                createVNode("div", { class: "items" }, [
                  createVNode("p", { class: "title" }, toDisplayString(unref(theme2).localeLinks.text), 1),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(theme2).localeLinks.items, (locale) => {
                    return openBlock(), createBlock(VPMenuLink, {
                      key: locale.link,
                      item: locale
                    }, null, 8, ["item"]);
                  }), 128))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavBarTranslations_vue_vue_type_style_index_0_scoped_2569f9c3_lang = "";
const _sfc_setup$13 = _sfc_main$13.setup;
_sfc_main$13.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPNavBarTranslations.vue");
  return _sfc_setup$13 ? _sfc_setup$13(props, ctx) : void 0;
};
const VPNavBarTranslations = /* @__PURE__ */ _export_sfc(_sfc_main$13, [["__scopeId", "data-v-2569f9c3"]]);
const APPEARANCE_KEY = "vitepress-theme-appearance";
const VPSwitch_vue_vue_type_style_index_0_scoped_ff5e2c52_lang = "";
const _sfc_main$12 = {};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    class: "VPSwitch",
    type: "button",
    role: "switch"
  }, _attrs))} data-v-ff5e2c52><span class="check" data-v-ff5e2c52>`);
  if (_ctx.$slots.default) {
    _push(`<span class="icon" data-v-ff5e2c52>`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</span></button>`);
}
const _sfc_setup$12 = _sfc_main$12.setup;
_sfc_main$12.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPSwitch.vue");
  return _sfc_setup$12 ? _sfc_setup$12(props, ctx) : void 0;
};
const VPSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$12, [["ssrRender", _sfc_ssrRender$h], ["__scopeId", "data-v-ff5e2c52"]]);
const _sfc_main$11 = {};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path></svg>`);
}
const _sfc_setup$11 = _sfc_main$11.setup;
_sfc_main$11.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/icons/VPIconSun.vue");
  return _sfc_setup$11 ? _sfc_setup$11(props, ctx) : void 0;
};
const VPIconSun = /* @__PURE__ */ _export_sfc(_sfc_main$11, [["ssrRender", _sfc_ssrRender$g]]);
const _sfc_main$10 = {};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"></path></svg>`);
}
const _sfc_setup$10 = _sfc_main$10.setup;
_sfc_main$10.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/icons/VPIconMoon.vue");
  return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
};
const VPIconMoon = /* @__PURE__ */ _export_sfc(_sfc_main$10, [["ssrRender", _sfc_ssrRender$f]]);
const _sfc_main$$ = /* @__PURE__ */ defineComponent({
  __name: "VPSwitchAppearance",
  __ssrInlineRender: true,
  setup(__props) {
    const toggle = typeof localStorage !== "undefined" ? useAppearance() : () => {
    };
    function useAppearance() {
      const query = window.matchMedia("(prefers-color-scheme: dark)");
      const classList = document.documentElement.classList;
      let userPreference = localStorage.getItem(APPEARANCE_KEY) || "auto";
      let isDark = userPreference === "auto" ? query.matches : userPreference === "dark";
      query.onchange = (e) => {
        if (userPreference === "auto") {
          setClass(isDark = e.matches);
        }
      };
      function toggle2() {
        setClass(isDark = !isDark);
        userPreference = isDark ? query.matches ? "auto" : "dark" : query.matches ? "light" : "auto";
        localStorage.setItem(APPEARANCE_KEY, userPreference);
      }
      function setClass(dark) {
        classList[dark ? "add" : "remove"]("dark");
      }
      return toggle2;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VPSwitch, mergeProps({
        class: "VPSwitchAppearance",
        "aria-label": "toggle dark mode",
        onClick: unref(toggle)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VPIconSun, { class: "sun" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VPIconMoon, { class: "moon" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VPIconSun, { class: "sun" }),
              createVNode(VPIconMoon, { class: "moon" })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const VPSwitchAppearance_vue_vue_type_style_index_0_scoped_1ae688fd_lang = "";
const _sfc_setup$$ = _sfc_main$$.setup;
_sfc_main$$.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPSwitchAppearance.vue");
  return _sfc_setup$$ ? _sfc_setup$$(props, ctx) : void 0;
};
const VPSwitchAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$$, [["__scopeId", "data-v-1ae688fd"]]);
const _sfc_main$_ = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarAppearance",
  __ssrInlineRender: true,
  setup(__props) {
    const { site } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(site).appearance) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPNavBarAppearance" }, _attrs))} data-v-8f99d391>`);
        _push(ssrRenderComponent(VPSwitchAppearance, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavBarAppearance_vue_vue_type_style_index_0_scoped_8f99d391_lang = "";
const _sfc_setup$_ = _sfc_main$_.setup;
_sfc_main$_.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPNavBarAppearance.vue");
  return _sfc_setup$_ ? _sfc_setup$_(props, ctx) : void 0;
};
const VPNavBarAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$_, [["__scopeId", "data-v-8f99d391"]]);
const _sfc_main$Z = {};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273-1.47-1.338-1.604-1.398.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537-1.336-.668-2.54-1.002-3.744-1.137-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02 0 0 1 1.74 3.743 1.806 0 0 .4-.533.805-1.002-1.54-.468-2.14-1.404-2.14-1.404s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03.33.136.66.27.93.4.466.202 1.065.403 1.8.536.93.135 1.996.2 3.21 0 .6-.135 1.2-.267 1.8-.535.39-.2.87-.4 1.397-.737 0 0-.6.936-2.205 1.404.33.466.795 1 .795 1 2.744-.06 3.81-1.8 3.87-1.726 0-3.87-1.815-7.02-1.815-7.02-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02zm.168 4.413c.703 0 1.27.6 1.27 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334.002-.74.573-1.338 1.27-1.338zm-4.543 0c.7 0 1.266.6 1.266 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334 0-.74.57-1.338 1.27-1.338z"></path></svg>`);
}
const _sfc_setup$Z = _sfc_main$Z.setup;
_sfc_main$Z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/icons/VPIconDiscord.vue");
  return _sfc_setup$Z ? _sfc_setup$Z(props, ctx) : void 0;
};
const VPIconDiscord = /* @__PURE__ */ _export_sfc(_sfc_main$Z, [["ssrRender", _sfc_ssrRender$e]]);
const _sfc_main$Y = {};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>`);
}
const _sfc_setup$Y = _sfc_main$Y.setup;
_sfc_main$Y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/icons/VPIconFacebook.vue");
  return _sfc_setup$Y ? _sfc_setup$Y(props, ctx) : void 0;
};
const VPIconFacebook = /* @__PURE__ */ _export_sfc(_sfc_main$Y, [["ssrRender", _sfc_ssrRender$d]]);
const _sfc_main$X = {};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>`);
}
const _sfc_setup$X = _sfc_main$X.setup;
_sfc_main$X.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/icons/VPIconGitHub.vue");
  return _sfc_setup$X ? _sfc_setup$X(props, ctx) : void 0;
};
const VPIconGitHub = /* @__PURE__ */ _export_sfc(_sfc_main$X, [["ssrRender", _sfc_ssrRender$c]]);
const _sfc_main$W = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>`);
}
const _sfc_setup$W = _sfc_main$W.setup;
_sfc_main$W.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/icons/VPIconLinkedIn.vue");
  return _sfc_setup$W ? _sfc_setup$W(props, ctx) : void 0;
};
const VPIconLinkedIn = /* @__PURE__ */ _export_sfc(_sfc_main$W, [["ssrRender", _sfc_ssrRender$b]]);
const _sfc_main$V = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"></path></svg>`);
}
const _sfc_setup$V = _sfc_main$V.setup;
_sfc_main$V.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/icons/VPIconInstagram.vue");
  return _sfc_setup$V ? _sfc_setup$V(props, ctx) : void 0;
};
const VPIconInstagram = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$U = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"></path></svg>`);
}
const _sfc_setup$U = _sfc_main$U.setup;
_sfc_main$U.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/icons/VPIconSlack.vue");
  return _sfc_setup$U ? _sfc_setup$U(props, ctx) : void 0;
};
const VPIconSlack = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$T = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path></svg>`);
}
const _sfc_setup$T = _sfc_main$T.setup;
_sfc_main$T.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/icons/VPIconTwitter.vue");
  return _sfc_setup$T ? _sfc_setup$T(props, ctx) : void 0;
};
const VPIconTwitter = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$S = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg>`);
}
const _sfc_setup$S = _sfc_main$S.setup;
_sfc_main$S.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/icons/VPIconYouTube.vue");
  return _sfc_setup$S ? _sfc_setup$S(props, ctx) : void 0;
};
const VPIconYouTube = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$R = /* @__PURE__ */ defineComponent({
  __name: "VPSocialLink",
  __ssrInlineRender: true,
  props: {
    icon: null,
    link: null
  },
  setup(__props) {
    const icons2 = {
      discord: VPIconDiscord,
      facebook: VPIconFacebook,
      github: VPIconGitHub,
      instagram: VPIconInstagram,
      linkedin: VPIconLinkedIn,
      slack: VPIconSlack,
      twitter: VPIconTwitter,
      youtube: VPIconYouTube
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        class: "VPSocialLink",
        href: __props.link,
        title: __props.icon,
        target: "_blank",
        rel: "noopener noreferrer"
      }, _attrs))} data-v-8c8a7dad>`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(icons2[__props.icon]), { class: "icon" }, null), _parent);
      _push(`<span class="visually-hidden" data-v-8c8a7dad>${ssrInterpolate(__props.icon)}</span></a>`);
    };
  }
});
const VPSocialLink_vue_vue_type_style_index_0_scoped_8c8a7dad_lang = "";
const _sfc_setup$R = _sfc_main$R.setup;
_sfc_main$R.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPSocialLink.vue");
  return _sfc_setup$R ? _sfc_setup$R(props, ctx) : void 0;
};
const VPSocialLink = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["__scopeId", "data-v-8c8a7dad"]]);
const _sfc_main$Q = /* @__PURE__ */ defineComponent({
  __name: "VPSocialLinks",
  __ssrInlineRender: true,
  props: {
    links: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPSocialLinks" }, _attrs))} data-v-6a54b76d><!--[-->`);
      ssrRenderList(__props.links, ({ link: link2, icon }) => {
        _push(ssrRenderComponent(VPSocialLink, {
          key: link2,
          icon,
          link: link2
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const VPSocialLinks_vue_vue_type_style_index_0_scoped_6a54b76d_lang = "";
const _sfc_setup$Q = _sfc_main$Q.setup;
_sfc_main$Q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPSocialLinks.vue");
  return _sfc_setup$Q ? _sfc_setup$Q(props, ctx) : void 0;
};
const VPSocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["__scopeId", "data-v-6a54b76d"]]);
const _sfc_main$P = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarSocialLinks",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).socialLinks) {
        _push(ssrRenderComponent(VPSocialLinks, mergeProps({
          class: "VPNavBarSocialLinks",
          links: unref(theme2).socialLinks
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavBarSocialLinks_vue_vue_type_style_index_0_scoped_bc448e16_lang = "";
const _sfc_setup$P = _sfc_main$P.setup;
_sfc_main$P.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPNavBarSocialLinks.vue");
  return _sfc_setup$P ? _sfc_setup$P(props, ctx) : void 0;
};
const VPNavBarSocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["__scopeId", "data-v-bc448e16"]]);
const _sfc_main$O = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarExtra",
  __ssrInlineRender: true,
  setup(__props) {
    const { site, theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VPFlyout, mergeProps({
        class: "VPNavBarExtra",
        label: "extra navigation"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(theme2).localeLinks) {
              _push2(`<div class="group" data-v-469c69b0${_scopeId}><p class="trans-title" data-v-469c69b0${_scopeId}>${ssrInterpolate(unref(theme2).localeLinks.text)}</p><!--[-->`);
              ssrRenderList(unref(theme2).localeLinks.items, (locale) => {
                _push2(ssrRenderComponent(VPMenuLink, { item: locale }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(site).appearance) {
              _push2(`<div class="group" data-v-469c69b0${_scopeId}><div class="item appearance" data-v-469c69b0${_scopeId}><p class="label" data-v-469c69b0${_scopeId}>Appearance</p><div class="appearance-action" data-v-469c69b0${_scopeId}>`);
              _push2(ssrRenderComponent(VPSwitchAppearance, null, null, _parent2, _scopeId));
              _push2(`</div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(theme2).socialLinks) {
              _push2(`<div class="group" data-v-469c69b0${_scopeId}><div class="item social-links" data-v-469c69b0${_scopeId}>`);
              _push2(ssrRenderComponent(VPSocialLinks, {
                class: "social-links-list",
                links: unref(theme2).socialLinks
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(theme2).localeLinks ? (openBlock(), createBlock("div", {
                key: 0,
                class: "group"
              }, [
                createVNode("p", { class: "trans-title" }, toDisplayString(unref(theme2).localeLinks.text), 1),
                (openBlock(true), createBlock(Fragment, null, renderList(unref(theme2).localeLinks.items, (locale) => {
                  return openBlock(), createBlock(VPMenuLink, {
                    key: locale.link,
                    item: locale
                  }, null, 8, ["item"]);
                }), 128))
              ])) : createCommentVNode("", true),
              unref(site).appearance ? (openBlock(), createBlock("div", {
                key: 1,
                class: "group"
              }, [
                createVNode("div", { class: "item appearance" }, [
                  createVNode("p", { class: "label" }, "Appearance"),
                  createVNode("div", { class: "appearance-action" }, [
                    createVNode(VPSwitchAppearance)
                  ])
                ])
              ])) : createCommentVNode("", true),
              unref(theme2).socialLinks ? (openBlock(), createBlock("div", {
                key: 2,
                class: "group"
              }, [
                createVNode("div", { class: "item social-links" }, [
                  createVNode(VPSocialLinks, {
                    class: "social-links-list",
                    links: unref(theme2).socialLinks
                  }, null, 8, ["links"])
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const VPNavBarExtra_vue_vue_type_style_index_0_scoped_469c69b0_lang = "";
const _sfc_setup$O = _sfc_main$O.setup;
_sfc_main$O.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPNavBarExtra.vue");
  return _sfc_setup$O ? _sfc_setup$O(props, ctx) : void 0;
};
const VPNavBarExtra = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["__scopeId", "data-v-469c69b0"]]);
const _sfc_main$N = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarHamburger",
  __ssrInlineRender: true,
  props: {
    active: { type: Boolean }
  },
  emits: ["click"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: "button",
        class: ["VPNavBarHamburger", { active: __props.active }],
        "aria-label": "mobile navigation",
        "aria-expanded": __props.active,
        "aria-controls": "VPNavScreen"
      }, _attrs))} data-v-3173f44a><span class="container" data-v-3173f44a><span class="top" data-v-3173f44a></span><span class="middle" data-v-3173f44a></span><span class="bottom" data-v-3173f44a></span></span></button>`);
    };
  }
});
const VPNavBarHamburger_vue_vue_type_style_index_0_scoped_3173f44a_lang = "";
const _sfc_setup$N = _sfc_main$N.setup;
_sfc_main$N.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPNavBarHamburger.vue");
  return _sfc_setup$N ? _sfc_setup$N(props, ctx) : void 0;
};
const VPNavBarHamburger = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["__scopeId", "data-v-3173f44a"]]);
const _sfc_main$M = /* @__PURE__ */ defineComponent({
  __name: "VPNavBar",
  __ssrInlineRender: true,
  props: {
    isScreenOpen: { type: Boolean }
  },
  emits: ["toggle-screen"],
  setup(__props) {
    const { hasSidebar } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPNavBar", { "has-sidebar": unref(hasSidebar) }]
      }, _attrs))} data-v-71f19ec8><div class="container" data-v-71f19ec8>`);
      _push(ssrRenderComponent(VPNavBarTitle, null, null, _parent));
      _push(`<div class="content" data-v-71f19ec8>`);
      _push(ssrRenderComponent(_sfc_main$1g, { class: "search" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarMenu, { class: "menu" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarTranslations, { class: "translations" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarAppearance, { class: "appearance" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarSocialLinks, { class: "social-links" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarExtra, { class: "extra" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarHamburger, {
        class: "hamburger",
        active: __props.isScreenOpen,
        onClick: ($event) => _ctx.$emit("toggle-screen")
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const VPNavBar_vue_vue_type_style_index_0_scoped_71f19ec8_lang = "";
const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPNavBar.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
const VPNavBar = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["__scopeId", "data-v-71f19ec8"]]);
const _sfc_main$L = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuLink",
  __ssrInlineRender: true,
  props: {
    text: null,
    link: null
  },
  setup(__props) {
    const closeScreen = inject("close-screen");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VPLink, mergeProps({
        class: "VPNavScreenMenuLink",
        href: __props.link,
        onClick: unref(closeScreen)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.text)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const VPNavScreenMenuLink_vue_vue_type_style_index_0_scoped_81e9aa33_lang = "";
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPNavScreenMenuLink.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
const VPNavScreenMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["__scopeId", "data-v-81e9aa33"]]);
const _sfc_main$K = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z"></path></svg>`);
}
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/icons/VPIconPlus.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
const VPIconPlus = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$J = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroupLink",
  __ssrInlineRender: true,
  props: {
    text: null,
    link: null
  },
  setup(__props) {
    const closeScreen = inject("close-screen");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VPLink, mergeProps({
        class: "VPNavScreenMenuGroupLink",
        href: __props.link,
        onClick: unref(closeScreen)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.text)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const VPNavScreenMenuGroupLink_vue_vue_type_style_index_0_scoped_14f08ba8_lang = "";
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPNavScreenMenuGroupLink.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
const VPNavScreenMenuGroupLink = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["__scopeId", "data-v-14f08ba8"]]);
const _sfc_main$I = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroupSection",
  __ssrInlineRender: true,
  props: {
    text: null,
    items: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPNavScreenMenuGroupSection" }, _attrs))} data-v-49f4d29a>`);
      if (__props.text) {
        _push(`<p class="title" data-v-49f4d29a>${ssrInterpolate(__props.text)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(__props.items, (item) => {
        _push(ssrRenderComponent(VPNavScreenMenuGroupLink, {
          key: item.text,
          text: item.text,
          link: item.link
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const VPNavScreenMenuGroupSection_vue_vue_type_style_index_0_scoped_49f4d29a_lang = "";
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPNavScreenMenuGroupSection.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
const VPNavScreenMenuGroupSection = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["__scopeId", "data-v-49f4d29a"]]);
const _sfc_main$H = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroup",
  __ssrInlineRender: true,
  props: {
    text: null,
    items: null
  },
  setup(__props) {
    const props = __props;
    const isOpen = ref(false);
    const groupId = computed(
      () => `NavScreenGroup-${props.text.replace(" ", "-").toLowerCase()}`
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPNavScreenMenuGroup", { open: isOpen.value }]
      }, _attrs))} data-v-f67f7c57><button class="button"${ssrRenderAttr("aria-controls", unref(groupId))}${ssrRenderAttr("aria-expanded", isOpen.value)} data-v-f67f7c57><span class="button-text" data-v-f67f7c57>${ssrInterpolate(__props.text)}</span>`);
      _push(ssrRenderComponent(VPIconPlus, { class: "button-icon" }, null, _parent));
      _push(`</button><div${ssrRenderAttr("id", unref(groupId))} class="items" data-v-f67f7c57><!--[-->`);
      ssrRenderList(__props.items, (item) => {
        _push(`<!--[-->`);
        if ("link" in item) {
          _push(`<div class="item" data-v-f67f7c57>`);
          _push(ssrRenderComponent(VPNavScreenMenuGroupLink, {
            text: item.text,
            link: item.link
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<div class="group" data-v-f67f7c57>`);
          _push(ssrRenderComponent(VPNavScreenMenuGroupSection, {
            text: item.text,
            items: item.items
          }, null, _parent));
          _push(`</div>`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const VPNavScreenMenuGroup_vue_vue_type_style_index_0_scoped_f67f7c57_lang = "";
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPNavScreenMenuGroup.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
const VPNavScreenMenuGroup = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["__scopeId", "data-v-f67f7c57"]]);
const _sfc_main$G = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).nav) {
        _push(`<nav${ssrRenderAttrs(mergeProps({ class: "VPNavScreenMenu" }, _attrs))}><!--[-->`);
        ssrRenderList(unref(theme2).nav, (item) => {
          _push(`<!--[-->`);
          if ("link" in item) {
            _push(ssrRenderComponent(VPNavScreenMenuLink, {
              text: item.text,
              link: item.link
            }, null, _parent));
          } else {
            _push(ssrRenderComponent(VPNavScreenMenuGroup, {
              text: item.text || "",
              items: item.items
            }, null, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPNavScreenMenu.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
const _sfc_main$F = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenAppearance",
  __ssrInlineRender: true,
  setup(__props) {
    const { site } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(site).appearance) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPNavScreenAppearance" }, _attrs))} data-v-7327c7e9><p class="text" data-v-7327c7e9>Appearance</p>`);
        _push(ssrRenderComponent(VPSwitchAppearance, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavScreenAppearance_vue_vue_type_style_index_0_scoped_7327c7e9_lang = "";
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPNavScreenAppearance.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
const VPNavScreenAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["__scopeId", "data-v-7327c7e9"]]);
const _sfc_main$E = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenTranslations",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    const isOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).localeLinks) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["VPNavScreenTranslations", { open: isOpen.value }]
        }, _attrs))} data-v-8ecfa666><button class="title" data-v-8ecfa666>`);
        _push(ssrRenderComponent(VPIconLanguages, { class: "icon lang" }, null, _parent));
        _push(` ${ssrInterpolate(unref(theme2).localeLinks.text)} `);
        _push(ssrRenderComponent(VPIconChevronDown, { class: "icon chevron" }, null, _parent));
        _push(`</button><ul class="list" data-v-8ecfa666><!--[-->`);
        ssrRenderList(unref(theme2).localeLinks.items, (locale) => {
          _push(`<li class="item" data-v-8ecfa666><a class="link"${ssrRenderAttr("href", locale.link)} data-v-8ecfa666>${ssrInterpolate(locale.text)}</a></li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavScreenTranslations_vue_vue_type_style_index_0_scoped_8ecfa666_lang = "";
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPNavScreenTranslations.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
const VPNavScreenTranslations = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["__scopeId", "data-v-8ecfa666"]]);
const _sfc_main$D = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenSocialLinks",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).socialLinks) {
        _push(ssrRenderComponent(VPSocialLinks, mergeProps({
          class: "VPNavScreenSocialLinks",
          links: unref(theme2).socialLinks
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPNavScreenSocialLinks.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
const _sfc_main$C = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreen",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const screen = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.open) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "VPNavScreen",
          ref_key: "screen",
          ref: screen
        }, _attrs))} data-v-7df69748><div class="container" data-v-7df69748>`);
        _push(ssrRenderComponent(_sfc_main$G, { class: "menu" }, null, _parent));
        _push(ssrRenderComponent(VPNavScreenTranslations, { class: "translations" }, null, _parent));
        _push(ssrRenderComponent(VPNavScreenAppearance, { class: "appearance" }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$D, { class: "social-links" }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavScreen_vue_vue_type_style_index_0_scoped_7df69748_lang = "";
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPNavScreen.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const VPNavScreen = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["__scopeId", "data-v-7df69748"]]);
const _sfc_main$B = /* @__PURE__ */ defineComponent({
  __name: "VPNav",
  __ssrInlineRender: true,
  setup(__props) {
    const { isScreenOpen, closeScreen, toggleScreen } = useNav();
    const { hasSidebar } = useSidebar();
    provide("close-screen", closeScreen);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: ["VPNav", { "no-sidebar": !unref(hasSidebar) }]
      }, _attrs))} data-v-461425e6>`);
      _push(ssrRenderComponent(VPNavBar, {
        "is-screen-open": unref(isScreenOpen),
        onToggleScreen: unref(toggleScreen)
      }, null, _parent));
      _push(ssrRenderComponent(VPNavScreen, { open: unref(isScreenOpen) }, null, _parent));
      _push(`</header>`);
    };
  }
});
const VPNav_vue_vue_type_style_index_0_scoped_461425e6_lang = "";
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPNav.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const VPNav = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["__scopeId", "data-v-461425e6"]]);
const _sfc_main$A = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z"></path><path d="M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z"></path><path d="M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z"></path><path d="M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z"></path></svg>`);
}
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/icons/VPIconAlignLeft.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const VPIconAlignLeft = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$z = /* @__PURE__ */ defineComponent({
  __name: "VPLocalNav",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean }
  },
  emits: ["open-menu"],
  setup(__props) {
    const { hasSidebar } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(hasSidebar)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPLocalNav" }, _attrs))} data-v-aa0e63d4><button class="menu"${ssrRenderAttr("aria-expanded", __props.open)} aria-controls="VPSidebarNav" data-v-aa0e63d4>`);
        _push(ssrRenderComponent(VPIconAlignLeft, { class: "menu-icon" }, null, _parent));
        _push(`<span class="menu-text" data-v-aa0e63d4>Menu</span></button><a class="top-link" href="#" data-v-aa0e63d4> Return to top </a></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPLocalNav_vue_vue_type_style_index_0_scoped_aa0e63d4_lang = "";
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPLocalNav.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const VPLocalNav = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["__scopeId", "data-v-aa0e63d4"]]);
const _sfc_main$y = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M19,2H5C3.3,2,2,3.3,2,5v14c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3V5C22,3.3,20.7,2,19,2z M20,19c0,0.6-0.4,1-1,1H5c-0.6,0-1-0.4-1-1V5c0-0.6,0.4-1,1-1h14c0.6,0,1,0.4,1,1V19z"></path><path d="M16,11h-3V8c0-0.6-0.4-1-1-1s-1,0.4-1,1v3H8c-0.6,0-1,0.4-1,1s0.4,1,1,1h3v3c0,0.6,0.4,1,1,1s1-0.4,1-1v-3h3c0.6,0,1-0.4,1-1S16.6,11,16,11z"></path></svg>`);
}
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/icons/VPIconPlusSquare.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const VPIconPlusSquare = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$x = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M19,2H5C3.3,2,2,3.3,2,5v14c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3V5C22,3.3,20.7,2,19,2zM20,19c0,0.6-0.4,1-1,1H5c-0.6,0-1-0.4-1-1V5c0-0.6,0.4-1,1-1h14c0.6,0,1,0.4,1,1V19z"></path><path d="M16,11H8c-0.6,0-1,0.4-1,1s0.4,1,1,1h8c0.6,0,1-0.4,1-1S16.6,11,16,11z"></path></svg>`);
}
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/icons/VPIconMinusSquare.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const VPIconMinusSquare = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$w = /* @__PURE__ */ defineComponent({
  __name: "VPSidebarLink",
  __ssrInlineRender: true,
  props: {
    item: null
  },
  setup(__props) {
    const { page } = useData();
    const closeSideBar = inject("close-sidebar");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VPLink, mergeProps({
        class: { active: unref(isActive)(unref(page).relativePath, __props.item.link) },
        href: __props.item.link,
        onClick: unref(closeSideBar)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="link-text" data-v-74419bfe${_scopeId}>${ssrInterpolate(__props.item.text)}</span>`);
          } else {
            return [
              createVNode("span", { class: "link-text" }, toDisplayString(__props.item.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const VPSidebarLink_vue_vue_type_style_index_0_scoped_74419bfe_lang = "";
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPSidebarLink.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const VPSidebarLink = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["__scopeId", "data-v-74419bfe"]]);
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  __name: "VPSidebarGroup",
  __ssrInlineRender: true,
  props: {
    text: null,
    items: null,
    collapsible: { type: Boolean },
    collapsed: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const collapsed = ref(false);
    watchEffect(() => {
      collapsed.value = !!(props.collapsible && props.collapsed);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: ["VPSidebarGroup", { collapsible: __props.collapsible, collapsed: collapsed.value }]
      }, _attrs))} data-v-c870be2d>`);
      if (__props.text) {
        _push(`<div class="title"${ssrRenderAttr("role", __props.collapsible ? "button" : void 0)} data-v-c870be2d><h2 class="title-text" data-v-c870be2d>${ssrInterpolate(__props.text)}</h2><div class="action" data-v-c870be2d>`);
        _push(ssrRenderComponent(VPIconMinusSquare, { class: "icon minus" }, null, _parent));
        _push(ssrRenderComponent(VPIconPlusSquare, { class: "icon plus" }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="items" data-v-c870be2d><!--[-->`);
      ssrRenderList(__props.items, (item) => {
        _push(ssrRenderComponent(VPSidebarLink, { item }, null, _parent));
      });
      _push(`<!--]--></div></section>`);
    };
  }
});
const VPSidebarGroup_vue_vue_type_style_index_0_scoped_c870be2d_lang = "";
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPSidebarGroup.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const VPSidebarGroup = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["__scopeId", "data-v-c870be2d"]]);
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  __name: "VPSidebar",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const { sidebar, hasSidebar } = useSidebar();
    let navEl = ref(null);
    watchPostEffect(async () => {
      var _a;
      if (props.open) {
        await nextTick();
        (_a = navEl.value) == null ? void 0 : _a.focus();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(hasSidebar)) {
        _push(`<aside${ssrRenderAttrs(mergeProps({
          class: ["VPSidebar", { open: __props.open }],
          ref_key: "navEl",
          ref: navEl
        }, _attrs))} data-v-c1056ac5><nav class="nav" id="VPSidebarNav" aria-labelledby="sidebar-aria-label" tabindex="-1" data-v-c1056ac5><span class="visually-hidden" id="sidebar-aria-label" data-v-c1056ac5> Sidebar Navigation </span><!--[-->`);
        ssrRenderList(unref(sidebar), (group) => {
          _push(`<div class="group" data-v-c1056ac5>`);
          _push(ssrRenderComponent(VPSidebarGroup, {
            text: group.text,
            items: group.items,
            collapsible: group.collapsible,
            collapsed: group.collapsed
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></nav></aside>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPSidebar_vue_vue_type_style_index_0_scoped_c1056ac5_lang = "";
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPSidebar.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const VPSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__scopeId", "data-v-c1056ac5"]]);
function useCopyCode$1() {
  const { page } = useData();
  if (inBrowser$1)
    watch(() => page.value.relativePath, () => {
      nextTick(() => {
        document.querySelectorAll('.vp-doc div[class*="language-"]>span.copy').forEach(handleElement);
      });
    }, { immediate: true, flush: "post" });
}
async function copyToClipboard$1(text) {
  try {
    return navigator.clipboard.writeText(text);
  } catch {
    const element = document.createElement("textarea");
    const previouslyFocusedElement = document.activeElement;
    element.value = text;
    element.setAttribute("readonly", "");
    element.style.contain = "strict";
    element.style.position = "absolute";
    element.style.left = "-9999px";
    element.style.fontSize = "12pt";
    const selection = document.getSelection();
    const originalRange = selection ? selection.rangeCount > 0 && selection.getRangeAt(0) : null;
    document.body.appendChild(element);
    element.select();
    element.selectionStart = 0;
    element.selectionEnd = text.length;
    document.execCommand("copy");
    document.body.removeChild(element);
    if (originalRange) {
      selection.removeAllRanges();
      selection.addRange(originalRange);
    }
    if (previouslyFocusedElement) {
      previouslyFocusedElement.focus();
    }
  }
}
function handleElement(el) {
  el.onclick = () => {
    const parent = el.parentElement;
    if (!parent) {
      return;
    }
    const isShell = parent.classList.contains("language-sh") || parent.classList.contains("language-bash");
    let { innerText: text = "" } = parent;
    if (isShell) {
      text = text.replace(/^ *\$ /gm, "");
    }
    copyToClipboard$1(text).then(() => {
      el.classList.add("copied");
      setTimeout(() => {
        el.classList.remove("copied");
      }, 3e3);
    });
  };
}
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  __name: "NotFound",
  __ssrInlineRender: true,
  setup(__props) {
    const { site } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "NotFound" }, _attrs))} data-v-82fed80a><p class="code" data-v-82fed80a>404</p><h1 class="title" data-v-82fed80a>PAGE NOT FOUND</h1><div class="divider" data-v-82fed80a></div><blockquote class="quote" data-v-82fed80a> But if you don&#39;t change your direction, and if you keep looking, you may end up where you are heading. </blockquote><div class="action" data-v-82fed80a><a class="link"${ssrRenderAttr("href", unref(site).base)} aria-label="go to home" data-v-82fed80a> Take me home </a></div></div>`);
    };
  }
});
const NotFound_vue_vue_type_style_index_0_scoped_82fed80a_lang = "";
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/NotFound.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const NotFound$1 = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__scopeId", "data-v-82fed80a"]]);
const _sfc_main$s = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_Content = resolveComponent("Content");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPPage" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Content, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPPage.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const VPPage = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "VPButton",
  __ssrInlineRender: true,
  props: {
    tag: null,
    size: null,
    theme: null,
    text: null,
    href: null
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => [
      props.size ?? "medium",
      props.theme ?? "brand"
    ]);
    const isExternal2 = computed(() => props.href && /^[a-z]+:/i.test(props.href));
    const component = computed(() => {
      if (props.tag) {
        return props.tag;
      }
      return props.href ? "a" : "button";
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(component)), mergeProps({
        class: ["VPButton", unref(classes)],
        href: __props.href ? unref(withBase)(__props.href) : void 0,
        target: unref(isExternal2) ? "_blank" : void 0,
        rel: unref(isExternal2) ? "noopener noreferrer" : void 0
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.text)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.text), 1)
            ];
          }
        }),
        _: 1
      }), _parent);
    };
  }
});
const VPButton_vue_vue_type_style_index_0_scoped_8c890be5_lang = "";
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPButton.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const VPButton = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__scopeId", "data-v-8c890be5"]]);
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "VPHero",
  __ssrInlineRender: true,
  props: {
    name: null,
    text: null,
    tagline: null,
    image: null,
    actions: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPHero", { "has-image": __props.image }]
      }, _attrs))} data-v-4c9fdded><div class="container" data-v-4c9fdded><div class="main" data-v-4c9fdded>`);
      if (__props.name) {
        _push(`<h1 class="name" data-v-4c9fdded><span class="clip" data-v-4c9fdded>${ssrInterpolate(__props.name)}</span></h1>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.text) {
        _push(`<p class="text" data-v-4c9fdded>${ssrInterpolate(__props.text)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.tagline) {
        _push(`<p class="tagline" data-v-4c9fdded>${ssrInterpolate(__props.tagline)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.actions) {
        _push(`<div class="actions" data-v-4c9fdded><!--[-->`);
        ssrRenderList(__props.actions, (action) => {
          _push(`<div class="action" data-v-4c9fdded>`);
          _push(ssrRenderComponent(VPButton, {
            tag: "a",
            size: "medium",
            theme: action.theme,
            text: action.text,
            href: action.link
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (__props.image) {
        _push(`<div class="image" data-v-4c9fdded><div class="image-container" data-v-4c9fdded><div class="image-bg" data-v-4c9fdded></div>`);
        _push(ssrRenderComponent(VPImage, {
          class: "image-src",
          image: __props.image
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const VPHero_vue_vue_type_style_index_0_scoped_4c9fdded_lang = "";
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPHero.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const VPHero = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__scopeId", "data-v-4c9fdded"]]);
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "VPHomeHero",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter: fm } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(fm).hero) {
        _push(ssrRenderComponent(VPHero, mergeProps({
          class: "VPHomeHero",
          name: unref(fm).hero.name,
          text: unref(fm).hero.text,
          tagline: unref(fm).hero.tagline,
          image: unref(fm).hero.image,
          actions: unref(fm).hero.actions
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPHomeHero.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "VPFeature",
  __ssrInlineRender: true,
  props: {
    icon: null,
    title: null,
    details: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "VPFeature" }, _attrs))} data-v-8620384d>`);
      if (__props.icon) {
        _push(`<div class="icon" data-v-8620384d>${ssrInterpolate(__props.icon)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h2 class="title" data-v-8620384d>${ssrInterpolate(__props.title)}</h2><p class="details" data-v-8620384d>${ssrInterpolate(__props.details)}</p></article>`);
    };
  }
});
const VPFeature_vue_vue_type_style_index_0_scoped_8620384d_lang = "";
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPFeature.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const VPFeature = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__scopeId", "data-v-8620384d"]]);
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "VPFeatures",
  __ssrInlineRender: true,
  props: {
    features: null
  },
  setup(__props) {
    const props = __props;
    const grid = computed(() => {
      const length = props.features.length;
      if (!length) {
        return;
      } else if (length === 2) {
        return "grid-2";
      } else if (length === 3) {
        return "grid-3";
      } else if (length % 3 === 0) {
        return "grid-6";
      } else if (length % 2 === 0) {
        return "grid-4";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.features) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPFeatures" }, _attrs))} data-v-2d93c1ee><div class="container" data-v-2d93c1ee><div class="items" data-v-2d93c1ee><!--[-->`);
        ssrRenderList(__props.features, (feature) => {
          _push(`<div class="${ssrRenderClass([[unref(grid)], "item"])}" data-v-2d93c1ee>`);
          _push(ssrRenderComponent(VPFeature, {
            icon: feature.icon,
            title: feature.title,
            details: feature.details
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPFeatures_vue_vue_type_style_index_0_scoped_2d93c1ee_lang = "";
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPFeatures.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const VPFeatures = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-2d93c1ee"]]);
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "VPHomeFeatures",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter: fm } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(fm).features) {
        _push(ssrRenderComponent(VPFeatures, mergeProps({
          class: "VPHomeFeatures",
          features: unref(fm).features
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPHomeFeatures.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "VPHome",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = resolveComponent("Content");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPHome" }, _attrs))} data-v-5e8e1e17>`);
      ssrRenderSlot(_ctx.$slots, "home-hero-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$p, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "home-hero-after", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "home-features-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$m, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "home-features-after", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_Content, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const VPHome_vue_vue_type_style_index_0_scoped_5e8e1e17_lang = "";
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPHome.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const VPHome = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-5e8e1e17"]]);
function useAside() {
  const { hasSidebar } = useSidebar();
  const is960 = useMediaQuery("(min-width: 960px)");
  const is1280 = useMediaQuery("(min-width: 1280px)");
  const isAsideEnabled = computed(() => {
    if (!is1280.value && !is960.value) {
      return false;
    }
    return hasSidebar.value ? is1280.value : is960.value;
  });
  return {
    isAsideEnabled
  };
}
const PAGE_OFFSET = 56;
function useOutline() {
  const { page } = useData();
  const hasOutline = computed(() => {
    return page.value.headers.length > 0;
  });
  return {
    hasOutline
  };
}
function resolveHeaders(headers) {
  return mapHeaders(groupHeaders(headers));
}
function groupHeaders(headers) {
  headers = headers.map((h2) => Object.assign({}, h2));
  let lastH2;
  for (const h2 of headers) {
    if (h2.level === 2) {
      lastH2 = h2;
    } else if (lastH2 && h2.level <= 3) {
      (lastH2.children || (lastH2.children = [])).push(h2);
    }
  }
  return headers.filter((h2) => h2.level === 2);
}
function mapHeaders(headers) {
  return headers.map((header) => ({
    text: header.title,
    link: `#${header.slug}`,
    children: header.children ? mapHeaders(header.children) : void 0,
    hidden: header.hidden
  }));
}
function useActiveAnchor(container, marker) {
  const { isAsideEnabled } = useAside();
  const onScroll = throttleAndDebounce(setActiveLink, 100);
  let prevActiveLink = null;
  onMounted(() => {
    requestAnimationFrame(setActiveLink);
    window.addEventListener("scroll", onScroll);
  });
  onUpdated(() => {
    activateLink(location.hash);
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
  });
  function setActiveLink() {
    if (!isAsideEnabled.value) {
      return;
    }
    const links = [].slice.call(container.value.querySelectorAll(".outline-link"));
    const anchors = [].slice.call(document.querySelectorAll(".content .header-anchor")).filter((anchor) => {
      return links.some((link2) => {
        return link2.hash === anchor.hash && anchor.offsetParent !== null;
      });
    });
    const scrollY = window.scrollY;
    const innerHeight = window.innerHeight;
    const offsetHeight = document.body.offsetHeight;
    const isBottom = scrollY + innerHeight === offsetHeight;
    if (anchors.length && isBottom) {
      activateLink(anchors[anchors.length - 1].hash);
      return;
    }
    for (let i = 0; i < anchors.length; i++) {
      const anchor = anchors[i];
      const nextAnchor = anchors[i + 1];
      const [isActive2, hash] = isAnchorActive(i, anchor, nextAnchor);
      if (isActive2) {
        history.replaceState(null, document.title, hash ? hash : " ");
        activateLink(hash);
        return;
      }
    }
  }
  function activateLink(hash) {
    if (prevActiveLink) {
      prevActiveLink.classList.remove("active");
    }
    if (hash !== null) {
      prevActiveLink = container.value.querySelector(`a[href="${decodeURIComponent(hash)}"]`);
    }
    const activeLink = prevActiveLink;
    if (activeLink) {
      activeLink.classList.add("active");
      marker.value.style.top = activeLink.offsetTop + 33 + "px";
      marker.value.style.opacity = "1";
    } else {
      marker.value.style.top = "33px";
      marker.value.style.opacity = "0";
    }
  }
}
function getAnchorTop(anchor) {
  return anchor.parentElement.offsetTop - PAGE_OFFSET - 15;
}
function isAnchorActive(index2, anchor, nextAnchor) {
  const scrollTop = window.scrollY;
  if (index2 === 0 && scrollTop === 0) {
    return [true, null];
  }
  if (scrollTop < getAnchorTop(anchor)) {
    return [false, null];
  }
  if (!nextAnchor || scrollTop < getAnchorTop(nextAnchor)) {
    return [true, anchor.hash];
  }
  return [false, null];
}
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideOutline",
  __ssrInlineRender: true,
  setup(__props) {
    const { page, frontmatter, theme: theme2 } = useData();
    const { hasOutline } = useOutline();
    const container = ref();
    const marker = ref();
    useActiveAnchor(container, marker);
    const resolvedHeaders = computed(() => {
      return resolveHeaders(page.value.headers);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPDocAsideOutline", { "has-outline": unref(hasOutline) }],
        ref_key: "container",
        ref: container
      }, _attrs))} data-v-0a3228a2><div class="content" data-v-0a3228a2><div class="outline-marker" data-v-0a3228a2></div><div class="outline-title" data-v-0a3228a2>${ssrInterpolate(unref(theme2).outlineTitle || "On this page")}</div><nav aria-labelledby="doc-outline-aria-label" data-v-0a3228a2><span class="visually-hidden" id="doc-outline-aria-label" data-v-0a3228a2> Table of Contents for current page </span><ul class="root" data-v-0a3228a2><!--[-->`);
      ssrRenderList(unref(resolvedHeaders), ({ text, link: link2, children, hidden }) => {
        _push(`<li style="${ssrRenderStyle(!hidden ? null : { display: "none" })}" data-v-0a3228a2><a class="outline-link"${ssrRenderAttr("href", link2)} data-v-0a3228a2>${ssrInterpolate(text)}</a>`);
        if (children && unref(frontmatter).outline === "deep") {
          _push(`<ul data-v-0a3228a2><!--[-->`);
          ssrRenderList(children, ({ text: text2, link: link22, hidden: hidden2 }) => {
            _push(`<li style="${ssrRenderStyle(!hidden2 ? null : { display: "none" })}" data-v-0a3228a2><a class="outline-link nested"${ssrRenderAttr("href", link22)} data-v-0a3228a2>${ssrInterpolate(text2)}</a></li>`);
          });
          _push(`<!--]--></ul>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul></nav></div></div>`);
    };
  }
});
const VPDocAsideOutline_vue_vue_type_style_index_0_scoped_0a3228a2_lang = "";
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPDocAsideOutline.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const VPDocAsideOutline = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-0a3228a2"]]);
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideCarbonAds",
  __ssrInlineRender: true,
  setup(__props) {
    const VPCarbonAds = () => null;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPDocAsideCarbonAds" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(VPCarbonAds), null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPDocAsideCarbonAds.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "VPDocAside",
  __ssrInlineRender: true,
  setup(__props) {
    const { page, theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPDocAside" }, _attrs))} data-v-72c2a845>`);
      ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push, _parent);
      if (unref(page).headers.length) {
        _push(ssrRenderComponent(VPDocAsideOutline, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push, _parent);
      _push(`<div class="spacer" data-v-72c2a845></div>`);
      ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push, _parent);
      if (unref(theme2).carbonAds) {
        _push(ssrRenderComponent(_sfc_main$j, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const VPDocAside_vue_vue_type_style_index_0_scoped_72c2a845_lang = "";
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPDocAside.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const VPDocAside = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-72c2a845"]]);
function useEditLink() {
  const { theme: theme2, page } = useData();
  return computed(() => {
    const { text = "Edit this page", pattern } = theme2.value.editLink || {};
    const { relativePath } = page.value;
    const url = pattern.replace(/:path/g, relativePath);
    return { url, text };
  });
}
function usePrevNext() {
  const { page, theme: theme2 } = useData();
  return computed(() => {
    const sidebar = getSidebar(theme2.value.sidebar, page.value.relativePath);
    const candidates = getFlatSideBarLinks(sidebar);
    const index2 = candidates.findIndex((link2) => {
      return isActive(page.value.relativePath, link2.link);
    });
    return {
      prev: candidates[index2 - 1],
      next: candidates[index2 + 1]
    };
  });
}
const _sfc_main$h = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M18,23H4c-1.7,0-3-1.3-3-3V6c0-1.7,1.3-3,3-3h7c0.6,0,1,0.4,1,1s-0.4,1-1,1H4C3.4,5,3,5.4,3,6v14c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-7c0-0.6,0.4-1,1-1s1,0.4,1,1v7C21,21.7,19.7,23,18,23z"></path><path d="M8,17c-0.3,0-0.5-0.1-0.7-0.3C7,16.5,6.9,16.1,7,15.8l1-4c0-0.2,0.1-0.3,0.3-0.5l9.5-9.5c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-9.5,9.5c-0.1,0.1-0.3,0.2-0.5,0.3l-4,1C8.2,17,8.1,17,8,17zM9.9,12.5l-0.5,2.1l2.1-0.5l9.3-9.3c0.4-0.4,0.4-1.1,0-1.6c-0.4-0.4-1.2-0.4-1.6,0l0,0L9.9,12.5z M18.5,2.5L18.5,2.5L18.5,2.5z"></path></svg>`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/icons/VPIconEdit.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const VPIconEdit = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "VPDocFooterLastUpdated",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2, page } = useData();
    const date = new Date(page.value.lastUpdated);
    const isoDatetime = date.toISOString();
    const datetime = ref("");
    onMounted(() => {
      watchEffect(() => {
        datetime.value = date.toLocaleString(window.navigator.language);
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<p${ssrRenderAttrs(mergeProps({ class: "VPLastUpdated" }, _attrs))} data-v-5ff67119>${ssrInterpolate(unref(theme2).lastUpdatedText ?? "Last updated")}: <time${ssrRenderAttr("datatime", unref(isoDatetime))} data-v-5ff67119>${ssrInterpolate(datetime.value)}</time></p>`);
    };
  }
});
const VPDocFooterLastUpdated_vue_vue_type_style_index_0_scoped_5ff67119_lang = "";
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPDocFooterLastUpdated.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const VPDocFooterLastUpdated = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-5ff67119"]]);
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "VPDocFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2, page, frontmatter } = useData();
    const editLink = useEditLink();
    const control = usePrevNext();
    const hasLastUpdated = computed(() => {
      return page.value.lastUpdated && frontmatter.value.lastUpdated !== false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "VPDocFooter" }, _attrs))} data-v-7f8655b6><div class="edit-info" data-v-7f8655b6>`);
      if (unref(theme2).editLink && unref(frontmatter).editLink !== false) {
        _push(`<div class="edit-link" data-v-7f8655b6>`);
        _push(ssrRenderComponent(VPLink, {
          class: "edit-link-button",
          href: unref(editLink).url,
          "no-icon": true
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VPIconEdit, { class: "edit-link-icon" }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(unref(editLink).text)}`);
            } else {
              return [
                createVNode(VPIconEdit, { class: "edit-link-icon" }),
                createTextVNode(" " + toDisplayString(unref(editLink).text), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(hasLastUpdated)) {
        _push(`<div class="last-updated" data-v-7f8655b6>`);
        _push(ssrRenderComponent(VPDocFooterLastUpdated, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (unref(control).prev || unref(control).next) {
        _push(`<div class="prev-next" data-v-7f8655b6><div class="pager" data-v-7f8655b6>`);
        if (unref(control).prev) {
          _push(`<a class="pager-link prev"${ssrRenderAttr("href", unref(normalizeLink)(unref(control).prev.link))} data-v-7f8655b6><span class="desc" data-v-7f8655b6>Previous page</span><span class="title" data-v-7f8655b6>${ssrInterpolate(unref(control).prev.text)}</span></a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="${ssrRenderClass([{ "has-prev": unref(control).prev }, "pager"])}" data-v-7f8655b6>`);
        if (unref(control).next) {
          _push(`<a class="pager-link next"${ssrRenderAttr("href", unref(normalizeLink)(unref(control).next.link))} data-v-7f8655b6><span class="desc" data-v-7f8655b6>Next page</span><span class="title" data-v-7f8655b6>${ssrInterpolate(unref(control).next.text)}</span></a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</footer>`);
    };
  }
});
const VPDocFooter_vue_vue_type_style_index_0_scoped_7f8655b6_lang = "";
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPDocFooter.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const VPDocFooter = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-7f8655b6"]]);
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "VPDoc",
  __ssrInlineRender: true,
  setup(__props) {
    const { path } = useRoute();
    const { hasSidebar } = useSidebar();
    const pageName = path.replace(/[./]+/g, "_").replace(/_html$/, "");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = resolveComponent("Content");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPDoc", { "has-sidebar": unref(hasSidebar) }]
      }, _attrs))} data-v-d8aba4c8><div class="container" data-v-d8aba4c8><div class="aside" data-v-d8aba4c8><div class="aside-curtain" data-v-d8aba4c8></div><div class="aside-container" data-v-d8aba4c8><div class="aside-content" data-v-d8aba4c8>`);
      _push(ssrRenderComponent(VPDocAside, null, {
        "aside-top": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
            ];
          }
        }),
        "aside-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
            ];
          }
        }),
        "aside-outline-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
            ];
          }
        }),
        "aside-outline-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
            ];
          }
        }),
        "aside-ads-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
            ];
          }
        }),
        "aside-ads-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div></div></div><div class="content" data-v-d8aba4c8><div class="content-container" data-v-d8aba4c8>`);
      ssrRenderSlot(_ctx.$slots, "doc-before", {}, null, _push, _parent);
      _push(`<main class="main" data-v-d8aba4c8>`);
      _push(ssrRenderComponent(_component_Content, {
        class: ["vp-doc", unref(pageName)]
      }, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(VPDocFooter, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "doc-after", {}, null, _push, _parent);
      _push(`</div></div></div></div>`);
    };
  }
});
const VPDoc_vue_vue_type_style_index_0_scoped_d8aba4c8_lang = "";
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPDoc.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const VPDoc = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-d8aba4c8"]]);
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "VPContent",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { frontmatter } = useData();
    const { hasSidebar } = useSidebar();
    useCopyCode$1();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPContent", {
          "has-sidebar": unref(hasSidebar),
          "is-home": unref(frontmatter).layout === "home"
        }],
        id: "VPContent"
      }, _attrs))} data-v-b97b5181>`);
      if (unref(route).component === NotFound$1) {
        _push(ssrRenderComponent(NotFound$1, null, null, _parent));
      } else if (unref(frontmatter).layout === "page") {
        _push(ssrRenderComponent(VPPage, null, null, _parent));
      } else if (unref(frontmatter).layout === "home") {
        _push(ssrRenderComponent(VPHome, null, {
          "home-hero-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-before", {}, void 0, true)
              ];
            }
          }),
          "home-hero-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-after", {}, void 0, true)
              ];
            }
          }),
          "home-features-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-features-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-features-before", {}, void 0, true)
              ];
            }
          }),
          "home-features-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-features-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-features-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(ssrRenderComponent(VPDoc, null, {
          "doc-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-before", {}, void 0, true)
              ];
            }
          }),
          "doc-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-after", {}, void 0, true)
              ];
            }
          }),
          "aside-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
              ];
            }
          }),
          "aside-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
      }
      _push(`</div>`);
    };
  }
});
const VPContent_vue_vue_type_style_index_0_scoped_b97b5181_lang = "";
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPContent.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const VPContent = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-b97b5181"]]);
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "VPFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    const { hasSidebar } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).footer) {
        _push(`<footer${ssrRenderAttrs(mergeProps({
          class: ["VPFooter", { "has-sidebar": unref(hasSidebar) }]
        }, _attrs))} data-v-947b1f9a><div class="container" data-v-947b1f9a><p class="message" data-v-947b1f9a>${ssrInterpolate(unref(theme2).footer.message)}</p><p class="copyright" data-v-947b1f9a>${ssrInterpolate(unref(theme2).footer.copyright)}</p></div></footer>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPFooter_vue_vue_type_style_index_0_scoped_947b1f9a_lang = "";
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPFooter.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const VPFooter = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-947b1f9a"]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "Layout",
  __ssrInlineRender: true,
  setup(__props) {
    const { isOpen: isSidebarOpen, open: openSidebar, close: closeSidebar } = useSidebar();
    useCloseSidebarOnEscape(isSidebarOpen, closeSidebar);
    provide("close-sidebar", closeSidebar);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "Layout" }, _attrs))} data-v-2682923f>`);
      ssrRenderSlot(_ctx.$slots, "layout-top", {}, null, _push, _parent);
      _push(ssrRenderComponent(VPSkipLink, null, null, _parent));
      _push(ssrRenderComponent(VPBackdrop, {
        class: "backdrop",
        show: unref(isSidebarOpen),
        onClick: unref(closeSidebar)
      }, null, _parent));
      _push(ssrRenderComponent(VPNav, null, null, _parent));
      _push(ssrRenderComponent(VPLocalNav, {
        open: unref(isSidebarOpen),
        onOpenMenu: unref(openSidebar)
      }, null, _parent));
      _push(ssrRenderComponent(VPSidebar, { open: unref(isSidebarOpen) }, null, _parent));
      _push(ssrRenderComponent(VPContent, null, {
        "home-hero-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "home-hero-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "home-hero-before", {}, void 0, true)
            ];
          }
        }),
        "home-hero-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "home-hero-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "home-hero-after", {}, void 0, true)
            ];
          }
        }),
        "home-features-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "home-features-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "home-features-before", {}, void 0, true)
            ];
          }
        }),
        "home-features-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "home-features-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "home-features-after", {}, void 0, true)
            ];
          }
        }),
        "doc-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "doc-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "doc-before", {}, void 0, true)
            ];
          }
        }),
        "doc-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "doc-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "doc-after", {}, void 0, true)
            ];
          }
        }),
        "aside-top": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
            ];
          }
        }),
        "aside-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
            ];
          }
        }),
        "aside-outline-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
            ];
          }
        }),
        "aside-outline-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
            ];
          }
        }),
        "aside-ads-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
            ];
          }
        }),
        "aside-ads-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(VPFooter, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "layout-bottom", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const Layout_vue_vue_type_style_index_0_scoped_2682923f_lang = "";
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/Layout.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const Layout$1 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-2682923f"]]);
const _sfc_main$a = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M12,22.2c-0.3,0-0.5-0.1-0.7-0.3l-8.8-8.8c-2.5-2.5-2.5-6.7,0-9.2c2.5-2.5,6.7-2.5,9.2,0L12,4.3l0.4-0.4c0,0,0,0,0,0C13.6,2.7,15.2,2,16.9,2c0,0,0,0,0,0c1.7,0,3.4,0.7,4.6,1.9l0,0c1.2,1.2,1.9,2.9,1.9,4.6c0,1.7-0.7,3.4-1.9,4.6l-8.8,8.8C12.5,22.1,12.3,22.2,12,22.2zM7,4C5.9,4,4.7,4.4,3.9,5.3c-1.8,1.8-1.8,4.6,0,6.4l8.1,8.1l8.1-8.1c0.9-0.9,1.3-2,1.3-3.2c0-1.2-0.5-2.3-1.3-3.2l0,0C19.3,4.5,18.2,4,17,4c0,0,0,0,0,0c-1.2,0-2.3,0.5-3.2,1.3c0,0,0,0,0,0l-1.1,1.1c-0.4,0.4-1,0.4-1.4,0l-1.1-1.1C9.4,4.4,8.2,4,7,4z"></path></svg>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/icons/VPIconHeart.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const VPIconHeart = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender]]);
const GridSettings = {
  xmini: [[0, 2]],
  mini: [],
  small: [
    [920, 6],
    [768, 5],
    [640, 4],
    [480, 3],
    [0, 2]
  ],
  medium: [
    [960, 5],
    [832, 4],
    [640, 3],
    [480, 2]
  ],
  big: [
    [832, 3],
    [640, 2]
  ]
};
function useSponsorsGrid({ el, size = "medium" }) {
  const onResize = throttleAndDebounce(manage, 100);
  onMounted(() => {
    manage();
    window.addEventListener("resize", onResize);
  });
  onUnmounted(() => {
    window.removeEventListener("resize", onResize);
  });
  function manage() {
    adjustSlots(el.value, size);
  }
}
function adjustSlots(el, size) {
  const tsize = el.children.length;
  const asize = el.querySelectorAll(".vp-sponsor-grid-item:not(.empty)").length;
  const grid = setGrid(el, size, asize);
  manageSlots(el, grid, tsize, asize);
}
function setGrid(el, size, items) {
  const settings = GridSettings[size];
  const screen = window.innerWidth;
  let grid = 1;
  settings.some(([breakpoint, value]) => {
    if (screen >= breakpoint) {
      grid = items < value ? items : value;
      return true;
    }
  });
  setGridData(el, grid);
  return grid;
}
function setGridData(el, value) {
  el.dataset.vpGrid = String(value);
}
function manageSlots(el, grid, tsize, asize) {
  const diff = tsize - asize;
  const rem = asize % grid;
  const drem = rem === 0 ? rem : grid - rem;
  neutralizeSlots(el, drem - diff);
}
function neutralizeSlots(el, count) {
  if (count === 0) {
    return;
  }
  count > 0 ? addSlots(el, count) : removeSlots(el, count * -1);
}
function addSlots(el, count) {
  for (let i = 0; i < count; i++) {
    const slot = document.createElement("div");
    slot.classList.add("vp-sponsor-grid-item", "empty");
    el.append(slot);
  }
}
function removeSlots(el, count) {
  for (let i = 0; i < count; i++) {
    el.removeChild(el.lastElementChild);
  }
}
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "VPSponsorsGrid",
  __ssrInlineRender: true,
  props: {
    size: null,
    data: null
  },
  setup(__props) {
    const props = __props;
    const el = ref(null);
    useSponsorsGrid({ el, size: props.size });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPSponsorsGrid vp-sponsor-grid", [props.size ?? "medium"]],
        ref_key: "el",
        ref: el
      }, _attrs))}><!--[-->`);
      ssrRenderList(__props.data, (sponsor) => {
        _push(`<div class="vp-sponsor-grid-item"><a class="vp-sponsor-grid-link"${ssrRenderAttr("href", sponsor.url)} target="_blank" rel="sponsored noopener"><article class="vp-sponsor-grid-box"><h4 class="visually-hidden">${ssrInterpolate(sponsor.name)}</h4><img class="vp-sponsor-grid-image"${ssrRenderAttr("src", sponsor.img)}${ssrRenderAttr("alt", sponsor.name)}></article></a></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPSponsorsGrid.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "VPSponsors",
  __ssrInlineRender: true,
  props: {
    mode: null,
    tier: null,
    size: null,
    data: null
  },
  setup(__props) {
    const props = __props;
    const sponsors = computed(() => {
      const isSponsors = props.data.some((s) => {
        return !!s.items;
      });
      if (isSponsors) {
        return props.data;
      }
      return [{
        tier: props.tier,
        size: props.size,
        items: props.data
      }];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPSponsors vp-sponsor", [__props.mode ?? "normal"]]
      }, _attrs))}><!--[-->`);
      ssrRenderList(unref(sponsors), (sponsor, index2) => {
        _push(`<section class="vp-sponsor-section">`);
        if (sponsor.tier) {
          _push(`<h3 class="vp-sponsor-tier">${ssrInterpolate(sponsor.tier)}</h3>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_sfc_main$9, {
          size: sponsor.size,
          data: sponsor.items
        }, null, _parent));
        _push(`</section>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPSponsors.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "VPHomeSponsors",
  __ssrInlineRender: true,
  props: {
    message: null,
    actionText: null,
    actionLink: null,
    data: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "VPHomeSponsors" }, _attrs))} data-v-5a57cc41><div class="container" data-v-5a57cc41><div class="header" data-v-5a57cc41><div class="love" data-v-5a57cc41>`);
      _push(ssrRenderComponent(VPIconHeart, { class: "icon" }, null, _parent));
      _push(`</div>`);
      if (__props.message) {
        _push(`<h2 class="message" data-v-5a57cc41>${ssrInterpolate(__props.message)}</h2>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="sponsors" data-v-5a57cc41>`);
      _push(ssrRenderComponent(_sfc_main$8, { data: __props.data }, null, _parent));
      _push(`</div>`);
      if (__props.actionLink) {
        _push(`<div class="action" data-v-5a57cc41>`);
        _push(ssrRenderComponent(VPButton, {
          theme: "sponsor",
          text: __props.actionText ?? "Become a sponsor",
          href: __props.actionLink
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
});
const VPHomeSponsors_vue_vue_type_style_index_0_scoped_5a57cc41_lang = "";
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPHomeSponsors.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideSponsors",
  __ssrInlineRender: true,
  props: {
    tier: null,
    size: null,
    data: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPDocAsideSponsors" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$8, {
        mode: "aside",
        tier: __props.tier,
        size: __props.size,
        data: __props.data
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPDocAsideSponsors.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const VPTeamPage_vue_vue_type_style_index_0_scoped_74d5a527_lang = "";
const _sfc_main$5 = {};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPTeamPage.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const VPTeamPageTitle_vue_vue_type_style_index_0_scoped_724f821a_lang = "";
const _sfc_main$4 = {};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPTeamPageTitle.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const VPTeamPageSection_vue_vue_type_style_index_0_scoped_214bac44_lang = "";
const _sfc_main$3 = {};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPTeamPageSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "VPTeamMembersItem",
  __ssrInlineRender: true,
  props: {
    size: null,
    member: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({
        class: ["VPTeamMembersItem", [__props.size ?? "medium"]]
      }, _attrs))} data-v-a0092577><div class="profile" data-v-a0092577><figure class="avatar" data-v-a0092577><img class="avatar-img"${ssrRenderAttr("src", __props.member.avatar)}${ssrRenderAttr("alt", __props.member.name)} data-v-a0092577></figure><div class="data" data-v-a0092577><h1 class="name" data-v-a0092577>${ssrInterpolate(__props.member.name)}</h1>`);
      if (__props.member.title || __props.member.org) {
        _push(`<p class="affiliation" data-v-a0092577>`);
        if (__props.member.title) {
          _push(`<span class="title" data-v-a0092577>${ssrInterpolate(__props.member.title)}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.member.title && __props.member.org) {
          _push(`<span class="at" data-v-a0092577> @ </span>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.member.org) {
          _push(ssrRenderComponent(VPLink, {
            class: ["org", { link: __props.member.orgLink }],
            href: __props.member.orgLink,
            "no-icon": ""
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(__props.member.org)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(__props.member.org), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</p>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.member.desc) {
        _push(`<p class="desc" data-v-a0092577>${ssrInterpolate(__props.member.desc)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.member.links) {
        _push(`<div class="links" data-v-a0092577>`);
        _push(ssrRenderComponent(VPSocialLinks, {
          links: __props.member.links
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (__props.member.sponsor) {
        _push(`<div class="sponsor" data-v-a0092577>`);
        _push(ssrRenderComponent(VPLink, {
          class: "sponsor-link",
          href: __props.member.sponsor,
          "no-icon": ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VPIconHeart, { class: "sponsor-icon" }, null, _parent2, _scopeId));
              _push2(` Sponsor `);
            } else {
              return [
                createVNode(VPIconHeart, { class: "sponsor-icon" }),
                createTextVNode(" Sponsor ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</article>`);
    };
  }
});
const VPTeamMembersItem_vue_vue_type_style_index_0_scoped_a0092577_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPTeamMembersItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const VPTeamMembersItem = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-a0092577"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "VPTeamMembers",
  __ssrInlineRender: true,
  props: {
    size: null,
    members: null
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => [
      props.size ?? "medium",
      `count-${props.members.length}`
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPTeamMembers", unref(classes)]
      }, _attrs))} data-v-722ce18a><div class="container" data-v-722ce18a><!--[-->`);
      ssrRenderList(__props.members, (member) => {
        _push(`<div class="item" data-v-722ce18a>`);
        _push(ssrRenderComponent(VPTeamMembersItem, {
          size: __props.size,
          member
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const VPTeamMembers_vue_vue_type_style_index_0_scoped_722ce18a_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/theme-default/components/VPTeamMembers.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const theme = {
  Layout: Layout$1,
  NotFound: NotFound$1
};
const custom = "";
const { Layout } = theme;
const myLayout = defineComponent({
  async mounted() {
    const { default: theme2 } = await import("./index.a56887b6.js");
    const toggleTheme = (isDark) => {
      if (!isDark) {
        theme2.use("light");
      } else {
        theme2.use("dark");
      }
    };
    const observer = new MutationObserver((entries) => {
      entries.forEach((mutation) => {
        const target = mutation.target;
        toggleTheme(target.classList.contains("dark"));
      });
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });
    toggleTheme(document.documentElement.classList.contains("dark"));
  },
  render() {
    return h(Layout);
  }
});
const style = "";
const sfc = '<template>\n  <PSpace>\n    <PButton>默认</PButton>\n    <PButton type="primary">Primary</PButton>\n    <PButton type="danger">Danger</PButton>\n    <PButton type="info">Info</PButton>\n    <PButton type="warning">Warning</PButton>\n    <PButton type="success">Success</PButton>\n  </PSpace>\n</template>\n';
const jsx = `import { defineComponent} from "vue";
import { Button, Space } from 'promiseui-vue'
export default defineComponent({
  setup() {
    return () => <Space>
      <Button>默认</Button>
      <Button type="primary">Primary</Button>
      <Button type="danger">Danger</Button>
      <Button type="info">Info</Button>
      <Button type="warning">Warning</Button>
      <Button type="success">Success</Button>
    </Space>
  }
})`;
const cbs = [];
let isLoaded = false;
function onUILoaded(fn) {
  if (isLoaded) {
    fn();
  } else {
    cbs.push(fn);
  }
}
function emitUILoaded() {
  cbs.forEach((cb) => cb());
  isLoaded = true;
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const isLoaded2 = ref(false);
    const lang = ref("vue");
    const template = ref(sfc);
    onUILoaded(() => {
      isLoaded2.value = true;
    });
    watch(lang, (val) => {
      template.value = val === "vue" ? sfc : jsx;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Demo = resolveComponent("Demo");
      const _component_p_radio_group = resolveComponent("p-radio-group");
      const _component_p_radio_button = resolveComponent("p-radio-button");
      if (!isLoaded2.value) {
        _push(`<div${ssrRenderAttrs(_attrs)} data-v-522f579f> 加载中... </div>`);
      } else {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_Demo, {
          initialValue: template.value,
          style: { "height": "calc(100vh - 100px)" },
          lang: lang.value,
          key: lang.value
        }, null, _parent));
        _push(`<div class="btns" data-v-522f579f>`);
        _push(ssrRenderComponent(_component_p_radio_group, {
          modelValue: lang.value,
          "onUpdate:modelValue": ($event) => lang.value = $event,
          size: "sm"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_p_radio_button, {
                key: "vue",
                value: "vue"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`sfc`);
                  } else {
                    return [
                      createTextVNode("sfc")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_p_radio_button, {
                key: "jsx",
                value: "jsx"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`jsx`);
                  } else {
                    return [
                      createTextVNode("jsx")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_p_radio_button, {
                  key: "vue",
                  value: "vue"
                }, {
                  default: withCtx(() => [
                    createTextVNode("sfc")
                  ]),
                  _: 1
                }),
                createVNode(_component_p_radio_button, {
                  key: "jsx",
                  value: "jsx"
                }, {
                  default: withCtx(() => [
                    createTextVNode("jsx")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><!--]-->`);
      }
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_522f579f_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/playground/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Playground = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-522f579f"]]);
const promiseuiType = "import type { App } from 'vue';\nimport { Button } from './button';\nimport { Space } from './space';\nimport { Icon } from './icon';\nimport { Message } from './message';\nimport { Input } from './input';\nimport { Overlay } from './overlay';\nimport { Dropdown, DropdownItem } from './dropdown';\nimport { Tabs, TabPane } from './tabs';\nimport { Switch } from './switch';\nimport { Radio, RadioGroup } from './radio';\nimport { Checkbox, CheckboxGroup } from './checkbox';\nimport { Select } from './select';\nimport { Scrollbar } from './scrollbar';\nimport { VirtualScroll } from './virtualScroll';\nimport { Tag } from './tag';\nimport { AutoComplete } from './autoComplete';\nimport { Form, FormItem } from './form';\nimport { Popover } from './popover';\nimport { Modal } from './modal';\nimport { MessageBox } from './messageBox';\nimport { useLoadingBar } from './loadingBar';\nimport { Table } from './table';\nimport { DatePicker } from './datePicker';\nexport { Button, Space, Icon, Message, Input, Overlay, Dropdown, DropdownItem, Tabs, TabPane, Switch, Radio, RadioGroup, Checkbox, CheckboxGroup, Select, Scrollbar, VirtualScroll, Tag, AutoComplete, Form, FormItem, Popover, Modal, MessageBox, useLoadingBar, Table, DatePicker };\ndeclare const _default: {\n    version: string;\n    install(app: App): void;\n};\nexport default _default;\n";
const index = "";
const icons = {
  AirplaneSharp,
  AccessibilitySharp,
  Ban,
  SearchSharp,
  ChatboxSharp,
  PawSharp,
  CheckmarkSharp,
  CloseSharp,
  MusicalNotesSharp,
  FlameSharp,
  HappyOutline
};
let first = true;
function registerComponents(app) {
  addImportMap("@vicons/ionicons5", icons);
  app.component("Playground", Playground);
  app.use(vuePlugin, {
    onMonacoCreated(monaco) {
      monaco.languages.typescript.typescriptDefaults.addExtraLib(
        `
        declare module 'promiseui-vue' { ${promiseuiType} }
      `,
        `promiseui-vue`
      );
    }
  });
  app.mixin({
    async mounted() {
      if (!first)
        return;
      first = false;
      await import("./index.892f364c.js").then((promiseUI) => {
        addImportMap("promiseui-vue", promiseUI);
        app.use(promiseUI.default);
        emitUILoaded();
      });
    }
  });
}
const Theme = {
  ...theme,
  Layout: () => {
    return h(myLayout);
  },
  enhanceApp({ app }) {
    registerComponents(app);
  }
};
function useUpdateHead(route, siteDataByRouteRef) {
  let managedHeadTags = [];
  let isFirstUpdate = true;
  const updateHeadTags = (newTags) => {
    if (isFirstUpdate) {
      isFirstUpdate = false;
      return;
    }
    managedHeadTags.forEach((el) => document.head.removeChild(el));
    managedHeadTags = [];
    newTags.forEach((headConfig) => {
      const el = createHeadElement(headConfig);
      document.head.appendChild(el);
      managedHeadTags.push(el);
    });
  };
  watchEffect(() => {
    const pageData = route.data;
    const siteData2 = siteDataByRouteRef.value;
    const pageDescription = pageData && pageData.description;
    const frontmatterHead = pageData && pageData.frontmatter.head || [];
    document.title = createTitle(siteData2, pageData);
    document.querySelector(`meta[name=description]`).setAttribute("content", pageDescription || siteData2.description);
    updateHeadTags(mergeHead(siteData2.head, filterOutHeadDescription(frontmatterHead)));
  });
}
function createHeadElement([tag, attrs, innerHTML]) {
  const el = document.createElement(tag);
  for (const key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
  if (innerHTML) {
    el.innerHTML = innerHTML;
  }
  return el;
}
function isMetaDescription(headConfig) {
  return headConfig[0] === "meta" && headConfig[1] && headConfig[1].name === "description";
}
function filterOutHeadDescription(head) {
  return head.filter((h2) => !isMetaDescription(h2));
}
const hasFetched = /* @__PURE__ */ new Set();
const createLink = () => document.createElement("link");
const viaDOM = (url) => {
  const link2 = createLink();
  link2.rel = `prefetch`;
  link2.href = url;
  document.head.appendChild(link2);
};
const viaXHR = (url) => {
  const req = new XMLHttpRequest();
  req.open("GET", url, req.withCredentials = true);
  req.send();
};
let link;
const doFetch = inBrowser$1 && (link = createLink()) && link.relList && link.relList.supports && link.relList.supports("prefetch") ? viaDOM : viaXHR;
function usePrefetch() {
  if (!inBrowser$1) {
    return;
  }
  if (!window.IntersectionObserver) {
    return;
  }
  let conn;
  if ((conn = navigator.connection) && (conn.saveData || /2g/.test(conn.effectiveType))) {
    return;
  }
  const rIC = window.requestIdleCallback || setTimeout;
  let observer = null;
  const observeLinks = () => {
    if (observer) {
      observer.disconnect();
    }
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const link2 = entry.target;
          observer.unobserve(link2);
          const { pathname } = link2;
          if (!hasFetched.has(pathname)) {
            hasFetched.add(pathname);
            const pageChunkPath = pathToFile(pathname);
            doFetch(pageChunkPath);
          }
        }
      });
    });
    rIC(() => {
      document.querySelectorAll("#app a").forEach((link2) => {
        const { target, hostname, pathname } = link2;
        const extMatch = pathname.match(/\.\w+$/);
        if (extMatch && extMatch[0] !== ".html") {
          return;
        }
        if (
          // only prefetch same tab navigation, since a new tab will load
          // the lean js chunk instead.
          target !== `_blank` && // only prefetch inbound links
          hostname === location.hostname
        ) {
          if (pathname !== location.pathname) {
            observer.observe(link2);
          } else {
            hasFetched.add(pathname);
          }
        }
      });
    });
  };
  onMounted(observeLinks);
  const route = useRoute();
  watch(() => route.path, observeLinks);
  onUnmounted(() => {
    observer && observer.disconnect();
  });
}
const ClientOnly = defineComponent({
  setup(_, { slots }) {
    const show = ref(false);
    onMounted(() => {
      show.value = true;
    });
    return () => show.value && slots.default ? slots.default() : null;
  }
});
function useCopyCode() {
  if (inBrowser$1) {
    const timeoutIdMap = /* @__PURE__ */ new Map();
    window.addEventListener("click", (e) => {
      var _a;
      const el = e.target;
      if (el.matches('div[class*="language-"] > button.copy')) {
        const parent = el.parentElement;
        const sibling = (_a = el.nextElementSibling) == null ? void 0 : _a.nextElementSibling;
        if (!parent || !sibling) {
          return;
        }
        const isShell = /language-(shellscript|shell|bash|sh|zsh)/.test(parent.className);
        let text = "";
        sibling.querySelectorAll("span.line:not(.diff.remove)").forEach((node) => text += (node.textContent || "") + "\n");
        text = text.slice(0, -1);
        if (isShell) {
          text = text.replace(/^ *(\$|>) /gm, "").trim();
        }
        copyToClipboard(text).then(() => {
          el.classList.add("copied");
          clearTimeout(timeoutIdMap.get(el));
          const timeoutId = setTimeout(() => {
            el.classList.remove("copied");
            el.blur();
            timeoutIdMap.delete(el);
          }, 2e3);
          timeoutIdMap.set(el, timeoutId);
        });
      }
    });
  }
}
async function copyToClipboard(text) {
  try {
    return navigator.clipboard.writeText(text);
  } catch {
    const element = document.createElement("textarea");
    const previouslyFocusedElement = document.activeElement;
    element.value = text;
    element.setAttribute("readonly", "");
    element.style.contain = "strict";
    element.style.position = "absolute";
    element.style.left = "-9999px";
    element.style.fontSize = "12pt";
    const selection = document.getSelection();
    const originalRange = selection ? selection.rangeCount > 0 && selection.getRangeAt(0) : null;
    document.body.appendChild(element);
    element.select();
    element.selectionStart = 0;
    element.selectionEnd = text.length;
    document.execCommand("copy");
    document.body.removeChild(element);
    if (originalRange) {
      selection.removeAllRanges();
      selection.addRange(originalRange);
    }
    if (previouslyFocusedElement) {
      previouslyFocusedElement.focus();
    }
  }
}
function useCodeGroups() {
  if (inBrowser$1) {
    window.addEventListener("click", (e) => {
      var _a, _b;
      const el = e.target;
      if (el.matches(".vp-code-group input")) {
        const group = (_a = el.parentElement) == null ? void 0 : _a.parentElement;
        const i = Array.from((group == null ? void 0 : group.querySelectorAll("input")) || []).indexOf(el);
        const current = group == null ? void 0 : group.querySelector('div[class*="language-"].active');
        const next = (_b = group == null ? void 0 : group.querySelectorAll('div[class*="language-"]')) == null ? void 0 : _b[i];
        if (current && next && current !== next) {
          current.classList.remove("active");
          next.classList.add("active");
        }
      }
    });
  }
}
const NotFound = Theme.NotFound || (() => "404 Not Found");
const VitePressApp = defineComponent({
  name: "VitePressApp",
  setup() {
    const { site } = useData();
    onMounted(() => {
      watchEffect(() => {
        document.documentElement.lang = site.value.lang;
        document.documentElement.dir = site.value.dir;
      });
    });
    {
      usePrefetch();
    }
    useCopyCode();
    useCodeGroups();
    if (Theme.setup)
      Theme.setup();
    return () => h(Theme.Layout);
  }
});
async function createApp() {
  const router = newRouter();
  const app = newApp();
  app.provide(RouterSymbol, router);
  const data = initData(router.route);
  app.provide(dataSymbol, data);
  app.provide("NotFound", NotFound);
  app.component("Content", Content);
  app.component("ClientOnly", ClientOnly);
  Object.defineProperty(app.config.globalProperties, "$frontmatter", {
    get() {
      return data.frontmatter.value;
    }
  });
  if (Theme.enhanceApp) {
    await Theme.enhanceApp({
      app,
      router,
      siteData: siteDataRef
    });
  }
  return { app, router, data };
}
function newApp() {
  return createSSRApp(VitePressApp);
}
function newRouter() {
  let isInitialPageLoad = inBrowser$1;
  let initialPath;
  return createRouter((path) => {
    let pageFilePath = pathToFile(path);
    if (isInitialPageLoad) {
      initialPath = pageFilePath;
    }
    if (isInitialPageLoad || initialPath === pageFilePath) {
      pageFilePath = pageFilePath.replace(/\.js$/, ".lean.js");
    }
    if (inBrowser$1) {
      isInitialPageLoad = false;
    }
    return import(
      /*@vite-ignore*/
      pageFilePath
    );
  }, NotFound);
}
if (inBrowser$1) {
  createApp().then(({ app, router, data }) => {
    router.go().then(() => {
      useUpdateHead(router.route, data.site);
      app.mount("#app");
    });
  });
}
async function render(path) {
  const { app, router } = await createApp();
  await router.go(path);
  const ctx = { content: "" };
  ctx.content = await renderToString(app, ctx);
  return ctx;
}
export {
  render
};
