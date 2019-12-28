# react和vue去掉路由中#

## 前台修改路由代码
### vue路由修改
在路由配置中添加`mode:'history'`,修改路由为默认使用浏览器历史路由
![left](https://user-gold-cdn.xitu.io/2019/12/25/16f3ba82bb6e0170?w=471&h=247&f=png&s=15183)
### react路由修改
替换hashHistory为browserHistory
```
import { BrowserRouter,Switch, Route,Redirect } from "react-router-dom";

ReactDom.render(
	(<BrowserRouter>
		<Provider store={store}>
			<CookiesProvider>
				<Route path="/" render={(para)=>Page(para,Main)}/>
			</CookiesProvider>
		</Provider>
	</BrowserRouter>),
	document.body.appendChild(document.createElement('div'))
);
```
## 服务器nginx配置
此时在开发环境中路由中已经去掉#可以正常访问了，但打包发布后，点击去其他页面，刷新会报404，此时需要在服务器上配置nginx，访问任何路由地址都访问共用的首页index.html

在location中添加这一行代码`try_files $uri $uri/ /index.html;`设置网址下的所有地址默认返回index.html
```
server {
    listen       90; 
    server_name  localhost;

    gzip on; //启用gzip
    gzip_buffers 32 4K; //设置gzip压缩的最小大小
    gzip_comp_level 6; //设置压缩程度
    gzip_min_length 100;
    gzip_types text/css application/javascript image/x-icon image/svg+xml image/jpeg image/gif image/png image/x-ms-bmp; //设置压缩的文件格式，不建议添加图片格式

    location / {
        root   /data/ftp/pub; //设置服务器代码地址
        index  index.html index.htm; //设置默认首页
        try_files $uri $uri/ /index.html;//添加这一行，网址下的所有地址默认返回index.html
    }
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
        
    }

   
}
```
