import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from 'src/app/main_components/settings/settings.component';
import { ActionButtonsComponent } from 'src/app/main_components/action-buttons/action-buttons.component';
//import { BalanceComponent } from 'src/app/main_components/balance/balance.component';


const rutas: Routes= [
    //{path: 'Balance', component: BalanceComponent},
    {path: 'Settings', component: SettingsComponent},
    {path: 'Actions', component: ActionButtonsComponent}

]

@NgModule({
    imports: [RouterModule.forChild(rutas)],
    exports: [RouterModule],
})
export class AccountRoutingModule{
    
}