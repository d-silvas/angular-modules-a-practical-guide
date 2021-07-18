import { Component, Injectable, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@Injectable()
export class LazyService { }

@Component({ template: '' })
export class LazyComponent {
  // A lazy-loaded component that uses the service
  constructor(lazyService: LazyService) { }
}

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: LazyComponent }]),
  ],
  providers: [LazyService]
})
export class LazyModule { }
