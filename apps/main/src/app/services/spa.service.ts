import { Injectable } from '@angular/core';
import { ServiceBase } from '../classes/service-base.abstract'

@Injectable({
  providedIn: 'root'
})
export class SpaService implements ServiceBase {

  data = ['spa'];

  constructor() {}

  getData():string[] {
    return this.data;
  }

  setData():string[] {
    return this.data;
  }   
}