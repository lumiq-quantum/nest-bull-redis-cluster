import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { BullModule } from '@nestjs/bull';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    console.log("GETTING HERE")
    BullModule.registerQueue({
      configKey: 'alternative-config',
      name: 'video'
    });
    
  }

  @Get()
  getHello() {
    return this.appService.getHello();
  }
}
