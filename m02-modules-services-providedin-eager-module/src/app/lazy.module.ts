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
    // SharedModule is also imported here!
    SharedModule,
  ],
})
export class LazyModule {}
