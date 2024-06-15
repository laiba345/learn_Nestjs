// 一开始这里是写死的。
// class A {
//     name: string
//     constructor() {
//         this.name = 'kk'
//     }
// }

// class A {
//     name: string
//     constructor(name) {
//         this.name = name
//     }
// }

// // 可以理解为：一发则动全身；它们之间的关系是强耦合的，关系是非常混乱的
// class B {
//     a: any
//     constructor() {
//         // 报错的原因主要是：在类B和类C的构造函数中实例化A时，没有提供必须的name参数
//         this.a = new A().name
//     }
// }

// class C {
//     a: any
//     constructor() {
//         this.a = new A().name
//     }
// }

//  依赖注入的方式
class A {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class C {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}
// 创建一个容器用来收集引用
class Container {
    mo: any;
    constructor() {
        this.mo = {};
    }
    // 因为mo可以是任何类型的
    provide(key: string, mo: any) {
        this.mo[key] = mo;
    }
    // 如果想取具体的应用的话，可以通过get函数，还有其中的key
    get(key: string) {
        return this.mo[key];
    }
}

// 实例化
const mo = new Container();
mo.provide("a", new A("HK"));
mo.provide("c", new A("KK"));

/**
 * 在引入loC容器container之后，B与A的代码逻辑已经解耦
 * 可以单独拓展似其他功能，也可以方便地加入其他模块C
 * 所以在面对复杂的后端业务逻辑中，引入loC可以降低组件之间的耦合度
 * 实现系统各层之间的解耦，减少维护和理解成本
 */
class B {
    a: any;
    c: any;
    constructor(mo: Container) {
        this.a = mo.get("a");
        this.c = mo.get("c");
    }
}
