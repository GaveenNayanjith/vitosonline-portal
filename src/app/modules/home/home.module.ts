import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PizzaComponent } from './pizza-components/pizza/pizza.component';


@NgModule({
  declarations: [
    PizzaComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
