import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BullModule } from '@nestjs/bull';
import * as Redis from 'ioredis';


@Module({
  imports: [
    BullModule.forRoot({
      createClient: ()=>{
        return new Redis.Cluster([{
          host: 'localhost',
          port: 7000
        }])
      }
    }),
    BullModule.registerQueue({
      name: '{myhash}video'
    })    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  
  constructor() {}
}
