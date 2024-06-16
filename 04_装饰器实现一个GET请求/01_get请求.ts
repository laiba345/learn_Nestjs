import axios from 'axios'

// 其实用到的是函数的柯里化
// 第一个函数用来接收函数的参数，第二个函数用来接收里面的那些东西
const Get = (url: string) => {
    return (target: any, key: any, descrptor: any) => {
        // 上一节已经说到 descrptor里面有一大堆东西，其中有一个就是函数
        const fnc = descrptor.value
        axios.get(url).then(res => {
            // 可以自定义一个成功的回调
            fnc(res, {
                status: 200,
                success: true
            })
        }).catch(e => {
            fnc(e, {
                status: 404,
                success: false
            })
        })
    }
}
// 定义一个控制器
class Controller {
    constructor() {

    }
    // 其实就是方法装饰器的一个实际用法
    @Get('https://api.apiopen.top/api/getHaoKanVideo?page=0&size=10')
    getList(res: any, status: any) {
        console.log(res.data.result.list, status)
    }
}