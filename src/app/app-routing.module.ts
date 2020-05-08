import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from './main_components/page-not-found/page-not-found.component'


const routes: Routes = [
  {path: 'Home', loadChildren: './modules/home/home.module#HomeModule'},
  {path: 'Send', loadChildren: './modules/send/send.module#SendModule'},
  {path: 'Withdrawal', loadChildren: './modules/withdrawal/withdrawal.module#WithdrawalModule'},
  {path: 'Account', loadChildren: './modules/account/account.module#AccountModule'},
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
