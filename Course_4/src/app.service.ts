import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Nest JS Backend API | Full Developer Course By Voxmind';
  }
}
