import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  public getHello() {
    return { message: "Welcome to Gateway Service!" };
  }

  @Get('health')
  public health(): { status: string, timestamp: string } {
    return { status: 'OK', timestamp: new Date().toISOString() };
  }
}
