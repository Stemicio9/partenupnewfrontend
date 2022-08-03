import {Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {CiaoComponent} from "./ciao/ciao.component";


export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'ciao',
    component: CiaoComponent,
  },
  {
    path: '**',
    redirectTo:'login'
  }

];
