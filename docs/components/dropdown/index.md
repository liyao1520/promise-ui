# Dropdown 下拉菜单

## 基础用法

移动到下拉菜单上，展开更多操作。

:::demo

```vue
<template>
  <h4>链接类型</h4>
  <p-dropdown type="a">
    下拉菜单
    <template #dropdown>
      <p-dropdown-item>选项一</p-dropdown-item>
      <p-dropdown-item>选项二</p-dropdown-item>
      <p-dropdown-item disabled>选项三</p-dropdown-item>
      <p-dropdown-item>选项四</p-dropdown-item>
    </template>
  </p-dropdown>
  <br />
  <br />
  <h4>按钮类型</h4>
  <p-dropdown type="button">
    下拉菜单
    <template #dropdown>
      <p-dropdown-item>选项一</p-dropdown-item>
      <p-dropdown-item>选项二</p-dropdown-item>
      <p-dropdown-item disabled>选项三</p-dropdown-item>
      <p-dropdown-item>选项四</p-dropdown-item>
    </template>
  </p-dropdown>
</template>
```

:::

## 触发方式

:::demo

```vue
<template>
  <h4>hover</h4>
  <p-dropdown type="a">
    下拉菜单
    <template #dropdown>
      <p-dropdown-item>选项一</p-dropdown-item>
      <p-dropdown-item>选项二</p-dropdown-item>
      <p-dropdown-item disabled>选项三</p-dropdown-item>
      <p-dropdown-item>选项四</p-dropdown-item>
    </template>
  </p-dropdown>
  <br />
  <br />
  <h4>click</h4>
  <p-dropdown type="a" trigger="click">
    下拉菜单
    <template #dropdown>
      <p-dropdown-item>选项一</p-dropdown-item>
      <p-dropdown-item>选项二</p-dropdown-item>
      <p-dropdown-item disabled>选项三</p-dropdown-item>
      <p-dropdown-item>选项四</p-dropdown-item>
    </template>
  </p-dropdown>
</template>
```

:::

## 菜单隐藏方式

可以 hide-on-click 属性来配置。

:::demo

```vue
<template>
  <h4>点击隐藏</h4>
  <p-dropdown type="a" :hide-on-click="true">
    下拉菜单
    <template #dropdown>
      <p-dropdown-item>选项一</p-dropdown-item>
      <p-dropdown-item>选项二</p-dropdown-item>
      <p-dropdown-item disabled>选项三</p-dropdown-item>
      <p-dropdown-item>选项四</p-dropdown-item>
    </template>
  </p-dropdown>
  <br />
  <br />
  <h4>点击不隐藏</h4>
  <p-dropdown type="a" :hide-on-click="false">
    下拉菜单
    <template #dropdown>
      <p-dropdown-item>选项一</p-dropdown-item>
      <p-dropdown-item>选项二</p-dropdown-item>
      <p-dropdown-item disabled>选项三</p-dropdown-item>
      <p-dropdown-item>选项四</p-dropdown-item>
    </template>
  </p-dropdown>
</template>
```

:::

## 自定义渲染

通过传默认插槽和`dropdown`插槽,来自定义渲染组件

:::demo

```vue
<template>
  <div style="margin: 20px 100px">
    <p-dropdown :hide-on-click="false">
      <p-button>自定义渲染 <p-icon :component="ChevronDownOutline" /></p-button>
      <template #dropdown>
        <div class="demo">
          <p-input placeholder="搜索关键词">
            <template #prefix>
              <p-icon :component="SearchSharp" size="16" />
            </template>
          </p-input>
          <p-dropdown-item disabled> item 1 </p-dropdown-item>
          <p-dropdown-item> item 2 </p-dropdown-item>
          <p-dropdown-item> item 3 </p-dropdown-item>
          <p-dropdown-item> item 4 </p-dropdown-item>
          <p-dropdown-item> item 5</p-dropdown-item>
          <p-dropdown-item> item 6</p-dropdown-item>
          <p-button type="primary">确认</p-button>
          <p-button type="info">取消</p-button>
        </div>
      </template>
    </p-dropdown>
  </div>
</template>
<style>
  .demo {
    padding: 5px;
    width: 300px;
  }
  .demo button {
    margin: 2px;
  }
  .demo .pui-input {
    margin: 10px 0;
  }
</style>
<script setup>
  import { ChevronDownOutline, SearchSharp } from '@vicons/ionicons5'
</script>
```

:::

## 按钮类型

当`type` 为 `button` 时,设置`btnType` 可以设置按钮类型

:::demo

