/**
 * 参数装饰器的作用是拦截并处理方法参数的定义
 * 从而可以在方法参数层级上进行某些处理或添加元数据
 */
// 4. 参数装饰器 写法可以有很多种，也可以直接使用方法来实现
const doc4: ParameterDecorator = (target: any, key: any, index: any) => {
    // 原型对象  方法名  方法参数位置（从0开始数）
    console.log(target, key, index) // {} getName 1 
};


class kk4 {
    public name: string
    constructor() {
        this.name = 'kk'
    }
    getName(name: string, @doc4 age: number) {

    }
}

// 具体应用 之 参数验证
function validate(target: any, key: string | symbol, index: number) {
    const originalMethod = target[key];
    target[key] = function (...args: any[]) {
        if (typeof args[index] !== 'number') {
            throw new Error(`Argument at index ${index} is not a number`);
        }
        return originalMethod.apply(this, args);
    };
}

class ValidatorExample {
    printAge(name: string, @validate age: any) {
        console.log(`Age: ${age}`);
    }
}

const validatorExample = new ValidatorExample();
validatorExample.printAge('Alice', 30); // Works fine
validatorExample.printAge('Alice', null); // Throws an error
