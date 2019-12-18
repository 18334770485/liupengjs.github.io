# 基于webpack4+和react16+从零开始搭建脚手架 

## 一：初始化项目
      mkdir webpack-react 创建项目目录
      cd  webpack-react 转到项目目录
      npm init -y 初始化项目，并全部确定
## 二：安装node，npm
    windows 去node.js官网下载安装包直接安装
    linux和mac mac和Linux直接命令行安装nvm install v10.15.3
    检查是否安装成功node -v, npm -v
## 三：安装webpack和webpack-cli
    npm install --save-dev webpack@4.15.1 webpack-cli 
## 四：创建项目文件
   新建目录src，新建index.html和index.js
   
   **index.js**
   ```
   var element =document.getElementById('root');
   element.innerHTML = 'hello, world!';
   ```
   **index.html**
   
  ```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>从零搭建react项目</title>
</head>
<body>
    <div id="root"></div>
    <script src="../dist/vender.js"></script>
</body>
</html>

 ```
 新建目录build，新建文件webpack.config.js
 
 **webpack.config.js**
 
 
```
const path = require('path');

module.exports = {
  entry: './src/index.js',  //打包入口文件
  output: {
    filename: 'vender.js', //打包生成的文件
    path: path.resolve(__dirname, '../dist')  //打包生成文件的存放目录
  }
};
```
现在的目录文件看起来是这样

```
build
   --webpack.config.js  webpack默认配置文件
src
   --index.html 静态文件
   --index.js 打包入口文件
node_modules node 依赖包目录  
package-lock.json webpack基本插件和依赖的版本号和信息
package.json 项目目录的详细描述
```
接下去我们要通过执行webpack命令，来编译我们的代码，生成vender.js。

```
webpack --config build/webpack.config.js
```
编译完成后，刷新根目录，可以看到已经生成dist文件夹和vender.js文件。
用浏览器打开html文件，你会看到hello word。我们成功通过webpack编译了js文件，并且没有出现问题。

webpack --config build/webpack.config.js命令，我们可以通过npm scripts管理起来。
在package.json文件，我们为scripts属性配置一个build命令，其值为：webpack --config build/webpack.config.js，以下是scripts的相关代码：

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --config build/webpack.config.js"
  }
```
然后在命令行中运行npm run build
生成以下机构目录

![](https://user-gold-cdn.xitu.io/2019/6/24/16b8807f988aea75?w=196&h=259&f=png&s=10632)

## 五：安装react和react-dom
在终端输入以下命令

```
npm install --save-dev react react-dom
```
安装成功后，我们在项目使用react，我们直接修改src目录下的index.js的代码，我们用react来插入这句hello world！

```
import React from "react";
import ReactDom from "react-dom";

ReactDom.render(
    <h1>hello,word!</h1>,
    document.getElementById('root')
);
```
好了，我们再编译试试看。

```
npm run build
```
失败了？对不对！首先，我告诉你这段代码没有任何问题为什么会失败？因为webpack只识别JavaScript文件，而且只能编译es5版本的JavaScript语法。实际上，我们使用ES2015，以及jsx的语法糖，webpack它根本不认识啊。怎么办？webpack 可以使用 loader 来预处理文件。它不仅仅可以处理JavaScript本身，还允许你打包任何的静态资源。
其中，babel-loader，就是这样一个预处理插件，它加载 ES2015+ 代码，然后使用 Babel 转译为 ES5。我们来了解下如何在webpack配置babel-loader。

首先安装babel相关的模块：

```
npm install --save-dev babel-loader @babel/preset-react @babel/preset-env @babel/core
```
除了babel-loader，我们还安装了好多的包，其中@babel/core是babel的核心模块，@babel/preset-env是转译ES2015+的语法，@babel/preset-react是转译react的JSX以及FLOW。

第二步，你需要在根目录建立一个.babelrc的文件，配置相关的presets：

```
{
      "presets": [
        [
          "@babel/preset-env",
          {
            "targets": {
              "browsers": [
                "> 1%",
                "last 5 versions",
                "ie >= 8"
              ]
            }
          }
        ],
        "@babel/preset-react"
      ]
    }
```
第三步，修改webpack.config.js文件。

```
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'vender.js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
      rules:[
          {
              test: /\.js?$/,
              use:"babel-loader"
          }
      ]
  }
};
```
在 webpack 配置中定义 loader 时，要定义在 module.rules 中。其中，test和use属性是必须的。include属性，定义了rules执行的范围。这告诉 webpack 编译器如下信息：
嘿，webpack 编译器，你在编译文件过程中，如果这个是在app目录下的js文件，在你对它打包之前，先使用 babel-loader 转换一下。

重新执行本地编译

```
npm run build
```
这次不再报错，编译成功。
好了，再次打开src目录的index.html，页面成功显示了hello world。
   
    

