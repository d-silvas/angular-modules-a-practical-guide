import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  selector: 'app-a-one',
  template: 'One!',
})
export class AOneComponent {}

@Component({
  selector: 'app-a-two',
  template: 'Two! <app-a-one></app-a-one>',
})
export class ATwoComponent {}


@NgModule({
  declarations: [AOneComponent, ATwoComponent],
  // Makes AOneComponent available to any module that imports AModule
  exports: [AOneComponent]
})
export class AModule {}

@Component({
  selector: 'app-root',
  template: '<app-a-one></app-a-one>',
})
export class AppComponent {}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
