import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BalanceComponent} from './../../main_components/balance/balance.component';
import {HomeRoutingModule} from './home-routing.module';
import { InfoTableComponent } from 'src/app/main_components/info-table/info-table.component';



@NgModule({
  declarations: [BalanceComponent, InfoTableComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],

})
export class HomeModule { }
