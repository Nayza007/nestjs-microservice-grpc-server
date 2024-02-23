import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { GrpcMethod } from '@nestjs/microservices';

import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { CreateProductController, Data, ResponseProductResult,  } from 'proto/server';
import { Observable } from 'rxjs';

@Controller()
export class AppController implements CreateProductController {
  constructor(private readonly appService: AppService) {}


  @GrpcMethod("CreateProductService","createProduct")
  async createProduct(data: Data, metadata: Metadata, call: ServerUnaryCall<any,any>) : Promise<ResponseProductResult> {
    
    return await this.appService.postProduct(data)
  }
}
