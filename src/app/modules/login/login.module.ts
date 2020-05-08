import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from 'src/app/main_components/log-in/log-in.component';
import { LogInRoutingModule } from './login-routing.module';



@NgModule({
  declarations: [LogInComponent],
  imports: [
    CommonModule,
    LogInRoutingModule
  ]
})
export class LoginModule { }
