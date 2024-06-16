nestjs cli 常用命令（**进入到具体项目包使用，如demo**）
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
    - nest g resource demo
    - 注意：第一次使用这个命令的时候，除了生成文件之外还会自动使用 npm 帮我们更新资源，安装一些额外的插件，后续再次使用就不会更新了。
    - 这样就生成了一套标准的CRUD模板
    