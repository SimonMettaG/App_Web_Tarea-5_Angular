import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithFormComponent } from 'src/app/main_components/with-form/with-form.component';
import { WithdrawalRoutingModule } from './withdrawal-routing.module';
//import { BalanceComponent } from 'src/app/main_components/balance/balance.component';



@NgModule({
  declarations: [
    //BalanceComponent,
    WithFormComponent],
  imports: [
    CommonModule,
    WithdrawalRoutingModule
  ]
})
export class WithdrawalModule { }
