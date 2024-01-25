import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth-services/auth-service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm:FormGroup;

  constructor(private service: AuthService,
    private fb:FormBuilder){}

    ngOnInit(){
      this.loginForm = this.fb.group({
        email: [null,Validators.required],
        password:[null,Validators.required]
      })
    }


}
