import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ProvidedInRootService } from './provided-in-root.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  // An eagerly-loaded component that uses the service
  constructor(providedInRootService: ProvidedInRootService) {}
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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
