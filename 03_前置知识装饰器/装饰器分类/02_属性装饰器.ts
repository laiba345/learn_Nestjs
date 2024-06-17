const doc2: PropertyDecorator = (target: any, key:string | symbol) => {
    // 其中target已经不是构造函数了，而是一个原型对象
    /**
     * target; 这是被装饰属性所在的对象。在类定义中，这通常是类的原型(prototype)
     * key; 这是被装饰的属性名（name）
     */
    console.log(target, key) // {} name

    /**
     * 还可以有其他操作：
     *  1. 添加元数据（例如使用Reflect Metadata API）
     *  2. 修改属性的描述符
     *  3. 实现自定义逻辑，如验证或日志记录
     */
};


class kk2 {
    /**
     * @doc2 应用于kk2类的name属性
     * 当类kk2的name属性被定义时，装饰器doc2会被调用
     */
    @doc2
    public name: string
    constructor() { 
        this.name = 'kk'
    }
}