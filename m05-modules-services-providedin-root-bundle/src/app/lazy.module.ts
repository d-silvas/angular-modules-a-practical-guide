import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProvidedInRootService } from './provided-in-root.service';

@Component({ template: '' })
export class LazyComponent {
  constructor(providedInRootService: ProvidedInRootService) {}
}

@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: LazyComponent }])],
})
export class LazyModule {}
