import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule, SharedService } from './shared.module';

@Component({ template: '' })
export class LazyComponent {
  // A lazy-loaded component that uses the service
  constructor(sharedService: SharedService) {}
}

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: LazyComponent }]),
    // We import here the module that provides the service!
    SharedModule,
  ],
})
export class LazyModule {}
