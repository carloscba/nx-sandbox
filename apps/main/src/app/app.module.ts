import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Service1Component } from './components/service1.component';
import { Service2Component } from './components/service2.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, Service1Component, Service2Component],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
