import { Injectable } from '@angular/core';
import { ServiceBase } from '../classes/service-base.abstract'

@Injectable({
  providedIn: 'root'
})
export class QsService implements ServiceBase {
  
  data = ['qs'];

  constructor() {}

  getData():string[] {
    return this.data;
  }

  setData():string[] {
    return this.data;
  }  
}