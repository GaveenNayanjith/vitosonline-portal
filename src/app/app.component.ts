import { Component } from '@angular/core';
import { StorageService } from './auth-services/storage-services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vitosonline';

  constructor(private router:Router){}

  isCustomerLoggedIn = StorageService.isCustomerLoggedIn();

  ngOnInit(){
    this.router.events.subscribe(event=>{
      if(event.constructor.name === "NavigationEnd"){
        this.isCustomerLoggedIn = StorageService.isCustomerLoggedIn();
      }
    })
  }

  logout(){
    StorageService.signout();
    this.router.navigateByUrl("/home/category")
  }
}
