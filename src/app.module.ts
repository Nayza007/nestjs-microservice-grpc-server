import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';



console.log(process.cwd())
@Module({
  imports: [ ClientsModule.register([
    {
      name: 'server',
      transport: Transport.GRPC,
      options: {
        package: 'server', // ตรงกับชื่อ package ในไฟล์ .proto
        protoPath: join(__dirname , '../../proto/server.proto')
      }
    }
  ])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
