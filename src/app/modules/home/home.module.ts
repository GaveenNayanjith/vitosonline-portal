import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PizzaComponent } from './pizza-components/pizza/pizza.component';
import { CategoryComponent } from './pizza-components/category/category.component';


@NgModule({
  declarations: [
    PizzaComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
