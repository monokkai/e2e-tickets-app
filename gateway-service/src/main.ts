import { NestFactory } from '@nestjs/core';
import { AppModule } from './core/app.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService);
  const logger = new Logger();

  app.enableCors({
    origin: config.getOrThrow<string>("HTTP_CORS").split(','),
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Gateway Service API')
    .setDescription('API Gateway for Microservices')
    .setVersion('1.0.0')
    .addBearerAuth()
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/docs', app, swaggerDocument, {
    yamlDocumentUrl: '/openapi.yaml',
  });

  const port = config.getOrThrow<number>("HTTP_PORT");
  const host = config.getOrThrow<string>("HTTP_HOST");

  await app.listen(port);
  logger.log(`🚀 Gateway Service is running at ${host}`);
  logger.log(`🚀 Swagger Docs available at ${host}/docs`);
}
bootstrap();
