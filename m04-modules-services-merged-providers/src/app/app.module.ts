import { Component, Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Injectable()
export class ServiceTwo { }

@NgModule({
  providers: [ServiceTwo]
})
export class ModuleTwo { }

@Injectable()
export class ServiceOne { }

@NgModule({
  imports: [ModuleTwo],
  providers: [ServiceOne]
})
export class ModuleOne { }

@Component({
  selector: 'app-root',
  template: '',
})
export class AppComponent {
  constructor(serviceOne: ServiceOne, serviceTwo: ServiceTwo) { }
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ModuleOne],
  bootstrap: [AppComponent],
})
export class AppModule { }
