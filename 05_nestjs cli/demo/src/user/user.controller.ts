import { Controller, Get, Req, Res, Request, Post, Body, Patch, Param, Delete, Headers, HttpCode, Query, Session } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
// 导入验证码插件
import * as svgCapture from 'svg-captcha'
import { BlockList } from 'net';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.userService.create(createUserDto);
  // }

  // @Get()
  // findAll() {
  //   return this.userService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.userService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.userService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.userService.remove(+id);
  // }

  // 之前实现控制用到的
  // 发送get请求
  // @Get()
  // findAll(@Query() query) { // 读取前端传递过来的参数
  //   console.log(query)
  //   return {
  //     code: 200,
  //     message: query.name // code、message等其实都是固定写法
  //   }
  // }
  // // 发送post请求
  // @Post()
  // create(@Body('age') body) { // 可以直接传入相应的参数，后面在获取相应结果的时候更加方便
  //   console.log(body)

  //   return {
  //     code: 200,
  //     message: body.name
  //   }
  // }
  // // 动态路由，类似于Vue
  // @Get(':id')
  // @HttpCode(500) // 控制状态码
  // findId(@Param('id') params, @Headers() headers) {
  //   console.log(params, headers)
  //   return {
  //     code: 200
  //   }
  // }

  /**
   * @Get装饰器将HTTP GET请求映射到特定的方法中，
   * 括号中的code字符串指定了这个方法的路由路径
   * 当收到一个指向/code URL的HTTP GET请求时，这个方法会被调用
   */
  @Get('code')
  createCode(@Req() req, @Res() res, @Session() session) {
    // 工作中一般是放在service当中的；
    const captcha = svgCapture.create({
      size: 4,//生成几个验证码
      fontSize: 50, //文字大小
      width: 100,  //宽度
      height: 34,  //高度
      background: '#cc9966',  //背景颜色
    })
    // req.session.code = captcha.text
    // return {
    //   captcha // 通过http://localhost:3000/user/code 服务器就会返回相应的内容
    // }
    session.code = captcha.text //存储验证码记录到session
    res.type('image/svg+xml')
    res.send(captcha.data)
  }

  @Post('create')
  createUser(@Req() req, @Body() body) {
    console.log(req.session.code, body) // 这里打印的话，会在vscode终端来进行直接的打印操作
    if (req.session.code.toLocaleLowerCase() === body?.code?.toLocaleLowerCase()) {
      return {
        message: "验证码正确"
      }
    } else {
      return {
        message: "验证码错误"
      }
    }
  }
}