```vue
<template>
  <p-dropdown type="button" btnType="default">
    下拉菜单
    <template #dropdown>
      <p-dropdown-item> item 1 </p-dropdown-item>
      <p-dropdown-item> item 2 </p-dropdown-item>
      <p-dropdown-item> item 3 </p-dropdown-item>
    </template>
  </p-dropdown>
  <br />
  <br />
  <br />
  <p-dropdown type="button" btnType="primary">
    下拉菜单
    <template #dropdown>
      <p-dropdown-item> item 1 </p-dropdown-item>
      <p-dropdown-item> item 2 </p-dropdown-item>
      <p-dropdown-item> item 3 </p-dropdown-item>
    </template>
  </p-dropdown>
  <br />
  <br />
  <br />
  <p-dropdown type="button" btnType="info">
    下拉菜单
    <template #dropdown>
      <p-dropdown-item> item 1 </p-dropdown-item>
      <p-dropdown-item> item 2 </p-dropdown-item>
      <p-dropdown-item> item 3 </p-dropdown-item>
    </template>
  </p-dropdown>
</template>
```

:::

## 不同尺寸

`Dropdown` 组件提供除了`sm` `md` `lg`三种尺寸，可以在不同场景下选择合适的尺寸。

:::demo

```vue
<template>
  <p-space>
    <p-dropdown type="a" size="sm">
      下拉菜单
      <template #dropdown>
        <p-dropdown-item> item 1 </p-dropdown-item>
        <p-dropdown-item> item 2 </p-dropdown-item>
        <p-dropdown-item> item 3 </p-dropdown-item>
      </template>
    </p-dropdown>
    <p-dropdown type="a" size="md">
      下拉菜单
      <template #dropdown>
        <p-dropdown-item> item 1 </p-dropdown-item>
        <p-dropdown-item> item 2 </p-dropdown-item>
        <p-dropdown-item> item 3 </p-dropdown-item>
      </template>
    </p-dropdown>
    <p-dropdown type="a" size="lg">
      下拉菜单
      <template #dropdown>
        <p-dropdown-item> item 1 </p-dropdown-item>
        <p-dropdown-item> item 2 </p-dropdown-item>
        <p-dropdown-item> item 3 </p-dropdown-item>
      </template>
    </p-dropdown>
  </p-space>
  <br />
  <p-space>
    <p-dropdown type="button" size="sm">
      下拉菜单
      <template #dropdown>
        <p-dropdown-item> item 1 </p-dropdown-item>
        <p-dropdown-item> item 2 </p-dropdown-item>
        <p-dropdown-item> item 3 </p-dropdown-item>
      </template>
    </p-dropdown>
    <p-dropdown type="button" size="md">
      下拉菜单
      <template #dropdown>
        <p-dropdown-item> item 1 </p-dropdown-item>
        <p-dropdown-item> item 2 </p-dropdown-item>
        <p-dropdown-item> item 3 </p-dropdown-item>
      </template>
    </p-dropdown>
    <p-dropdown type="button" size="lg">
      下拉菜单
      <template #dropdown>
        <p-dropdown-item> item 1 </p-dropdown-item>
        <p-dropdown-item> item 2 </p-dropdown-item>
        <p-dropdown-item> item 3 </p-dropdown-item>
      </template>
    </p-dropdown>
  </p-space>
</template>
```

:::

## dark 模式

:::demo

```vue
<template>
  <p-space>
    <p-dropdown type="a" size="sm" dark>
      下拉菜单
      <template #dropdown>
        <p-dropdown-item> item 1 </p-dropdown-item>
        <p-dropdown-item> item 2 </p-dropdown-item>
        <p-dropdown-item> item 3 </p-dropdown-item>
      </template>
    </p-dropdown>
    <p-dropdown type="a" size="md" dark>
      下拉菜单
      <template #dropdown>
        <p-dropdown-item> item 1 </p-dropdown-item>
        <p-dropdown-item> item 2 </p-dropdown-item>
        <p-dropdown-item> item 3 </p-dropdown-item>
      </template>
    </p-dropdown>
    <p-dropdown type="a" size="lg" dark>
      下拉菜单
      <template #dropdown>
        <p-dropdown-item> item 1 </p-dropdown-item>
        <p-dropdown-item> item 2 </p-dropdown-item>
        <p-dropdown-item> item 3 </p-dropdown-item>
      </template>
    </p-dropdown>
  </p-space>
</template>
```

:::

## 按钮点击事件

`Dropdown`的 `type`为`button`时的点击事件

:::demo

```vue
<template>
  <p-dropdown type="button" size="lg" @click="$message.success('@click')">
    下拉菜单
    <template #dropdown>
      <p-dropdown-item> item 1 </p-dropdown-item>
      <p-dropdown-item> item 2 </p-dropdown-item>
      <p-dropdown-item> item 3 </p-dropdown-item>
    </template>
  </p-dropdown>
</template>
```

:::
