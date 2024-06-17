
## 9. nestjs Session
- session概念
    - session是服务器为每个用户的浏览器创建的一个会话对象，这个session 会记录到 浏览器的 cookie 用来区分用户
    - 我们使用的是nestjs默认框架express 其也支持express插件 所以我们也可以安装express的session
        - npm i express-session --save
        - npm i @types/express-session -D (智能提示安装了一个声明依赖)
    - 在main.ts中引入，并通过app.use 注册session
        - import * as session from 'express-session'
        - app.use(session())
- 参数配置详解
```
secret                生成服务端session 签名 可以理解为加盐
name                  生成客户端cookie 的名字 默认 connect.sid
cookie   设置返回到前端 key 的属性，默认值为{ path: ‘/’, httpOnly: true, secure: false, maxAge: null }。

rooling               在每次请求时强行设置cookie，这将重置cookie过期时间(默认false)
```
[验证码案例](https://blog.csdn.net/qq1195566313/article/details/126327047?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522171859323016800213027687%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fblog.%2522%257D&request_id=171859323016800213027687&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~first_rank_ecpm_v1~rank_v31_ecpm-1-126327047-null-null.nonecase&utm_term=%E7%AC%AC%E4%B9%9D%E7%AB%A0&spm=1018.2226.3001.4450)