# 使用说明

### API

#### props

| 属性  | 说明 | 类型 | 默认值|
| ----- |-----------| -----| -----|
| type | 类型， 可选值为default、 primary | String | primayry |
| long | 长度， 可选值为full、 normal: 父容器宽度的90% | String | 随文字长度自动变长 |
| size | 文字大小，可选值为small:12px、 large: 16px | String | 14px |
| radius | 圆角边框， 可选值true、half：半圆弧度、像素值 | String, Number, Boolean | false |
| plain | 幽灵状态 | Boolean | false |
| disabled | 无法使用状态 | Boolean | false |
| color | 主体颜色，可选十六进制、rgb、rgba、英文颜色单词、hls | String | themeColor |
| text | 主文本信息 | String | 无 |
| text | 补充文本信息 | String | 无 |


#### slot
| 名称  | 说明 |
| ----- |-----------|
| desc | 补充信息， 字号比按钮主体字小2px |
| icon | 按钮文字前的小图标 |





