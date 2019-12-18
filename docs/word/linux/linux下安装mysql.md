# linux下安装mysql

Mysql数据库的安装对于开发者来说，是我们必然会面对的问题，它的安装过程其实并不复杂，并且网络上的安装教程也非常多，但是对于新手来说，各种不同形式的安装教程，又给新手们带来了要选择哪种方式进行安装的难题，而且很多时候按照教程也没有能够安装成功，安装过程出现各种各样的错误。

下面记录了我在Linux环境下安装Mysql的完整过程，如有错误或遗漏，欢迎指正。
## 安装前准备

### 1.检查mysql用户组和用户是否存在，如果没有，则创建
```
[root@VM_0_2_centos /]# cat /etc/group | grep mysql
[root@VM_0_2_centos /]# cat /etc/passwd | grep mysql
[root@VM_0_2_centos /]# groupadd mysql
[root@VM_0_2_centos /]# useradd -r -g mysql mysql

```

### 2.从官网下载用于linux的mysql安装包
```
[root@VM_0_2_centos /]# wget https://dev.mysql.com/get/Downloads/MySQL-5.7/mysql-5.7.24-linux-glibc2.12-x86_64.tar.gz
```

## 安装mysql
### 1.在执行wget命令的目录下找到mysql安装包mysql-5.7.24-linux-glibc2.12-x86_64.tar.gz
执行解压命令
```
[root@VM_0_2_centos /]# tar xzvf mysql-5.7.24-linux-glibc2.12-x86_64.tar.gz
[root@VM_0_2_centos /]# ls
mysql-5.7.24-linux-glibc2.12-x86_64.tar.gz
mysql-5.7.24-linux-glibc2.12-x86_64
```
解压完成后，可以在当前目录下多了个加压文件，移动文件到/usr/local/mysql
执行移动命令
```
[root@VM_0_2_centos /]# mv mysql-5.7.24-linux-glibc2.12-x86_64 /usr/local/mysql
```
### 2.在/usr/local/mysql目录下创建data目录
```
[root@VM_0_2_centos /]# mkdir /usr/local/mysql/data
```
### 3.更改mysql目录下多有目录及文件夹所属的用户组和用户，以及权限
```
[root@VM_0_2_centos /]#  chown -R mysql:mysql /usr/local/mysql
[root@VM_0_2_centos /]# chown -R 755 /usr/local/mysql
```
### 4.编译安装并初始化mysql，务必记住初始化输出末尾的密码（数据库管理员临时密码）
```
[root@VM_0_2_centos /]# cd /usr/local/mysql/bin
[root@VM_0_2_centos /]# ./mysql --initialize --user==mysql --data=/usr/local/mysql/data -basedir=/usr/local/mysql
```

### 补充说明
此时可能出现错误
![](https://user-gold-cdn.xitu.io/2019/11/27/16eaaad3c26fe409?w=962&h=55&f=png&s=66200))
出现该问题首先检查该链接文件有没有安装使用命令进行核查
```
[root@VM_0_2_centos /]# rpm -qa|grep libaio
[root@VM_0_2_centos /]#
```
运行命令后发现系统中无该链接库文件(如果有看下一条)
```
[root@VM_0_2_centos /]# yum install libaio-devel.x86_64
```
安装成功后，继续运行初始化命令，此时可能出现如下错误：

![](https://user-gold-cdn.xitu.io/2019/11/27/16eaaba576427115?w=799&h=87&f=png&s=76132)

执行如下命令后，再次运行数据库的初始化命令
```
[root@VM_0_2_centos /]# yum -y install numactl
```

### 5.运行初始化命令成功后，输出日志如下

![](https://user-gold-cdn.xitu.io/2019/11/27/16eaabd07e822d36?w=576&h=320&f=png&s=318700)

记录日志最末尾的字符串，此字符串为mysql管理员临时登录密码

### 6.编辑配置文件my.cnf，添加配置如下
```
datadir=/usr/local/mysql/data
basedir=/usr/local/mysql
port = 3306
# Disabling symbolic-links is recommended to prevent assorted security risks
symbolic-links=0
```

### 7.启动mysql服务器
```
[root@VM_0_2_centos /]# /usr/local/mysql/support-files/mysql.server start
```
显示如下结果，说明数据库安装成功

![](https://user-gold-cdn.xitu.io/2019/11/27/16eaac60b57ac91b?w=575&h=50&f=png&s=33886)

### 8.添加软链接，并重启mysql服务
```
[root@VM_0_2_centos /]# ln -s /usr/local/mysql/support-files/mysql.server /etc/init.d/mysql
[root@VM_0_2_centos /]# ln -s /usr/local/mysql/bin/mysql /usr/bin/mysql
[root@VM_0_2_centos /]# service mysql restart
```
### 9.登录mysql， 修改密码（密码为步骤5生成的临时密码）
```
[root@VM_0_2_centos /]# mysql -u root -p
Enter password:
mysql>set password for root@localhost = password('yourpass');
```
如果执行成功，输出如下

![](https://user-gold-cdn.xitu.io/2019/11/27/16eaaccc58b5dd89?w=468&h=46&f=png&s=28212)
否则执行
```
[root@VM_0_2_centos /]# mysql -u root -p
Enter password:
mysql>alter user 'root'@'localhost' IDENTIFIED BY 'liuhehe';
```

### 10.开放远程连接
```
mysql>use mysql;
msyql>update user set user.Host='%' where user.User='root';
mysql>flush privileges;
```
执行后输出如下，说明修改成功，可以使用mysql远程工具连接


![](https://user-gold-cdn.xitu.io/2019/11/27/16eaadab0828eff9?w=503&h=206&f=png&s=96684)