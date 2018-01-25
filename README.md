# vfly

> 一个可配置，可扩展，使用灵活的高质量前端ui组件，基于vue实现，风格更适合移动端。

### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

####
---
####

### 安装使用

组件使用方式比较灵活，既能用script直接在html页面中使用，也能当做包模块用npm来引用。

#### script 方式引用

1. 下载相关js、css文件到自己的项目目录里，并在页面引用。需要注意的是，在拷贝样式表时请将fonts文件夹一并拷贝到styles文件夹里。

```html
<!-- import Vue.js -->
<script src="//vuejs.org/js/vue.min.js"></script>
<!-- import stylesheet -->
<link rel="stylesheet" href="styles/vfly.css">
<!-- import iView -->
<script src="js/vfly.min.js"></script>

```

2. 直接在页面中使用组件。想了解每个组件的使用方式，请阅读/src/components/${需要使用的组件}目录下的README.md。另外，因为组件是基于vue框架实现的，所以只能在vue的作用域中使用，示例如下：

```html
<div id="app">
    <!-- div里面是vue作用域 -->
    <vf-button @click="showToast" radius>Click me!</vf-button> 
</div>
<!-- 非vue作用域，无法使用组件 -->
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

#### npm安装：当插件使用 (全局引用，不需要用到的组件也会引入，代码体积大）

1. 安装组件（默认你已经安装好了node环境，没有的请自行在node官网上下载软件安装，或百度其它方式安装）

``` bash
npm install --save-dev vf-ui
```

2. 在app入口文件，如main.js中，粘贴如下代码

```javascript
  import Vue from 'vue'
  import Vfly from 'vf-ui'
  import 'vf-ui/dist/styles/vfly.css'
  Vue.use(Vfly)
```

3. 在vue的模板文件中即可直接使用, 示例：

```html
<template>
    <vf-button class="reload-btn" text="reload" long="normal" radius></vf-button>
</template>
```

#### npm安装：按需引用

1. 安装组件

``` bash
npm install --save-dev vf-ui
```

2. 安装按需加载插件

```bash
npm install --save-dev babel-plugin-transform-imports 
```

3. 在.babelrc文件的"plugins"配置项中，使用插件。没有.babelrc文件的请新建。

```javascript
"plugins": [
  ["transform-imports", {
    "vf-ui": {
      "transform": "vf-ui/src/components/${member}",
      "preventFullImport": true
    }
  }]
]
```

4. 在需要的时候引入组件，并在vue中注册组件，同时引入组件样式文件。其中引入组件入口样式文件，更换主题和自定义样式会比较方便，推荐！

```javascript
// 全局注册
import Vue from 'vue'
import { Button，Toast } from 'vf-ui'

import 'vf-ui/dist/styles/vfly.css' // 引入压缩后的样式文件 or 
import 'vf-ui/src/styles/index.less' // 引入组件入口样式文件

Vue.component('vf-button', Button)
Vue.component('vf-toast', Toast)

// 在单文件中使用
<script>
    import { Button，Toast } from 'vf-ui'
    export default {
      components: { Button, Toast }
    }
</script>
```

####
---
####

### 自定义样式

vf-ui修改样式非常灵活，既可以直接在组件上添加自定义样式名覆盖原有样式，也可以通过参数配置做统一修改。

1. 添加自定义样式名。这种方式比较适应局部调整，比如修改某按钮的边距：

```html
<template>
    <vf-button class="goods-item" size="large" plain radius>
        ￥100
        <p slot="desc">售价：￥80</p>
    </vf-button>
</template>
<style lang="less" scoped>
     .goods-item{
        padding: 2rem 4rem;
    }
</style>
```

2. 参数配置。这种方式比较适应修改组件的整体风格样式，比如主题色，font-famaily，标题正文颜色，动画时长，层级关系等等。由于vf-ui的样式都是使用less来配置参数的，所以自定义样式配置也必需使用less。示例：

  - 新建一个theme.less的样式表，引入vfly-ui的样式入口文件，对照配置表修改相关的配置

  ```less
  @import "~vf-ui/src/styles/index";

  @theme-color: #1890ff;  // 主题颜色
  ```

  - 在自己的app样式入口文件中引入theme.less即可。

  - 相关可配置的参数，详见[自定义样式配置表]()。

####
---
####

### 样式设备适配

vf-ui的所有字体、行高、边距、宽高等都是通过rem计算的，计算基础数值是1px = 0.1rem, 通过设定根元素的字体大小为62.5%来实现。

```less
body {
    font-size: 62.5%;
}
```

不过，如果我们的项目中，body的font-size是通过js动态计算的话，组件的样式会受到影响。需要在上面的theme.less文件中，配置一下@1px的值, 改成我们在项目中使用rem的基础数值即可。示例：

```less
@import "~vf-ui/src/styles/index";

@1px: .02rem; // 字体、边距、宽度、高度等基础计算单位
```

####
---
####

### 参与贡献

vf-ui希望能成长为一个组件极其丰富，使用极其灵活，人人可参与贡献的前端ui组件平台。如果你正在使用vue开发页面，你的页面中又有可重复使用的模块，那么请把它按照我们的规范封装贡献出来吧。

#### 开发环境目录树
```bash
├─assets    // 静态资源，如图片
├─build     // 开发环境搭建与配置相关文件
├─dist      // 打包后的资源文件，也是npm包中引用的文件
│  ├─locale
│  └─styles
│    └─fonts
├─examples   // 组件测试效果示例文件所在位置
│  ├─components
│  ├─pages
│  └─router
├─src   // 组件开发相关文件所在位置
│  ├─components  // 所有组件存放位置
│  │  ├─button
│  │  ├─icon
│  │  └─Toast
│  ├─config  // 公用配置变量存放位置
│  ├─directives  // vue自定义指令存放位置
│  ├─locale   // 语言包相关文件存放位置
│  │  └─lang
│  ├─mixins  // 组件实例扩展方法存放位置
│  ├─styles  // 组件样式存放位置
│  │  ├─animation  // 动画样式存放位置
│  │  ├─common     // 公用样式存放位置
│  │  │  └─iconfont
│  │  │      └─fonts
│  │  ├─components  // 组件样式存放位置
│  │  └─mixins  // 公用样式方法存放位置
│  └─utils // 公用js类、插件存放位置
└─test  // 测试相关代码存放位置
```

#### 规范

- 组件命名使用驼峰，加'Vf'前缀。如: VfHeader, VfButton

- 每个组件样式前缀统一在src/config/classprefix.js中定义， 格式为： 'vf' + 组件名

- 组件中和样式表中，写样式名时，请使用统一的样式前缀变量

- 书写样式时，尽量使用src/styles/custom.less中定义的变量

- 所有的字体、行高、边距、宽度等样式，请使用@1px计算，不要用px、em、rem。 示例：
```less
div {
  margin: @1px * 15  //  上下左右都是15px
}
```
- 重复使用3次以上的样式且在custom.less中没有定义变量，请在custom.less中定义后，再使用变量表示





