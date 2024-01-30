import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaComponent } from './pizza-components/pizza/pizza.component';
import { CategoryComponent } from './pizza-components/category/category.component';

const routes: Routes = [
  {path:"category", component: CategoryComponent},
  {path:":categoryId/pizza", component: PizzaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
