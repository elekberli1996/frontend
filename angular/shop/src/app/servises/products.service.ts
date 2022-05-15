import { Injectable } from '@angular/core';
import { Product } from '../product/product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {   Observable,throwError } from 'rxjs';
import {tap,catchError} from 'rxjs/operators'

@Injectable()
export class ProductsService {

  constructor(private httpClient:HttpClient) { }
  path=" http://localhost:3000/product";
  getproduct():Observable<Product[]>{
    
    return this.httpClient.get<Product[]>(this.path).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.hadndeError)
    );
  }
  hadndeError(err: HttpErrorResponse){
    let errorMessage='';
    if(err.error instanceof ErrorEvent){
      errorMessage='hata olusdu'+err.error.message
    }
    else
    {
      errorMessage="istemsel hata";
    }
    return throwError(errorMessage);
  }

}
