var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const prefix = "promiseui";
class Theme {
  constructor() {
    __publicField(this, "themes", {});
    __publicField(this, "styleElement");
    this.styleElement = document.createElement("style");
    const head = document.getElementsByTagName("head")[0];
    head.appendChild(this.styleElement);
  }
  // 注册
  register(name, theme2) {
    const styleStr = Object.entries(theme2).map(([key, value]) => `--${prefix}-${key} : ${value}`).join(";");
    this.themes[name] = styleStr;
  }
  use(name) {
    const styleStr = this.themes[name];
    this.styleElement.textContent = `:root{${styleStr}}`;
    document.documentElement.setAttribute("pui-theme", name);
  }
}
const light = {
  "wave-shadow-color": "transparent",
  block: "#ffffff",
  "base-bg": "#ffffff",
  //背景
  "bg-hover": "rgba(46,50,56,0.05)",
  "border-color": "rgb(224, 224, 230)",
  "item-bg-hover": "#f2f5fc",
  "overlay-dart": "#464d6e",
  "overlay-text": "#dfe1e6",
  line: "#aea6ad",
  //边框
  shadow: "rgba(37, 43, 58, 0.2)",
  "brand-shadow": "rgb(124, 145, 229, 0.3)",
  "danger-shadow": "rgba(208, 48, 80, 0.2)",
  brand: "#5e7ce0",
  "brand-hover": "#7693f5",
  "brand-active": "#344899",
  "brand-bg": "#f2f5fc",
  danger: "#f66f6a",
  "danger-active": "#b12220",
  "danger-bg": "#ffeeed",
  warning: "#fac20a",
  "warning-active": "#cf9236",
  "warning-bg": "#fff3e8",
  success: "#50d4ab",
  "success-active": "#449c81",
  "success-bg": "#edfff9",
  info: "#909399",
  "info-active": "#82848a",
  "info-bg": "#f2f5fc",
  text: "#2f272f",
  waiting: "#9faad7",
  "text-weak": "#575d6c",
  "light-text": "#ffffff",
  "title-text": "rgb(31, 34, 37)",
  "disabled-bg": "#f6f6f6",
  "disabled-line": "#dfe1e6",
  "disabled-text": "#cbcacb",
  placeholder: "#babbc0",
  "font-size": "12px",
  "font-size-card-title": "14px",
  "font-size-page-title": "16px",
  "font-size-modal-title": "18px",
  "font-size-price": "20px",
  "font-size-data-overview": "24px",
  "font-size-icon": "16px",
  "font-size-sm": "12px",
  "font-size-md": "14px",
  "font-size-lg": "15px",
  "font-title-weight": "bold",
  "font-content-weight": "normal",
  "line-height-base": "1.5",
  "border-radius": "4px",
  "border-radius-feedback": "4px",
  "border-radius-card": "6px",
  "scrollbar-color": "rgba(0, 0, 0, 0.25)",
  "scrollbar-color-hover": "rgba(0, 0, 0, 0.4)",
  "fill-color-light": "#f5f7fa",
  "fill-color-lighter": "#fafafa"
};
const dark = {
  "wave-shadow-color": "transparent",
  block: "#606061",
  "base-bg": "#202124",
  //背景
  "bg-hover": "#2e2f31",
  "border-color": "rgba(255, 255, 255, 0.24)",
  "item-bg-hover": "#383838",
  "overlay-dart": "#464d6e",
  "overlay-text": "#dfe1e6",
  line: "#505153",
  //边框
  shadow: "rgba(17, 18, 19, 0.4)",
  "brand-shadow": "rgb(124, 145, 229, 0.3)",
  "danger-shadow": "rgba(208, 48, 80, 0.2)",
  brand: "#5e7ce0",
  "brand-hover": "#425288",
  "brand-active": "#344899",
  "brand-bg": "#123123",
  danger: "#f66f6a",
  "danger-active": "#b12220",
  "danger-bg": "rgba(232, 128, 128, 0.16)",
  warning: "#fac20a",
  "warning-active": "#cf9236",
  "warning-bg": "rgba(242, 201, 125, 0.16)",
  success: "#50d4ab",
  "success-active": "#449c81",
  "success-bg": "rgba(99, 226, 183, 0.16)",
  info: "#5e7ce0",
  "info-active": "#344899",
  "info-bg": "rgba(51, 51, 51, 1)",
  text: "#E8E8E8",
  waiting: "#5e6580",
  "text-weak": "#A0A0A0",
  "light-text": "#ffffff",
  "title-text": "rgba(255, 255, 255, 0.9)",
  "disabled-bg": "#3D3E44",
  "disabled-line": "#505153",
  "disabled-text": "#7D7D7D",
  placeholder: "#8A8A8A",
  "font-size": "12px",
  "font-size-card-title": "14px",
  "font-size-page-title": "16px",
  "font-size-modal-title": "18px",
  "font-size-price": "20px",
  "font-size-data-overview": "24px",
  "font-size-icon": "16px",
  "font-size-sm": "12px",
  "font-size-md": "14px",
  "font-size-lg": "15px",
  "font-title-weight": "bold",
  "font-content-weight": "normal",
  "line-height-base": "1.5",
  "border-radius": "4px",
  "border-radius-feedback": "4px",
  "border-radius-card": "6px",
  "scrollbar-color": "rgba(255, 255, 255, 0.2)",
  "scrollbar-color-hover": "rgba(255, 255, 255, 0.3)",
  "fill-color-light": "#262727",
  "fill-color-lighter": "#1D1D1D"
};
const theme = new Theme();
theme.register("light", light);
theme.register("dark", dark);
theme.use("light");
export {
  theme as default
};
