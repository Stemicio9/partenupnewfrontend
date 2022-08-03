import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TestService {

  loggedIn = false;


  constructor(private http: HttpClient) { }



  getUserList(){
    return this.http.get(environment.restBasePath + 'user/all');
  }



  insertUser(user: any){
     let insertPath = environment.restBasePath + 'user';
     return this.http.post(insertPath , user);
  }


  login(user:any) {
    let loginPath = environment.restBasePath + 'user/login';
    return this.http.post(loginPath , user);
  }


}
