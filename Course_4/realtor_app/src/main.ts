import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
    //Active global pipe in nest application 
    app.useGlobalPipes(
      //Ensure validationPipe is globally available
      new ValidationPipe({
        //if anything not define in dto this will clear that additional property
        whitelist: true,
        //give ability to transform object
        transform: true,
        transformOptions: {
          enableImplicitConversion: true
        }
      })
    )
    await app.listen(5000);
}
bootstrap();
