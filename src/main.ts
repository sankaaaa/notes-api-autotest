import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Використовуємо PORT з середовища або за замовчуванням 3395
  const port = process.env.PORT || 3395;
  await app.listen(port);
  console.log(`Server is running on http://localhost:${port}`);
}
bootstrap();
