import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { BalanceComponent } from 'src/app/main_components/balance/balance.component';
import { WithFormComponent } from 'src/app/main_components/with-form/with-form.component';

const rutas: Routes= [
    //{path: 'Balance', component: BalanceComponent},
    {path: 'WithForm', component: WithFormComponent},
]
@NgModule({
    imports: [RouterModule.forChild(rutas)],
    exports: [RouterModule],
})
export class WithdrawalRoutingModule{
    
}