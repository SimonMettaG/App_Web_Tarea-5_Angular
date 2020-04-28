import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';


const routes: Routes = [
	{path: '**', component:NavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
