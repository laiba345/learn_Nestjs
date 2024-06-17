# learn_Nestjs
## 1. 介绍Nestjs
- Nestjs 是一个用于构建高效可扩展的一个基于Node.js 服务端 应用程序开发框架
    - 完全支持typeScript 结合了AOP面向切面的编程方式（Spring框架）中常用
    - 还是一个spring MVC的风格，其中有依赖注入IOC控制反转 都借鉴了Angular
    - **底层代码运用了express和Fastify框架** 在它们的基础上提供了一定程度的抽象，同时将其API直接暴露给开发人员（可轻松使用每个平台的无数第三方模块）
- 一个写的不错的中文网站 [一个不错的中文网站](https://docs.nestjs.cn/)
- nestjs内置框架express，默认express
    - 能够快速搭建服务端应用程序，且学习成本比较低，容易上手
    - [express快速入门](https://www.expressjs.com.cn/starter/installing.html)
- nestjs唯二内置框架Fastify
    - 高性能（最多可处理每秒钟3万次的请求）
    - 可扩展（钩子、插件、装饰器）
- 要想用到typescript可以使用命令； npm i -g typescript 进行全局安装操作

## 2. IOC控制反转 & DI依赖注入
- ICO控制反转
    - 即：高层模块不应该依赖低层模块，**二者都应该依赖其抽象**；抽象不应该依赖细节；细节应该依赖抽象。
- DI依赖注入
    - 即：同IOC，但是控制反转的概念比较含糊，04年大师取名“依赖注入”
    - 即**类A依赖类B的常规表现是A中使用B的instance**

## 3. 前置知识装饰器
- 什么是装饰器？
    - 装饰器是一种特殊的类型声明，可以附加在类、方法、属性、参数上面
    - **用于修改类或类的成员（如方法、属性、参数）的行为**
    - 装饰器写法
- 类装饰器
    - 主要是通过@符号添加装饰器线··
    - 其会自动把class的构造函数传入到装饰器的第一个参数target，然后
    通过prototype可以自定义添加属性和方法
- 属性装饰器
    - 同样适用@符号给属性添加装饰器
    - 返回两个参数
        - 原型对象
        - 属性的名称
- 参数装饰器
    - 同样使用@符号给属性添加装饰器
    - 返回多个参数
        - 原型对象
        - 方法的名称
        - 参数的位置从0开始
- 方法装饰器
    - 同样使用@符号给属性添加装饰器
    - 返回两个参数
        - 原型对象
        - 方法的名称
        - 属性描述符 
            - writable（可写）
            - enumerable（可枚举）
            - configurable（可配置）
**通过命令：tsc --init 可以生成一个配置文件**
    - 打开配置选项："experimentalDecorators": true,  就不会报错
**通过命令：npm i ts-node -g 就可以构建ts输出环境**

## 4. 前置知识装饰器 - 实现一个GET请求
- 定义装饰器
    - 需要使用装饰器工厂
    - 应为装饰器默认会塞入一些参数
    - 定义descriptor的类型，通过descriptor描述符里面的value
    将axios的结果返回给当前使用装饰器的函数
- 注意：接口可以直接用允许跨越的！
- 安装依赖的方式：npm install axios -S

## 5. nestjs cli
- 通过cli创建nestjs项目
    - npm i -g @nestjs/cli (在)
    - nest new [项目名称]
- 启动项目
    - 需要热更新, 启动npm run start:dev 就可以了
- **目录介绍**
    - main.ts 入口文件主文件 类似于vue的main.ts
    - 通过NestFactory.create(AppModule) 创建一个app
    类似于绑定一个根组件App.vue
    - app.listen(3000) 监听一个端口
```
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
 
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
```
- **Controller.ts控制器**
    - 可以理解为Vue路由
    - private readonly appService: AppService 这一行代码就是**依赖注入** 不需要实例化 appService 它内部会自己实例化的，我们只需要放上去就可以
```
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
 
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
 
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
 
//-----------------------------------------------------
//修改地址之后
 
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
 
@Controller('/get')
export class AppController {
  constructor(private readonly appService: AppService) {}
 
  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
```
- **app.service.ts**
    - 这个文件主要用于实现业务逻辑的，当然Controller可以实现逻辑
    但是就是单一的无法复用，放到app.service有别的模块也需要就可以实现复用
    - 因为如果在Controller中实现逻辑的话，在访问的时候还需要添加上/get那些，参考上方修改地址后的写法
```
import { Injectable } from '@nestjs/common';
 
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
```

## 6. nestjs cli 常用命令
- nest --help
    - 查看nestjs所有的命令
**案例：生成一个用户模块**
- 生成 controller.ts
    - nest g co user
- 生成 module.ts
    - nest g mo user
- 生成 service.ts 
    - nest g s user
- **以上步骤一个一个生成的太慢了我们可以直接使用一个命令生成CRUD**
    - nest g resource xiaoman
    - 注意：第一次使用这个命令的时候，除了生成文件之外还会自动使用 npm 帮我们更新资源，安装一些额外的插件，后续再次使用就不会更新了。
    - 这样就生成了一套标准的CRUD模板
 
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
```
// 发送get请求
  @Get()
  findAll(@Query() query) { // 读取前端传递过来的参数
    console.log(query)
    return {
      code: 200,
      message: query.name // code、message等其实都是固定写法
    }
  }
  // 发送post请求
  @Post()
  create(@Body('age') body) { // 可以直接传入相应的参数，后面在获取相应结果的时候更加方便
    console.log(body)

    return {
      code: 200,
      message: body.name
    }
  }
  // 动态路由，类似于Vue
  @Get(':id')
  @HttpCode(500) // 控制状态码
  findId(@Param('id') params, @Headers() headers) {
    console.log(params, headers)
    return {
      code: 200
    }
  }
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