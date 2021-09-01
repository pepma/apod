import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApodDetailComponent } from './detail/apod-detail.component';
import { ApodMainComponent } from './main/apod-main.component';

const routes: Routes = [
  {
    path: '',
    component: ApodMainComponent,
  },
  {
    path: ':date',
    component: ApodDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApodRoutingModule {}
