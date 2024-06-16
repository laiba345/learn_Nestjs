import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // main.ts 可以理解为一个主要的入口文件
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
