import { Injectable } from '@angular/core';
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../models/user.model";
@Injectable({
  providedIn: 'root'
})
export class AuthService{
  private user!: UserModel;


  constructor(private http:HttpClient) { }

  /*login(id: number):Observable<any> {
    return this.http.delete<any>(`http://localhost:8082/customers/${id}`);
  }*/
  login(email: string, password: string) {
    return this.http.post('http://localhost:8082/auth/login', {email:email,password:password})
  }
}
