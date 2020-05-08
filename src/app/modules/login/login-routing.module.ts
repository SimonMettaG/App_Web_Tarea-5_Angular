import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from 'src/app/main_components/log-in/log-in.component';


const rutas: Routes= [
    {path: 'Log', component: LogInComponent},
]

@NgModule({
    imports: [RouterModule.forChild(rutas)],
    exports: [RouterModule],
})
export class LogInRoutingModule{
    
}