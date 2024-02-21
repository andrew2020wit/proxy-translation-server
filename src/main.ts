import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const appPort = 3007;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(appPort);
}

bootstrap();
