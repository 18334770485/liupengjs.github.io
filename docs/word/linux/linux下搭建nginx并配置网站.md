# linux下搭建nginx并配置网站

## linux下安装nginx
### 安装依赖包

```
yum -y install gcc zlib zlib-devel pcre-devel openssl openssl-devel
```

- 安装 nginx 需要先将官网下载的源码进行编译，编译依赖 gcc 环境
- zlib库提供了开发人员的压缩算法，在Nginx的各种模块中需要使用gzip压缩
- Nginx的Rewrite模块和HTTP核心模块会使用到PCRE正则表达式语法。这里需要安装两个安装包pcre和pcre-devel。第一个安装包提供编译版本的库，而第二个提供开发阶段的头文件和编译项目的源代码
- nginx不仅支持 http协议，还支持 https（即在 ssl 协议上传输 http），如果使用了 https，需要安装 OpenSSL 库



### 下载并解压nginx代码包

```
//创建一个文件夹
cd /usr/local
mkdir nginx
cd nginx
//下载tar包
wget http://nginx.org/download/nginx-1.14.2.tar.gz
tar -xvf nginx-1.14.2.tar.gz
```

### 安装nginx

```
//进入nginx目录
cd /usr/local/nginx
//执行命令
./configure
//执行make命令
make
//执行make install命令
make install
```

## nginx配置

### 启动nginx

```
nginx
```

### 停止nginx

```
nginx -s stop
```

### 重启nginx

```
nginx -s reload
```

配置nginx

```
server {
    listen       90; //启动的nginx端口
    server_name  localhost; //配置的域名可以为本地
    # server_name  lz.liupengjs.com;

    gzip on; //启动gzip配置，并配置
    gzip_buffers 32 4K;
    gzip_comp_level 6;
    gzip_min_length 100;
    gzip_types text/css application/javascript image/x-icon image/svg+xml image/jpeg image/gif image/png image/x-ms-bmp;
		//配置https证书
    ssl_certificate E:\\sofo\\nginx-1.14.2\\ssl\\3055866_www.liupengjs.com.pem;
    ssl_certificate_key E:\\sofo\\nginx-1.14.2\\ssl\\3055866_www.liupengjs.com.key;
    
    
    location / {
        root   /data/ftp/pub; //静态页面地址
        # proxy_pass http://127.0.0.1:90;可以代理已经启动的端口，如node，Tomact之类启动的服务
        index  index.html index.htm; // 设置默认首页
        try_files $uri $uri/ /index.html; //设置页面的所有请求，返回首页
    }
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
        
    }

   
}
```

## 踩坑指南
### nginx启动时提示未定义，可以设置软链接

```
ln -s /usr/local/nginx/sbin/nginx /usr/bin/nginx
```
### 配置gzip时要在启动的那个服务中配置
### 配置多个域名是，可以启动多个80端口代理其他的服务

```
server {
    listen 80;
    server_name  lz.liupengjs.com; //解析到服务器的域名
    location / {
        proxy_pass http://127.0.0.1:90; //代理启动的其他端口服务
    }
}
```

## 参考网站
### [前端nginx必知必会](https://jspang.com/detailed?id=39)
### [LINUX安装nginx详细步骤](https://blog.csdn.net/t8116189520/article/details/81909574)
