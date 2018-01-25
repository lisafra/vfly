# vfly

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

---

# 使用方式

## 1. script 方式引用
- 下载相关js、css文件，并在页面引用。注意拷贝样式表时将fonts文件夹一并拷贝到styles文件夹里
```html
<!-- import Vue.js -->
<script src="//vuejs.org/js/vue.min.js"></script>
<!-- import stylesheet -->
<link rel="stylesheet" href="styles/vfly.css">
<!-- import iView -->
<script src="js/vfly.min.js"></script>

```
- 使用示例
```html
<div id="app">
    <vf-button @click="showToast" radius>Click me!</vf-button>
</div>
<script>
    new Vue({
        el: '#app',
        methods: {
            showToast: function () {
                this.$Toast({
                    message: '这是一条提示语'
                })
            }
        }
    })
</script>
```

## 2. npm安装：当插件使用 (全局引用，不需要用到的组件也会引入，代码体积大）
- 安装组件
` npm install --save-dev vf-ui `

- 在app入口文件，如main.js中，粘贴如下代码
```javascript
  import Vue from 'vue'
  import Vfly from 'vf-ui'
  import 'vf-ui/dist/styles/vfly.css'
  Vue.use(Vfly)
```
- 在vue的模板文件中即可直接使用, 示例
```
<template>
    <vf-button class="reload-btn" text="reload" long="normal" radius></vf-button>
</template>
```

## 3. npm安装：按需引用
- 安装组件
` npm install --save-dev vfly `

- 安装按需加载插件
` npm install --save-dev babel-plugin-transform-imports `

- 在.babelrc文件的"plugins"配置项中，使用插件
```
"plugins": [
  ["transform-imports", {
    "vfly": {
      "transform": "vfly/src/components/${member}",
      "preventFullImport": true
    }
  }]
]
```
- 在需要的时候引用并注册组件
```
import { Button，Toast } from 'vfly'
export default {
  components: { Button, Toast }
}
```

# 自定义样式
vfly-ui的基础样式，如果主题颜色、字体大小、边框、阴影、层级等都可以通过配置统一调整。因为vfly-ui的样式都是使用less语法，自定义样式配置也必需使用less。示例：

- 新建theme.less样式表，引入vfly-ui的样式入口文件，对照配置表修改相关的配置
```less
@import "~vf-ui/src/styles/index";

@1px: .02rem; // 字体、边距、宽度、高度等基础计算单位
@theme-color: #1890ff;  // 主题颜色
```

- 在自己的app样式入口文件中引入theme.less即可。

- 相关可配置的参数，详见《自定义样式》配置表。

# 样式设备适配
vfly-ui的所有字体、行高、边距、宽高等都是通过rem表示，真实的1px = 0.1rem, 通过
```
body {
    font-size: 62.%;
}
```
来实现。
如果自己的app里使用了rem, 并且1px != 0.1rem, 在上面的theme.less文件里修改@1px的值即可。