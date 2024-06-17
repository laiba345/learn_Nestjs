## 8. nestjs控制器 
- Controller Request（获取前端传过来的参数）
    - 直接通过（npm run start）来启动，如果通过postman发送数据，在控制台就能实际看到
    - nestjs提供了方法参数装饰器 用来帮助我们快速获取参数
        ```
        @Request()	                  req          
        @Response()	                  res                   
        @Next()	                      next
        @Session()	                  req.session
        @Param(key?: string)       	  req.params/req.params[key]
        @Body(key?: string)	          req.body/req.body[key]
        @Query(key?: string)	      req.query/req.query[key]
        @Headers(name?: string)   	  req.headers/req.headers[name]
        @HttpCode	
        ```
- 调试工具可以使用postMan、ApiFox等
- 1. 获取get请求传参
    - 可以使用Request装饰器 或者 Query 装饰器 跟express 完全一样
    - 也可以使用Query 直接获取 不需要在通过req.query 了
- 2. post获取参数
    - 可以使用Request装饰器 或者 Body 装饰器 跟express 完全一样
    - 或者直接使用Body 装饰器
    - 也可以直接读取key
- 3. 动态路由
    - 可以使用Request装饰器 或者 Param 装饰器 跟express 完全一样
- 4. 读取header信息
    - 在调试工具随便加了一个cookie
- 5. 状态码
    - 使用HttpCode装饰器 控制接口返回的状态码