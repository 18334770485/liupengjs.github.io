首先需要说明的是： nvm不支持Windows！！！，但是有替代品，也就是nvm-windows，

## 下载安装
[点击下载 nvm](https://github.com/coreybutler/nvm-windows/releases) 
我们选择latest中的第一个：nvm-noinstall.zip，点击下载。

![](https://user-gold-cdn.xitu.io/2019/12/13/16efd68a85989904?w=1141&h=793&f=png&s=79793)
下载完成后解压到一个地方，比如:E:\soft\nvm （自己安装软件的地方） 里面的文件列表是这样的：elevate.cmd、elevate.vbs、install.cmd、LICENSE、nvm.exe
+ 备注：windows下要设置显示文件类型的扩展名，这样才能看到上述文件的后缀
+ 双击 install.cmd 然后会让你输入”压缩文件解压或拷贝到的一个绝对路径” 先不用管它，直接回车，成功后，会在e盘（你软件安装的盘）的根目录生成一个settings.txt的文本文件，把这个文件剪切到E:\soft\nvm目录中，然后我们把它的内容修改成这样：

```
root:  E:\soft\nvm
path:  E:\soft\nvm\nodejs
arch: 64 
proxy: none
node_mirror: http://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/
```
## 配置环境变量
+ 点击我的电脑->属性->高级系统设置->环境变量
![](https://user-gold-cdn.xitu.io/2019/12/13/16efd7084f3b2c96?w=1153&h=666&f=png&s=156418)
+ 在系统变量中添加NVM_HOME 和 NVM_SYMLINK变量并配置值为

![](https://user-gold-cdn.xitu.io/2019/12/13/16efd73f1edadcd2?w=629&h=662&f=png&s=51149)
```
NVM_HOME E:\soft\nvm
NVM_SYMLINK E:\soft\nvm\nodejs
```
+ 在path变量中使用
```
新建 %NVM_HOME% %NVM_SYMLINK% 一路确定就好
```
![](https://user-gold-cdn.xitu.io/2019/12/13/16efd7531dcc396b?w=1148&h=623&f=png&s=85327)

## nvm使用
+ 打开一个cmd窗口输入命令：nvm v ，那么我们会看到当前nvm的版本信息。然后我们可以安装nodejs了。

+ 继续输入命令：nvm install latest 如果网络畅通，我们会看到正在下载的提示，下载完成后 会让你use那个最新的node版本。

+ 如果你是第一次下载，在use之前，E:\soft\nvm目录下是没有nodejs这个文件夹的，在输入比如： nvm use 8.11.2 之后，你会发现，E:\soft\nvm目录下多了一个nodejs文件夹，这个文件夹不是单纯的文件夹，它是一个快捷方式，指向了 E:\soft\nvm 里的 v8.11.2文件夹。

+ 同样的咱们可以下载其他版本的nodejs，这样通过命令:nvm use 版本号 比如：nvm use v10.15.3就可以轻松实现版本切换了。
+ nvm list 查看单前的node列表
+ 备注： 如果你的电脑系统是32 位的，那么在下载nodejs版本的时候，一定要指明 32 如： nvm install  v10.15.3 32 这样在32位的电脑系统中，才可以使用，默认是64位的。

## nrm安装使用
什么是nrm？<br/>
nrm就是npm registry manager<br/> 也就是npm的镜像源管理工具，有时候国外资源太慢，那么我们可以用这个来切换镜像源。<br/>
我们只要通过这个命令: npm install -g nrm 就可以实现安装。<br/>
注意-g可以直接放到install的后面，我们以后也最好这样用，因为这样用，我们可以在cmd中上下箭头切换最近命令的时候，容易修改，更方便操作。安装完成后，我们就可以使用了。

+ 命令：nrm ls 用于展示所有可切换的镜像地址
+ 命令：nrm use cnpm 我们这样就可以直接切换到cnpm上了。当然也可以按照上面罗列的其他内容进行切换