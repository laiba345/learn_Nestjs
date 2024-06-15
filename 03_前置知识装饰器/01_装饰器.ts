// 装饰器其实可以简单理解为一个函数

// 1. 类装饰器
// const doc: ClassDecorator = (target: any) => {
//     console.log(target); // [class Xiaoman]
//     // 这个构造函数可以通过prototype添加一些属性
//     // 好处是不破坏原有类别的属性
//     target.prototype.name = 'kk'
// };

// @doc
// class Xiaoman {
//     constructor() { }
    
// }

// const xiaoman: any = new Xiaoman()

// console.log(xiaoman.name)

// 2. 属性装饰器
const doc: PropertyDecorator = (target: any, key:string | symbol) => {
    // 其中target已经不是构造函数了，而是一个原型对象
    console.log(target, key) // {} name
};


class Xiaoman {
    @doc
    public name: string
    constructor() { 
        this.name = 'kk'
    }
}

