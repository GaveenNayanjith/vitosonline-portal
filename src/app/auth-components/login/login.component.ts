import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth-services/auth-service/auth.service';
import { StorageService } from 'src/app/auth-services/storage-services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm:FormGroup;
  isSpinning: boolean;

  constructor(private service: AuthService,
    private fb:FormBuilder,
    private router : Router){}

    ngOnInit(){
      this.loginForm = this.fb.group({
        email: [null,Validators.required],
        password:[null,Validators.required]
      })
    }

    submitForm(){
      this.service.login(this.loginForm.value).subscribe((res)=>{
        if (res.userId != null){
          const user= {
            id:res.userId,
            role: res.userRole
          }
          StorageService.saveToken(res.jwt);
          StorageService.saveUser(user);
          if(StorageService.isCustomerLoggedIn()){
            this.router.navigateByUrl("home/category")
          }
        }else{
          console.log("Wrong Credentials!")
        }
      })

    }


}
