# 常用linux命令

## 目录处理
### 查看目录
+ ll 查看目录下的文件，并且有详细信息
+ ls 查看目录下的文件
+ ll -a 查看目录下的所有文件，包含隐藏文件

### 创建目录
mkdir: 创建目录<br/>
一次创建多个目录： mkdir {a,b,c,d,e,f}<br/>
一次创建 a b c d e f多个目录。


### 删除目录
rmdir：删除一个空文件夹<br/>

rm ：删除文件或者文件夹<br/>
-r：递归删除<br/>
-f：强制删除 即没有提醒<br/>
rm -rf 目录名 删除目录和它的子内容

### 移动目录
mv：移动文件或者文件夹，可以在移动的时候重命名
### 目录重命名
mv：移动文件或者文件夹，可以在移动的时候重命名
## 文件处理
### 新建文件 
vim 文件名
### 查看文件 
vim 文件名
### 修改文件 
vim 文件名 ，然后按i可以修改 ，修改完成按esc退出，按:wq保存

## nginx
### nginx 启动
### nginx 停止
### nginx 重启
nginx -s reload

## mysql
### mysql 启动
### mysql 停止
### mysql 重启

## 服务器
### 服务器关机
+ shutdown -h now 关闭系统
+ init 0 关闭系统
+ telinit 0 关闭系统
+ shutdown -h hours:minutes & 按预定时间关闭系统 
+ shutdown -c 取消按预定时间关闭系统 
+ shutdown -r now 重启
+ reboot 重启
+ logout 注销 
### 查看服务器性能

+ date 显示系统日期 

## 权限管理命令
chmod:修改文件或目录的权限，只有root和所有者可以更改<br/>
chmod -R 777 testdir  给文件读写全部权限

## 压缩解压缩命令

### .gz格式
+ 压缩：gzip 文件名 只能压缩文件不能压缩目录，压缩完源文件也不见了
+ 解压缩：gunzip/gzip -d 压缩包名称

### tar:
+ -zcvf 压缩后文件名 打包的目录 :生成.tar.gz文件 注：这个命令先用tar归档，然后把归档的包压缩成.gz
+ -zxvf 要解压的文件名 ：解压缩.tar.bz2的文件

+ -jcvf 压缩后的文件名 打包的目录：生成.tar.bz2 注：这个命令先用tar归档，然后把归档的包压缩成.bz2
+ -jxvf 要解压的文件名 :解压.tar.bz2的文件

### zip:
+ zip -r 压缩生成的文件名 要压缩的目录
+ zip 压缩生成的文件名 要压缩的文件。

### unzip:
+ unzip 要解压缩的文件

### bzip2:
+ bzip2 -k 要压缩的文件名 -k选项：保留源文件
+ bunzip2 -k 要解压的文件名 -k选项：保留压缩包
