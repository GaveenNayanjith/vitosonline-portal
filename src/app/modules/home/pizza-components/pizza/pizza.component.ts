import { Component } from '@angular/core';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent {
  Pizza: any=[];

  constructor(){}

  ngOnInit(): void{
    this.getPizza();
  }

  getPizza(){
    this.Pizza=[];
    this.pizzaService.getPizza().subscribe((res) =>{
      res.foreach(element =>{
        element.processedImg = 'data: image/jpeg; base64' + element.returnedImg;
        this.Pizza.push(element);
      })
    })
  }

}
