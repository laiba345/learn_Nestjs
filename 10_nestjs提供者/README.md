## 10. nestjs 提供者
Providers 
    - Providers是Nest的一个基本概念
    - 许多基本的 Nest 类可能被视为 provider - service, repository, factory, helper 等等。
    - 他们都可以通过 constructor 注入依赖关系。
    - 这意味着对象可以彼此创建各种关系，并且“连接”对象实例的功能在很大程度上可以委托给 Nest运行时系统。 
    - Provider 只是一个用 @Injectable() 装饰器注释的类。
基本用法
- 用法1（语法糖）
    - 在module中引入service在providers注入
    - 在Controller就可以使用注入好的service
- 用法2 
    - 其实就是用法1的全称
- 用法3（自定义注入值）
    - 通过useValue
- 用法4（ 工厂模式）
    - 如果服务之间有相互的依赖 或者 逻辑处理 
    可以使用useFactory
- 用法5