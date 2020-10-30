import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApodMainComponent } from './apod-main.component';

const routes: Routes = [
  {
    path: '',
    component: ApodMainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApodMainRoutingModule {}
