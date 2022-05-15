import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  from, Observable, throwError } from 'rxjs';
import { Catagory } from '../catagory/catagory';
import {tap,catchError} from 'rxjs/operators';


@Injectable()
export class CatagorysService {

  path=" http://localhost:3000/catagories";
  constructor(private httpClient:HttpClient) { }

  catagoryget():Observable<Catagory[]>{
    
    return this.httpClient.get<Catagory[]>(this.path).pipe(

      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handdleError)

    )
    
  }
  handdleError(err: HttpErrorResponse) {
    let errorMessage=""
    if (err.error instanceof ErrorEvent){

      errorMessage="bir hata olusdu"+ err.error.message;
    }
    else{
      errorMessage="sistemsel hata olusdu";
    }
    return throwError(errorMessage);
  }


}
