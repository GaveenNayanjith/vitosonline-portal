import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaComponent } from './pizza-components/pizza/pizza.component';

const routes: Routes = [
  {path:"", component: PizzaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
