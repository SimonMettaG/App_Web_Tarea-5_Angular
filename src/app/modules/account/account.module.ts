import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from 'src/app/main_components/settings/settings.component';
import { ActionButtonsComponent } from 'src/app/main_components/action-buttons/action-buttons.component';
import { AccountRoutingModule } from './account-routing.module';
//import { BalanceComponent } from 'src/app/main_components/balance/balance.component';



@NgModule({
  declarations: [
    //BalanceComponent,
    SettingsComponent,
    ActionButtonsComponent],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
