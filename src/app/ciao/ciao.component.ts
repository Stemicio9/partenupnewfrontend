import { Component, OnInit } from '@angular/core';
import {TestService} from "../services/test.service";


@Component({
  selector: 'app-ciao',
  templateUrl: './ciao.component.html',
  styleUrls: ['./ciao.component.css']
})
export class CiaoComponent implements OnInit {


  titolopagina = 'CIAO TITOLO';


  valoretextbox = '00000000000';



  userlist: any[] = [];


  username = '';
  password = '';



  token = '';



  constructor(public testservice: TestService) {

  }


  saveUser(){
    let userToSave: any = {};
    userToSave.username = this.username;
    userToSave.password = this.password;




   this.testservice.insertUser(userToSave).subscribe(result => {
      console.log("IL SALVATAGGIO ");
      console.log(result);
    });



    console.log("ciao");

  }


  ngOnInit(): void {
     this.refresh();
  }


  refresh(){

    this.testservice.getUserList().subscribe((result:any) => {
      this.userlist = result;
    });
  }


  login(){
    let userToSave: any = {};
    userToSave.username = this.username;
    userToSave.password = this.password;
    this.testservice.login(userToSave).subscribe((result:any) => {
      console.log("STTAMPO IL TOKEN ");
      console.log(result);
      this.token = result['jwt-token'];
      this.testservice.token = this.token;
    });
  }

  chiamataProtetta() {
    this.testservice.chiamataProtetta().subscribe( result => {
      console.log("RISULTATO DELLA CHIAMATA");
      console.log(result);
    }, error => {
      console.log("ERRORE ERRORE");
      console.log(error);
    });
  }

}
