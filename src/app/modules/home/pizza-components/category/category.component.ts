import { Component } from '@angular/core';
import { HomeServicesService } from '../../home-services/home-services.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  Category: any=[];

  constructor(
    private service:HomeServicesService,
  ){}

  ngOnInit(){
    this.getAllCategories();
  }

  getAllCategories(){
    this.Category=[];
    this.service.getAllCategories().subscribe((res) =>{
      console.log(res);
      res.forEach(element => {
        this.Category.push(element);
      });
      });
    }
  }
