import { Component } from '@angular/core';
import { HomeServicesService } from '../../home-services/home-services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent {
  categoryId: any = this.activatedRoute.snapshot.params['categoryId']; 
  Pizza: any=[];

  constructor(private pizzaService:HomeServicesService, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void{
    this.getPizza();
  }

  getPizza(){
    this.Pizza=[];
    this.pizzaService.getAllPizzaByCategory(this.categoryId).subscribe((res) =>{
      console.log(res);
      res.forEach(element => {
        this.Pizza.push(element);
      })
    });
  }

}
