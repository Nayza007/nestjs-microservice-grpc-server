import { Injectable } from '@nestjs/common';
import { Data, ResponseProductResult} from 'proto/server';

@Injectable()
export class AppService {

  postProduct(data: Data): ResponseProductResult {
    
    return {
      status: "true",
      result: "haha",
      metadata: "yo",
      call:"uo"
    }
  }
}
