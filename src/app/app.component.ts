import { Component } from '@angular/core';

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
