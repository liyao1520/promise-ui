# Popover 悬浮提示

## 基础用法

`content` 指定显示文字内容 , `trigger` 指定触发方式

:::demo

```vue
<template>
  <p-space>
    <p-popover content="hello world!">
      <p-button>hover</p-button>
    </p-popover>
    <p-popover content="hello world!" trigger="click">
      <p-button>click</p-button>
    </p-popover>
  </p-space>
</template>
```

:::

## 自定义内容

插槽 `content` 自定义内容, `class` ,`style`自定义 `popover` 类名和样式

:::demo

```vue
<template>
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
```

:::

## 弹出位置

:::demo

```vue
<template>
  <div class="popover-demo-item-horizontal">
    <p-popover position="top-start">
      <template #content>
        <div>
          <div>top-start</div>
          <div>top-start</div>
        </div>
      </template>
      <p-button style="width: 130px;">top-start</p-button>
    </p-popover>
    <p-popover position="top">
      <template #content>
        <div>top</div>
      </template>
      <p-button style="width: 130px;">top</p-button>
    </p-popover>
    <p-popover position="top-end">
      <template #content>
        <div>
          <div>top-end</div>
          <div>top-end</div>
        </div>
      </template>
      <p-button style="width: 130px;">top-end</p-button>
    </p-popover>
  </div>

  <div class="popover-demo-vertical-wrapper">
    <div class="popover-demo-item-vertical">
      <p-popover position="left-start">
        <template #content>
          <div>
            <div>left-start</div>
            <div>left-start</div>
          </div>
        </template>
        <p-button style="width: 130px;">left-start</p-button>
      </p-popover>
      <p-popover position="left">
        <template #content>
          <div>left</div>
        </template>
        <p-button style="width: 130px;">left</p-button>
      </p-popover>
      <p-popover position="left-end">
        <template #content>
          <div>
            <div>left-end</div>
            <div>left-end</div>
          </div>
        </template>
        <p-button style="width: 130px;">left-end</p-button>
      </p-popover>
    </div>
    <div class="popover-demo-item-vertical">
      <p-popover position="right-start">
        <template #content>
          <div>
            <div>right-start</div>
            <div>right-start</div>
          </div>
        </template>
        <p-button style="width: 130px;">right-start</p-button>
      </p-popover>
      <p-popover position="right">
        <template #content>
          <div>right</div>
        </template>
        <p-button style="width: 130px;">right</p-button>
      </p-popover>
      <p-popover position="right-end">
        <template #content>
          <div>
            <div>right-end</div>
            <div>right-end</div>
          </div>
        </template>
        <p-button style="width: 130px;">right-end</p-button>
      </p-popover>
    </div>
  </div>
  <div class="popover-demo-item-horizontal">
    <p-popover position="bottom-start">
      <template #content>
        <div>
          <div>bottom-start</div>
          <div>bottom-start</div>
        </div>
      </template>
      <p-button style="width: 130px;">bottom-start</p-button>
    </p-popover>
    <p-popover position="bottom">
      <template #content>
        <div>bottom</div>
      </template>
      <p-button style="width: 130px;">bottom</p-button>
    </p-popover>
    <p-popover position="bottom-end">
      <template #content>
        <div>
          <div>bottom-end</div>
          <div>bottom-end</div>
        </div>
      </template>
      <p-button style="width: 130px;">bottom-end</p-button>
    </p-popover>
  </div>
</template>
<style>
  .popover-demo-item-horizontal {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 440px;
    margin-bottom: 4px;
  }
  .popover-demo-item-horizontal > * {
    margin-right: 4px;
  }
  .popover-demo-vertical-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 440px;
  }
  .popover-demo-item-vertical {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 4px;
  }
  .popover-demo-item-vertical > * {
    margin-bottom: 4px;
  }
</style>
```

:::

## 颜色

默认 颜色为 `dark` ,要想使用白色设置 `dark` 为 `false`

:::demo

```vue
<template>
  <p-space>
    <p-popover content="hello world!" :dark="false">
      <p-button>hover</p-button>
    </p-popover>
    <p-popover content="hello world!" trigger="click" :dark="false">
      <p-button>click</p-button>
    </p-popover>
  </p-space>
</template>
```

:::
