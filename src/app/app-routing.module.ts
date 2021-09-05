import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './features/common/not-found/not-found.component';
import { DefaultSectionResolverService } from './section/default/service/default-section-resolver.service';


const routes: Routes = [
  {
    path: 'apod',
    loadChildren: () => import('./section/default/defaut-section.module').then((m) => m.DefaultSectionModule),
    resolve: { data: DefaultSectionResolverService },
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
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
