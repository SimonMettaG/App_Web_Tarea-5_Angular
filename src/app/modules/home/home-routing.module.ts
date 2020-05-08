import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { BalanceComponent } from 'src/app/main_components/balance/balance.component';
import { InfoTableComponent } from 'src/app/main_components/info-table/info-table.component';

const rutas: Routes= [
    {path: 'Balance', component: BalanceComponent},
    {path: 'InfoTable', component: InfoTableComponent}

]

@NgModule({
    imports: [RouterModule.forChild(rutas)],
    exports: [RouterModule],
})
export class HomeRoutingModule{
    
}