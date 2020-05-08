import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { SendFormComponent } from 'src/app/main_components/send-form/send-form.component';
import { BalanceComponent } from 'src/app/main_components/balance/balance.component';

const rutas: Routes= [
    //{path: 'Balance', component: BalanceComponent},
    {path: 'SendForm', component: SendFormComponent},
]
@NgModule({
    imports: [RouterModule.forChild(rutas)],
    exports: [RouterModule],
})
export class SendRoutingModule{
    
}