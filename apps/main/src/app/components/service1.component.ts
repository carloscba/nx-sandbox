import { Component } from '@angular/core';
import { ServiceBase } from '../classes/service-base.abstract';
import { FactoryService } from '../services/factory.service';

@Component({
  selector: 'nx-sandbox-service1',
  template: `
    <h1>Service 1</h1>
    <button (click)="getData()">Update Data</button>
    <ul>
      <li *ngFor="let item of data">{{ item }}</li>
    </ul>
  `,
})
export class Service1Component {
  title = 'main';
  data: string[];
  currentService: ServiceBase;

  constructor(private factoryService: FactoryService) {
    this.currentService = this.factoryService.getService();
    this.data = this.currentService.getData();
  }

  getData() {
    this.data = this.currentService.getData();
  }
}
