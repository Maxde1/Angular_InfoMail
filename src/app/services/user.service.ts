import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserRegistration} from "../Model/UserModel/UserRegistration";
import {Observable} from "rxjs";
import {UserLogin} from "../Model/UserModel/UserLogin";
import {Email} from "../Model/letter/email";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = "http://localhost:8090/api/v1"
  constructor(private http: HttpClient) { }

  createUser(user: UserRegistration): Observable<UserRegistration>{
    console.log(user)
    return this.http.post<UserRegistration>(`${this.baseUrl}/user`, user);
  }
  logIn(user: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>(`http://localhost:8080/api/v1/log`, user);
  }
  sendEmail(email: Email): Observable<Email>{
    return this.http.post<Email>(`${this.baseUrl}/emails`, email)
  }
}
