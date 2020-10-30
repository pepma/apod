import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'apod',
    loadChildren: () => import('./features/apod/main/apod-main.module').then((m) => m.ApodMainModule),
  },
  {
    path: '',
    redirectTo: '/apod',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
