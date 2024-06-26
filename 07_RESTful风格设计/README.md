## 7. RESTful 风格设计
- 定义: 
    - RESTful是一种风格，在RESTful中，一切都被认为是资源，每个资源都有对应的URL标识
    - 不是标准也不是协议，只是一种风格。当然你也可以不按照他的风格去写。
    - 只是一个style
    - 传统接口: http://localhost:8080/api/get_list?id=1
    - RESTful接口: http://localhost:8080/api/get_list/1
        - 即直接通过参数拼接到url后面
        - RESTful风格一个接口就会完成 增删改查 他是通过不同的请求方式来区分的
        - 查询(GET)、提交(POST)、更新(PUT PATCH)、删除(DELETE)
- 2. RESTful版本控制（一共有三种，我们一般用第一种，更加语义化）
    - 即 URI Versioning（版本将在请求的URI中传递(默认)）
    - 然后在user.controller 配置版本，Controller变成一个对象 通过version配置版本
    - 在main.ts 中设置相关内容，然后Controller中书写版本对象，那么浏览器输入url的话就需要加上相应的版本才能匹配得上
- 3. Code码规范
    - 200 OK
    - 304 Not Modified 协商缓存了
        - 表示客户端请求的资源自上次请求以来没有被修改过，因此客户端可以使用本地缓存地版本，而不需要从服务器重新下载资源。
    - 400 Bad Request 参数错误
    - 401 Unauthorized token错误
    - 403 Unauthorized token错误
    - 404 Not Found 接口不存在
    - 500 Internal Server Error 服务端错误
    - 502 Bad Gateway 上游接口有问题或者服务器问题