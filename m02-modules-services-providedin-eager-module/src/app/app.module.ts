import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SharedModule, SharedService } from './shared.module';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  // An eagerly-loaded component that uses the service
  constructor(sharedService: SharedService) {}
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () => import('./lazy.module').then((m) => m.LazyModule),
      },
    ]),
    // SharedModule is eagerly loaded!
    SharedModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
