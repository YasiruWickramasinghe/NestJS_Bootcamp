import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { MiddleMiddleware } from './middlewares/middle/middle.middleware';
import { useContainer } from 'class-validator';
import { AnothermidMiddleware } from './middlewares/anothermid/anothermid.middleware';

@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(MiddleMiddleware).forRoutes(UsersController)

    //if use middleware for specify path
    consumer.apply(MiddleMiddleware).forRoutes(
      {
        path: 'users',
        method: RequestMethod.GET
      },
      {
        path: 'users/:id',
        method: RequestMethod.GET
      }//apply another router
    ).apply(AnothermidMiddleware).forRoutes(
      {
        path: 'users',
        method: RequestMethod.GET
      },
      {
        path: 'users/:id',
        method: RequestMethod.GET
      }
    );
  }
}
