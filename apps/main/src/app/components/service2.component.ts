import { Component } from '@angular/core';
import { ServiceBase } from '../classes/service-base.abstract';
import { FactoryService } from '../services/factory.service';

@Component({
  selector: 'nx-sandbox-service2',
  template: `
    <h1>Service 2</h1>
    <button (click)="setData()">Set Data</button>
    <ul>
      <li *ngFor="let item of data">{{ item }}</li>
    </ul>
  `,
})
export class Service2Component {
  title = 'main';
  data: string[];
  currentService: ServiceBase;

  constructor(private factoryService: FactoryService) {
    this.currentService = this.factoryService.getService();
    this.data = this.currentService.getData();
  }

  setData() {
    this.currentService.setData(new Date().getTime().toLocaleString());
  }
}
