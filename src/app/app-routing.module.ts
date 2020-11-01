import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './features/common/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'apod',
    loadChildren: () => import('./features/apod/apod.module').then((m) => m.ApodModule),
  },
  {
    path: '',
    redirectTo: '/apod',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
