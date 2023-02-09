import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { ROUTES } from './shared/routes/index.routes';

const routes: Routes = [
  {
      path: '',
      redirectTo: '/inicio',
      pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    children: ROUTES
  },
  {
    path: '**',
    redirectTo: '/inicio',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
