import { useSSRContext, defineComponent, createVNode, toRefs, mergeProps, h, ref, getCurrentInstance, watch, onMounted, inject, computed, Transition, createApp, withModifiers, watchEffect, toRef, Teleport, withDirectives, vShow, provide, reactive, onUnmounted, createTextVNode, nextTick, Fragment, shallowRef, vModelText, renderSlot, KeepAlive } from "vue";
import { Icon as Icon$1, IconConfigProvider } from "@vicons/utils";
import { WarningSharp, InformationCircle, CheckmarkCircle, CloseCircleSharp, CloseSharp, EyeOffSharp, EyeSharp, ChevronDownOutline, CloseOutline, RemoveSharp, CheckmarkSharp, ChevronDownSharp, CloseCircleOutline, HelpCircleSharp, FunnelSharp, CaretUpSharp, CaretDownSharp, CalendarClearOutline } from "@vicons/ionicons5";
import { useResizeObserver, onClickOutside, useMutationObserver } from "@vueuse/core";
import { useThrottleFn } from "@vueuse/shared";
import Schema from "async-validator";
import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData.js";
import customParseFormat from "dayjs/plugin/customParseFormat.js";
import "dayjs/locale/zh-cn.js";
import { default as default2 } from "./index.a56887b6.js";
const buttonProps = {
  type: {
    type: String,
    default: "default"
  },
  size: {
    type: String
  },
  loading: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  fillMode: {
    type: String,
    default: ""
  },
  shake: {
    type: Boolean,
    default: true
  },
  class: {
    type: [Object, String]
  },
  style: {
    type: [Object, String]
  }
};
function createBem(namespace, element, modifier) {
  let cls = namespace;
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
}
function useNamespace(block) {
  const namespace = `pui-${block}`;
  const b = () => createBem(namespace);
  const e = (element) => element ? createBem(namespace, element) : "";
  const m = (modifier) => modifier ? createBem(namespace, "", modifier) : "";
  const em = (element, modifier) => element && modifier ? createBem(namespace, element, modifier) : "";
  return {
    b,
    e,
    m,
    em
  };
}
function ssrRegisterHelper(comp, filename) {
  const setup = comp.setup;
  comp.setup = (props, ctx) => {
    const ssrContext = useSSRContext();
    (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(filename);
    if (setup) {
      return setup(props, ctx);
    }
  };
}
const __default__$E = defineComponent({
  render() {
    return createVNode("svg", {
      "t": "1652707377325",
      "class": "icon",
      "viewBox": "0 0 1024 1024",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg",
      "p-id": "2308",
      "width": "144",
      "height": "144"
    }, [createVNode("path", {
      "d": "M249.836 210.77c5.558-3.827 10.73-7.527 15.812-10.695 4.967-3.314 9.807-6.121 14.208-8.785 2.18-1.362 4.374-2.515 6.425-3.673l5.873-3.281c0.945-0.551 1.789-0.953 2.625-1.377l2.425-1.226 4.381-2.233 1.954-1.004 2.219-1.093 3.918-1.924 7.184-3.527c2.883-1.44 5.996-3.272 8.694-5.22 26.969-19.458 33.057-57.094 13.599-84.063-19.458-26.968-57.094-33.057-84.063-13.599l-6.49 4.682-3.54 2.554-2.071 1.499-2.62 1.947-5.824 4.351a7267.87 7267.87 0 0 0-3.193 2.399c-1.091 0.824-2.25 1.676-3.282 2.533a33346.62 33346.62 0 0 1-6.735 5.441c-2.343 1.915-4.833 3.859-7.308 6.046-4.991 4.313-10.423 8.905-15.952 14.121-5.645 5.071-11.353 10.792-17.394 16.739-5.886 6.125-12.079 12.515-18.185 19.505-12.303 13.875-24.827 29.53-36.839 46.835a494.61 494.61 0 0 0-33.896 56.497 491.342 491.342 0 0 0-27.329 64.159c-1.02 2.77-1.888 5.605-2.789 8.428l-2.688 8.477c-1.692 5.691-3.266 11.429-4.857 17.152l-2.135 8.669c-0.683 2.896-1.479 5.756-2.051 8.682l-1.84 8.729-0.914 4.358-0.785 4.387a479.254 479.254 0 0 0-7.583 69.967c-0.302 5.759-0.239 11.514-0.279 17.214l-0.017 4.267c-0.001 1.42 0.069 2.841 0.101 4.257l0.25 8.464 0.127 4.204 0.264 4.188 0.531 8.317 0.278 4.451 0.399 3.933 0.792 7.821c0.14 1.313 0.244 2.561 0.412 3.918l0.527 4.098 1.056 8.115c0.185 1.337 0.33 2.695 0.549 4.002l0.648 3.91 1.289 7.744c1.825 10.246 3.911 20.188 6.263 29.766a463.195 463.195 0 0 0 16.342 52.81l2.255 5.904 1.108 2.899 1.186 2.836 4.611 10.976c3.247 7.033 6.19 13.723 9.353 19.831 6.048 12.328 12.043 22.661 17.007 31.096 5.121 8.359 9.212 14.84 12.197 19.141l4.472 6.638-3.293-7.292c-2.209-4.713-5.148-11.776-8.748-20.761-3.443-9.059-7.545-20.055-11.346-32.919-2.041-6.376-3.771-13.301-5.726-20.516l-2.612-11.204-0.667-2.878-0.583-2.935-1.183-5.957c-3.105-16.055-5.568-33.549-6.889-52.052-0.668-9.251-1.027-18.753-1.1-28.437l0.03-7.3 0.014-3.67c0.002-1.227 0.084-2.416 0.122-3.629l0.284-7.263 0.139-3.644c0.053-1.229 0.166-2.577 0.247-3.863a35704.717 35704.717 0 0 1 0.798-11.787l0.017-0.247c0.013 0.588 0.018 0.028 0.027 0.098l0.05-0.472 0.101-0.945 0.2-1.891 0.8-7.581 0.4-3.801 0.535-3.801 1.069-7.62c0.187-1.271 0.335-2.545 0.555-3.815l0.67-3.811c0.909-5.082 1.708-10.185 2.859-15.253a424.734 424.734 0 0 1 17.057-60.03l1.316-3.663 1.437-3.623 2.859-7.225c0.907-2.417 2.03-4.761 3.033-7.135l3.079-7.082c2.208-4.653 4.37-9.295 6.624-13.867l3.508-6.783c1.167-2.252 2.294-4.513 3.565-6.702a414.503 414.503 0 0 1 31.89-49.502 407.116 407.116 0 0 1 35.476-41.25 406.598 406.598 0 0 1 35.793-32.288c5.751-4.687 11.515-8.857 16.918-12.861zM1023.966 510.486l-0.001-0.005-0.875-7.954-1.051-9.554-0.687-6.125-1.153-8.152c-0.828-5.729-1.741-12.089-2.813-18.907l-4.259-20.887c-0.691-3.726-1.738-7.517-2.729-11.425l-3.102-12.024c-0.558-2.048-1.019-4.142-1.677-6.221l-1.958-6.314-4.07-13.021-1.049-3.333-1.211-3.324c-0.814-2.223-1.638-4.467-2.469-6.732-1.673-4.522-3.34-9.131-5.115-13.781l-5.938-13.981-3.046-7.123c-1.037-2.384-2.247-4.72-3.375-7.102l-6.997-14.388c-0.569-1.22-1.222-2.408-1.877-3.598l-1.958-3.583-3.95-7.211-3.995-7.265c-1.354-2.422-2.881-4.773-4.324-7.175l-8.875-14.427c-12.567-18.998-26.533-37.793-42.018-55.643-15.662-17.71-32.638-34.534-50.581-50.045a527.617 527.617 0 0 0-56.726-41.602c-19.622-12.201-39.702-22.647-59.484-31.64l-14.925-6.188c-2.47-0.995-4.881-2.072-7.356-2.979l-7.402-2.651-7.306-2.609-3.615-1.289c-1.198-0.434-2.394-0.863-3.618-1.21l-14.37-4.353c-2.366-0.691-4.68-1.466-7.035-2.069l-7.02-1.754-13.669-3.402c-4.524-0.941-8.985-1.788-13.341-2.655l-6.47-1.271-3.184-0.621-3.186-0.465-12.373-1.797-5.96-0.862c-1.957-0.298-3.928-0.403-5.85-0.61l-11.239-1.057c-3.638-0.329-7.151-0.735-10.598-0.81l-19.18-0.823-16.258 0.11-6.935 0.057c-2.177 0.091-4.219 0.237-6.115 0.34l-9.619 0.566-7.982 0.472 7.959 0.875 9.529 1.05c1.872 0.215 3.884 0.411 6.023 0.683l6.797 1.101 15.801 2.578 18.393 3.951c3.283 0.628 6.614 1.603 10.051 2.514l10.571 2.838c1.801 0.509 3.644 0.92 5.469 1.526l5.542 1.793 11.432 3.697 2.927 0.946 2.914 1.104 5.902 2.242c3.965 1.517 8.007 3.017 12.084 4.613l12.243 5.366 6.241 2.733c2.088 0.929 4.128 2.029 6.212 3.044l12.59 6.277c1.068 0.506 2.106 1.094 3.145 1.685l3.131 1.761 6.302 3.542 6.353 3.568c2.118 1.209 4.165 2.586 6.263 3.878l12.601 7.922c16.565 11.247 32.949 23.681 48.48 37.44a473.639 473.639 0 0 1 43.435 44.87 467.917 467.917 0 0 1 35.892 50.115c10.476 17.304 19.389 34.971 27.062 52.322 1.761 4.404 3.506 8.772 5.234 13.098 0.843 2.166 1.771 4.273 2.532 6.444l2.224 6.49 2.201 6.396 1.093 3.162c0.368 1.047 0.734 2.092 1.019 3.166l3.633 12.572c0.578 2.068 1.242 4.086 1.738 6.146l1.441 6.137 2.829 11.931 2.152 11.645 1.045 5.64 0.514 2.772 0.362 2.779 1.423 10.784 0.697 5.188c0.245 1.704 0.3 3.423 0.458 5.098l0.794 9.786c0.249 3.167 0.584 6.22 0.595 9.223l0.516 16.686-0.346 13.152-0.109 5.579-0.343 6.014-0.567 9.595-0.472 7.988c-0.169 3.219-0.107 6.829 0.256 10.138 3.638 33.056 33.383 56.904 66.438 53.267 33.056-3.637 56.905-33.382 53.268-66.438zM885.176 762.451l-4.868 5.897c-1.711 2.052-3.44 4.238-5.4 6.399-3.858 4.365-7.946 9.128-12.608 13.957-4.517 4.944-9.632 9.919-14.922 15.205-5.467 5.131-11.147 10.547-17.374 15.864-12.349 10.726-26.262 21.624-41.613 32.046a434.435 434.435 0 0 1-50.026 29.303 431.157 431.157 0 0 1-56.59 23.39c-2.436 0.874-4.935 1.6-7.419 2.361l-7.455 2.279c-5.006 1.425-10.053 2.742-15.078 4.091-2.536 0.593-5.075 1.187-7.617 1.78-2.545 0.566-5.051 1.25-7.622 1.714l-7.663 1.523-3.822 0.763-3.851 0.64a419.278 419.278 0 0 1-61.304 5.938c-5.039 0.219-10.081 0.088-15.068 0.072l-3.733-0.022c-1.238-0.012-2.392-0.1-3.587-0.145l-7.067-0.313-3.505-0.146-3.997-0.27-7.961-0.537-1.981-0.133-0.989-0.067-0.494-0.033c0.221-0.008-0.844-0.005 0.433-0.022l-0.226-0.025-3.593-0.396-7.127-0.78a406.62 406.62 0 0 1-53.494-10.013 402.48 402.48 0 0 1-45.808-14.792l-5.111-2.022-2.511-0.99-2.452-1.066-9.494-4.124c-6.074-2.917-11.861-5.522-17.131-8.352-10.648-5.379-19.552-10.718-26.826-15.11l-1.338-0.807a1085.391 1085.391 0 0 0-3.457-2.276l-4.116-2.687c-0.638-0.414-1.252-0.813-1.842-1.194l-2.021-1.354-3.621-2.439-6.637-4.472c-2.685-1.782-5.825-3.567-8.857-4.938-30.307-13.689-65.973-0.218-79.662 30.089-13.689 30.308-0.218 65.974 30.089 79.663l7.293 3.294 3.979 1.797 2.369 1.063 2.994 1.302c2.073 0.896 4.3 1.857 6.676 2.885l3.672 1.574 1.917 0.819 1.9 0.745c10.22 4.014 22.646 8.772 37.189 13.242 7.215 2.375 15.042 4.443 23.216 6.727l12.687 3.1 3.261 0.787 3.325 0.701 6.75 1.415c18.195 3.715 38.044 6.719 59.054 8.439a494.284 494.284 0 0 0 65.863 0.997l8.535-0.519 4.285-0.266 0.268-0.017c1.44-0.02 0.541-0.02 0.927-0.03l0.492-0.051 0.986-0.1 1.977-0.201 7.938-0.807 3.991-0.406 4.502-0.554 9.015-1.133c1.492-0.2 3.034-0.365 4.486-0.598l4.344-0.709c5.795-0.965 11.61-1.832 17.399-3.066a485.178 485.178 0 0 0 68.692-18.701l4.2-1.463 4.157-1.588 8.292-3.176c2.771-1.016 5.468-2.251 8.194-3.37l8.134-3.434c5.351-2.451 10.685-4.869 15.941-7.39l7.805-3.918c2.591-1.307 5.188-2.576 7.712-3.991a474.344 474.344 0 0 0 57.071-35.83 467.174 467.174 0 0 0 47.72-40.068 466.596 466.596 0 0 0 37.51-40.586c5.455-6.542 10.335-13.082 14.998-19.24 4.483-6.313 8.789-12.218 12.512-18 3.868-5.667 7.179-11.177 10.297-16.204 1.589-2.492 2.957-4.989 4.318-7.332 1.349-2.348 2.635-4.586 3.854-6.711 4.686-8.611 8.271-15.384 10.509-20.116l3.527-7.185-4.682 6.489c-2.985 4.266-7.65 10.33-13.635 17.935z",
      "p-id": "2309"
    }, null)]);
  }
});
const __moduleId$E = "../promiseui/button/src/components/button-loading.tsx";
ssrRegisterHelper(__default__$E, __moduleId$E);
const index$o = "";
const iconProps = {
  size: {
    //图标大小
    type: [String, Number]
  },
  color: {
    //图片颜色
    type: String
  },
  tag: { type: String },
  //要渲染为何种 HTML 标签
  component: {
    type: Object
  },
  onClick: {
    type: Function
  }
};
const index$n = "";
const __default__$D = defineComponent({
  name: "PIcon",
  props: iconProps,
  emits: [],
  setup(props, ctx) {
    const {
      component
    } = toRefs(props);
    return () => {
      return createVNode(Icon$1, mergeProps(props, {
        "class": "pui-icon"
      }), {
        default: () => {
          var _a, _b;
          return [(component == null ? void 0 : component.value) ? h(component.value) : (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a)];
        }
      });
    };
  }
});
const Icon = __default__$D;
const __moduleId$D = "../promiseui/icon/src/icon.tsx";
ssrRegisterHelper(__default__$D, __moduleId$D);
const IconInstall = {
  title: "Icon 图标",
  category: "通用",
  status: "100%",
  install(app) {
    app.component(Icon.name, Icon);
    app.component(IconConfigProvider.name, IconConfigProvider);
  }
};
const useEvent$2 = (props, emit) => {
  const { loading } = toRefs(props);
  const isMouseDown = ref(false);
  const onClick = (e) => {
    if (loading.value)
      return;
    emit("click", e);
  };
  const onMousedown = () => {
    if (loading.value)
      return;
    isMouseDown.value = true;
  };
  const onMouseup = () => {
    if (loading.value)
      return;
    isMouseDown.value = false;
  };
  return {
    onClick,
    onMousedown,
    onMouseup,
    isMouseDown
  };
};
const findDOMNode = (instance) => {
  var _a, _b;
  let node = ((_a = instance == null ? void 0 : instance.vnode) == null ? void 0 : _a.el) || instance && (((_b = instance.proxy) == null ? void 0 : _b.$el) || instance);
  while (node && !node.tagName) {
    node = node.nextSibling;
  }
  return node;
};
const __default__$C = defineComponent({
  name: "Wave",
  abstract: true,
  props: {
    disabled: Boolean,
    run: Boolean
  },
  setup(props, {
    slots,
    attrs,
    expose
  }) {
    const instance = getCurrentInstance();
    watch(() => props.run, (isRun) => {
      handleRun();
    });
    watch(() => props.disabled, (disabled) => {
      if (!node)
        return;
      if (disabled) {
        node.removeEventListener("click", handleRun);
      } else {
        node.addEventListener("click", handleRun);
      }
    });
    let node = null;
    const handleRun = () => {
      if (!node)
        return;
      const computedStyle = getComputedStyle(node);
      const waveColor = computedStyle.getPropertyValue("border-top-color") || computedStyle.getPropertyValue("border-color") || computedStyle.getPropertyValue("background-color");
      node.setAttribute("pui-click-animating-without-extra-node", "");
      node.style.setProperty("--promiseui-wave-shadow-color", waveColor);
      setTimeout(() => {
        if (!node)
          return;
        node.removeAttribute("pui-click-animating-without-extra-node");
      }, 400);
    };
    onMounted(() => {
      node = findDOMNode(instance);
      if (props.disabled)
        return;
      node.addEventListener("click", handleRun);
    });
    expose({
      run: handleRun
    });
    return () => slots.default && slots.default()[0];
  }
});
const __moduleId$C = "../promiseui/shared/components/wave.tsx";
ssrRegisterHelper(__default__$C, __moduleId$C);
const formProps = {
  // disabled: {
  //   type: Boolean,
  //   default: false
  // },
  inline: Boolean,
  labelWidth: {
    type: String,
    default: "auto"
  },
  labelPosition: {
    type: String
  },
  model: {
    type: Object,
    default() {
      return {};
    }
  },
  showLabel: {
    type: Boolean,
    default: true
  },
  showRequireMark: {
    type: Boolean,
    default: true
  },
  size: {
    type: String,
    default: "md"
  },
  validateMessages: {},
  rules: {
    type: Object,
    default() {
      return {};
    }
  }
};
const formItemProps = {
  prop: {
    type: String
  },
  label: {
    type: String,
    default: ""
  },
  labelWidth: {
    type: String
  },
  labelPosition: {
    type: String
  },
  labelStyle: {
    type: [String, Object]
  },
  showLabel: Boolean,
  showRequireMark: {
    type: Boolean,
    required: false,
    default: void 0
  },
  size: {
    type: String
  },
  rules: {
    type: Object,
    default() {
      return [];
    }
  },
  trigger: {
    type: [String, Array],
    default: "blur"
  },
  required: {
    type: [Boolean, String],
    default: false
  },
  helpTips: String
};
const formContextKey = Symbol("formContextKey");
const formItemContextKey = Symbol("formItemContextKey");
function useFormSize() {
  const FormContext = inject(formContextKey, void 0);
  const formSize = computed(() => FormContext == null ? void 0 : FormContext.props.size);
  return formSize;
}
const __default__$B = defineComponent({
  name: "PButton",
  inheritAttrs: false,
  props: buttonProps,
  emits: ["click"],
  setup(props, {
    slots,
    emit,
    attrs
  }) {
    const {
      type,
      disabled,
      fillMode,
      loading,
      shake,
      style,
      class: className
    } = toRefs(props);
    const ns2 = useNamespace("button");
    const {
      onClick,
      onMousedown,
      onMouseup,
      isMouseDown
    } = useEvent$2(props, emit);
    const formSize = useFormSize();
    const buttonSize = computed(() => props.size || formSize.value || "md");
    const classes = computed(() => ({
      [ns2.b()]: true,
      [ns2.m(type.value)]: true,
      [ns2.m(buttonSize.value)]: true,
      [ns2.m(fillMode.value)]: true,
      [ns2.m("isloading")]: loading.value,
      [ns2.m("mousedown")]: isMouseDown.value && shake.value
    }));
    const loadingRender = () => {
      return loading.value ? createVNode(Icon, {
        "class": ns2.e("loading")
      }, {
        default: () => [createVNode(__default__$E, null, null)]
      }) : null;
    };
    return () => {
      return createVNode(__default__$C, null, {
        default: () => [createVNode("button", mergeProps({
          "class": [classes.value, className == null ? void 0 : className.value],
          "style": style == null ? void 0 : style.value,
          "onClick": onClick,
          "onMousedown": onMousedown,
          "onMouseup": onMouseup,
          "disabled": disabled.value
        }, attrs), [loadingRender() || slots.icon && slots.icon(), slots.default && slots.default()])]
      });
    };
  }
});
const Button = __default__$B;
const __moduleId$B = "../promiseui/button/src/button.tsx";
ssrRegisterHelper(__default__$B, __moduleId$B);
const ButtonInstall = {
  title: "Button 按钮",
  category: "通用",
  status: "100%",
  install(app) {
    app.component(Button.name, Button);
  }
};
const spaceProps = {
  /* test: {
    type: Object as PropType<{ xxx: xxx }>
  } */
};
const index$m = "";
const __default__$A = defineComponent({
  name: "PSpace",
  props: spaceProps,
  emits: [],
  setup(props, {
    slots
  }) {
    return () => {
      return createVNode("div", {
        "class": "pui-space"
      }, [slots.default && slots.default()]);
    };
  }
});
const Space = __default__$A;
const __moduleId$A = "../promiseui/space/src/space.tsx";
ssrRegisterHelper(__default__$A, __moduleId$A);
const SpaceInstall = {
  title: "Space 间隔",
  category: "布局",
  status: "100%",
  install(app) {
    app.component(Space.name, Space);
  }
};
const inherit = Object.assign;
const messageProps = {
  message: {
    type: [String, Object],
    required: true
  },
  type: {
    type: String,
    default: "info",
    required: false
  },
  duration: {
    type: Number,
    default: 3e3,
    required: false
  },
  offset: {
    type: Number,
    default: 60,
    required: false
  },
  showClose: {
    type: Boolean,
    default: false,
    required: false
  },
  customClass: {
    type: String,
    default: "",
    required: false
  }
};
const messageTypes = [
  "success",
  "info",
  "warning",
  "error",
  "none"
];
const index$l = "";
function useIcon(type) {
  let Icon2;
  switch (type) {
    case "error":
      Icon2 = CloseCircleSharp;
      break;
    case "success":
      Icon2 = CheckmarkCircle;
      break;
    case "info":
      Icon2 = InformationCircle;
      break;
    case "warning":
      Icon2 = WarningSharp;
      break;
    case "none":
      Icon2 = "";
      break;
    default:
      Icon2 = "";
  }
  return Icon2;
}
const ns = useNamespace("message");
const __default__$z = defineComponent({
  name: "PMessage",
  props: messageProps,
  emits: ["destory"],
  setup(props) {
    const {
      duration
    } = toRefs(props);
    const isShow = ref(true);
    const IconContent = useIcon(props.type);
    onMounted(() => {
      setTimeout(() => {
        isShow.value = false;
      }, duration.value);
    });
    const closeClick = () => {
      isShow.value = false;
    };
    return {
      isShow,
      IconContent,
      closeClick
    };
  },
  data() {
    return {
      top: this.$props.offset
    };
  },
  methods: {
    setTop(top) {
      if (top < 0) {
        this.top = this.top + top;
      } else {
        this.top = top;
      }
    }
  },
  render() {
    const {
      isShow,
      $emit,
      top,
      type,
      IconContent,
      closeClick,
      showClose,
      customClass
    } = this;
    return createVNode(Transition, {
      "name": "message-fade",
      "onAfterLeave": (_) => $emit("destory"),
      "appear": true
    }, {
      default: () => [isShow && createVNode("div", {
        "class": [ns.b(), customClass],
        "style": {
          top: top + "px"
        }
      }, [IconContent && createVNode(Icon, {
        "class": ns.m(type)
      }, {
        default: () => [createVNode(IconContent, null, null)]
      }), createVNode("span", {
        "class": ns.e("content")
      }, [typeof this.message === "object" ? JSON.stringify(this.message) : this.message]), showClose && createVNode(Icon, {
        "class": ns.e("close"),
        "onClick": closeClick
      }, {
        default: () => [createVNode(CloseSharp, null, null)]
      })])]
    });
  },
  expose: ["setTop", "getHeight"]
});
const __moduleId$z = "../promiseui/message/src/message.tsx";
ssrRegisterHelper(__default__$z, __moduleId$z);
const MARGIN = 15;
const TOP = 60;
const messageList = [];
let messageId = 0;
const Message = (config) => {
  return new Promise((resolve) => {
    const {
      message = ""
    } = config;
    const app = createApp(__default__$z, {
      ...config,
      message,
      onDestory: () => destoryMessage(app, vm, resolve)
    });
    const vm = mountMessage(app);
  });
};
messageTypes.forEach((type) => {
  Message[type] = function(message, config = {}) {
    return Message({
      ...config,
      type,
      message
    });
  };
});
function mountMessage(app) {
  const wraper = document.createElement("div");
  const vm = app.mount(wraper);
  setMessageTop(vm);
  const el = document.body.appendChild(wraper.firstElementChild);
  inherit(vm, {
    _messageId: getMessageId(),
    _offsetHeight: el.offsetHeight
  });
  messageList.push(vm);
  return vm;
}
function destoryMessage(app, vm, resolve) {
  const _vm = vm;
  app.unmount();
  resolve(void 0);
  const index2 = messageList.findIndex((item) => item._messageId === _vm._messageId);
  messageList.splice(index2, 1);
  const removedHeight = _vm._offsetHeight + MARGIN;
  resetMessageListTop(removedHeight, index2);
}
function resetMessageListTop(removedHeight, startIndex) {
  for (const vm of messageList.slice(startIndex)) {
    vm.setTop(-removedHeight);
  }
}
function setMessageTop(vm) {
  let top = TOP;
  for (const item of messageList) {
    top += item._offsetHeight + MARGIN;
  }
  vm.setTop(top);
}
function getMessageId() {
  return messageId++;
}
const Message$1 = Message;
const MessageInstall = {
  title: "Message 消息",
  category: "反馈",
  status: "100%",
  install(app) {
    app.config.globalProperties.$message = Message$1;
  }
};
const inputProps = {
  modelValue: {
    type: String,
    default: ""
  },
  disabled: {
    type: Boolean,
    default: false
  },
  size: {
    type: String
  },
  clearable: {
    type: Boolean,
    default: false
  },
  showPassword: {
    type: Boolean,
    default: false
  },
  class: {},
  style: {
    type: [String, Object]
  },
  wave: {
    type: Boolean,
    default: true
  },
  placeholder: {
    type: String,
    default: ""
  }
};
const index$k = "";
function useFormItem() {
  const FormItemContext = inject(formItemContextKey, void 0);
  const validate = FormItemContext == null ? void 0 : FormItemContext.validate;
  const triggers = (FormItemContext == null ? void 0 : FormItemContext.triggers) || ref([]);
  const triggerValidate = (triggerName) => {
    if (triggers.value.includes(triggerName)) {
      validate == null ? void 0 : validate();
    }
  };
  return {
    triggerValidate
  };
}
const useEvent$1 = (props, ctx, focused) => {
  const { triggerValidate } = useFormItem();
  const onInput = (e) => {
    ctx.emit("input", e);
    ctx.emit("update:modelValue", e.target.value);
  };
  const onFocus = (e) => {
    ctx.emit("focus", e);
    focused.value = true;
  };
  watch(
    () => props.modelValue,
    () => {
      triggerValidate("change");
    }
  );
  const onBlur = (e) => {
    triggerValidate("blur");
    ctx.emit("blur", e);
    focused.value = false;
  };
  return {
    onInput,
    onFocus,
    onBlur
  };
};
const nativeClick = (fn) => {
  return withModifiers(fn, ["native"]);
};
const __default__$y = defineComponent({
  name: "PInput",
  inheritAttrs: false,
  props: inputProps,
  emits: ["input", "blur", "focus", "update:modelValue"],
  setup(props, ctx) {
    const {
      attrs,
      slots,
      emit
    } = ctx;
    const inputRef = ref(null);
    const wapperRef = ref(null);
    const {
      disabled,
      modelValue,
      clearable,
      showPassword
    } = toRefs(props);
    const ns2 = useNamespace("input");
    const focused = ref(false);
    const isPasswordType = ref(showPassword.value);
    const formSize = useFormSize();
    const inputSize = computed(() => props.size || formSize.value || "md");
    const classes = computed(() => ({
      [ns2.b()]: true,
      [ns2.m(inputSize.value)]: true,
      [ns2.m("disabled")]: disabled.value,
      [ns2.m("focus")]: focused.value
    }));
    const {
      onInput,
      onFocus,
      onBlur
    } = useEvent$1(props, ctx, focused);
    const renderSuffix = () => {
      if (showPassword.value) {
        return createVNode(Icon, {
          "size": 16,
          "class": ns2.e("icon"),
          "component": isPasswordType.value ? EyeOffSharp : EyeSharp,
          "onClick": nativeClick(() => isPasswordType.value = !isPasswordType.value)
        }, null);
      }
      if (clearable.value && props.modelValue.length) {
        return createVNode(Icon, {
          "class": ns2.e("icon"),
          "size": 16,
          "onClick": nativeClick(() => emit("update:modelValue", ""))
        }, {
          default: () => [createVNode(CloseSharp, null, null)]
        });
      }
      return slots.suffix && slots.suffix();
    };
    const renderPrefix = () => {
      return slots.prefix && slots.prefix();
    };
    ctx.expose({
      input: inputRef,
      wapper: wapperRef,
      blur() {
        var _a;
        (_a = inputRef.value) == null ? void 0 : _a.blur();
      },
      focus() {
        var _a;
        (_a = inputRef.value) == null ? void 0 : _a.focus();
      }
    });
    return () => {
      return createVNode(__default__$C, {
        "disabled": !props.wave
      }, {
        default: () => [createVNode("div", {
          "ref": wapperRef,
          "class": [classes.value, props.class],
          "style": props.style
        }, [slots.prepend && createVNode("span", {
          "class": ns2.e("prepend")
        }, [slots.prepend()]), createVNode("span", {
          "class": ns2.e("prefix")
        }, [renderPrefix()]), createVNode("input", mergeProps({
          "type": isPasswordType.value ? "password" : "text",
          "class": ns2.e("inner"),
          "value": modelValue.value,
          "disabled": disabled.value,
          "placeholder": props.placeholder
        }, attrs, {
          "onInput": onInput,
          "onFocus": onFocus,
          "onBlur": onBlur,
          "ref": inputRef
        }), null), createVNode("span", {
          "class": ns2.e("suffix")
        }, [renderSuffix()]), slots.append && createVNode("span", {
          "class": ns2.e("append")
        }, [slots.append()])])]
      });
    };
  }
});
const Input = __default__$y;
const __moduleId$y = "../promiseui/input/src/input.tsx";
ssrRegisterHelper(__default__$y, __moduleId$y);
const InputInstall = {
  title: "Input 输入框",
  category: "数据录入",
  status: "100%",
  install(app) {
    app.component(Input.name, Input);
  }
};
const overlayProps = {
  dark: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: Boolean,
    default: false,
    required: false
  },
  origin: {
    type: [Object, null],
    default: null,
    required: false
  },
  position: {
    type: String,
    default() {
      return "bottom";
    },
    required: false
  },
  offset: {
    type: Number,
    default: 12,
    required: false
  },
  showArrow: {
    type: Boolean,
    default: false,
    required: false
  },
  style: {
    type: Object,
    default() {
      return {};
    }
  },
  class: {
    default: ""
  },
  flip: {
    type: Boolean,
    default: false
  },
  clickOutsideIgnore: {
    type: Array,
    default: []
  },
  memo: Boolean
};
const index$j = "";
const useOverlay = (overlayEl, props) => {
  const x = ref(0);
  const y = ref(0);
  const shouldShow = ref(true);
  const realPosition = ref(props.position);
  const { modelValue, origin, position, offset, flip } = toRefs(props);
  const updatePosition = async () => {
    if (!overlayEl.value)
      return;
    if (!origin.value) {
      shouldShow.value = false;
      return;
    }
    let el;
    if (origin.value.$el) {
      el = origin.value.$el;
    } else {
      el = origin.value;
    }
    while (el && !el.tagName) {
      el = el.nextSibling;
    }
    const { top, left, bottom, right, width, height } = el.getBoundingClientRect();
    if (width === 0 && height === 0) {
      shouldShow.value = false;
      return;
    } else {
      shouldShow.value = true;
    }
    const clientWidth = overlayEl.value.clientWidth;
    const clientHeight = overlayEl.value.clientHeight;
    const w = (width - clientWidth) / 2;
    const h2 = (height - clientHeight) / 2;
    x.value = left + w;
    y.value = top + h2;
    let pos = position.value;
    if (flip.value) {
      const windowHeight = document.documentElement.clientHeight;
      const windowWidth = document.documentElement.clientWidth;
      if (top < clientHeight)
        pos = pos.replace("top", "bottom");
      if (windowHeight - bottom < clientHeight)
        pos = pos.replace("bottom", "top");
      if (left < clientWidth)
        pos = pos.replace("left", "right");
      if (windowWidth - right < clientWidth)
        pos = pos.replace("right", "left");
    }
    realPosition.value = pos;
    const leftAndRightHandle = () => {
      if (pos.includes("start"))
        x.value -= w;
      if (pos.includes("end"))
        x.value += w;
    };
    const topAndBottomHandle = () => {
      if (pos.includes("start"))
        y.value -= h2;
      if (pos.includes("end"))
        y.value += h2;
    };
    if (pos.includes("left")) {
      x.value = left - clientWidth - offset.value;
      topAndBottomHandle();
    } else if (pos.includes("top")) {
      y.value = top - clientHeight - offset.value;
      leftAndRightHandle();
    } else if (pos.includes("right")) {
      x.value = right + offset.value;
      topAndBottomHandle();
    } else if (pos.includes("bottom")) {
      y.value = bottom + offset.value;
      leftAndRightHandle();
    }
  };
  watchEffect((onCleanup) => {
    onCleanup(() => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    });
    if (modelValue.value) {
      updatePosition();
      window.addEventListener("scroll", updatePosition);
      window.addEventListener("resize", updatePosition);
    }
  });
  useResizeObserver(toRef(props, "origin"), () => {
    updatePosition();
  });
  useResizeObserver(overlayEl, () => {
    updatePosition();
  });
  const isVisible = computed(() => modelValue.value && shouldShow.value);
  return {
    x,
    y,
    isVisible,
    realPosition
  };
};
const __default__$x = defineComponent({
  name: "POverlay",
  props: overlayProps,
  emits: ["update:modelValue", "open", "close", "outsideClick"],
  setup(props, {
    slots,
    emit,
    expose
  }) {
    const {
      showArrow,
      class: className,
      style,
      origin
    } = toRefs(props);
    const ns2 = useNamespace("overlay");
    const overlayEl = ref();
    const {
      x,
      y,
      isVisible,
      realPosition
    } = useOverlay(overlayEl, props);
    onClickOutside(overlayEl, () => {
      emit("outsideClick");
    }, {
      ignore: [origin, ...props.clickOutsideIgnore]
    });
    const styles = computed(() => ({
      top: y.value + "px",
      left: x.value + "px",
      ...style.value
    }));
    const classes = computed(() => ({
      [ns2.b()]: true,
      [ns2.m(realPosition.value)]: true,
      [className.value]: true,
      [ns2.m("dark")]: props.dark
    }));
    const animationName = computed(() => "pui-" + ["bottom", "top", "left", "right"].find((item) => realPosition.value.includes(item)));
    expose({
      el: overlayEl
    });
    const renderShow = () => withDirectives(createVNode("div", {
      "style": styles.value,
      "class": classes.value,
      "ref": overlayEl
    }, [slots.default && slots.default(), showArrow.value && createVNode("span", {
      "class": ns2.e("arrow")
    }, null)]), [[vShow, isVisible.value]]);
    const renderIf = () => {
      return isVisible.value && createVNode("div", {
        "style": styles.value,
        "class": classes.value,
        "ref": overlayEl
      }, [slots.default && slots.default(), showArrow.value && createVNode("span", {
        "class": ns2.e("arrow")
      }, null)]);
    };
    return () => {
      return createVNode(Teleport, {
        "to": "body"
      }, {
        default: () => [createVNode(Transition, {
          "name": animationName.value,
          "onBeforeEnter": (e) => emit("open"),
          "onAfterLeave": (e) => emit("close")
        }, {
          default: () => [props.memo ? renderShow() : renderIf()]
        })]
      });
    };
  }
});
const Overlay = __default__$x;
const __moduleId$x = "../promiseui/overlay/src/overlay.tsx";
ssrRegisterHelper(__default__$x, __moduleId$x);
const OverlayInstall = {
  title: "Overlay 遮罩层",
  category: "通用",
  status: "100%",
  install(app) {
    app.component(Overlay.name, Overlay);
  }
};
const dropdownProps = {
  type: {
    type: String,
    default: ""
  },
  position: {
    type: String,
    default: "bottom"
  },
  dark: {
    type: Boolean,
    default: false
  },
  trigger: {
    type: String,
    default: "hover"
  },
  hideOnClick: {
    type: Boolean,
    default: true
  },
  // btn size
  size: {
    type: String,
    default: "md"
  },
  offset: {
    type: Number,
    default: 3
  },
  showArrow: {
    type: Boolean,
    default: false,
    required: false
  },
  btnType: {
    type: String,
    default: "primary"
  }
};
const dropdownItemProps = {
  size: {
    type: String,
    default: "md"
  },
  disabled: {
    type: Boolean,
    default: false
  }
};
const DropDownKey = Symbol("dropdown");
function useEvent(trigger, origin, overlayEl, visible) {
  let timer;
  const onClick = () => {
    if (trigger.value === "click") {
      visible.value = !visible.value;
    }
  };
  const handleLeave = () => {
    visible.value = false;
  };
  const onMouseenter = (e) => {
    if (trigger.value === "hover") {
      clearTimeout(timer);
      visible.value = true;
    }
  };
  const onMouseleave = (e) => {
    if (trigger.value === "hover") {
      clearTimeout(timer);
      timer = window.setTimeout(handleLeave, 300);
    }
  };
  return { onClick, onMouseenter, onMouseleave };
}
const index$i = "";
const __default__$w = defineComponent({
  name: "PDropdown",
  props: dropdownProps,
  emits: ["click"],
  setup(props, {
    slots,
    emit,
    expose
  }) {
    const {
      type,
      trigger,
      offset,
      position,
      showArrow,
      size,
      btnType,
      dark
    } = toRefs(props);
    const origin = ref(null);
    const visible = ref(false);
    const overlayEl = ref();
    const ns2 = useNamespace("dropdown");
    provide(DropDownKey, {
      handleClick() {
        visible.value = false;
      },
      props
    });
    const onOutsideClick = () => visible.value = false;
    const {
      onClick,
      onMouseenter,
      onMouseleave
    } = useEvent(trigger, origin, overlayEl, visible);
    const commonProps = {
      onMouseenter,
      onMouseleave,
      onClick,
      ref: origin
    };
    const renderLink = () => {
      var _a;
      return createVNode("span", mergeProps({
        "class": [ns2.e("a"), ns2.em(props.type, props.size)]
      }, commonProps), [(_a = slots.default) == null ? void 0 : _a.call(slots), createVNode(Icon, null, {
        default: () => [createVNode(ChevronDownOutline, null, null)]
      })]);
    };
    const renderButton = () => createVNode("div", {
      "class": [ns2.e("button-group")]
    }, [createVNode(Button, {
      "type": btnType.value,
      "shake": false,
      "size": size.value,
      "onClick": (e) => emit("click", e)
    }, {
      default: () => {
        var _a;
        return [(_a = slots.default) == null ? void 0 : _a.call(slots)];
      }
    }), createVNode(Button, mergeProps({
      "type": btnType.value,
      "shake": false,
      "size": size.value
    }, commonProps), {
      default: () => [createVNode(Icon, null, {
        default: () => [createVNode(ChevronDownOutline, null, null)]
      })]
    })]);
    const renderSlotDefault = () => {
      var _a;
      return createVNode("div", mergeProps({
        "class": ns2.e("content")
      }, commonProps), [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    };
    expose({
      hide() {
        visible.value = false;
      }
    });
    return () => createVNode("div", {
      "class": ns2.b()
    }, [type.value === "a" ? renderLink() : type.value === "button" ? renderButton() : renderSlotDefault(), createVNode(Overlay, {
      "origin": origin,
      "modelValue": visible.value,
      "onUpdate:modelValue": ($event) => visible.value = $event,
      "offset": offset.value,
      "position": type.value === "button" ? "bottom-end" : position.value,
      "showArrow": showArrow.value,
      "dark": dark.value,
      "style": {
        padding: 0
      },
      "flip": true,
      "onOutsideClick": onOutsideClick
    }, {
      default: () => [createVNode("div", {
        "class": ns2.e("overlay"),
        "ref": overlayEl,
        "onMouseenter": onMouseenter,
        "onMouseleave": onMouseleave
      }, [slots.dropdown && slots.dropdown()])]
    })]);
  }
});
const Dropdown = __default__$w;
const __moduleId$w = "../promiseui/dropdown/src/dropdown.tsx";
ssrRegisterHelper(__default__$w, __moduleId$w);
const __default__$v = defineComponent({
  name: "PDropdownItem",
  props: dropdownItemProps,
  setup(props, {
    slots
  }) {
    const {
      size: propsSize,
      disabled
    } = toRefs(props);
    const DropDown = inject(DropDownKey);
    const ns2 = useNamespace("dropdown-item");
    const classes = computed(() => [ns2.b(), ns2.m((DropDown == null ? void 0 : DropDown.props.size) || propsSize.value), disabled.value && ns2.m("disabled"), (DropDown == null ? void 0 : DropDown.props.dark) && ns2.m("dark")]);
    const onClick = () => {
      if (DropDown == null ? void 0 : DropDown.props.hideOnClick) {
        if (disabled.value)
          return;
        DropDown.handleClick();
      }
    };
    return () => createVNode("div", {
      "class": classes.value,
      "onClick": onClick
    }, [slots.default && slots.default()]);
  }
});
const DropdownItem = __default__$v;
const __moduleId$v = "../promiseui/dropdown/src/dropdown-item.tsx";
ssrRegisterHelper(__default__$v, __moduleId$v);
const DropdownInstall = {
  title: "Dropdown 下拉菜单",
  category: "导航",
  status: "100%",
  install(app) {
    app.component(Dropdown.name, Dropdown);
    app.component(DropdownItem.name, DropdownItem);
  }
};
const tabsProps = {
  modelValue: {
    type: [String, Number],
    default: ""
  },
  type: {
    type: String,
    default: "line"
  },
  closable: { type: Boolean, default: true },
  size: {
    type: String,
    default: "md"
  },
  justifyContent: {
    type: String,
    default: "unset"
  },
  tabPosition: {
    type: String
  },
  onBeforeLeave: {
    type: Function
  },
  animated: {
    type: Boolean,
    default: false
  }
};
const tabPaneProps = {
  label: {
    type: String,
    default: ""
  },
  disabled: {
    type: Boolean,
    default: false
  },
  name: {
    type: [String, Number],
    default: ""
  },
  closable: { type: Boolean, default: true },
  lazy: {
    type: Boolean,
    default: false
  }
};
const TabsKey = Symbol("tabsKey");
const index$h = "";
function useTabs(props, ctx) {
  const { renderContent, contentVnode } = useRenderContent();
  const { getPaneIndex, updateTranstionName, transitionName } = useTransitionName();
  const activeBarStyles = reactive({
    left: "unset",
    width: "unset"
  });
  const changeActiveBarPosition = (left, width) => {
    activeBarStyles.left = left;
    activeBarStyles.width = width;
  };
  let oldName = null;
  const onBeforeLeaveHook = async (name) => {
    if (!props.onBeforeLeave)
      return true;
    const res = await props.onBeforeLeave(name, oldName);
    if (!res)
      return false;
    oldName = name;
    return true;
  };
  const updateModelValue = async (name, paneIndex) => {
    if (name === props.modelValue)
      return;
    const allow = await onBeforeLeaveHook(name);
    if (!allow)
      return;
    ctx.emit("update:modelValue", name);
    updateTranstionName(paneIndex);
  };
  const handleClose = (name, defaultSlot) => {
    ctx.emit("close", name);
  };
  provide(TabsKey, {
    props,
    renderContent,
    updateModelValue,
    getPaneIndex,
    onBeforeLeaveHook,
    handleClose,
    changeActiveBarPosition
  });
  return {
    transitionName,
    activeBarStyles,
    contentVnode,
    changeActiveBarPosition
  };
}
const useRenderContent = (props) => {
  const defaultSlotMap = /* @__PURE__ */ new WeakMap();
  const contentVnode = ref(null);
  const renderContent = (defaultSlot) => {
    if (!defaultSlot)
      return;
    if (defaultSlotMap.has(defaultSlot)) {
      contentVnode.value = defaultSlotMap.get(defaultSlot);
      return;
    }
    const vnode = defaultSlot();
    defaultSlotMap.set(defaultSlotMap, vnode);
    contentVnode.value = vnode;
  };
  return {
    renderContent,
    contentVnode
  };
};
const useTransitionName = () => {
  let paneIndex = 0;
  const currentPaneIndex = ref(paneIndex);
  const transitionName = ref("prev-transition");
  const getPaneIndex = () => {
    return paneIndex++;
  };
  const updateTranstionName = (paneIndex2) => {
    transitionName.value = currentPaneIndex.value > paneIndex2 ? "prev-transition" : "next-transition";
    currentPaneIndex.value = paneIndex2;
  };
  return {
    getPaneIndex,
    updateTranstionName,
    transitionName
  };
};
const useVerticalWheel = (target, options) => {
  const { step = 50, smooth = false } = options || {};
  function onWheelHandle(event) {
    if (!target.value)
      return;
    if (target.value.clientWidth >= target.value.scrollWidth)
      return;
    const _this = target.value;
    event.preventDefault();
    if (event.deltaY < 0) {
      _this.scrollTo({
        left: _this.scrollLeft - step,
        behavior: smooth ? "smooth" : void 0
      });
    } else {
      _this.scrollTo({
        left: _this.scrollLeft + step,
        behavior: smooth ? "smooth" : void 0
      });
    }
  }
  onMounted(() => {
    if (!target.value)
      return;
    target.value.addEventListener("wheel", onWheelHandle);
  });
  onUnmounted(() => {
    if (!target.value)
      return;
    target.value.removeEventListener("wheel", onWheelHandle);
  });
};
const __default__$u = defineComponent({
  name: "PTabs",
  props: tabsProps,
  emits: ["update:modelValue", "change", "close", "addTabPane"],
  setup(props, ctx) {
    const {
      slots,
      emit
    } = ctx;
    const {
      type,
      justifyContent,
      modelValue,
      animated
    } = toRefs(props);
    const tabsHeaderEl = ref(null);
    const ns2 = useNamespace("tabs");
    const {
      transitionName,
      activeBarStyles,
      contentVnode,
      changeActiveBarPosition
    } = useTabs(props, ctx);
    const handleAddPane = () => {
      emit("addTabPane");
      nextTick(() => {
        var _a, _b;
        (_b = tabsHeaderEl.value) == null ? void 0 : _b.scrollTo({
          left: (_a = tabsHeaderEl.value) == null ? void 0 : _a.scrollWidth,
          behavior: "smooth"
        });
      });
    };
    useVerticalWheel(tabsHeaderEl);
    const _instance = getCurrentInstance();
    const proxy = _instance ? _instance.proxy : {
      $el: null
    };
    watch(() => props.modelValue, async (name) => {
      emit("change", name);
      if (!proxy)
        return;
      if (!proxy.$el)
        return;
      const tabPaneEl = proxy.$el.querySelector(`[data-name='${name}']`);
      if (!tabPaneEl)
        return;
      const width = tabPaneEl.clientWidth;
      const left = tabPaneEl.offsetLeft;
      changeActiveBarPosition(left + "px", width + "px");
    });
    return () => {
      return createVNode("div", {
        "class": [ns2.b(), ns2.m(type.value)]
      }, [createVNode("div", {
        "class": ns2.e("header-wrapper"),
        "ref": tabsHeaderEl
      }, [createVNode("div", {
        "class": ns2.e("header"),
        "style": {
          justifyContent: justifyContent.value
        }
      }, [slots.default && slots.default(), type.value === "editable-card" && createVNode("div", {
        "class": [ns2.e("pane-add")],
        "onClick": handleAddPane
      }, [createTextVNode("+")]), createVNode("div", {
        "class": ns2.e("active-bar"),
        "style": activeBarStyles
      }, null)])]), createVNode(Transition, {
        "name": animated.value ? transitionName.value : "",
        "mode": "out-in"
      }, {
        default: () => [createVNode("div", {
          "class": ns2.e("content-wrapper"),
          "key": modelValue.value
        }, [createVNode("div", {
          "class": ns2.e("content")
        }, [contentVnode.value])])]
      })]);
    };
  }
});
const Tabs = __default__$u;
const __moduleId$u = "../promiseui/tabs/src/tabs.tsx";
ssrRegisterHelper(__default__$u, __moduleId$u);
const __default__$t = defineComponent({
  __TAB_PANE__: true,
  name: "PTabPane",
  props: tabPaneProps,
  emits: [],
  setup(props, {
    slots,
    emit
  }) {
    const {
      disabled,
      label,
      name,
      lazy,
      closable
    } = toRefs(props);
    const ns2 = useNamespace("tab-pane");
    const TabsContext = inject(TabsKey);
    const TabsProps = TabsContext == null ? void 0 : TabsContext.props;
    const classes = computed(() => ({
      [ns2.b()]: true,
      [ns2.m("disabled")]: disabled.value,
      [ns2.m("active")]: isActive.value
    }));
    const tabPaneEl = ref();
    watch(() => TabsProps == null ? void 0 : TabsProps.modelValue, (newName) => {
      if (!name.value)
        return;
      if (newName === name.value) {
        TabsContext == null ? void 0 : TabsContext.renderContent(slots.default);
      }
    });
    const init = async () => {
      if ((TabsProps == null ? void 0 : TabsProps.modelValue) === name.value) {
        TabsContext == null ? void 0 : TabsContext.renderContent(slots.default);
        await nextTick();
        if (!tabPaneEl.value)
          return;
        const width = tabPaneEl.value.clientWidth;
        const left = tabPaneEl.value.offsetLeft;
        TabsContext == null ? void 0 : TabsContext.changeActiveBarPosition(left + "px", width + "px");
      }
    };
    init();
    const updateTabsContent = () => {
      TabsContext == null ? void 0 : TabsContext.updateModelValue(name.value, currentIndex);
    };
    const currentIndex = (TabsContext == null ? void 0 : TabsContext.getPaneIndex()) || 0;
    if (currentIndex === 0 && (TabsProps == null ? void 0 : TabsProps.modelValue) === "") {
      updateTabsContent();
    }
    const isActive = computed(() => (TabsProps == null ? void 0 : TabsProps.modelValue) === name.value);
    if (isActive.value) {
      updateTabsContent();
    }
    const onClick = () => {
      updateTabsContent();
    };
    const handleClose = (e) => {
      e.stopPropagation();
      if (!closable.value)
        return;
      if (!(TabsContext == null ? void 0 : TabsContext.props.closable))
        return;
      TabsContext.handleClose(name.value, slots.default);
    };
    return () => createVNode("div", {
      "class": classes.value,
      "data-name": name.value,
      "onClick": onClick,
      "ref": tabPaneEl
    }, [label.value, TabsProps && TabsProps.type === "editable-card" && closable.value && createVNode(Icon, {
      "component": CloseOutline,
      "class": ns2.e("close-icon"),
      "onClick": nativeClick(handleClose)
    }, null)]);
  }
});
const TabPane = __default__$t;
const __moduleId$t = "../promiseui/tabs/src/tab-pane.tsx";
ssrRegisterHelper(__default__$t, __moduleId$t);
const TabsInstall = {
  title: "Tabs 标签页",
  category: "导航",
  status: "100%",
  install(app) {
    app.component(Tabs.name, Tabs);
    app.component(TabPane.name, TabPane);
  }
};
const Value = [Boolean, String, Number];
const switchProps = {
  modelValue: {
    type: Value,
    default: false
  },
  size: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: false
  },
  activeText: {
    type: String,
    default: ""
  },
  inactiveText: {
    type: String,
    default: ""
  },
  activeValue: {
    type: Value,
    default: true
  },
  inactiveValue: {
    type: Value,
    default: false
  },
  activeColor: {
    type: String,
    default: "primary"
  },
  onBeforeChange: {
    type: Function
  }
};
const commonType = ["primary", "success", "info", "warning", "danger"];
const index$g = "";
const index$f = "";
const Loading = () => {
  const ns2 = useNamespace("loading-icon");
  return createVNode("svg", {
    "t": "1654517041267",
    "class": ["icon", ns2.b()],
    "viewBox": "0 0 1024 1024",
    "version": "1.1",
    "xmlns": "http://www.w3.org/2000/svg",
    "p-id": "3152",
    "width": "12",
    "height": "12"
  }, [createVNode("path", {
    "d": "M512 0a512 512 0 0 1 512 512h-64a448 448 0 0 0-448-448V0z",
    "p-id": "3153"
  }, null)]);
};
const __default__$s = defineComponent({
  name: "PSwitch",
  props: switchProps,
  emits: ["update:modelValue", "change"],
  setup(props, {
    emit,
    slots
  }) {
    const ns2 = useNamespace("switch");
    const checked = computed(() => {
      return props.modelValue === props.activeValue;
    });
    const loading = ref(false);
    const isCustomActiveColor = computed(() => !commonType.includes(props.activeColor));
    const formSize = useFormSize();
    const selectSize = computed(() => props.size || formSize.value || "md");
    const classes = computed(() => ({
      [ns2.b()]: true,
      [ns2.m(selectSize.value)]: true,
      [ns2.m("checked")]: checked.value,
      [ns2.m(props.activeColor)]: !isCustomActiveColor.value,
      [ns2.m("disabled")]: props.disabled,
      [ns2.m("custom-active-color")]: isCustomActiveColor.value
    }));
    const styles = computed(() => ({
      "--switch-custom-active-color": props.activeColor
    }));
    const onClick = async () => {
      if (props.disabled)
        return;
      if (loading.value)
        return;
      const val = checked.value ? props.inactiveValue : props.activeValue;
      if (props.onBeforeChange) {
        const result = props.onBeforeChange();
        let allow = true;
        if (Object.prototype.toString.call(result) === "[object Promise]") {
          loading.value = true;
          try {
            allow = !!await result;
            loading.value = false;
          } catch (e) {
            loading.value = false;
            throw e;
          }
        } else {
          allow = !!result;
        }
        if (allow)
          emit("update:modelValue", val);
      } else {
        emit("update:modelValue", val);
      }
    };
    watch(() => props.modelValue, (val) => {
      emit("change", val);
    });
    return () => {
      return createVNode(__default__$C, {
        "disabled": props.disabled
      }, {
        default: () => {
          var _a, _b;
          return [createVNode("div", {
            "class": classes.value,
            "style": styles.value,
            "onClick": onClick
          }, [createVNode("div", {
            "class": ns2.e("button")
          }, [loading.value && createVNode(Loading, null, null)]), createVNode("div", {
            "class": ns2.e("message")
          }, [checked.value ? props.activeText : props.inactiveText, checked.value ? (_a = slots.checked) == null ? void 0 : _a.call(slots) : (_b = slots.unChecked) == null ? void 0 : _b.call(slots)])])];
        }
      });
    };
  }
});
const Switch = __default__$s;
const __moduleId$s = "../promiseui/switch/src/switch.tsx";
ssrRegisterHelper(__default__$s, __moduleId$s);
const SwitchInstall = {
  title: "Switch 开关",
  category: "数据录入",
  status: "100%",
  install(app) {
    app.component(Switch.name, Switch);
  }
};
const radioProps = {
  checked: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  label: String,
  name: String,
  value: {
    type: [String, Number, Boolean],
    default: "on"
  },
  modelValue: {
    type: [String, Number, Boolean],
    default: "on"
  },
  size: {
    type: String
  }
};
const radioGroupProps = {
  name: String,
  modelValue: {
    type: [String, Number, Boolean],
    default: "on"
  },
  size: {
    type: String
  }
};
const RadioKey = Symbol("RadioKey");
const index$e = "";
function useRadio(props, { emit }) {
  const RadioContext = inject(RadioKey, void 0);
  const checked = computed(() => {
    const contextModelValue = RadioContext == null ? void 0 : RadioContext.props.modelValue;
    const value = contextModelValue == null ? props.modelValue : contextModelValue;
    return value === props.value;
  });
  const inputName = computed(() => {
    const name = props.name || (RadioContext == null ? void 0 : RadioContext.props.name);
    return name;
  });
  const handleChange = () => {
    if (RadioContext) {
      RadioContext.updateValue(props.value);
    } else {
      emit("update:modelValue", props.value);
    }
  };
  const size = computed(() => (RadioContext == null ? void 0 : RadioContext.props.size) || props.size);
  return {
    checked,
    inputName,
    handleChange,
    size
  };
}
const __default__$r = defineComponent({
  name: "PRadio",
  props: radioProps,
  emits: ["update:modelValue", "change"],
  setup(props, ctx) {
    const {
      slots,
      emit
    } = ctx;
    const ns2 = useNamespace("radio");
    const wareRef = ref();
    const {
      checked,
      inputName,
      handleChange,
      size
    } = useRadio(props, ctx);
    const formSize = useFormSize();
    const radioSize = computed(() => size.value || formSize.value || "md");
    const classes = computed(() => ({
      [ns2.b()]: true,
      [ns2.m("checked")]: checked.value,
      [ns2.m("disabled")]: props.disabled,
      [ns2.m(radioSize.value)]: true
    }));
    watch(() => props.modelValue, () => {
      emit("change", props.modelValue);
    });
    return () => {
      var _a;
      return createVNode("label", {
        "class": classes.value,
        "onClick": (_) => wareRef.value.run()
      }, [createVNode("input", {
        "class": ns2.e("input"),
        "type": "radio",
        "name": inputName.value,
        "onChange": handleChange,
        "value": props.value,
        "disabled": props.disabled,
        "checked": checked.value
      }, null), createVNode(__default__$C, {
        "ref": wareRef
      }, {
        default: () => [createVNode("span", {
          "class": ns2.e("inner")
        }, null)]
      }), createVNode("span", {
        "class": ns2.e("label")
      }, [((_a = slots.default) == null ? void 0 : _a.call(slots)) || props.label])]);
    };
  }
});
const Radio = __default__$r;
const __moduleId$r = "../promiseui/radio/src/radio.tsx";
ssrRegisterHelper(__default__$r, __moduleId$r);
const __default__$q = defineComponent({
  name: "PRadioGroup",
  props: radioGroupProps,
  emits: ["update:modelValue", "change"],
  setup(props, {
    slots,
    emit
  }) {
    const ns2 = useNamespace("radio-group");
    const updateValue = (value) => {
      emit("update:modelValue", value);
    };
    watch(() => props.modelValue, () => {
      emit("change", props.modelValue);
    });
    provide(RadioKey, {
      props,
      updateValue
    });
    return () => {
      var _a;
      return createVNode("div", {
        "class": ns2.b()
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    };
  }
});
const RadioGroup = __default__$q;
const __moduleId$q = "../promiseui/radio/src/radio-group.tsx";
ssrRegisterHelper(__default__$q, __moduleId$q);
const __default__$p = defineComponent({
  name: "PRadioButton",
  props: radioProps,
  emits: ["update:modelValue", "change"],
  setup(props, ctx) {
    const {
      slots,
      emit
    } = ctx;
    const ns2 = useNamespace("radio-button");
    const wareRef = ref();
    const {
      checked,
      inputName,
      handleChange,
      size
    } = useRadio(props, ctx);
    const formSize = useFormSize();
    const radioSize = computed(() => size.value || formSize.value || "md");
    const classes = computed(() => ({
      [ns2.b()]: true,
      [ns2.m("checked")]: checked.value,
      [ns2.m("disabled")]: props.disabled,
      [ns2.m(radioSize.value)]: true
    }));
    watch(() => props.modelValue, () => {
      emit("change", props.modelValue);
    });
    return () => {
      return createVNode(__default__$C, {
        "ref": wareRef
      }, {
        default: () => {
          var _a;
          return [createVNode("label", {
            "class": classes.value,
            "onClick": (_) => wareRef.value.run()
          }, [createVNode("input", {
            "class": ns2.e("input"),
            "type": "radio",
            "name": inputName.value,
            "onChange": handleChange,
            "value": props.value,
            "disabled": props.disabled,
            "checked": checked.value
          }, null), createVNode("span", {
            "class": ns2.e("label")
          }, [((_a = slots.default) == null ? void 0 : _a.call(slots)) || props.label])])];
        }
      });
    };
  }
});
const __moduleId$p = "../promiseui/radio/src/radio-button.tsx";
ssrRegisterHelper(__default__$p, __moduleId$p);
const RadioInstall = {
  title: "Radio 单选框",
  category: "数据录入",
  status: "100%",
  install(app) {
    app.component(Radio.name, Radio);
    app.component(RadioGroup.name, RadioGroup);
    app.component(__default__$p.name, __default__$p);
  }
};
const checkboxProps = {
  modelValue: {
    type: Boolean,
    default: false
  },
  label: String,
  value: [Boolean, String, Number],
  disabled: {
    type: Boolean,
    default: false
  },
  indeterminate: {
    //部分选择
    type: Boolean,
    default: false
  },
  size: {
    type: String
  }
};
const checkboxGroupProps = {
  modelValue: {
    type: Array,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  max: {
    type: Number,
    default: Infinity
  },
  min: {
    type: Number,
    default: -Infinity
  },
  size: {
    type: String
  }
};
const checkBoxKey = Symbol("checkBoxKey");
const index$d = "";
function useCheckbox(props, ctx) {
  const CheckboxContext = inject(checkBoxKey, void 0);
  const initialChecked = () => {
    if (props.value === void 0) {
      return false;
    }
    if (CheckboxContext) {
      const modelValue = CheckboxContext.props.modelValue;
      return Array.isArray(modelValue) ? modelValue.includes(props.value) : false;
    }
    return props.modelValue === true;
  };
  const initial = initialChecked();
  const checked = ref(initial);
  const handleClick = () => {
    if (disabled.value)
      return;
    if (CheckboxContext) {
      checked.value = !checked.value;
      const value = props.value;
      if (!value)
        return;
      const { addValue, removeValue } = CheckboxContext;
      checked.value ? addValue(value) : removeValue(value);
    } else {
      ctx.emit("update:modelValue", !props.modelValue);
      ctx.emit("change", !props.modelValue);
    }
  };
  const { triggerValidate } = useFormItem();
  watch(
    () => props.modelValue,
    () => {
      checked.value = props.modelValue;
    }
  );
  watch(checked, () => {
    triggerValidate("change");
    triggerValidate("blur");
  });
  watch(
    () => CheckboxContext == null ? void 0 : CheckboxContext.props.modelValue,
    (valueArr) => {
      if (!props.value || !Array.isArray(valueArr))
        return;
      checked.value = valueArr.includes(props.value);
    }
  );
  const disabled = computed(() => {
    if (props.disabled || (CheckboxContext == null ? void 0 : CheckboxContext.props.disabled))
      return true;
    return false;
  });
  const size = computed(() => {
    return (CheckboxContext == null ? void 0 : CheckboxContext.props.size) || props.size;
  });
  return {
    handleClick,
    checked,
    disabled,
    size
  };
}
const __default__$o = defineComponent({
  name: "PCheckbox",
  props: checkboxProps,
  emits: ["update:modelValue", "change"],
  setup(props, ctx) {
    const ns2 = useNamespace("checkbox");
    const {
      handleClick,
      checked,
      disabled,
      size
    } = useCheckbox(props, ctx);
    const formSize = useFormSize();
    const checkBox = computed(() => size.value || formSize.value || "md");
    const classes = computed(() => ({
      [ns2.b()]: true,
      [ns2.m(checkBox.value)]: true,
      [ns2.m("checked")]: checked.value || props.indeterminate,
      [ns2.m("disabled")]: disabled.value
    }));
    const renderIcon = () => {
      if (props.indeterminate || checked.value) {
        return createVNode(Icon, {
          "component": props.indeterminate ? RemoveSharp : CheckmarkSharp,
          "color": "#ffffff"
        }, null);
      }
      return null;
    };
    return () => {
      return createVNode("div", {
        "class": classes.value,
        "onClick": handleClick
      }, [createVNode(__default__$C, null, {
        default: () => [createVNode("div", {
          "class": ns2.e("border")
        }, [createVNode("div", {
          "class": ns2.e("icon")
        }, [renderIcon()])])]
      }), props.label && createVNode("label", {
        "class": ns2.e("label")
      }, [props.label])]);
    };
  }
});
const Checkbox = __default__$o;
const __moduleId$o = "../promiseui/checkbox/src/checkbox.tsx";
ssrRegisterHelper(__default__$o, __moduleId$o);
const __default__$n = defineComponent({
  name: "PCheckboxGroup",
  props: checkboxGroupProps,
  emits: ["update:modelValue", "change"],
  setup(props, {
    slots,
    emit
  }) {
    const ns2 = useNamespace("checkbox-group");
    const addValue = (value) => {
      if (!Array.isArray(props.modelValue))
        return;
      const newValues = [...new Set(props.modelValue.concat(value))];
      emit("update:modelValue", newValues);
    };
    const removeValue = (value) => {
      if (!Array.isArray(props.modelValue))
        return;
      const filterValues = props.modelValue.filter((item) => item !== value);
      emit("update:modelValue", filterValues);
    };
    watch(() => props.modelValue, () => emit("change", props.modelValue));
    provide(checkBoxKey, {
      props,
      addValue,
      removeValue
    });
    return () => {
      var _a;
      return createVNode("div", {
        "class": ns2.b()
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    };
  }
});
const CheckboxGroup = __default__$n;
const __moduleId$n = "../promiseui/checkbox/src/checkbox-group.tsx";
ssrRegisterHelper(__default__$n, __moduleId$n);
const CheckboxInstall = {
  title: "Checkbox 多选框",
  category: "数据录入",
  status: "100%",
  install(app) {
    app.component(Checkbox.name, Checkbox);
    app.component(CheckboxGroup.name, CheckboxGroup);
  }
};
const selectActiveKey = Symbol.for("promiseui-select-active");
const selectProps = {
  options: {
    type: Array
  },
  renderLabel: {
    type: Function
  },
  disabled: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: [String, Number, Array]
  },
  clearable: {
    type: Boolean,
    default: false
  },
  filterOption: {
    type: Function
  },
  filterable: {
    type: Boolean,
    default: false
  },
  filterMethod: {
    type: Function
  },
  maxTagCount: {
    type: Number,
    default: Infinity
  },
  maxOptionCount: {
    type: Number,
    default: 10
  },
  multiple: Boolean,
  multipleLimit: {
    type: Number,
    default: Infinity
  },
  tagType: {
    type: String,
    default: "default"
  },
  addible: Boolean,
  placeholder: {
    type: String,
    default: "select"
  },
  status: {
    type: String
  },
  size: {
    type: String
  }
};
const index$c = "";
const virtualScrollProps = {
  itemHeight: {
    type: Number,
    required: true
  },
  wrapHeight: Number,
  listData: {
    type: Array,
    default: []
  },
  itemKey: {
    type: String
  },
  itemClass: {
    type: [Object, Array, String, Function]
  },
  itemStyle: {
    type: [String, Object, Function]
  },
  onLoadMore: {
    type: Function
  },
  loadMoreOffset: {
    type: Number,
    default: 1
  },
  keepAlive: Boolean
};
const index$b = "";
const scrollbarProps = {
  height: String,
  width: String,
  maxHeight: String,
  wrapStyle: {
    type: [String, Object],
    default: ""
  },
  wrapClass: String,
  viewStyle: {
    type: [String, Object],
    default: ""
  },
  viewClass: String,
  always: {
    type: Boolean,
    default: false
  },
  minSize: {
    type: Number,
    default: 20
  }
};
const index$a = "";
const __default__$m = defineComponent({
  props: {
    minSize: {
      type: Number,
      default: 20
    },
    heightRatio: {
      type: Number,
      required: true
    },
    widthRatio: {
      type: Number,
      required: true
    },
    scrollXRatio: {
      type: Number,
      required: true
    },
    scrollYRatio: {
      type: Number,
      required: true
    },
    isShowYBar: Boolean,
    isShowXBar: Boolean,
    scrollByOffset: {
      type: Function,
      required: false
    }
  },
  emits: ["mousedown", "mouseup"],
  setup(props, {
    emit
  }) {
    const ns2 = useNamespace("scrollbar");
    const isY = ref(true);
    const xBarStyle = computed(() => ({
      minWidth: props.isShowXBar ? props.minSize + "px" : 0,
      width: props.widthRatio * 100 + "%",
      left: props.scrollXRatio * 100 + "%"
    }));
    const yBarStyle = computed(() => ({
      minHeight: props.isShowYBar ? props.minSize + "px" : 0,
      height: props.heightRatio * 100 + "%",
      top: props.scrollYRatio * 100 + "%"
    }));
    const isMouseDown = ref(false);
    const startPageY = ref(0);
    const startPageX = ref(0);
    const handleMouseup = (e) => {
      emit("mouseup");
      isMouseDown.value = false;
      window.removeEventListener("mousemove", handleMousemove);
    };
    const addEvents2 = () => {
      window.addEventListener("mouseup", handleMouseup);
      window.addEventListener("mousemove", handleMousemove);
    };
    const onMousedown = (e, _isY) => {
      emit("mousedown");
      if (isMouseDown.value)
        return;
      isY.value = _isY;
      isMouseDown.value = true;
      if (isY.value) {
        startPageY.value = e.pageY;
      } else {
        startPageX.value = e.pageX;
      }
      addEvents2();
    };
    const handleMousemove = useThrottleFn((e) => {
      if (props.scrollByOffset) {
        if (isY.value) {
          props.scrollByOffset(e.pageY - startPageY.value, true);
          startPageY.value = e.pageY;
        } else {
          props.scrollByOffset(e.pageX - startPageX.value, false);
          startPageX.value = e.pageX;
        }
      }
    }, 16.7);
    return () => createVNode(Fragment, null, [createVNode(Transition, {
      "name": "fade"
    }, {
      default: () => [withDirectives(createVNode("div", {
        "class": ns2.e("bar_x"),
        "style": xBarStyle.value,
        "onMousedown": (e) => onMousedown(e, false)
      }, null), [[vShow, props.isShowXBar]])]
    }), createVNode(Transition, {
      "name": "fade"
    }, {
      default: () => [withDirectives(createVNode("div", {
        "class": ns2.e("bar_y"),
        "style": yBarStyle.value,
        "onMousedown": (e) => onMousedown(e, true)
      }, null), [[vShow, props.isShowYBar]])]
    })]);
  }
});
const __moduleId$m = "../promiseui/scrollbar/src/scroll-bar.tsx";
ssrRegisterHelper(__default__$m, __moduleId$m);
const __default__$l = defineComponent({
  name: "PScrollbar",
  props: scrollbarProps,
  emits: ["scroll", "native-scroll"],
  setup(props, {
    slots,
    expose,
    emit
  }) {
    const ns2 = useNamespace("scrollbar");
    const isEnter = ref(false);
    const isMouseDown = ref(false);
    const viewEl = ref(null);
    const heightRatio = ref(0);
    const widthRatio = ref(0);
    const scrollYRatio = ref(0);
    const scrollXRatio = ref(0);
    const handleHeightAndWidthRatio = () => {
      const el = viewEl.value;
      heightRatio.value = el.clientHeight / el.scrollHeight;
      widthRatio.value = el.clientWidth / el.scrollWidth;
    };
    onMounted(handleHeightAndWidthRatio);
    useResizeObserver(viewEl, handleHeightAndWidthRatio);
    useMutationObserver(viewEl, handleHeightAndWidthRatio, {
      subtree: true,
      childList: true
    });
    let prev = 0;
    const onScroll = (e) => {
      emit("native-scroll", e);
      const now = Date.now();
      if (now - prev < 16.7)
        return;
      const el = viewEl.value;
      scrollYRatio.value = el.scrollTop / el.scrollHeight;
      scrollXRatio.value = el.scrollLeft / el.scrollWidth;
      emit("scroll", e);
      prev = now;
    };
    const scrollByOffset = (offset, isY) => {
      if (!viewEl.value)
        return;
      if (isY) {
        viewEl.value.scrollTop += offset / heightRatio.value;
      } else {
        viewEl.value.scrollLeft += offset / widthRatio.value;
      }
    };
    const isShowYBar = computed(() => {
      if (heightRatio.value >= 1)
        return false;
      if (props.always) {
        return true;
      } else {
        return isEnter.value || isMouseDown.value;
      }
    });
    const isShowXBar = computed(() => {
      if (widthRatio.value >= 1)
        return false;
      if (props.always) {
        return true;
      } else {
        return isEnter.value || isMouseDown.value;
      }
    });
    const wrapClasses = computed(() => [ns2.e("wrap"), props.wrapClass]);
    const viewClasses = computed(() => [ns2.e("view"), props.viewClass]);
    const wrapStyles = computed(() => [{
      height: props.height,
      width: props.width,
      maxHeight: props.maxHeight
    }, props.wrapStyle]);
    const viewStyles = computed(() => [{
      height: "100%",
      width: "100%",
      maxHeight: props.maxHeight
    }, props.viewStyle]);
    const scrollTo = (options) => {
      viewEl.value && viewEl.value.scrollTo(options);
    };
    const scrollBy = (options) => {
      viewEl.value && viewEl.value.scrollBy(options);
    };
    expose({
      scrollTo,
      scrollBy,
      getEl() {
        return viewEl.value;
      }
    });
    return () => {
      var _a;
      return createVNode("div", {
        "class": wrapClasses.value,
        "style": wrapStyles.value,
        "onMouseenter": () => isEnter.value = true,
        "onMouseleave": () => isEnter.value = false
      }, [createVNode("div", {
        "class": viewClasses.value,
        "style": viewStyles.value,
        "ref": viewEl,
        "onScroll": withModifiers(onScroll, ["passive"])
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]), createVNode(__default__$m, {
        "minSize": props.minSize,
        "heightRatio": heightRatio.value,
        "widthRatio": widthRatio.value,
        "scrollYRatio": scrollYRatio.value,
        "scrollXRatio": scrollXRatio.value,
        "scrollByOffset": scrollByOffset,
        "isShowXBar": isShowXBar.value,
        "isShowYBar": isShowYBar.value,
        "onMousedown": () => isMouseDown.value = true,
        "onMouseup": () => isMouseDown.value = false
      }, null)]);
    };
  }
});
const Scrollbar = __default__$l;
const __moduleId$l = "../promiseui/scrollbar/src/scrollbar.tsx";
ssrRegisterHelper(__default__$l, __moduleId$l);
const ScrollbarInstall = {
  title: "Scrollbar 滚动条",
  category: "通用",
  status: "100%",
  install(app) {
    app.component(Scrollbar.name, Scrollbar);
  }
};
const __default__$k = defineComponent({
  name: "PVirtualScroll",
  props: virtualScrollProps,
  emits: ["item-click", "item-mouseenter", "item-mouseleave"],
  setup(props, {
    expose,
    slots,
    emit
  }) {
    const scrollContainer = ref(null);
    const scrollbar$ = ref();
    const ns2 = useNamespace("virtualScroll");
    const containSize = ref(0);
    const visibleStartIndex = ref(0);
    watch(() => props.listData, () => {
      getContainSize();
    });
    const visibleEndIndex = computed(() => {
      const _endIndex = visibleStartIndex.value + containSize.value;
      const allLen = props.listData.length;
      if (_endIndex > allLen) {
        return allLen;
      }
      return _endIndex;
    });
    const realStartIndex = computed(() => {
      if (visibleStartIndex.value < containSize.value) {
        return 0;
      } else {
        return visibleStartIndex.value - containSize.value;
      }
    });
    const realEndIndex = computed(() => {
      const allLen = props.listData.length;
      if (visibleEndIndex.value + containSize.value > allLen) {
        return allLen;
      }
      return visibleEndIndex.value + containSize.value;
    });
    const isLoadMore = ref(false);
    const containerStyles = computed(() => ({
      paddingTop: realStartIndex.value * props.itemHeight + "px",
      paddingBottom: (props.listData.length - visibleEndIndex.value + containSize.value) * props.itemHeight + "px",
      height: "100%"
    }));
    const showList = computed(() => {
      return props.listData.slice(realStartIndex.value, realEndIndex.value);
    });
    const getContainSize = () => {
      containSize.value = Math.floor((props.wrapHeight || 0) / props.itemHeight);
    };
    let timer = null;
    const handleScroll = async (e) => {
      if (!scrollContainer.value)
        return;
      if (timer)
        return;
      timer = requestAnimationFrame(() => timer = null);
      visibleStartIndex.value = Math.floor(scrollContainer.value.scrollTop / props.itemHeight);
      if (props.onLoadMore && !isLoadMore.value) {
        const target = e.target;
        if (target.scrollHeight <= target.clientHeight + target.scrollTop + props.loadMoreOffset) {
          handleLoadMore();
        }
      }
    };
    const handleLoadMore = async () => {
      if (typeof props.onLoadMore === "function") {
        isLoadMore.value = true;
        try {
          const message = await props.onLoadMore();
          if (message)
            Message$1.success(message);
          isLoadMore.value = false;
        } catch (err) {
          if (typeof err === "string") {
            Message$1.error(err);
          } else {
            Message$1.error(err.message);
          }
          isLoadMore.value = false;
          console.error(err);
        }
      }
    };
    onMounted(() => {
      scrollContainer.value = scrollbar$.value.getEl();
      getContainSize();
      window.addEventListener("resize", getContainSize);
      window.addEventListener("orientationchange", getContainSize);
    });
    onUnmounted(() => {
      window.removeEventListener("resize", getContainSize);
      window.removeEventListener("orientationchange", getContainSize);
    });
    const scrollToIndex = (index2, option) => {
      var _a, _b;
      const {
        behavior,
        offset
      } = option || {
        behavior: "smooth",
        offset: 0
      };
      if (offset === "bottom") {
        (_a = scrollContainer.value) == null ? void 0 : _a.scrollTo({
          top: index2 * props.itemHeight - props.itemHeight * (containSize.value - 1),
          behavior
        });
      } else {
        (_b = scrollContainer.value) == null ? void 0 : _b.scrollTo({
          top: index2 * props.itemHeight + offset,
          behavior
        });
      }
    };
    expose({
      scrollTo: (option) => {
        var _a;
        return (_a = scrollContainer.value) == null ? void 0 : _a.scrollTo(option);
      },
      scrollBy: (option) => {
        var _a;
        return (_a = scrollContainer.value) == null ? void 0 : _a.scrollBy(option);
      },
      scrollToIndex,
      scrollToEnd(option) {
        scrollToIndex(props.listData.length - 1, option);
      },
      scrollToStart(option) {
        scrollToIndex(0, option);
      },
      scrollToItem(findItemFn, option) {
        const index2 = props.listData.findIndex(findItemFn);
        if (index2 === -1)
          return;
        scrollToIndex(index2, option);
      },
      setScrollTop(value) {
        scrollContainer.value && (scrollContainer.value.scrollTop = value);
      },
      getScrollTop() {
        var _a;
        return ((_a = scrollContainer.value) == null ? void 0 : _a.scrollTop) || 0;
      },
      getVisibleRange() {
        return [visibleStartIndex.value, visibleEndIndex.value];
      }
    });
    const handleItemStyle = (renderItemProps) => {
      if (typeof props.itemStyle === "function") {
        return props.itemStyle(renderItemProps);
      } else {
        return props.itemStyle || {};
      }
    };
    const handleItemClass = (renderItemProps) => {
      if (typeof props.itemClass === "function") {
        return props.itemClass(renderItemProps);
      } else {
        return props.itemClass;
      }
    };
    const renderList = () => {
      return showList.value.map((row, i, rows) => {
        var _a;
        const index2 = realStartIndex.value + i;
        return createVNode("li", {
          "key": props.itemKey ? row[props.itemKey] : index2,
          "style": [handleItemStyle({
            row,
            index: index2,
            rows
          }), {
            height: props.itemHeight + "px !important",
            overflow: "hidden !important"
          }],
          "class": handleItemClass({
            row,
            index: index2,
            rows
          }),
          "onClick": (e) => emit("item-click", e, {
            row,
            index: index2,
            rows
          }),
          "onMouseenter": (e) => emit("item-mouseenter", e, {
            row,
            index: index2,
            rows
          }),
          "onMouseleave": (e) => emit("item-mouseleave", e, {
            row,
            index: index2,
            rows
          })
        }, [(_a = slots.item) == null ? void 0 : _a.call(slots, {
          row,
          index: index2,
          rows
        })]);
      });
    };
    return () => createVNode(Scrollbar, {
      "ref": scrollbar$,
      "class": ns2.b(),
      "onNativeScroll": handleScroll,
      "height": props.wrapHeight + "px"
    }, {
      default: () => [createVNode("ul", {
        "style": containerStyles.value
      }, [renderList()]), isLoadMore.value && createVNode("div", {
        "class": ns2.e("load-more")
      }, [createVNode("span", null, [createTextVNode("Loading")]), createVNode(Loading, null, null)])]
    });
  }
});
const VirtualScroll = __default__$k;
const __moduleId$k = "../promiseui/virtualScroll/src/virtualScroll.tsx";
ssrRegisterHelper(__default__$k, __moduleId$k);
const VirtualScrollInstall = {
  title: "VirtualScroll 虚拟滚动",
  category: "通用",
  status: "100%",
  install(app) {
    app.component(VirtualScroll.name, VirtualScroll);
  }
};
const useKeyboardSelect = (optionListShow, options, virtualListRef, selectOptionClick) => {
  const hoverIndex = ref(0);
  const handleKeydown = (e) => {
    var _a, _b, _c, _d, _e, _f;
    const keyCode = e.key || e.code;
    const len = options.value.length;
    const [startIndex, endIndex] = ((_a = virtualListRef.value) == null ? void 0 : _a.getVisibleRange()) || [];
    if (hoverIndex.value < startIndex || hoverIndex.value > endIndex) {
      console.log(1);
      (_b = virtualListRef.value) == null ? void 0 : _b.scrollToIndex(hoverIndex.value);
    }
    switch (keyCode) {
      case "ArrowDown":
        e.preventDefault();
        if (++hoverIndex.value >= len) {
          hoverIndex.value = 0;
          (_c = virtualListRef.value) == null ? void 0 : _c.scrollToStart();
        } else {
          if (endIndex <= hoverIndex.value) {
            (_d = virtualListRef.value) == null ? void 0 : _d.scrollToIndex(hoverIndex.value, {
              offset: "bottom"
            });
          }
        }
        break;
      case "ArrowUp":
        e.preventDefault();
        if (--hoverIndex.value < 0) {
          hoverIndex.value = len - 1;
          (_e = virtualListRef.value) == null ? void 0 : _e.scrollToEnd();
        } else {
          if (startIndex >= hoverIndex.value) {
            (_f = virtualListRef.value) == null ? void 0 : _f.scrollToIndex(hoverIndex.value);
          }
        }
        break;
      case "Enter":
        const hoverItem = options.value[hoverIndex.value];
        hoverItem && selectOptionClick(hoverItem);
        break;
    }
  };
  watch(optionListShow, () => {
    if (optionListShow.value) {
      window.addEventListener("keydown", handleKeydown);
    } else {
      window.removeEventListener("keydown", handleKeydown);
    }
  });
  return hoverIndex;
};
function useOption(props, ctx, singleActiveItem, multipleActiveItems, optionListShow, inputValue, ns2, virtualListRef, selectInputRef) {
  const options = ref(props.options || []);
  const selectOptionClick = (row) => {
    var _a;
    if (row.disabled)
      return;
    if (props.multiple) {
      if (row[selectActiveKey]) {
        row[selectActiveKey] = false;
        const index2 = multipleActiveItems.value.findIndex(
          (item) => item === row
        );
        multipleActiveItems.value.splice(index2, 1);
      } else {
        if (multipleActiveItems.value.length >= props.multipleLimit)
          return;
        row[selectActiveKey] = true;
        multipleActiveItems.value.push(row);
      }
    } else {
      singleActiveItem.value = row;
      optionListShow.value = false;
      ctx.emit("update:modelValue", singleActiveItem.value.value);
    }
    if (!props.multiple) {
      (_a = selectInputRef.value) == null ? void 0 : _a.blur();
    }
    inputValue.value = "";
  };
  const hoverIndex = useKeyboardSelect(
    optionListShow,
    options,
    virtualListRef,
    selectOptionClick
  );
  watch(
    () => props.options,
    () => {
      options.value = props.options || [];
    }
  );
  const isActive = (row) => {
    if (props.multiple) {
      return !!row[selectActiveKey];
    } else {
      return singleActiveItem.value !== void 0 && singleActiveItem.value.value === row.value;
    }
  };
  const selectOptionClass = ({
    row,
    index: index2
  }) => {
    return {
      [ns2.e("option")]: true,
      [ns2.em("option", "active")]: isActive(row),
      [ns2.em("option", "disabled")]: row.disabled,
      [ns2.em("option", "hover")]: hoverIndex.value === index2
    };
  };
  const onClearOpiton = (e) => {
    e.stopPropagation();
    if (props.multiple) {
      multipleActiveItems.value.forEach(
        (item) => item[selectActiveKey] = false
      );
      multipleActiveItems.value = [];
    } else {
      singleActiveItem.value = void 0;
    }
    optionListShow.value = false;
    inputValue.value = "";
  };
  return {
    selectOptionClick,
    selectOptionClass,
    options,
    onClearOpiton,
    hoverIndex
  };
}
function useMemoScrollTop(optionListShow, virtualListEl) {
  const memoScrollTop = ref(0);
  watch(optionListShow, async (isShow) => {
    if (isShow) {
      await nextTick();
      if (virtualListEl.value) {
        virtualListEl.value.setScrollTop(memoScrollTop.value);
      }
    } else {
      if (!virtualListEl.value)
        return;
      memoScrollTop.value = virtualListEl.value.getScrollTop();
    }
  });
  return { virtualListEl };
}
const tagProps = {
  type: {
    type: String,
    default: "default"
  },
  closable: Boolean,
  bordered: Boolean,
  disabled: Boolean,
  size: {
    type: String,
    default: "md"
  }
};
const index$9 = "";
const __default__$j = defineComponent({
  name: "PTag",
  props: tagProps,
  emits: ["close"],
  setup(props, {
    slots,
    emit
  }) {
    const ns2 = useNamespace("tag");
    const classes = computed(() => ({
      [ns2.b()]: true,
      [ns2.e(props.size)]: true,
      [ns2.e(props.type)]: true,
      [ns2.m("disabled")]: props.disabled
    }));
    const onClose = (e) => {
      if (props.disabled)
        return;
      emit("close", e);
    };
    return () => {
      var _a;
      return createVNode("div", {
        "class": classes.value
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots), props.closable && createVNode(Icon, {
        "component": CloseSharp,
        "onClick": onClose
      }, null)]);
    };
  }
});
const Tag = __default__$j;
const __moduleId$j = "../promiseui/tag/src/tag.tsx";
ssrRegisterHelper(__default__$j, __moduleId$j);
const TagInstall = {
  title: "Tag 标签",
  category: "数据展示",
  status: "100%",
  install(app) {
    app.component(Tag.name, Tag);
  }
};
function useInput(props, inputValue, multipleActiveItems, options, optionListShow) {
  const onAddTag = (e) => {
    if (!props.addible)
      return;
    if (e.key != "Enter")
      return;
    const val = inputValue.value.trim();
    if (val.length === 0)
      return;
    multipleActiveItems.value.push({
      value: val,
      label: val
    });
    inputValue.value = "";
  };
  const onTagClose = (e, optionItem) => {
    e.stopPropagation();
    const index2 = multipleActiveItems.value.findIndex(
      (item) => item === optionItem
    );
    if (index2 !== -1) {
      multipleActiveItems.value[index2][selectActiveKey] = false;
      multipleActiveItems.value.splice(index2, 1);
    }
  };
  const filterMethod = typeof props.filterMethod === "function" ? props.filterMethod : (inputValue2, item) => {
    var _a;
    const val = inputValue2.trim().toLowerCase();
    return (_a = item.label) == null ? void 0 : _a.toLowerCase().includes(val);
  };
  watch(inputValue, () => {
    optionListShow.value = true;
    const val = inputValue.value.trim().toLowerCase();
    if (val.length === 0) {
      options.value = props.options || [];
    } else {
      const newOptions = props.options ? props.options.filter((item) => filterMethod(inputValue.value, item)) : [];
      options.value = newOptions;
    }
  });
  return { onAddTag, onTagClose };
}
function useDefaultValue(props) {
  var _a;
  const defaultSingleActiveItem = props.options ? props.options.find((item) => item.value === props.modelValue) : { value: props.modelValue, label: props.modelValue };
  let defaultMultipleActiveItems = [];
  if (Array.isArray(props.modelValue)) {
    const values = new Set(props.modelValue);
    defaultMultipleActiveItems = ((_a = props.options) == null ? void 0 : _a.filter((item) => {
      const has = values.has(item.value);
      if (has)
        item[selectActiveKey] = true;
      return has;
    })) || [{ value: props.modelValue, label: props.modelValue }];
  }
  return {
    defaultSingleActiveItem,
    defaultMultipleActiveItems
  };
}
function useFormValidate(props, showOptions) {
  const { triggerValidate } = useFormItem();
  watch(showOptions, () => {
    if (!showOptions.value) {
      triggerValidate("blur");
    }
  });
  watch(
    () => props.modelValue,
    () => {
      triggerValidate("change");
    }
  );
}
const ITEM_HEIGHT$1 = 32;
const __default__$i = defineComponent({
  name: "PSelect",
  props: selectProps,
  emits: ["update:modelValue", "change", "inputChange"],
  setup(props, ctx) {
    const ns2 = useNamespace("select");
    const selectRef = ref();
    const overlayRef = ref();
    const virtualListRef = ref();
    const selectInputRef = ref();
    const tagDropdownRef = ref();
    const optionListShow = ref(false);
    const inputValue = ref("");
    const onOutsideClick = () => {
      optionListShow.value = false;
      inputValue.value = "";
    };
    useFormValidate(props, optionListShow);
    useMemoScrollTop(optionListShow, virtualListRef);
    const {
      defaultSingleActiveItem,
      defaultMultipleActiveItems
    } = useDefaultValue(props);
    const singleActiveItem = ref(defaultSingleActiveItem);
    const multipleActiveItems = ref(defaultMultipleActiveItems);
    const {
      selectOptionClick,
      selectOptionClass,
      options,
      onClearOpiton,
      hoverIndex
    } = useOption(props, ctx, singleActiveItem, multipleActiveItems, optionListShow, inputValue, ns2, virtualListRef, selectInputRef);
    const {
      onAddTag,
      onTagClose
    } = useInput(props, inputValue, multipleActiveItems, options, optionListShow);
    const handleSelectOptionClick = (e, itemProps) => {
      selectOptionClick(itemProps.row);
      const needScroll = inputValue.value.length !== 0;
      inputValue.value = "";
      if (needScroll) {
        nextTick(() => {
          var _a;
          (_a = virtualListRef.value) == null ? void 0 : _a.setScrollTop(0);
        });
      }
    };
    const handleSelectOptionMouseenter = (e, {
      index: index2
    }) => {
      hoverIndex.value = index2;
    };
    const selectClick = () => {
      if (props.disabled)
        return;
      optionListShow.value = !optionListShow.value;
      if (optionListShow.value) {
        nextTick(() => {
          var _a;
          (_a = selectInputRef.value) == null ? void 0 : _a.focus();
        });
      }
    };
    watch(() => multipleActiveItems.value.length, () => {
      ctx.emit("update:modelValue", multipleActiveItems.value.map((item) => item.value));
      ctx.emit("change", multipleActiveItems.value);
    });
    watch(singleActiveItem, () => {
      var _a;
      ctx.emit("update:modelValue", (_a = singleActiveItem.value) == null ? void 0 : _a.value);
      ctx.emit("change", singleActiveItem.value);
    });
    const fromSize = useFormSize();
    const selectSize = computed(() => props.size || fromSize.value || "md");
    const classes = computed(() => ({
      [ns2.b()]: true,
      [ns2.m("disabled")]: props.disabled,
      [ns2.m(selectSize.value)]: true,
      [ns2.m(props.status + "-status")]: props.status,
      [ns2.m("focus")]: optionListShow.value
    }));
    const renderOptionItem = (itemProps) => {
      const {
        row
      } = itemProps;
      return props.renderLabel ? props.renderLabel(itemProps) : createVNode("div", {
        "class": [ns2.e("option_content")]
      }, [row.label]);
    };
    const renderNoMatch = () => {
      return ctx.slots.noMatch ? ctx.slots.noMatch() : createVNode("div", {
        "class": ns2.e("no-match")
      }, [createTextVNode("No matching data")]);
    };
    const renderTags = () => {
      const remainingCount = multipleActiveItems.value.length - props.maxTagCount;
      const sliceTags = (start2, end) => multipleActiveItems.value.slice(start2, end).map((item) => createVNode(Tag, {
        "class": ns2.e("tag"),
        "type": item.tagType ? item.tagType : props.tagType,
        "closable": true,
        "onClose": (e) => onTagClose(e, item),
        "key": item.value
      }, {
        default: () => [item.label]
      }));
      return createVNode(Fragment, null, [sliceTags(0, props.maxTagCount), remainingCount > 0 && createVNode(Dropdown, {
        "position": "top"
      }, {
        dropdown: () => createVNode("div", {
          "class": ns2.e("tag-dropdown"),
          "ref": tagDropdownRef
        }, [sliceTags(props.maxTagCount)]),
        default: () => createVNode(Tag, null, {
          default: () => [createTextVNode("+"), remainingCount]
        })
      })]);
    };
    const renderMultiple = () => createVNode("div", {
      "class": ns2.e("tags")
    }, [renderTags(), props.filterable ? withDirectives(createVNode("input", {
      "class": ns2.e("input"),
      "onUpdate:modelValue": ($event) => inputValue.value = $event,
      "ref": selectInputRef,
      "disabled": props.disabled,
      "style": {
        width: Math.max(inputValue.value.length, props.placeholder.length) * 14 + "px"
      },
      "placeholder": multipleActiveItems.value.length === 0 ? props.placeholder : "",
      "onKeyup": onAddTag,
      "onChange": (e) => ctx.emit("inputChange", e.target.value)
    }, null), [[vModelText, inputValue.value]]) : multipleActiveItems.value.length === 0 && createVNode("span", {
      "class": ns2.e("placeholder")
    }, [props.placeholder])]);
    const renderSingle = () => {
      var _a;
      const label = ((_a = singleActiveItem.value) == null ? void 0 : _a.label) || props.placeholder;
      return props.filterable ? withDirectives(createVNode("input", {
        "class": [ns2.e("input"), !props.modelValue && ns2.em("input", "placeholder")],
        "ref": selectInputRef,
        "onUpdate:modelValue": ($event) => inputValue.value = $event,
        "disabled": props.disabled,
        "style": {
          width: "100%"
        },
        "placeholder": label,
        "onChange": (e) => ctx.emit("inputChange", e.target.value)
      }, null), [[vModelText, inputValue.value]]) : createVNode("span", {
        "class": [ns2.e("single-value"), {
          [ns2.em("single-value", "placeholder")]: !singleActiveItem.value
        }]
      }, [label]);
    };
    const IconComponent = shallowRef(ChevronDownSharp);
    return () => {
      return createVNode(__default__$C, null, {
        default: () => {
          var _a;
          return [createVNode("div", {
            "class": classes.value,
            "onClick": selectClick,
            "ref": selectRef,
            "onMouseenter": () => {
              if (props.clearable)
                IconComponent.value = CloseCircleOutline;
            },
            "onMouseleave": () => IconComponent.value = ChevronDownSharp
          }, [props.multiple ? renderMultiple() : renderSingle(), createVNode("div", {
            "class": ns2.e("clear"),
            "onClick": onClearOpiton
          }, [createVNode(Icon, {
            "component": IconComponent.value
          }, null)]), createVNode(Overlay, {
            "modelValue": optionListShow.value,
            "onUpdate:modelValue": ($event) => optionListShow.value = $event,
            "position": "bottom-start",
            "origin": selectRef.value,
            "offset": 2,
            "style": {
              width: ((_a = selectRef.value) == null ? void 0 : _a.clientWidth) + "px" || "unset",
              padding: "0"
            },
            "ref": overlayRef,
            "onOutsideClick": onOutsideClick,
            "clickOutsideIgnore": [tagDropdownRef],
            "flip": true
          }, {
            default: () => [options.value.length ? createVNode(VirtualScroll, {
              "ref": virtualListRef,
              "keepAlive": true,
              "itemKey": "value",
              "itemHeight": 32,
              "listData": options.value,
              "itemClass": selectOptionClass,
              "onItemClick": handleSelectOptionClick,
              "onItemMouseenter": handleSelectOptionMouseenter,
              "wrapHeight": Math.min(props.maxOptionCount * ITEM_HEIGHT$1, options.value.length * ITEM_HEIGHT$1)
            }, {
              item: renderOptionItem
            }) : renderNoMatch()]
          })])];
        }
      });
    };
  }
});
const Select = __default__$i;
const __moduleId$i = "../promiseui/select/src/select.tsx";
ssrRegisterHelper(__default__$i, __moduleId$i);
const SelectInstall = {
  title: "Select 选择器",
  category: "数据录入",
  status: "100%",
  install(app) {
    app.component(Select.name, Select);
  }
};
const autoCompleteProps = {
  options: {
    type: Array,
    default() {
      return [];
    }
  },
  maxOptionCount: {
    type: Number,
    default: 10
  },
  modelValue: String,
  placeholder: String,
  size: {
    type: String
  },
  disabled: Boolean,
  renderLabel: {
    type: Function
  }
};
const index$8 = "";
const ITEM_HEIGHT = 32;
const __default__$h = defineComponent({
  name: "PAutoComplete",
  props: autoCompleteProps,
  emits: ["update:modelValue"],
  setup(props, ctx) {
    const ns2 = useNamespace("auto-complete");
    const optionListShow = ref(false);
    const overlayRef = ref();
    const virtualListRef = ref();
    const inputRef = shallowRef();
    const formSize = useFormSize();
    const inputSize = computed(() => props.size || formSize.value || "md");
    const onOutsideClick = () => {
      optionListShow.value = false;
    };
    const {
      triggerValidate
    } = useFormItem();
    const handleOptionClick = (row) => {
      ctx.emit("update:modelValue", row.value);
      optionListShow.value = false;
      nextTick(() => triggerValidate("blur"));
    };
    const renderOptionItem = (itemProps) => {
      const {
        row
      } = itemProps;
      return props.renderLabel ? props.renderLabel(itemProps) : createVNode("div", {
        "class": ns2.e("option_content")
      }, [row.label]);
    };
    const hoverIndex = ref(0);
    const handleKeydown = (e) => {
      var _a, _b, _c, _d, _e;
      const keyCode = e.key || e.code;
      const len = props.options.length;
      const [startIndex, endIndex] = ((_a = virtualListRef.value) == null ? void 0 : _a.getVisibleRange()) || [];
      switch (keyCode) {
        case "ArrowDown":
          if (++hoverIndex.value >= len) {
            hoverIndex.value = 0;
            (_b = virtualListRef.value) == null ? void 0 : _b.scrollToStart();
          } else {
            if (endIndex <= hoverIndex.value) {
              (_c = virtualListRef.value) == null ? void 0 : _c.scrollToIndex(hoverIndex.value, {
                offset: "bottom"
              });
            }
          }
          break;
        case "ArrowUp":
          if (--hoverIndex.value < 0) {
            hoverIndex.value = len - 1;
            (_d = virtualListRef.value) == null ? void 0 : _d.scrollToEnd();
          } else {
            if (startIndex >= hoverIndex.value) {
              (_e = virtualListRef.value) == null ? void 0 : _e.scrollToIndex(hoverIndex.value);
            }
          }
          break;
        case "Enter":
          handleOptionClick(props.options[hoverIndex.value]);
          break;
      }
    };
    watchEffect(() => {
      if (optionListShow.value) {
        window.addEventListener("keydown", handleKeydown);
        hoverIndex.value = 0;
      } else {
        window.removeEventListener("keydown", handleKeydown);
      }
    });
    const handleItemClass = (props2) => ({
      [ns2.e("option")]: true,
      [ns2.m("hover")]: hoverIndex.value === props2.index
    });
    return () => {
      var _a;
      return createVNode(Fragment, null, [createVNode(__default__$C, {
        "disabled": true
      }, {
        default: () => [createVNode(Input, {
          "ref": (target) => {
            if (target.input && !inputRef.value) {
              inputRef.value = target.wapper;
            }
          },
          "value": props.modelValue,
          "placeholder": props.placeholder,
          "size": inputSize.value,
          "onInput": (e) => {
            ctx.emit("update:modelValue", e.target.value);
          },
          "disabled": !!props.disabled,
          "onFocus": () => {
            optionListShow.value = true;
          }
        }, null)]
      }), createVNode(Overlay, {
        "modelValue": optionListShow.value,
        "onUpdate:modelValue": ($event) => optionListShow.value = $event,
        "position": "bottom-start",
        "origin": inputRef.value,
        "offset": 2,
        "style": {
          width: ((_a = inputRef.value) == null ? void 0 : _a.clientWidth) + "px" || "unset",
          padding: "0"
        },
        "ref": overlayRef,
        "onOutsideClick": onOutsideClick,
        "flip": true
      }, {
        default: () => [props.modelValue && createVNode(VirtualScroll, {
          "ref": virtualListRef,
          "keepAlive": true,
          "itemKey": "value",
          "itemHeight": 32,
          "listData": props.options,
          "itemClass": handleItemClass,
          "onItemClick": (_, {
            row
          }) => handleOptionClick(row),
          "wrapHeight": Math.min(props.maxOptionCount * ITEM_HEIGHT, props.options.length * ITEM_HEIGHT)
        }, {
          item: renderOptionItem
        })]
      })]);
    };
  }
});
const AutoComplete = __default__$h;
const __moduleId$h = "../promiseui/autoComplete/src/autoComplete.tsx";
ssrRegisterHelper(__default__$h, __moduleId$h);
const AutoCompleteInstall = {
  title: "AutoComplete 自动填充",
  category: "数据录入",
  status: "100%",
  install(app) {
    app.component(AutoComplete.name, AutoComplete);
  }
};
const index$7 = "";
const __default__$g = defineComponent({
  name: "PForm",
  props: formProps,
  emits: [],
  setup(props, ctx) {
    const ns2 = useNamespace("form");
    const maxChildLabelWidth = ref();
    const classes = computed(() => ({
      [ns2.b()]: true,
      [ns2.m("inline")]: props.inline
    }));
    const childLabelWidthRace = (width) => {
      if (maxChildLabelWidth.value === void 0 || width > maxChildLabelWidth.value) {
        maxChildLabelWidth.value = width;
      }
    };
    const clearLabelWidth = () => {
      maxChildLabelWidth.value = void 0;
    };
    watch(() => props.size, () => {
      clearLabelWidth();
    });
    const validateFns = [];
    const onClearValidateCallbacks = [];
    const addValidateFn = (validateInfo) => {
      validateFns.push(validateInfo);
    };
    const fromValidate = async (validateCallback) => {
      let isValid = true;
      for (const {
        validateFn
      } of validateFns) {
        try {
          await validateFn();
        } catch (e) {
          isValid = false;
        }
      }
      validateCallback == null ? void 0 : validateCallback(isValid);
      return isValid;
    };
    const formValidateFields = async (fields, validateCallback) => {
      let isValid = true;
      for (const fieldName of fields) {
        const res = validateFns.find((item) => item.prop === fieldName);
        if (res) {
          try {
            await res.validateFn();
          } catch (e) {
            isValid = false;
          }
        }
      }
      validateCallback == null ? void 0 : validateCallback(isValid);
      return isValid;
    };
    const onClearValidate = (cb, prop) => {
      onClearValidateCallbacks.push([cb, prop]);
    };
    const clearValidate = (fields) => {
      for (const [cb, prop] of onClearValidateCallbacks) {
        if (!fields) {
          cb();
        } else {
          if (prop && fields.includes(prop)) {
            cb();
          }
        }
      }
    };
    provide(formContextKey, {
      props,
      maxChildLabelWidth,
      childLabelWidthRace,
      model: props.model,
      addValidateFn,
      onClearValidate
    });
    ctx.expose({
      validate: fromValidate,
      validateFields: formValidateFields,
      clearValidate
    });
    const onSubmit = (e) => {
      e.preventDefault();
    };
    return () => {
      var _a, _b;
      return createVNode("form", {
        "class": classes.value,
        "onSubmit": onSubmit
      }, [(_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a)]);
    };
  }
});
const Form = __default__$g;
const __moduleId$g = "../promiseui/form/src/form.tsx";
ssrRegisterHelper(__default__$g, __moduleId$g);
const popoverProps = {
  content: String,
  trigger: {
    type: String,
    default: "hover"
  },
  position: {
    type: String,
    default: "top"
  },
  offset: {
    type: Number,
    default: 9,
    required: false
  },
  showArrow: {
    type: Boolean,
    default: true,
    required: false
  },
  style: {
    type: Object,
    default() {
      return {};
    }
  },
  class: {
    default: ""
  },
  disabled: Boolean,
  dark: {
    type: Boolean,
    default: true
  }
};
const index$6 = "";
const __default__$f = defineComponent({
  name: "PPopover",
  props: popoverProps,
  emits: [],
  setup(props, ctx) {
    const _instance = getCurrentInstance();
    const isShow = ref(false);
    const nodeRef = ref(null);
    const contentRef = ref(null);
    let timer;
    const handleLeavle = () => {
      if (props.trigger === "hover") {
        timer = window.setTimeout(() => isShow.value = false, 300);
      }
    };
    onMounted(() => {
      const node = findDOMNode(_instance);
      nodeRef.value = node;
      if (node) {
        node.addEventListener("click", () => {
          if (props.trigger === "click") {
            isShow.value = !isShow.value;
          }
        });
        node.addEventListener("mouseenter", () => {
          clearTimeout(timer);
          if (props.trigger === "hover") {
            isShow.value = true;
          }
        });
        node.addEventListener("mouseleave", () => {
          clearTimeout(timer);
          handleLeavle();
        });
      }
    });
    const ns2 = useNamespace("popover");
    return () => {
      var _a, _b;
      return createVNode(Fragment, null, [(_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a), createVNode(Overlay, {
        "modelValue": isShow.value,
        "onUpdate:modelValue": ($event) => isShow.value = $event,
        "origin": nodeRef.value,
        "position": props.position,
        "flip": true,
        "offset": props.offset,
        "showArrow": props.showArrow,
        "dark": props.dark,
        "style": {
          padding: 0,
          ...props.style
        },
        "class": props.class,
        "onOutsideClick": (_) => isShow.value = false
      }, {
        default: () => [!props.disabled && createVNode("span", {
          "ref": contentRef,
          "class": ns2.e("content"),
          "onMouseenter": (_) => clearTimeout(timer),
          "onMouseleave": handleLeavle
        }, [ctx.slots.content ? ctx.slots.content() : props.content])]
      })]);
    };
  }
});
const Popover = __default__$f;
const __moduleId$f = "../promiseui/popover/src/popover.tsx";
ssrRegisterHelper(__default__$f, __moduleId$f);
const PopoverInstall = {
  title: "Popover 悬浮提示",
  category: "反馈",
  status: "100%",
  install(app) {
    app.component(Popover.name, Popover);
  }
};
function toArray(target) {
  if (target == null) {
    return [];
  }
  if (Array.isArray(target)) {
    return target;
  } else {
    return [target];
  }
}
const getValueByPathname = (pathname, target) => {
  const path = pathname.split(".");
  for (const name of path) {
    if (typeof target === "undefined") {
      return void 0;
    }
    target = target[name];
  }
  return target;
};
const findRequiredRule = (rules) => {
  return !!rules.find((rule) => rule.required);
};
function useForm(props, labelRef) {
  const FormContext = inject(formContextKey, void 0);
  const validateError = ref();
  const childLabelWidthRace = () => {
    if (!labelRef.value)
      return;
    const width = Number(getComputedStyle(labelRef.value).width.slice(0, -2));
    FormContext == null ? void 0 : FormContext.childLabelWidthRace(width);
  };
  onMounted(() => {
    childLabelWidthRace();
  });
  watch(useFormSize(), () => {
    childLabelWidthRace();
  }, {
    flush: "post"
  });
  const labelWidth = computed(() => {
    const maxChildLabelWidth = FormContext == null ? void 0 : FormContext.maxChildLabelWidth.value;
    if (props.labelWidth === "auto") {
      return maxChildLabelWidth + "px";
    } else if (props.labelWidth) {
      return typeof props.labelWidth === "number" ? props.labelWidth + "px" : props.labelWidth;
    } else {
      const FormLabelWidth = FormContext == null ? void 0 : FormContext.props.labelWidth;
      if (FormLabelWidth === "auto") {
        return maxChildLabelWidth ? maxChildLabelWidth + "px" : maxChildLabelWidth;
      } else {
        return typeof FormLabelWidth === "number" ? FormLabelWidth + "px" : FormLabelWidth;
      }
    }
  });
  const labelPosition = computed(() => props.labelPosition ? props.labelPosition : (FormContext == null ? void 0 : FormContext.props.labelPosition) || "right");
  const formItemSize = computed(() => props.size ? props.size : (FormContext == null ? void 0 : FormContext.props.size) || "md");
  const showLabel = computed(() => props.showLabel ? props.showLabel : !!(FormContext == null ? void 0 : FormContext.props.showLabel));
  const showRequireMark = computed(() => {
    if (props.showRequireMark !== void 0)
      return props.showRequireMark;
    return !!(FormContext == null ? void 0 : FormContext.props.showRequireMark) && findRequiredRule(getMergeRules());
  });
  const getMergeRules = () => {
    const propsRules = toArray(props.rules);
    if (props.required) {
      propsRules.push({
        required: true,
        message: typeof props.required === "string" ? props.required : void 0
      });
    }
    let formRules;
    if (typeof props.prop === "string" && FormContext) {
      formRules = getValueByPathname(props.prop, FormContext.props.rules);
    }
    const mergeRules = formRules ? propsRules.concat(formRules) : propsRules;
    return mergeRules;
  };
  const rules = computed(() => {
    return getMergeRules();
  });
  const propsName = computed(() => {
    if (Array.isArray(props.prop)) {
      return props.prop.join(".");
    } else if (typeof props.prop === "string") {
      return props.prop;
    }
    return "";
  });
  const validator = computed(() => new Schema({
    [propsName.value]: rules.value
  }));
  const validateFn = () => props.prop && FormContext ? validator.value.validate({
    [props.prop]: getValueByPathname(props.prop, FormContext.model)
  }, {
    firstFields: true
  }, (error2) => {
    validateError.value = error2 ? error2[0] : null;
    if (error2) {
      console.warn(`validate error! ${props.prop}`, error2);
    }
  }) : Promise.resolve([]);
  if ((FormContext == null ? void 0 : FormContext.model) && props.prop) {
    FormContext.addValidateFn({
      validateFn,
      prop: props.prop
    });
  }
  FormContext == null ? void 0 : FormContext.onClearValidate(() => {
    validateError.value = null;
  }, props.prop);
  return {
    labelWidth,
    labelPosition,
    formItemSize,
    showLabel,
    showRequireMark,
    validator,
    validateError,
    validateFn
  };
}
const __default__$e = defineComponent({
  name: "PFormItem",
  props: formItemProps,
  emits: [],
  setup(props, ctx) {
    const ns2 = useNamespace("form-item");
    const labelRef = ref();
    const {
      labelWidth,
      labelPosition,
      formItemSize,
      showLabel,
      showRequireMark,
      validateError,
      validateFn
    } = useForm(props, labelRef);
    const triggers = computed(() => toArray(props.trigger));
    provide(formItemContextKey, {
      validate: validateFn,
      triggers
    });
    const classes = computed(() => ({
      [ns2.b()]: true,
      [ns2.m(formItemSize.value)]: true,
      [ns2.m(labelPosition.value)]: true,
      [ns2.m("is-error")]: validateError.value
    }));
    const labelStyles = computed(() => [{
      width: labelWidth.value
    }, props.labelStyle || {}]);
    return () => {
      var _a, _b, _c;
      return createVNode("div", {
        "class": classes.value
      }, [showLabel.value && createVNode("label", {
        "ref": labelRef,
        "class": [ns2.e("label")],
        "style": labelStyles.value
      }, [createVNode("span", {
        "class": ns2.e("require-mark")
      }, [showRequireMark.value ? "*" : ""]), props.label, props.helpTips && createVNode(Popover, {
        "content": props.helpTips
      }, {
        default: () => [createVNode("span", {
          "class": ns2.e("help-tips")
        }, [createVNode(Icon, {
          "component": HelpCircleSharp
        }, null)])]
      })]), createVNode("div", {
        "class": ns2.e("content")
      }, [(_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a), createVNode("span", {
        "class": ns2.e("error")
      }, [(_c = validateError.value) == null ? void 0 : _c.message])])]);
    };
  }
});
const FormItem = __default__$e;
const __moduleId$e = "../promiseui/form/src/form-item.tsx";
ssrRegisterHelper(__default__$e, __moduleId$e);
const FormInstall = {
  title: "Form 表单",
  category: "数据录入",
  status: "100%",
  install(app) {
    app.component(Form.name, Form);
    app.component(FormItem.name, FormItem);
  }
};
const modalProps = {
  modelValue: {
    type: Boolean,
    default: false
  },
  blockScroll: {
    type: Boolean,
    default: true
  },
  showClose: {
    type: Boolean,
    default: true
  },
  closeOnEsc: {
    type: Boolean,
    default: true
  },
  displayDirective: {
    type: String,
    default: "if"
  },
  maskClosable: {
    type: Boolean,
    default: true
  },
  to: {
    type: [String, Object],
    default: "body"
  },
  zIndex: {
    type: Number,
    default: 999
  },
  draggable: Boolean,
  title: String,
  width: {
    type: [String, Number],
    default: "30%"
  },
  top: String,
  onAfterEnter: {
    type: Function
  },
  onAfterLeave: {
    type: Function
  },
  onMaskClick: { type: Function },
  onCloseIconClick: Function
};
const index$5 = "";
let isKeyDown = false;
let prevPageX = 0;
let prevPageY = 0;
const mousedownHandle = (e) => {
  isKeyDown = true;
  prevPageX = e.pageX;
  prevPageY = e.pageY;
};
const mouseupHandle = (e) => {
  isKeyDown = false;
};
const mousemoveHandlde = (e) => {
  if (!isKeyDown)
    return;
  const dargElement = e.currentTarget.__moveElement;
  const offsetX = e.pageX - prevPageX;
  const offsetY = e.pageY - prevPageY;
  const transfrom = dargElement.style.transform;
  if (!transfrom) {
    dargElement.style.transform = `translate(${offsetX}px,${offsetY}px)`;
  } else {
    dargElement.style.transform = transfrom.replace(
      /translate\((.*?)px\,(.*?)px\)/,
      (match, p1, p2) => {
        const x = Number(p1) + offsetX;
        const y = Number(p2) + offsetY;
        return `translate(${x}px,${y}px)`;
      }
    );
  }
  prevPageX = e.pageX;
  prevPageY = e.pageY;
};
const addEvents = (el, moveEl) => {
  removeEvents(el);
  el.addEventListener("mousedown", mousedownHandle);
  el.addEventListener("mouseup", mouseupHandle);
  el.addEventListener("mousemove", mousemoveHandlde);
};
const removeEvents = (el) => {
  el.removeEventListener("mousedown", mousedownHandle);
  el.removeEventListener("mouseup", mouseupHandle);
  el.removeEventListener("mousemove", mousemoveHandlde);
};
const handleDrag = (moveEl, value) => {
  var _a;
  const config = value || { includes: [] };
  const includes = config.includes || [];
  const inclueElements = [];
  for (const selector of includes) {
    const els = moveEl.querySelectorAll(selector);
    inclueElements.push(...Array.from(els));
  }
  for (const el of inclueElements) {
    el.style.cursor = "move";
    el.__moveElement = moveEl;
    moveEl.__dargElements ? (_a = moveEl.__dargElements) == null ? void 0 : _a.push(el) : [];
    addEvents(el);
  }
};
const dragDirective = {
  mounted(moveEl, { value }) {
    const config = value || { includes: [] };
    if (config.disabled)
      return;
    handleDrag(moveEl, value);
  },
  updated(moveEl, { value }) {
    const config = value || { includes: [] };
    if (config.disabled)
      return;
    handleDrag(moveEl, value);
  },
  unmounted(moveEl) {
    if (moveEl.__dargElements) {
      for (const dargEl of moveEl.__dargElements) {
        removeEvents(dargEl);
      }
    }
  }
};
const __default__$d = defineComponent({
  name: "PModal",
  directives: {
    drag: dragDirective
  },
  inheritAttrs: false,
  props: modalProps,
  emits: ["update:modelValue", "closeIconClick"],
  setup(props, {
    slots,
    emit,
    attrs
  }) {
    const ns2 = useNamespace("modal");
    const modelRef = ref();
    onClickOutside(modelRef, () => {
      var _a;
      (_a = props.onMaskClick) == null ? void 0 : _a.call(props);
      if (props.maskClosable) {
        emit("update:modelValue", false);
      }
    });
    const classes = computed(() => ({
      [ns2.b()]: true
    }));
    const styles = computed(() => ({
      width: typeof props.width === "number" ? props.width + "px" : props.width,
      marginTop: props.top || void 0
    }));
    const renderHeaderContet = () => {
      return slots.header ? slots.header() : createVNode("div", {
        "class": ns2.e("title")
      }, [props.title]);
    };
    const keyupHandle = (e) => {
      if (e.key === "Escape" && props.closeOnEsc) {
        emit("update:modelValue", false);
      }
    };
    onMounted(() => {
      window.addEventListener("keyup", keyupHandle);
    });
    onUnmounted(() => {
      window.removeEventListener("keyup", keyupHandle);
    });
    watchEffect(() => {
      if (props.blockScroll) {
        if (props.modelValue) {
          document.documentElement.classList.add("pui-overflow-hidden");
        } else {
          document.documentElement.classList.remove("pui-overflow-hidden");
        }
      }
    });
    const renderHeaderExtra = () => {
      return slots["header-extra"] ? slots["header-extra"]() : props.showClose && createVNode(Icon, {
        "class": ns2.e("close-icon"),
        "component": CloseOutline,
        "onClick": () => {
          if (props.onCloseIconClick) {
            emit("closeIconClick");
          } else {
            emit("update:modelValue", false);
          }
        }
      }, null);
    };
    const renderModalContent = () => {
      var _a, _b;
      return createVNode("div", mergeProps({
        "class": classes.value,
        "style": styles.value,
        "ref": modelRef
      }, attrs), [createVNode("div", {
        "class": ns2.e("header")
      }, [createVNode("div", {
        "class": ns2.e("header-content")
      }, [renderHeaderContet()]), createVNode("div", {
        "class": ns2.e("header-extra")
      }, [renderHeaderExtra()])]), createVNode("div", {
        "class": ns2.e("content")
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]), createVNode("div", {
        "class": ns2.e("footer")
      }, [(_b = slots.footer) == null ? void 0 : _b.call(slots)])]);
    };
    return () => {
      return createVNode(Teleport, {
        "to": props.to
      }, {
        default: () => [createVNode(Transition, {
          "name": "pui-modal-scalein",
          "appear": true,
          "onAfterEnter": props.onAfterEnter,
          "onAfterLeave": props.onAfterLeave
        }, {
          default: () => [props.displayDirective === "if" ? withDirectives(createVNode("div", {
            "class": ns2.e("mask"),
            "style": {
              zIndex: props.zIndex
            }
          }, [renderModalContent()]), [[vShow, props.modelValue]]) : props.modelValue && createVNode("div", {
            "class": ns2.e("mask"),
            "style": {
              zIndex: props.zIndex
            }
          }, [renderModalContent()])]
        })]
      });
    };
  }
});
const Modal = __default__$d;
const __moduleId$d = "../promiseui/modal/src/modal.tsx";
ssrRegisterHelper(__default__$d, __moduleId$d);
const ModalInstall = {
  title: "Modal 模态框",
  category: "反馈",
  status: "100%",
  install(app) {
    app.component(Modal.name, Modal);
  }
};
const messageBoxProps = {
  title: String,
  content: String,
  cancelButtonText: String,
  confirmButtonText: String,
  confirmButtonType: {
    type: String,
    default: "primary"
  },
  showClose: {
    type: Boolean,
    default: true
  },
  blockScroll: Boolean,
  buttonSize: {
    type: String,
    default: "sm"
  },
  customClass: String,
  customStyle: [String, Object],
  beforeClose: Function
};
const index$4 = "";
const __default__$c = defineComponent({
  name: "PMessageBox",
  props: messageBoxProps,
  emits: ["cancel", "confirm", "close"],
  setup(props, {
    emit
  }) {
    const ns2 = useNamespace("message-box");
    const isShow = ref(true);
    const cancelBtnLoading = ref(false);
    const confirmBtnLoading = ref(false);
    const MessageType = computed(() => {
      if (props.confirmButtonType) {
        if (props.confirmButtonType === "danger") {
          return "error";
        } else if (props.confirmButtonType === "primary") {
          return "none";
        } else {
          return props.confirmButtonType;
        }
      } else {
        return "none";
      }
    });
    const IconComponent = useIcon(MessageType.value);
    const cancelHandle = async () => {
      if (props.beforeClose) {
        try {
          cancelBtnLoading.value = true;
          const allow = await props.beforeClose("cancel");
          cancelBtnLoading.value = false;
          if (allow) {
            emit("cancel");
            isShow.value = false;
          }
        } catch (e) {
          cancelBtnLoading.value = false;
        }
      } else {
        emit("cancel");
        isShow.value = false;
      }
    };
    const confimHandle = async () => {
      if (props.beforeClose) {
        try {
          confirmBtnLoading.value = true;
          const allow = await props.beforeClose("confirm");
          confirmBtnLoading.value = false;
          if (allow) {
            emit("confirm");
            isShow.value = false;
          }
        } catch (e) {
          confirmBtnLoading.value = false;
        }
      } else {
        emit("confirm");
        isShow.value = false;
      }
    };
    const closehandle = async () => {
      if (props.beforeClose) {
        const allow = await props.beforeClose("close");
        if (allow) {
          emit("close");
          isShow.value = false;
        }
      } else {
        emit("close");
        isShow.value = false;
      }
    };
    return () => {
      return createVNode(Modal, {
        "class": [ns2.b(), props.customClass],
        "style": props.customStyle,
        "modelValue": isShow.value,
        "onUpdate:modelValue": ($event) => isShow.value = $event,
        "title": props.title,
        "maskClosable": false,
        "onCloseIconClick": closehandle,
        "closeOnEsc": false,
        "showClose": props.showClose,
        "blockScroll": props.blockScroll
      }, {
        default: () => props.content,
        header: () => createVNode(Fragment, null, [props.confirmButtonType !== "primary" && createVNode(Icon, {
          "class": [ns2.e("icon"), ns2.em("icon", props.confirmButtonType)]
        }, {
          default: () => [createVNode(IconComponent, null, null)]
        }), props.title]),
        footer: () => createVNode("div", {
          "class": ns2.e("footer")
        }, [props.cancelButtonText && createVNode(Button, {
          "class": ns2.e("cancel-button"),
          "onClick": cancelHandle,
          "loading": cancelBtnLoading.value,
          "size": props.buttonSize
        }, {
          default: () => [props.cancelButtonText]
        }), props.confirmButtonText && createVNode(Button, {
          "type": props.confirmButtonType,
          "onClick": confimHandle,
          "loading": confirmBtnLoading.value,
          "size": props.buttonSize
        }, {
          default: () => [props.confirmButtonText]
        })])
      });
    };
  }
});
const __moduleId$c = "../promiseui/messageBox/src/messageBox.tsx";
ssrRegisterHelper(__default__$c, __moduleId$c);
class MessageBox {
  constructor() {
  }
  onAfterLeave(app) {
    app.unmount();
  }
  openMessageBox({
    title,
    content,
    cancelButtonText,
    confirmButtonText,
    blockScroll,
    beforeClose,
    buttonSize,
    customClass,
    customStyle,
    showClose
  }, confirmButtonType) {
    return new Promise((resolve, reject) => {
      const wrapper = document.createElement("div");
      document.body.appendChild(wrapper);
      const _this = this;
      const app = createApp({
        setup() {
          return () => createVNode(__default__$c, {
            "title": title,
            "cancelButtonText": cancelButtonText,
            "confirmButtonText": confirmButtonText,
            "content": content,
            "confirmButtonType": confirmButtonType,
            "onAfterLeave": () => _this.onAfterLeave(app),
            "onCancel": () => reject("cancel"),
            "onConfirm": () => resolve(),
            "onClose": () => reject("close"),
            "beforeClose": beforeClose,
            "buttonSize": buttonSize,
            "customClass": customClass,
            "customStyle": customStyle,
            "showClose": showClose,
            "blockScroll": blockScroll
          }, null);
        }
      });
      app.mount(wrapper);
    });
  }
  success(config) {
    return this.openMessageBox(config, "success");
  }
  info(config) {
    return this.openMessageBox(config, "info");
  }
  warning(config) {
    return this.openMessageBox(config, "warning");
  }
  error(config) {
    return this.openMessageBox(config, "danger");
  }
  open(config) {
    return this.openMessageBox(config, "primary");
  }
}
const MessageBox$1 = new MessageBox();
const MessageBoxInstall = {
  title: "MessageBox 消息弹出框",
  category: "反馈",
  status: "100%",
  install(app) {
    app.config.globalProperties.$messageBox = MessageBox$1;
  }
};
const loadingBarProps = {
  show: {
    type: Boolean,
    default: false
  },
  isError: Boolean
};
const index$3 = "";
const __default__$b = defineComponent({
  name: "PLoadingBar",
  props: loadingBarProps,
  emits: [],
  setup(props, {
    expose
  }) {
    const ns2 = useNamespace("loading-bar");
    return () => {
      return createVNode(Teleport, {
        "to": "body"
      }, {
        default: () => [createVNode(Transition, {
          "name": ns2.b(),
          "appear": true
        }, {
          default: () => [withDirectives(createVNode("div", {
            "class": ns2.e("container")
          }, [createVNode("div", {
            "class": [ns2.b(), props.isError && ns2.m("error")]
          }, null)]), [[vShow, props.show]])]
        })]
      });
    };
  }
});
const __moduleId$b = "../promiseui/loadingBar/src/loadingBar.tsx";
ssrRegisterHelper(__default__$b, __moduleId$b);
let hasMemo = false;
let start;
let finish;
let error;
const initLoadingBar = () => {
  if (hasMemo) {
    return {
      start,
      finish,
      error
    };
  }
  const show = ref(false);
  const isError = ref(false);
  const app = createApp({
    setup() {
      return () => createVNode(__default__$b, {
        "show": show.value,
        "isError": isError.value
      }, null);
    }
  });
  const wrapper = document.createElement("div");
  app.mount(wrapper);
  wrapper.firstChild && document.body.appendChild(wrapper.firstChild);
  start = () => {
    isError.value = false;
    show.value = true;
  };
  finish = () => {
    show.value = false;
  };
  error = () => {
    isError.value = true;
    finish();
  };
  hasMemo = true;
  return {
    start,
    finish,
    error
  };
};
const useLoadingBar = () => {
  const {
    start: start2,
    finish: finish2,
    error: error2
  } = initLoadingBar();
  return {
    start: start2,
    finish: finish2,
    error: error2
  };
};
const useLoadingBar$1 = useLoadingBar;
const LoadingBarInstall = {
  title: "LoadingBar 加载条",
  category: "导航",
  status: "100%",
  install(app) {
  }
};
const tableProps = {
  tableLayout: String,
  height: {
    type: [String, Number]
  },
  maxHeight: [String, Number],
  minHeight: [String, Number],
  scrollX: [String, Number],
  dataSource: {
    type: Array,
    default() {
      return [];
    }
  },
  columns: {
    type: Array,
    default() {
      return [];
    }
  },
  rowProps: [Function, Object],
  cellProps: [Function, Object],
  rowKey: {
    type: [String, Function],
    default: "key"
  },
  stripe: Boolean,
  border: Boolean,
  size: {
    type: String,
    default: "md"
  },
  showHeader: {
    type: Boolean,
    default: true
  },
  headerRowClassName: String,
  headerRowStyle: [Object, String],
  rowSelection: {
    type: Object
  }
};
const TableStoreKey = Symbol("TableStore");
const index$2 = "";
const getValueByPathArray = (patharray, target) => {
  const path = patharray;
  for (const name of path) {
    if (typeof target === "undefined") {
      return void 0;
    }
    target = target[name];
  }
  return target;
};
function useCellClass(col) {
  const ns2 = useNamespace("table");
  return {
    [ns2.e("cell")]: true,
    [ns2.em("cell", "fixed-left")]: col.fixed === "left",
    [ns2.em("cell", "fixed-right")]: col.fixed === "right",
    [ns2.em("cell", "ellipsis")]: !!col.ellipsis
  };
}
const useTableStore = () => {
  const store = inject(TableStoreKey, void 0);
  return store;
};
function getColKey(col) {
  return col.key != void 0 ? col.key : Array.isArray(col.dataIndex) ? col.dataIndex.join(".") : col.dataIndex;
}
function getRowKey(row) {
  return row.__key__;
}
const __default__$a = defineComponent({
  name: "PTableBody",
  setup(props) {
    const ns2 = useNamespace("table");
    const {
      state,
      tableProps: tableProps2,
      toggleSelection,
      getFixedInfo
    } = useTableStore();
    const {
      _columns,
      filterTableData,
      selectionSet
    } = state;
    const renderBodyCell = (row, col, index2) => {
      if (typeof col.render === "function") {
        return col.render(row, index2);
      } else {
        col.dataIndex = col.dataIndex || col["data-index"];
        return typeof col.dataIndex === "string" ? row[col.dataIndex] : Array.isArray(col.dataIndex) ? getValueByPathArray(col.dataIndex, row) : void 0;
      }
    };
    const renderCellProps = (row, col, rowIndex, celIndex) => {
      if (typeof tableProps2.cellProps === "function") {
        return tableProps2.cellProps(row, col, rowIndex, celIndex);
      } else {
        return tableProps2.cellProps || {};
      }
    };
    const renderHeaderTd = (row, col, colIndex, rowIndex) => {
      const fixedInfo = getFixedInfo("cell", colIndex);
      const content = renderBodyCell(row, col, rowIndex);
      return createVNode("td", mergeProps({
        "key": getColKey(col),
        "class": [useCellClass(col), fixedInfo.class],
        "style": [{
          textAlign: col.align
        }, fixedInfo.styles]
      }, renderCellProps(row, col, rowIndex, colIndex), {
        "title": col.ellipsis && content
      }), [content]);
    };
    const renderRowProps = (row, index2) => {
      if (typeof tableProps2.rowProps === "function") {
        return tableProps2.rowProps(row, index2);
      } else {
        return tableProps2.rowProps || {};
      }
    };
    const renderSelection = (rowkey, row) => {
      const fixedInfo = getFixedInfo("selection", 0);
      return tableProps2.rowSelection && createVNode("td", {
        "class": [ns2.e("cell"), ns2.e("selection"), tableProps2.rowSelection.fixed && ns2.em("cell", "fixed-left"), fixedInfo.class],
        "style": fixedInfo.styles
      }, [createVNode(Checkbox, {
        "modelValue": selectionSet.value.has(rowkey),
        "onChange": (checked) => toggleSelection(checked, row)
      }, null)]);
    };
    return () => {
      return createVNode("tbody", {
        "class": ns2.e("body")
      }, [filterTableData.value.map((row, rowIndex) => {
        const rowkey = getRowKey(row);
        return createVNode("tr", mergeProps({
          "key": rowkey,
          "class": [ns2.e("row")]
        }, renderRowProps(row, rowIndex)), [renderSelection(rowkey, row), _columns.value.map((col, colIndex) => renderHeaderTd(row, col, colIndex, rowIndex))]);
      })]);
    };
  }
});
const __moduleId$a = "../promiseui/table/src/components/table-body.tsx";
ssrRegisterHelper(__default__$a, __moduleId$a);
const __default__$9 = defineComponent({
  props: {
    filterOptions: {
      type: Array,
      default: () => []
    },
    filterMethod: {
      type: Function,
      required: true
    }
  },
  emits: ["submit"],
  setup(props, {
    emit
  }) {
    const ns2 = useNamespace("table");
    const {
      filterData
    } = useTableStore();
    const checkeds = ref([]);
    const isFilterActive = ref(false);
    const initial = () => Array.from({
      length: props.filterOptions.length
    }).fill(false);
    const dropdownRef = ref();
    watchEffect(() => {
      checkeds.value = initial();
    });
    const submit = () => {
      var _a, _b;
      const checkedValues = [];
      let noSelect = true;
      for (let i = 0; i < checkeds.value.length; i++) {
        if (checkeds.value[i]) {
          checkedValues.push(props.filterOptions[i].value);
          noSelect = false;
        }
      }
      if (noSelect) {
        filterData(() => true);
        isFilterActive.value = false;
      } else {
        const filterMethod = (item, index2, arr) => {
          for (const value of checkedValues) {
            if (props.filterMethod(value, item, index2, arr)) {
              return true;
            }
          }
          return false;
        };
        filterData(filterMethod);
        isFilterActive.value = true;
      }
      (_b = (_a = dropdownRef.value).hide) == null ? void 0 : _b.call(_a);
    };
    const reset = () => {
      checkeds.value = initial();
    };
    return () => {
      return createVNode(Dropdown, {
        "hideOnClick": false,
        "trigger": "click",
        "ref": dropdownRef
      }, {
        default: () => createVNode("div", {
          "class": [ns2.e("filter"), isFilterActive.value && ns2.em("filter", "active")]
        }, [createVNode(Icon, {
          "component": FunnelSharp
        }, null)]),
        dropdown: () => createVNode(Fragment, null, [props.filterOptions.map((item, index2) => createVNode(DropdownItem, {
          "class": ns2.e("filter-option"),
          "key": item.value
        }, {
          default: () => [createVNode(Checkbox, {
            "label": item.label,
            "value": item.value,
            "modelValue": checkeds.value[index2],
            "onUpdate:modelValue": ($event) => checkeds.value[index2] = $event
          }, null)]
        })), createVNode("div", {
          "class": ns2.e("filter-action")
        }, [createVNode(Button, {
          "size": "xs",
          "type": "info",
          "fillMode": "none",
          "onClick": reset
        }, {
          default: () => [createTextVNode("重置")]
        }), createVNode(Button, {
          "size": "xs",
          "type": "primary",
          "onClick": submit
        }, {
          default: () => [createTextVNode("确定")]
        })])])
      });
    };
  }
});
const __moduleId$9 = "../promiseui/table/src/components/table-filter.tsx";
ssrRegisterHelper(__default__$9, __moduleId$9);
const __default__$8 = defineComponent({
  props: {
    sortMethod: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const {
      sortData
    } = useTableStore();
    const status = ref("");
    const ns2 = useNamespace("table");
    const handleSort = () => {
      if (status.value === "") {
        status.value = "↑";
        sortData("ASC", props.sortMethod);
      } else if (status.value === "↑") {
        status.value = "↓";
        sortData("DESC", props.sortMethod);
      } else {
        status.value = "";
        sortData("", props.sortMethod);
      }
    };
    watch(status, () => {
    });
    return () => {
      return createVNode("div", {
        "class": ns2.e("sorter"),
        "onClick": handleSort
      }, [createVNode(Icon, {
        "component": CaretUpSharp,
        "class": {
          [ns2.m("sorter-active")]: status.value === "↑"
        }
      }, null), createVNode(Icon, {
        "component": CaretDownSharp,
        "class": {
          [ns2.m("sorter-active")]: status.value === "↓"
        }
      }, null)]);
    };
  }
});
const __moduleId$8 = "../promiseui/table/src/components/table-sorter.tsx";
ssrRegisterHelper(__default__$8, __moduleId$8);
const __default__$7 = defineComponent({
  name: "PTableHeader",
  setup(props) {
    const ns2 = useNamespace("table");
    const {
      state,
      tableProps: tableProps2,
      selectionAll,
      selectionClear,
      getFixedInfo
    } = useTableStore();
    const {
      _columns,
      isSelectionAll,
      selectionSet
    } = state;
    const classes = computed(() => ({
      [ns2.e("header")]: true
    }));
    const indeterminate = computed(() => !isSelectionAll.value && !!selectionSet.value.size);
    const renderSelection = () => {
      const fixedInfo = getFixedInfo("selection", 0);
      return tableProps2.rowSelection && createVNode("th", {
        "class": [ns2.e("cell"), ns2.e("selection"), tableProps2.rowSelection.fixed && ns2.em("cell", "fixed-left"), fixedInfo.class, tableProps2.headerRowClassName],
        "style": [fixedInfo.styles, tableProps2.headerRowStyle || {}]
      }, [createVNode(Checkbox, {
        "indeterminate": indeterminate.value,
        "onChange": (checked) => checked || indeterminate.value ? selectionAll() : selectionClear(),
        "modelValue": isSelectionAll.value
      }, null)]);
    };
    return () => createVNode("thead", {
      "class": classes.value
    }, [createVNode("tr", {
      "class": [ns2.e("cell"), tableProps2.headerRowClassName],
      "style": tableProps2.headerRowStyle
    }, [renderSelection(), _columns.value.map((col, index2) => {
      const colKey = getColKey(col);
      const fixedInfo = getFixedInfo("cell", index2);
      return createVNode("th", {
        "key": colKey,
        "class": [useCellClass(col), fixedInfo.class],
        "style": [{
          textAlign: col.align
        }, fixedInfo.styles]
      }, [typeof col.title === "function" ? col.title() : col.title, typeof col.sorter === "function" && createVNode(__default__$8, {
        "sortMethod": col.sorter
      }, null), typeof col.filter === "function" && createVNode(__default__$9, {
        "filterOptions": col.filterOptions,
        "filterMethod": col.filter
      }, null)]);
    })])]);
  }
});
const __moduleId$7 = "../promiseui/table/src/components/table-header.tsx";
ssrRegisterHelper(__default__$7, __moduleId$7);
const index$1 = "";
const __default__$6 = defineComponent({
  props: {
    description: String,
    size: {
      type: String,
      default: "md"
    }
  },
  setup(props) {
    return () => {
      const ns2 = useNamespace("empty");
      return createVNode("div", {
        "class": [ns2.b(), ns2.m(props.size)]
      }, [createVNode("svg", {
        "viewBox": "0 0 28 28",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }, [createVNode("path", {
        "d": "M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",
        "fill": "currentColor"
      }, null), createVNode("path", {
        "d": "M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",
        "fill": "currentColor"
      }, null)]), createVNode("div", {
        "class": ns2.e("description")
      }, [props.description])]);
    };
  }
});
const __moduleId$6 = "../promiseui/shared/components/empty/index.tsx";
ssrRegisterHelper(__default__$6, __moduleId$6);
function useStickyOffset(_columns, rowSelection) {
  const offsetlefts = ref({
    selection: 0,
    cell: []
  });
  const fixeds = computed(() => {
    var _a;
    const cellFixeds = _columns.value.map((item) => ({
      fixed: item.fixed,
      last: false,
      first: false
    }));
    let lastIndex = void 0;
    let firstIndex = void 0;
    for (let i = 0; i < _columns.value.length; i++) {
      const col = _columns.value[i];
      if (firstIndex === void 0 && col.fixed && col.fixed === "right") {
        firstIndex = i;
      }
      if (col.fixed && col.fixed === "left") {
        lastIndex = i;
      }
    }
    if (lastIndex !== void 0) {
      cellFixeds[lastIndex].last = true;
    }
    if (firstIndex !== void 0) {
      cellFixeds[firstIndex].first = true;
    }
    return {
      cell: cellFixeds,
      selection: ((_a = rowSelection.value) == null ? void 0 : _a.fixed) ? {
        fixed: rowSelection.value.fixed && "left",
        last: lastIndex === void 0,
        first: false
      } : void 0
    };
  });
  const setFixedStyle = (_offsetlefts) => {
    offsetlefts.value = {
      selection: rowSelection.value ? _offsetlefts[0] : 0,
      cell: rowSelection.value ? _offsetlefts.slice(1) : _offsetlefts
    };
  };
  const getFixedInfo = (type, index2) => {
    var _a, _b;
    let fixed = "";
    let styles = {};
    let first = false;
    let last = false;
    if (type === "selection") {
      fixed = (_a = fixeds.value.selection) == null ? void 0 : _a.fixed;
      last = ((_b = fixeds.value.selection) == null ? void 0 : _b.last) || false;
      if (fixed) {
        styles = {
          left: offsetlefts.value.selection + "px"
        };
      } else {
        styles = {};
      }
    } else if (type === "cell") {
      const cellFixedInfo = fixeds.value.cell[index2];
      fixed = cellFixedInfo.fixed;
      first = cellFixedInfo.first;
      last = cellFixedInfo.last;
      if (fixed === "left") {
        styles = {
          left: offsetlefts.value.cell[index2] + "px"
        };
      } else if (fixed === "right") {
        styles = {
          left: offsetlefts.value.cell[index2] + "px"
        };
      } else {
        styles = {};
      }
    } else {
      fixed = "";
      styles = {};
    }
    let className = void 0;
    const ns2 = useNamespace("table");
    if (first) {
      className = ns2.em("cell", "fixed-right-first");
    }
    if (last) {
      className = ns2.em("cell", "fixed-left-last");
    }
    return {
      styles,
      class: className
    };
  };
  return {
    getFixedInfo,
    setFixedStyle
  };
}
function useSelection(rowSelection, dataSource, rowKey, dataSourceMap) {
  const selectionSet = computed(
    () => {
      var _a;
      return new Set(((_a = rowSelection.value) == null ? void 0 : _a.selectedRowKeys) || []);
    }
  );
  const getRows = (keys) => keys.map((key) => dataSourceMap.get(key));
  const handleChange = (keys) => {
    var _a;
    if (!((_a = rowSelection.value) == null ? void 0 : _a.onChange))
      return;
    if (rowSelection.value.onChange.length < 2) {
      rowSelection.value.onChange(keys, []);
    } else {
      rowSelection.value.onChange(keys, getRows(keys));
    }
  };
  const toggleSelection = (checked, row) => {
    var _a;
    const rowKey2 = row.__key__;
    if (!((_a = rowSelection.value) == null ? void 0 : _a.onChange))
      return;
    if (checked) {
      const keys = [...selectionSet.value, rowKey2];
      handleChange(keys);
    } else {
      const keys = [...selectionSet.value];
      const index2 = keys.indexOf(rowKey2);
      if (index2 != -1) {
        keys.splice(index2, 1);
      }
      handleChange(keys);
    }
  };
  const selectionAll = () => {
    var _a;
    const cloneSet = new Set(selectionSet.value);
    let isFunction = false;
    let isString = false;
    if (typeof rowKey === "string")
      isString = true;
    if (typeof rowKey === "function")
      isFunction = true;
    for (let i = 0; i < dataSource.value.length; i++) {
      const item = dataSource.value[i];
      let key;
      if (isString) {
        key = item[rowKey];
      } else if (isFunction) {
        key = rowKey(dataSource.value[i]);
      } else {
        key = i;
      }
      cloneSet.add(key);
    }
    if ((_a = rowSelection.value) == null ? void 0 : _a.onChange) {
      const keys = [...cloneSet];
      handleChange(keys);
    }
  };
  const selectionClear = () => {
    var _a;
    if ((_a = rowSelection.value) == null ? void 0 : _a.onChange) {
      handleChange([]);
    }
  };
  return {
    selectionSet,
    toggleSelection,
    selectionAll,
    selectionClear
  };
}
const __TABLE_COLUMN = "__TABLE_COLUMN";
const __default__$5 = defineComponent({
  [__TABLE_COLUMN]: true,
  name: "PTableColumn",
  render() {
    return null;
  }
});
const __moduleId$5 = "../promiseui/table/src/table-column.tsx";
ssrRegisterHelper(__default__$5, __moduleId$5);
function useColumns(columns, slots) {
  return computed(() => {
    var _a;
    if (columns.value && columns.value.length) {
      return columns.value;
    } else {
      const children = ((_a = slots.default) == null ? void 0 : _a.call(slots)) || [];
      const columns2 = [];
      for (const vnode of children) {
        const columnProps = vnode.props || {};
        if (vnode.type && vnode.type[__TABLE_COLUMN]) {
          const children2 = vnode.children;
          if (children2) {
            if (typeof children2.default === "function") {
              columnProps.render = (row, index2) => renderSlot(children2, "default", {
                row,
                index: index2
              });
            }
            if (typeof children2.title === "function") {
              columnProps.title = children2.title;
            }
          }
          if (columnProps.ellipsis === "")
            columnProps.ellipsis = true;
          columns2.push(columnProps);
        } else {
          console.warn("Table 组件里只能是TableColumn组件");
        }
      }
      return columns2;
    }
  });
}
function createStore(dataSource, columns, props, tableRef, slots) {
  const tableData = ref([]);
  const _columns = useColumns(columns, slots);
  const filterMethod2 = shallowRef(() => true);
  const getKey = (item, index2) => {
    let key;
    if (typeof props.rowKey === "function") {
      key = props.rowKey(item);
    } else if (typeof props.rowKey === "string") {
      key = item[props.rowKey];
    } else {
      key = index2;
    }
    return key;
  };
  const dataSourceMap = /* @__PURE__ */ new Map();
  const setDataSourceMap = () => {
    dataSourceMap.clear();
    for (let i = 0; i < dataSource.value.length; i++) {
      const row = dataSource.value[i];
      const key = getKey(row, i);
      dataSourceMap.set(key, row);
      row.__key__ = key;
    }
  };
  watchEffect(() => {
    tableData.value = dataSource.value.slice() || [];
    setDataSourceMap();
  });
  const sortData = (direction, sortMethod) => {
    if (direction === "ASC") {
      tableData.value.sort((a, b) => sortMethod ? sortMethod(a, b) : 0);
    } else if (direction === "DESC") {
      tableData.value.sort((a, b) => {
        return sortMethod ? -sortMethod(a, b) : 0;
      });
    } else {
      tableData.value = dataSource.value.slice();
    }
  };
  const filterData = (_filterMethod) => {
    filterMethod2.value = _filterMethod;
  };
  const filterTableData = computed(
    () => tableData.value.filter(filterMethod2.value)
  );
  const rowSelectionRef = toRef(props, "rowSelection");
  const { selectionClear, selectionAll, toggleSelection, selectionSet } = useSelection(rowSelectionRef, dataSource, props.rowKey, dataSourceMap);
  const isSelectionAll = computed(
    () => !!selectionSet.value.size && selectionSet.value.size === filterTableData.value.length
  );
  const { setFixedStyle, getFixedInfo } = useStickyOffset(
    _columns,
    rowSelectionRef
  );
  let prevPos = "left";
  const ns2 = useNamespace("table");
  const setScrollXPosition = (pos) => {
    var _a, _b;
    if (prevPos === pos)
      return;
    (_a = tableRef.value) == null ? void 0 : _a.classList.add(ns2.m(`is${pos}`));
    (_b = tableRef.value) == null ? void 0 : _b.classList.remove(ns2.m(`is${prevPos}`));
    prevPos = pos;
  };
  return {
    state: {
      tableData,
      _data: dataSource,
      _columns,
      filterMethod: filterMethod2,
      filterTableData,
      selectionSet,
      isSelectionAll,
      dataSourceMap
    },
    tableProps: props,
    sortData,
    filterData,
    selectionClear,
    selectionAll,
    toggleSelection,
    setFixedStyle,
    getFixedInfo,
    setScrollXPosition
  };
}
const styleStringOrNumber = (style) => {
  if (typeof style === "string") {
    return style;
  } else if (typeof style === "number") {
    return style + "px";
  } else {
    return void 0;
  }
};
const __default__$4 = defineComponent({
  name: "PTable",
  props: tableProps,
  emits: [],
  setup(props, {
    slots
  }) {
    const tableRef = ref();
    const store = createStore(toRef(props, "dataSource"), toRef(props, "columns"), props, tableRef, slots);
    provide(TableStoreKey, store);
    const ns2 = useNamespace("table");
    const classes = computed(() => ({
      [ns2.b()]: true,
      [ns2.m("border")]: props.border,
      [ns2.m("stripe")]: props.stripe,
      [ns2.m(props.size)]: true,
      [ns2.m("isleft")]: true
      //默认在left
    }));
    const columnStyles = (col) => {
      return {
        width: styleStringOrNumber(col.width),
        maxWidth: styleStringOrNumber(col.maxWidth),
        minWidth: styleStringOrNumber(col.minWidth),
        textAlign: col.align
      };
    };
    const filterTableData = store.state.filterTableData;
    const renderColgroup = () => createVNode("colgroup", null, [props.rowSelection && createVNode("col", {
      "style": props.rowSelection.style
    }, null), store.state._columns.value.map((col, index2) => createVNode("col", {
      "style": columnStyles(col),
      "key": index2
    }, null))]);
    const baseTable = () => createVNode("div", {
      "class": classes.value,
      "ref": tableRef
    }, [createVNode("table", {
      "class": ns2.e("table"),
      "style": {
        tableLayout: props.tableLayout
      }
    }, [renderColgroup(), props.showHeader && createVNode(__default__$7, null, null), createVNode(__default__$a, null, null)]), filterTableData.value.length === 0 && createVNode(__default__$6, {
      "class": ns2.e("empty"),
      "description": "无数据"
    }, null)]);
    const headerRef = ref();
    const fixedTable = () => {
      const bodyStyles = {
        maxHeight: styleStringOrNumber(props.maxHeight),
        minHeight: styleStringOrNumber(props.minHeight)
      };
      const fixedTableStyles = {
        tableLayout: "fixed",
        width: styleStringOrNumber(props.scrollX),
        minWidth: "100%"
      };
      let scrollLeft = 0;
      const bodyScroll = (e) => {
        const target = e.target;
        const _scrollLeft = target.scrollLeft;
        if (headerRef.value)
          headerRef.value.scrollLeft = _scrollLeft;
        scrollLeft = _scrollLeft;
        if (scrollLeft === 0) {
          store.setScrollXPosition("left");
        } else if (scrollLeft + target.clientWidth + 1 < target.scrollWidth) {
          store.setScrollXPosition("");
        } else {
          store.setScrollXPosition("right");
        }
      };
      return createVNode("div", {
        "class": classes.value,
        "ref": tableRef
      }, [createVNode("div", {
        "class": [ns2.e("header-wrap")],
        "ref": headerRef
      }, [createVNode("table", {
        "class": ns2.e("table"),
        "style": fixedTableStyles
      }, [props.showHeader && createVNode(__default__$7, null, null), renderColgroup()])]), createVNode(Scrollbar, {
        "onScroll": bodyScroll,
        "viewStyle": bodyStyles
      }, {
        default: () => [createVNode("table", {
          "class": ns2.e("table"),
          "style": fixedTableStyles
        }, [createVNode(__default__$a, null, null), renderColgroup()])]
      }), filterTableData.value.length === 0 && createVNode(__default__$6, {
        "class": ns2.e("empty"),
        "description": "无数据"
      }, null)]);
    };
    const isFixed = props.maxHeight || props.scrollX;
    return () => {
      nextTick(() => {
        var _a;
        const fixeds = Array.from(((_a = headerRef.value) == null ? void 0 : _a.querySelectorAll("th")) || []).map((item) => item.offsetLeft);
        store.setFixedStyle(fixeds);
      });
      return isFixed ? fixedTable() : baseTable();
    };
  }
});
const Table = __default__$4;
const __moduleId$4 = "../promiseui/table/src/table.tsx";
ssrRegisterHelper(__default__$4, __moduleId$4);
const TableInstall = {
  title: "Table 表格",
  category: "数据展示",
  status: "100%",
  install(app) {
    app.component(Table.name, Table);
    app.component(__default__$5.name, __default__$5);
  }
};
function useMonthList(currentYear) {
  const months = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
  ];
  const monthNames = dayjs.months();
  const monthNamesFormat = Array.from({ length: 4 }).map((_, i) => {
    return monthNames.slice(i * 3, (i + 1) * 3);
  });
  const monthRows = computed(
    () => months.map(
      (row, i) => row.map((_, j) => ({
        text: monthNamesFormat[i][j],
        dayjs: dayjs(new Date(currentYear.value, months[i][j] - 1))
        // 坑: 需要减去1
      }))
    )
  );
  return monthRows;
}
function IconDoubleChevronLeft() {
  return createVNode("svg", {
    "viewBox": "0 0 24 24",
    "fill": "none",
    "xmlns": "http://www.w3.org/2000/svg",
    "width": "1em",
    "height": "1em",
    "focus-able": false,
    "aria-hidden": true
  }, [createVNode("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    "d": "M12.6185 4.39653C13.1272 4.92524 13.1272 5.78245 12.6185 6.31116L7.14483 12L12.6185 17.6888C13.1272 18.2176 13.1272 19.0748 12.6185 19.6035C12.1098 20.1322 11.285 20.1322 10.7763 19.6035L4.38153 12.9573C3.87282 12.4286 3.87282 11.5714 4.38153 11.0427L10.7763 4.39653C11.285 3.86782 12.1098 3.86782 12.6185 4.39653Z",
    "fill": "currentColor"
  }, null), createVNode("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    "d": "M19.6185 4.39653C20.1272 4.92524 20.1272 5.78245 19.6185 6.31116L14.1448 12L19.6185 17.6888C20.1272 18.2176 20.1272 19.0748 19.6185 19.6035C19.1098 20.1322 18.285 20.1322 17.7763 19.6035L11.3815 12.9573C10.8728 12.4286 10.8728 11.5714 11.3815 11.0427L17.7763 4.39653C18.285 3.86782 19.1098 3.86782 19.6185 4.39653Z",
    "fill": "currentColor"
  }, null)]);
}
function IconDoubleChevronRight() {
  return createVNode("svg", {
    "viewBox": "0 0 24 24",
    "fill": "none",
    "xmlns": "http://www.w3.org/2000/svg",
    "width": "1em",
    "height": "1em",
    "focus-able": false,
    "aria-hidden": true
  }, [createVNode("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    "d": "M4.38153 4.39653C4.89024 3.86782 5.71502 3.86782 6.22373 4.39653L12.6185 11.0427C13.1272 11.5714 13.1272 12.4286 12.6185 12.9573L6.22373 19.6035C5.71502 20.1322 4.89024 20.1322 4.38153 19.6035C3.87282 19.0748 3.87282 18.2176 4.38153 17.6888L9.85517 12L4.38153 6.31116C3.87282 5.78245 3.87282 4.92524 4.38153 4.39653Z",
    "fill": "currentColor"
  }, null), createVNode("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    "d": "M11.3815 4.39653C11.8902 3.86782 12.715 3.86782 13.2237 4.39653L19.6185 11.0427C20.1272 11.5714 20.1272 12.4286 19.6185 12.9573L13.2237 19.6035C12.715 20.1322 11.8902 20.1322 11.3815 19.6035C10.8728 19.0748 10.8728 18.2176 11.3815 17.6888L16.8552 12L11.3815 6.31116C10.8728 5.78245 10.8728 4.92524 11.3815 4.39653Z",
    "fill": "currentColor"
  }, null)]);
}
const __default__$3 = defineComponent({
  props: {
    activeDay: {
      type: Object
    },
    currentYear: {
      type: Number,
      requird: true,
      default: 0
    }
  },
  emits: ["change", "yearChange"],
  setup(props, {
    emit
  }) {
    const ns2 = useNamespace("date-picker");
    const {
      currentYear
    } = toRefs(props);
    const monthRows = useMonthList(currentYear);
    const isActive = (day) => {
      var _a, _b, _c, _d;
      if (props.activeDay === void 0)
        return false;
      return day.month() === ((_b = (_a = props.activeDay) == null ? void 0 : _a.month) == null ? void 0 : _b.call(_a)) && day.year() === ((_d = (_c = props.activeDay) == null ? void 0 : _c.year) == null ? void 0 : _d.call(_c));
    };
    const handleMonthClick = (day) => {
      emit("change", day);
    };
    const togglePrevYear = () => {
      emit("yearChange", currentYear.value - 1);
    };
    const toggleNextYear = () => {
      emit("yearChange", currentYear.value + 1);
    };
    return () => createVNode("div", {
      "class": ns2.b()
    }, [createVNode("div", {
      "class": ns2.e("header")
    }, [createVNode("div", {
      "class": ns2.e("btns")
    }, [createVNode(Button, {
      "size": "xs",
      "shake": false,
      "fillMode": "none",
      "onClick": togglePrevYear
    }, {
      default: () => [createVNode(IconDoubleChevronLeft, null, null)]
    })]), createVNode("div", {
      "class": ns2.e("navigation-year")
    }, [currentYear.value + "年"]), createVNode("div", {
      "class": ns2.e("btns")
    }, [createVNode(Button, {
      "size": "xs",
      "shake": false,
      "fillMode": "none",
      "onClick": toggleNextYear
    }, {
      default: () => [createVNode(IconDoubleChevronRight, null, null)]
    })])]), createVNode("div", {
      "class": ns2.e("body")
    }, [createVNode("table", null, [createVNode("tbody", null, [monthRows.value.map((row) => createVNode("tr", null, [row.map((month) => createVNode("td", {
      "key": month.dayjs.unix(),
      "class": {
        [ns2.e("month-year-cell")]: true,
        [ns2.em("month-year-cell", "active")]: isActive(month.dayjs)
      },
      "onClick": () => handleMonthClick(month.dayjs)
    }, [createVNode("div", {
      "class": [ns2.e("month-year-cell-inner")]
    }, [createVNode("span", null, [month.text])])]))]))])])])]);
  }
});
const __moduleId$3 = "../promiseui/datePicker/src/datePicker-month.tsx";
ssrRegisterHelper(__default__$3, __moduleId$3);
const __default__$2 = defineComponent({
  props: {
    activeDay: {
      type: Object
    },
    currentYear: {
      type: Number,
      requird: true,
      default: 0
    }
  },
  emits: ["change", "changeYear"],
  setup(props, {
    emit
  }) {
    const ns2 = useNamespace("date-picker");
    const initialDate = dayjs();
    const startYear = ref(Math.floor(initialDate.year() / 10) * 10 - 1);
    const yearRows = computed(() => {
      const endYear = startYear.value + 12;
      const years = [];
      for (let i = startYear.value; i < endYear; i++) {
        const index2 = Math.floor((i - startYear.value) / 3);
        const row = years[index2];
        const day = dayjs(new Date(i, 0));
        if (row) {
          row.push(day);
        } else {
          years[index2] = [day];
        }
      }
      return years;
    });
    const isActive = (day) => {
      var _a;
      if (props.activeDay === void 0)
        return false;
      if (Array.isArray(props.activeDay))
        ;
      else {
        return ((_a = props.activeDay) == null ? void 0 : _a.year()) === day.year();
      }
    };
    const handleYearClick = (day) => {
      emit("change", day);
    };
    return () => createVNode("div", {
      "class": ns2.b()
    }, [createVNode("div", {
      "class": ns2.e("header")
    }, [createVNode("div", {
      "class": ns2.e("btns")
    }, [createVNode(Button, {
      "size": "xs",
      "shake": false,
      "fillMode": "none",
      "onClick": () => startYear.value -= 10
    }, {
      default: () => [createVNode(IconDoubleChevronLeft, null, null)]
    })]), createVNode("div", {
      "class": ns2.e("navigation-year")
    }, [`${startYear.value + 1} 年 - ${startYear.value + 10}年`]), createVNode("div", {
      "class": ns2.e("btns")
    }, [createVNode(Button, {
      "size": "xs",
      "shake": false,
      "fillMode": "none",
      "onClick": () => startYear.value += 10
    }, {
      default: () => [createVNode(IconDoubleChevronRight, null, null)]
    })])]), createVNode("div", {
      "class": ns2.e("body")
    }, [createVNode("table", null, [createVNode("tbody", null, [yearRows.value.map((row) => createVNode("tr", {
      "class": ns2.e("year-row")
    }, [row.map((day) => createVNode("td", {
      "key": day.unix(),
      "class": {
        [ns2.e("month-year-cell")]: true,
        [ns2.em("month-year-cell", "active")]: isActive(day)
      },
      "onClick": () => handleYearClick(day)
    }, [createVNode("div", {
      "class": [ns2.e("month-year-cell-inner")]
    }, [createVNode("span", null, [createTextVNode(" "), day.year()])])]))]))])])])]);
  }
});
const __moduleId$2 = "../promiseui/datePicker/src/datePicker-year.tsx";
ssrRegisterHelper(__default__$2, __moduleId$2);
function getFirstWeekDay(year, month) {
  return new Date(year, month - 1, 1).getDay() || 7;
}
function getMonthDayCount(year, month) {
  return new Date(year, month, 0).getDate();
}
function getLastMonthRestDays(year, month) {
  const weekday = getFirstWeekDay(year, month);
  const LastMonthDayCount = getMonthDayCount(year, month - 1);
  const days = [];
  for (let i = 0; i < weekday - 1; i++) {
    const day = dayjs(new Date(year, month - 2, LastMonthDayCount - i));
    days.unshift(day);
  }
  return days;
}
function getCurrentMonthDays(year, month) {
  const count = getMonthDayCount(year, month);
  return Array.from({ length: count }).map((_, i) => {
    return dayjs(new Date(year, month - 1, i + 1));
  });
}
function getNextMonthRestDays(year, month) {
  const lastMonthDayCount = getFirstWeekDay(year, month) - 1;
  const curMonthDayCount = getMonthDayCount(year, month);
  const nextMonthDayCount = 6 * 7 - (lastMonthDayCount + curMonthDayCount);
  return Array.from({ length: nextMonthDayCount }).map((_, i) => {
    return dayjs(new Date(year, month, i + 1));
  });
}
function useDayList(currentYear, currentMonth) {
  const days = computed(() => {
    return getDays(currentYear.value, currentMonth.value);
  });
  return days;
}
function getDays(year, month) {
  return getLastMonthRestDays(year, month).concat(
    getCurrentMonthDays(year, month),
    getNextMonthRestDays(year, month)
  );
}
function useSelectCurrentDate() {
  const initialDate = dayjs();
  const currentYear = ref(initialDate.year());
  const currentMonth = ref(initialDate.month() + 1);
  return [currentYear, currentMonth];
}
function useTogglePage(currentMonth, currentYear) {
  const togglePrevMonth = () => {
    if (currentMonth.value === 1) {
      currentMonth.value = 12;
      currentYear.value--;
    } else {
      currentMonth.value--;
    }
  };
  const toggleNextMonth = () => {
    if (currentMonth.value === 12) {
      currentMonth.value = 1;
      currentYear.value++;
    } else {
      currentMonth.value++;
    }
  };
  const togglePrevYear = () => {
    currentYear.value--;
  };
  const toggleNextYear = () => {
    currentYear.value++;
  };
  const setYear = (year) => {
    currentYear.value = year;
  };
  const setMonth = (month) => {
    currentMonth.value = month;
  };
  return {
    togglePrevYear,
    toggleNextYear,
    toggleNextMonth,
    togglePrevMonth,
    setYear,
    setMonth
  };
}
function IconChevronLeft() {
  return createVNode("svg", {
    "viewBox": "0 0 24 24",
    "fill": "none",
    "xmlns": "http://www.w3.org/2000/svg",
    "width": "1em",
    "height": "1em",
    "focus-able": false,
    "aria-hidden": true
  }, [createVNode("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    "d": "M16.2782 4.23933C16.864 4.82511 16.864 5.77486 16.2782 6.36065L10.6213 12.0175L16.2782 17.6744C16.864 18.2601 16.864 19.2099 16.2782 19.7957C15.6924 20.3815 14.7426 20.3815 14.1569 19.7957L7.43934 13.0782C6.85355 12.4924 6.85355 11.5426 7.43934 10.9568L14.1569 4.23933C14.7426 3.65354 15.6924 3.65354 16.2782 4.23933Z",
    "fill": "currentColor"
  }, null)]);
}
function IconChevronRight() {
  return createVNode("svg", {
    "viewBox": "0 0 24 24",
    "fill": "none",
    "xmlns": "http://www.w3.org/2000/svg",
    "width": "1em",
    "height": "1em",
    "focus-able": false,
    "aria-hidden": true
  }, [createVNode("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    "d": "M7.43934 19.7957C6.85355 19.2099 6.85355 18.2601 7.43934 17.6744L13.0962 12.0175L7.43934 6.36065C6.85355 5.77486 6.85355 4.82511 7.43934 4.23933C8.02513 3.65354 8.97487 3.65354 9.56066 4.23933L16.2782 10.9568C16.864 11.5426 16.864 12.4924 16.2782 13.0782L9.56066 19.7957C8.97487 20.3815 8.02513 20.3815 7.43934 19.7957Z",
    "fill": "currentColor"
  }, null)]);
}
const index = "";
const __default__$1 = defineComponent({
  name: "PDatePicker",
  props: {
    activeDay: {
      type: [Object, Array]
    }
  },
  emits: ["change"],
  setup(props, {
    emit
  }) {
    const ns2 = useNamespace("date-picker");
    const classes = computed(() => ({
      [ns2.b()]: true
    }));
    const [currentYear, currentMonth] = useSelectCurrentDate();
    const days = useDayList(currentYear, currentMonth);
    const dayRows = computed(() => {
      return Array.from({
        length: 6
      }).map((_, i) => {
        return days.value.slice(i * 7, i * 7 + 7);
      });
    });
    const weaks = dayjs.weekdaysMin();
    weaks.push(weaks.shift());
    const tdClasses = computed(() => ({
      [ns2.e("day-cell")]: true
    }));
    const {
      toggleNextMonth,
      togglePrevMonth,
      toggleNextYear,
      togglePrevYear,
      setMonth,
      setYear
    } = useTogglePage(currentMonth, currentYear);
    const handleDayClick = (day) => {
      const month = day.month() + 1;
      if (month < currentMonth.value) {
        togglePrevMonth();
      } else if (month > currentMonth.value) {
        toggleNextMonth();
      }
      emit("change", day);
    };
    const isActive = (day) => {
      var _a, _b, _c, _d, _e, _f;
      if (Array.isArray(props.activeDay))
        ;
      else {
        if (props.activeDay === void 0)
          return false;
        return day.year() === ((_b = (_a = props.activeDay) == null ? void 0 : _a.year) == null ? void 0 : _b.call(_a)) && day.month() === ((_d = (_c = props.activeDay) == null ? void 0 : _c.month) == null ? void 0 : _d.call(_c)) && day.date() === ((_f = (_e = props.activeDay) == null ? void 0 : _e.date) == null ? void 0 : _f.call(_e));
      }
    };
    const showSelectMonth = ref(false);
    const showSelectYear = ref(false);
    return () => createVNode(Fragment, null, [withDirectives(createVNode(__default__$2, {
      "activeDay": Array.isArray(props.activeDay) ? void 0 : props.activeDay,
      "currentYear": currentYear.value,
      "onChange": (day) => {
        setMonth(day.month() + 1);
        setYear(day.year());
        showSelectYear.value = false;
        showSelectMonth.value = true;
      }
    }, null), [[vShow, showSelectYear.value]]), withDirectives(createVNode(__default__$3, {
      "activeDay": Array.isArray(props.activeDay) ? void 0 : props.activeDay,
      "currentYear": currentYear.value,
      "onYearChange": (year) => setYear(year),
      "onChange": (day) => {
        setMonth(day.month() + 1);
        setYear(day.year());
        showSelectMonth.value = false;
      }
    }, null), [[vShow, showSelectMonth.value]]), withDirectives(createVNode("div", {
      "class": classes.value
    }, [createVNode("div", {
      "class": ns2.e("header")
    }, [createVNode("div", {
      "class": ns2.e("btns")
    }, [createVNode(Button, {
      "size": "xs",
      "shake": false,
      "fillMode": "none",
      "onClick": togglePrevYear
    }, {
      default: () => [createVNode(IconDoubleChevronLeft, null, null)]
    }), createVNode(Button, {
      "size": "xs",
      "shake": false,
      "fillMode": "none",
      "onClick": togglePrevMonth
    }, {
      default: () => [createVNode(IconChevronLeft, null, null)]
    })]), createVNode("div", {
      "class": ns2.e("navigation-month")
    }, [createVNode("span", {
      "onClick": () => showSelectYear.value = true
    }, [currentYear.value + "年"]), createVNode("span", {
      "onClick": () => showSelectMonth.value = true
    }, [currentMonth.value + "月"])]), createVNode("div", {
      "class": ns2.e("btns")
    }, [createVNode(Button, {
      "size": "xs",
      "shake": false,
      "fillMode": "none",
      "onClick": toggleNextMonth
    }, {
      default: () => [createVNode(IconChevronRight, null, null)]
    }), createVNode(Button, {
      "size": "xs",
      "shake": false,
      "fillMode": "none",
      "onClick": toggleNextYear
    }, {
      default: () => [createVNode(IconDoubleChevronRight, null, null)]
    })])]), createVNode("div", {
      "class": ns2.e("body")
    }, [createVNode("table", null, [createVNode("thead", null, [weaks.map((weak) => createVNode("th", null, [weak]))]), createVNode("tbody", null, [dayRows.value.map((dayCols) => createVNode("tr", null, [dayCols.map((day) => createVNode("td", {
      "key": day.unix(),
      "class": [tdClasses.value, {
        [ns2.em("day-cell", "weak")]: day.month() + 1 !== currentMonth.value || day.year() !== currentYear.value,
        [ns2.em("day-cell", "active")]: isActive(day)
      }],
      "onClick": () => handleDayClick(day)
    }, [createVNode("div", {
      "class": ns2.e("day-cell-inner")
    }, [day.date()])]))]))])])])]), [[vShow, !showSelectMonth.value && !showSelectYear.value]])]);
  }
});
const __moduleId$1 = "../promiseui/datePicker/src/datePicker-day.tsx";
ssrRegisterHelper(__default__$1, __moduleId$1);
const datePickerProps = {
  clearable: Boolean,
  bordered: Boolean,
  disabled: Boolean,
  disabledDate: {
    // 不可以 unknown , 先先上去
    type: Function
  },
  locale: Object,
  mode: String,
  placeholder: String,
  size: String,
  valueFormat: String,
  modelValue: {
    type: [Object, Array, void 0]
  }
};
function useDayjsInit() {
  dayjs.locale("zh-cn");
  dayjs.extend(localeData);
  dayjs.extend(customParseFormat);
}
const __default__ = defineComponent({
  name: "PDatePicker",
  props: datePickerProps,
  emits: ["update:modelValue"],
  setup(props, {
    emit
  }) {
    useDayjsInit();
    const inputWapperRef = ref();
    const showOverlay = ref(false);
    const inputValue = computed(() => {
      var _a;
      if (Array.isArray(props.modelValue)) {
        return "0";
      } else {
        return (_a = props.modelValue) == null ? void 0 : _a.format("YYYY-MM-DD");
      }
    });
    const onInput = (e) => {
      const value = e.target.value;
      const day = dayjs(value, "YYYY-MM-DD", true);
      if (day.isValid()) {
        emit("update:modelValue", day);
      }
    };
    return () => createVNode("div", null, [createVNode(Input, {
      "wave": false,
      "placeholder": props.placeholder,
      "ref": (el) => inputWapperRef.value = el.wapper,
      "onFocus": () => showOverlay.value = true,
      "modelValue": inputValue.value,
      "onInput": onInput
    }, {
      suffix: () => createVNode(Icon, {
        "component": CalendarClearOutline
      }, null)
    }), createVNode(KeepAlive, null, [createVNode(Overlay, {
      "origin": inputWapperRef.value,
      "modelValue": showOverlay.value,
      "onUpdate:modelValue": ($event) => showOverlay.value = $event,
      "offset": 0,
      "style": {
        padding: 0
      },
      "position": "bottom-start",
      "onOutsideClick": () => showOverlay.value = false,
      "memo": true
    }, {
      default: () => [createVNode(__default__$1, {
        "activeDay": props.modelValue,
        "onChange": (day) => {
          emit("update:modelValue", day);
          setTimeout(() => showOverlay.value = false, 88);
        }
      }, null)]
    })])]);
  }
});
const DatePicker = __default__;
const __moduleId = "../promiseui/datePicker/src/datePicker.tsx";
ssrRegisterHelper(__default__, __moduleId);
const DatePickerInstall = {
  title: "DatePicker 日期选择器",
  category: "数据录入",
  status: "100%",
  install(app) {
    app.component(DatePicker.name, DatePicker);
  }
};
const installs = [
  ButtonInstall,
  SpaceInstall,
  IconInstall,
  MessageInstall,
  InputInstall,
  OverlayInstall,
  DropdownInstall,
  TabsInstall,
  SwitchInstall,
  RadioInstall,
  CheckboxInstall,
  SelectInstall,
  ScrollbarInstall,
  VirtualScrollInstall,
  TagInstall,
  AutoCompleteInstall,
  FormInstall,
  PopoverInstall,
  ModalInstall,
  MessageBoxInstall,
  LoadingBarInstall,
  TableInstall,
  DatePickerInstall
];
const _default = {
  version: "0.0.1",
  // 实现vue3插件，需要实现一个install方法
  // 将来接收一个App实例，createApp()
  install(app) {
    installs.forEach((p) => app.use(p));
  }
};
export {
  AutoComplete,
  Button,
  Checkbox,
  CheckboxGroup,
  DatePicker,
  Dropdown,
  DropdownItem,
  Form,
  FormItem,
  Icon,
  Input,
  Message$1 as Message,
  MessageBox$1 as MessageBox,
  Modal,
  Overlay,
  Popover,
  Radio,
  RadioGroup,
  Scrollbar,
  Select,
  Space,
  Switch,
  TabPane,
  Table,
  Tabs,
  Tag,
  VirtualScroll,
  _default as default,
  default2 as theme,
  useLoadingBar$1 as useLoadingBar
};
