import { Injectable } from '@angular/core';
declare let alertify:any;
@Injectable({
  providedIn: 'root'
})

export class AlertifyjsService {

  constructor() { }

success(parametre:string){
  alertify.success(parametre);
}
error(parametre:string){
  alertify.success(parametre);
}
}
