# 阅读css世界笔记

## 块级元素和内联元素
### block-level element(块级元素)
常见的块级元素有`<div>`、`<li>`和`<table>`等。注意的是块级元素和display：block不是一个概念，例如li元素默认的display值是list-style，table元素默认的display值是table，但他们都是块级元素。

块级元素具有换行特性，因此可以配合clear清除浮动
```
.clear:after {
 content: '';
 display: table; // 也可以是 block，或者是 list-item
 clear: both;
}
```
实际开发中我们要么使用 block，要么使用table，并不会使用 list-item，主要有 3 个原因。

+ 1 个字符的比较多，其他都是 5 个字符。
+ 会出现不需要的项目符号`·`，再加一行 list-style:none 声明就可以了。
+ IE 浏览器不支持伪元素的 display 值为 listitem。这是不使用 display:list-item 清除浮动的主因，兼容性不好。对于 IE 浏览器（包括 IE11），普通元素设置 display:list-item 有效，但是 :before /:after 伪元素就不行。
### 

## 盒子 
### 块级盒子 （block-level box） 负责结构
### 内联盒子 （inline box） 负责内容
### 附加盒子 
#### 标记盒子 （marker box）
专门用来放圆点、数字这些项目符号。IE浏览器下伪元素不支持 list-item 或许就是无法创建这个“标记盒子”导致的
#### 双盒子模型 display:inline-block 元素
是每个元素都两个盒子，外在盒子①和内在盒子。外在盒子负责元素是可以一行显示，还是只能换行显示；内在盒子负责宽高、内容呈现什么的。但是呢，造物主又想了想，叫“内在盒子”虽然容易理解，但是未免有些俗气，难登大雅之堂，于是，又想了一个更专业的名称，叫作“容器盒子”。


## width：auto；
+ 宽100%，如p，div标签
+ 自撑开宽度 浮动和定位
+ min-height 如table中
+ max-width 超出容器 如添加white-space:nowrap默认不换行 （he连续数字或字母）


## 外部尺寸和流体特性
### 正常流宽度
当我们在一个容器里倒入足量的水时，水一定会均匀铺满整个容器，在页面中随便扔一个`<div>`元素，其尺寸表现就会和这水流一样铺满容器。这就是 block 容器的流特性。这种特性，所有浏览器的表现都是一致的。
### 格式化宽度
格式化宽度仅出现在“绝对定位模型”中，也就是出现在 position属性值为 absolute 或 fixed 的元素中。当 left/top 或 top/bottom 对立方位的属性值同时存在的时候，元素的宽度表现为“格式化宽度”，其宽度大小相对于最近的具有定位特性（position 属性值不是 static）的祖先元素计算。
```
div { position: absolute; left: 20px; right: 20px; } 
```
假设该`<div>`元素最近的具有定位特性的祖先元素的宽度是 1000 像素，则这个`<div>`元素的宽
度是 960（即 1000−20−20）像素。此外，和上面的普通流一样，“格式化宽度”具有完全的流体性，也就是 margin、border、padding 和 content 内容区域同样会自动分配水平（和垂直）空间。
## 内部尺寸和流体特性
### 包裹性（自撑开）



