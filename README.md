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


# 使用方式

## 1.插件使用 (全局引用，不需要用到的组件也会引入，代码体积大）
- 安装组件
` npm install --save-dev vfly `
- 在app入口文件，如main.js粘贴如下代码
```javascript
  import Vue from 'vue'
  import Vfly from 'vfly'
  Vue.use(Vfly)
```

## 2.按需引用
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
import { Button, cell } from 'vfly'
export default {
  components: { Button, cell }
}
```

