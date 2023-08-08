import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class AnothermidMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('Another Middleware');
    next();
  }
}
