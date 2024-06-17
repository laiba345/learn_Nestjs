import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';
import * as session from 'express-session'
async function bootstrap() {
  // main.ts 可以理解为一个主要的入口文件
  const app = await NestFactory.create(AppModule);
  // 之前设置具体版本的写法
  app.enableVersioning({
    type: VersioningType.URI
  })
  app.use(session({ secret: "kk", rolling: true, name: "kk.sid", cookie: { maxAge: 999999 } }))
  await app.listen(3000);
}
bootstrap();
