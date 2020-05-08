import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from 'src/app/main_components/sign-in/sign-in.component';

const rutas: Routes= [
    {path: 'Sign', component: SignInComponent},
]

@NgModule({
    imports: [RouterModule.forChild(rutas)],
    exports: [RouterModule],
})
export class SignRoutingModule{
    
}