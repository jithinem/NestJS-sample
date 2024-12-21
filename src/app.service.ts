import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World Jithin!';
  }

  getProduct(): string {
    return 'Hello World Jithin Product!';
  }

  
}
