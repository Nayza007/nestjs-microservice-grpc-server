import { Metadata, ServerUnaryCall } from "@grpc/grpc-js";
import { Observable } from "rxjs";

export interface Data {
    name : string;
    id : string;
    price : number ;
    amount :  number ;
}

export interface ResponseProductResult {
    status : string ;
    result : {} ;
    metadata : any,
    call : any
}

export const SERVER_PACKAGE_NAME = "server";

export interface CreateProductService {
    createProduct(request: Data ): Observable<any>
}

export interface  CreateProductController {
    createProduct(request: Data , metadata:Metadata , call:ServerUnaryCall<any,any>): Promise<any> | Observable<any> | ResponseProductResult;
  }