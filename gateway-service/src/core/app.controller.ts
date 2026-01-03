import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { HealthResponse } from './dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @ApiOperation({
    summary: 'Welcome endpoint',
    description: 'Returns a welcome message for the Gateway Service',
  })
  @Get()
  public getHello() {
    return { message: "Welcome to Gateway Service!" };
  }

  @ApiOperation({
    summary: 'Health check endpoint',
    description: 'Returns the health status of the Gateway Service',
  })
  @ApiOkResponse({
    type: HealthResponse
  })
  @Get('health')
  public health(): { status: string, timestamp: string } {
    return { status: 'OK', timestamp: new Date().toISOString() };
  }
}
