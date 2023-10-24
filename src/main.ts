import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('bootstrap');
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT);
  logger.log(`Server listening on port ${process.env.PORT}`);
}
bootstrap();
