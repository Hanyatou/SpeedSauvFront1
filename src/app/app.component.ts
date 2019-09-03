import { Component } from '@angular/core';
import { Router } from '@angular/router';

//mes services 
import { AuthentificationService } from './_services/authentification.service';
//mes models
import { LoginData } from './_models/login-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SpeedSauvetageFront1';
  CurrentLoginData : LoginData;
}
