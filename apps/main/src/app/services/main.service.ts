import { Injectable, Injector } from '@angular/core';
import { FactoryService } from './factory.service';
import { ServiceBase } from '../classes/service-base.abstract';

@Injectable({
  providedIn: 'root'
})

export class MainService {
  
  currentService: ServiceBase;

  constructor(
    private factoryService: FactoryService
  ) {
    this.currentService = this.factoryService.getService();
    console.log(this.currentService);
    console.log(this.currentService.getData());
  }
}