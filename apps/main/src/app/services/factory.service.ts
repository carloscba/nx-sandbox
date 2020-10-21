import { Injectable, Injector } from '@angular/core';
import { FactoryBase } from '../classes/factory-base.abstract'
import { ServiceBase } from '../classes/service-base.abstract';
import { QsService } from './qs.service';
import { SpaService } from './spa.service';

@Injectable({
  providedIn: 'root'
})
export class FactoryService implements FactoryBase {

  constructor(private injector: Injector,) {}

  getService(): ServiceBase{
    const params = window.location.search;
    if (params.includes(`accessToken`)) { 
      return this.injector.get(QsService);
    } else {
      return this.injector.get(SpaService);
    }
  }
}