import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';



@Injectable()
export class AppService {

  constructor(@InjectQueue('{myhash}video') private audioQueue: Queue) {}

  async getHello() {
    const job = await this.audioQueue.add({
      foo: 'bar',
    });
    console.log(job)
    return 'Hello World!';
  }
}
