---
 carousel 走马灯
---
旋转木马，一组轮播的区域。

## 何时使用

- 当有一组平级的内容。
- 当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。
- 常用于一组图片或卡片轮播。

## API

| 成员 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| zjArrows | 是否显示箭头 | boolean | true |
| zjAutoPlay | 是否自动播放 | boolean | false |
| panels | 设置需要实例化的Component与必要数据  | `PanelItem` | `[]` |
| onActive | 实例化Component时触发的回调函数 | Function(affixed) | 无 |

**PanelItem：** `{ component:Type<any>, data:any }`
