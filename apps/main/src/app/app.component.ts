import { Component } from '@angular/core';
import { MainService } from './services/main.service'

@Component({
  selector: 'nx-sandbox-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'main';

  constructor(private mainService: MainService) {

  }
}
