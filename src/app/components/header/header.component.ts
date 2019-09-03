import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

//
//import { AuthentificationService } from './../../_services/authentification.service';
//import { LoginData } from './../../_models/login-data';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loggedOut = true;
  isLoggedIn = true;

  //currentUser: LoginData;

    constructor(
        private router: Router,
       // private auth: AuthentificationService
    ) {
       // this.auth.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
      //  this.auth.logout();
        this.router.navigate(['/connexion']);
    }

  ngOnInit() {
  }

  isHomeRoute() {
    return this.router.url === '/';
  }

}
