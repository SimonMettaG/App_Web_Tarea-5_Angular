import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendFormComponent } from 'src/app/main_components/send-form/send-form.component';
import { SendRoutingModule } from './send-routing.module';
//import { BalanceComponent } from 'src/app/main_components/balance/balance.component';



@NgModule({
  declarations: [
    //BalanceComponent, 
    SendFormComponent],
  imports: [
    CommonModule,
    SendRoutingModule
  ]
})
export class SendModule { }
