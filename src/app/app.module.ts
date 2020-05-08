import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BalanceComponent } from './main_components/balance/balance.component';
import { NavComponent } from './main_components/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FootComponent } from './main_components/foot/foot.component';
import { InfoTableComponent } from './main_components/info-table/info-table.component';
import { SendFormComponent } from './main_components/send-form/send-form.component';
import { WithFormComponent } from './main_components/with-form/with-form.component';
import { SettingsComponent } from './main_components/settings/settings.component';
import { ActionButtonsComponent } from './main_components/action-buttons/action-buttons.component';
import { PageNotFoundComponent } from './main_components/page-not-found/page-not-found.component';
import { HomeModule } from './modules/home/home.module';
import { SendModule } from './modules/send/send.module';
import { WithdrawalModule } from './modules/withdrawal/withdrawal.module';
import { AccountModule } from './modules/account/account.module';
import { SignModule } from './modules/sign/sign.module';
import { LoginModule } from './modules/login/login.module';
import { SignInComponent } from './main_components/sign-in/sign-in.component';
import { LogInComponent } from './main_components/log-in/log-in.component';


@NgModule({
  declarations: [
    AppComponent,
    //BalanceComponent,
    NavComponent,
    FootComponent,
    //InfoTableComponent,
    //SendFormComponent,
    //WithFormComponent,
    //SettingsComponent,
    //ActionButtonsComponent,
    PageNotFoundComponent,
    SignInComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    SendModule,
    WithdrawalModule,
    AccountModule,
    SignModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
