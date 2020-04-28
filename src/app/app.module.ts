import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BalanceComponent } from './balance/balance.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FootComponent } from './foot/foot.component';
import { InfoTableComponent } from './info-table/info-table.component';
import { SendFormComponent } from './send-form/send-form.component';
import { WithFormComponent } from './with-form/with-form.component';
import { SettingsComponent } from './settings/settings.component';
import { ActionButtonsComponent } from './action-buttons/action-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    BalanceComponent,
    NavComponent,
    FootComponent,
    InfoTableComponent,
    SendFormComponent,
    WithFormComponent,
    SettingsComponent,
    ActionButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
