import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TestService {

  loggedIn = false;

  token = '';


  constructor(private http: HttpClient) { }



  getUserList(){
    return this.http.get(environment.restBasePath + 'user/all');
  }



  insertUser(user: any){
     let insertPath = environment.restBasePath + 'user';
     return this.http.post(insertPath , user);
  }


  login(user:any) {
    let loginPath = environment.restBasePath + 'api/auth/login';
    return this.http.post(loginPath , user);
  }



  chiamataProtetta() {
    let path = environment.restBasePath + 'api/user/all';
    var headers = {
      'Authorization' : 'Bearer ' + this.token
    };
    return this.http.get(path,{headers: headers});
  }

}
