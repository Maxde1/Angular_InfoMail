import { Component, OnInit } from '@angular/core';
import {UserLogin} from "../Model/UserModel/UserLogin";
import {FormControl, Validators} from "@angular/forms";
import {UserService} from "../services/user.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new UserLogin();
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor(private service: UserService) { }

  ngOnInit(): void {
  }
  logInUser(): void{
      console.log(this.user)
    this.service.logIn(this.user).subscribe((response: UserLogin)=>{
      console.log(response);
    })
    this.user = new UserLogin();
  }

}
