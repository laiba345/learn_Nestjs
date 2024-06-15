
// 3. 方法装饰器
// const doc2: MethodDecorator = (target: any, key: string | symbol, descriptor: any) => {
//     // 其中target已经不是构造函数了，而是一个原型对象
//     console.log(target, key, descriptor) // {} name {描述符}
// };


// class KK {
//     public name: string
//     constructor() {
//         this.name = 'kk'
//     }
//     @doc2
//     getName() {

//     }
// }

// 4. 参数装饰器
const docc: ParameterDecorator = (target: any, key: any, index: any) => {
    // 原型对象  方法名  方法参数位置（从0开始数）
    console.log(target, key, index) // {} getName 1 
};


class KK {
    public name: string
    constructor() {
        this.name = 'kk'
    }
    getName(name: string, @docc age: number) {

    }
}