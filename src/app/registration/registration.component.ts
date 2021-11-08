import {Component, Input, OnInit} from '@angular/core';
import {UserRegistration} from "../Model/UserModel/UserRegistration";
import {UserService} from "../services/user.service";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  @Input() user: UserRegistration = new UserRegistration();
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor(private service: UserService) { }

  ngOnInit(): void {
  }
  addUser():void{
    this.service.createUser(this.user).subscribe((response: UserRegistration)=>{
      console.log(response);
    })
  }

}
