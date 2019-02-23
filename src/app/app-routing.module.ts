import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PerfomanceComponent } from './perfomance/perfomance.component';

const routes: Routes = [
    {
      path: '',
      pathMatch: 'full',
      component: HomeComponent,
    },
    {
      path: 'perfomanceTest',
      component: PerfomanceComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
