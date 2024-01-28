import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth-components/signup/signup.component';
import { LoginComponent } from './auth-components/login/login.component';

const routes: Routes = [
  {path: "signup", component: SignupComponent},
  {path: "login", component: LoginComponent},
  {path: "", loadChildren:() => import("./modules/home/home.module").then(m=>m.HomeModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
