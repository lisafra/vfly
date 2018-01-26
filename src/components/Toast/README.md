# 使用说明

### Example

```html
<template>
    <vf-button text="click" @click="fnShowToast">
</template>
    
<script>
    export default {
        methods: {
            fnShowToast () {
                this.$Toast({
                    message: '这是一条提示语',
                    icon: 'success',
                    position: 'bottom'
                })
            }
        }
    }
</script>

```
注意： 如果toast组件是按需引用的，需要在vue实例化之前将toast组件挂载到vue上。 示例：

```javascript

import Vue from 'vue';
import { Toast } from 'vf-ui';
Vue.prototype.$Toast = Toast;

```

### API

#### config param

| 属性  | 说明 | 类型 | 默认值|
| ----- |-----------| -----| -----|
| message | 需要提示的文字 | String | 无 |
| position | 提示框的位置，可选top, middle, bottom | String | middle |
| icon | 提示框中icon类型 | String | 无 |
| className | 自定义样式名 | String | 无 |





