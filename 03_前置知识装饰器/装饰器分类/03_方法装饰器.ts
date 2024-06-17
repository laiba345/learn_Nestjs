// 3. 方法装饰器
const doc3: MethodDecorator = (target: any, key: string | symbol, descriptor: any) => {
    console.log(target, key, descriptor) // {} name {描述符}
    /**
     * 一个描述符对象包含了方法getName的以下信息
     *      1. value: 实际的方法实现，即getName函数本身。
     *      2. writable: 是否可以修改方法的实现。
     *      3. enumerable: 是否可以枚举方法
     *      4. configurable: 是否可以删除或更改方法的特性。
     */
    
    /**
     * 方法装饰器的实际应用
     *  1. 修改方法的实现，例如在方法调用前后添加逻辑。
     *  2. 更改方法的属性描述符，如使得方法不可枚举或不可写
     *  3. 添加元数据或进行其他形式的注解
     */

    // 1. 修改方法的实现
    const originMethod = descriptor.value
    descriptor.value = function (...args: any[]) {
        console.log(`Calling ${String(key)} with arguments`, args);
        const start = performance.now();
        const result = originMethod.apply(this, args);
        const end = performance.now();
        console.log(`Executed ${String(key)} in ${end - start}ms`);
        return result;
    };
    // 2. 更改方法的属性描述符
    descriptor.enumerable = false
};

class kk3 {
    public name: string
    constructor() {
        this.name = 'kk'
    }
    @doc3
    getName() {

    }
}