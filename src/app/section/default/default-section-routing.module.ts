import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApodDetailComponent } from '@features/apod/detail/components/apod-detail/apod-detail.component';
import { ApodMainComponent } from './container/apod-main.component';

const routes: Routes = [
  {
    path: '',
    component: ApodMainComponent,
  },
  {
    path: ':date/:type',
    component: ApodDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefaultSectionRoutingModule {}
