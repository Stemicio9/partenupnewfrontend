import { Component, OnInit } from '@angular/core';
import {TestService} from "../services/test.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public testservice: TestService) { }

  ngOnInit(): void {

  }

}
