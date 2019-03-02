import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfomanceComponent } from './perfomance/perfomance.component';

const routes: Routes = [
    {
      path: 'landing',
      loadChildren: './landing/landing.module#LandingModule',
    },
    {
      path: 'perfomanceTest',
      component: PerfomanceComponent
    },
    {
      path: '',
      redirectTo: 'landing',
      pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
