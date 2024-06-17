// 1. 类装饰器
const doc1: ClassDecorator = (target: any) => {
    console.log(target); // [class kk1]
    // 这个构造函数可以通过prototype添加一些属性
    // 好处是不破坏原有类别的属性
    target.prototype.name = 'kk'
};

/**
 * 装饰器@doc1 被应用到类kk1上，这使得kk1类在定义后立即被
 * doc1函数修饰
 */
@doc1
class kk1 {
    constructor() { }
    
}
/**
 * 实例化kk1类后，xiaoman对象可以访问通过装饰器添加的name属性
 * 因为name属性被添加到了原型上，所以所有kk1的实例都可以访问这个属性
 */
const xiaoman: any = new kk1()

console.log(xiaoman.name)