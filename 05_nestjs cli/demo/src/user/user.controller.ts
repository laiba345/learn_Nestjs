import { Controller, Get, Request, Post, Body, Patch, Param, Delete, Headers, HttpCode, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

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

  // 发送get请求
  @Get()
  findAll(@Query() query) { // 读取前端传递过来的参数
    console.log(query)
    return {
      code: 200,
      message: query.name // code、message等其实都是固定写法
    }
  }
  // 发送post请求
  @Post()
  create(@Body('age') body) { // 可以直接传入相应的参数，后面在获取相应结果的时候更加方便
    console.log(body)

    return {
      code: 200,
      message: body.name
    }
  }
  // 动态路由，类似于Vue
  @Get(':id')
  @HttpCode(500) // 控制状态码
  findId(@Param('id') params, @Headers() headers) {
    console.log(params, headers)
    return {
      code: 200
    }
  }
}
