import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AlertService } from './../../_services/alert.service';
import {  AuthentificationService } from './../../_services/authentification.service';
import {  RegisterService } from './../../_services/register.service';
import { first } from 'rxjs/operators';
import { LoginDataService } from './../../_services/login-data.service';
import { RegisterData } from 'src/app/_models';


@Component({
  selector: 'app-enregistrement',
  templateUrl: './enregistrement.component.html',
  styleUrls: ['./enregistrement.component.scss']
})
export class EnregistrementComponent implements OnInit {
  defaultRegisterForm :FormGroup;
  loading = false;
  submitted=false;
  returnUrl : string;
  loggedIn = false;
  loggedOut =true;
  inscript: RegisterService;

  constructor(private fb:FormBuilder,
    private route : ActivatedRoute,
    private router: Router,
    private alertS: AlertService,
    private registerR: RegisterService,
    private loginData: LoginDataService,
    private auth: AuthentificationService,
     ) {
       // redirect to home if already logged in
        if (this.auth.currentUserValue) {
         this.router.navigate(['/UpdateProfile']);
     }
     }

  ngOnInit() {
    this.defaultRegisterForm = this.fb.group({
      defaultRegisterFormFirstName: ['', [Validators.required]],
      defaultRegisterFormLastName : ['', [Validators.required]],
      defaultRegisterFormNumSecu : ['', [Validators.required,
           Validators.minLength(15),  Validators.maxLength(15),
          Validators.pattern(/^-?(0|[1-9]\d*)?$/)]], 
      defaultRegisterFormEmail:  ['', [Validators.required, Validators.email]],
      defaultRegisterFormPassword : ['', [Validators.required, Validators.minLength(7)]],
      ConfirmeddefaultRegisterFormPassword : ['', [Validators.required, Validators.minLength(7)]],

    });
    
    this.returnUrl= this.route.snapshot.queryParams['returnUrl'] || '/';
  }


  onSubmit(){
    this.submitted= true;
    
    // stop here is form is invalid
    if(this.defaultRegisterForm.invalid){
      return;
    }

    this.loading =true;
    //
    
    console.log( 'info', this.defaultRegisterForm.value);
    
     this.loginData.register(this.defaultRegisterForm.value)
             .pipe(first())
             .subscribe(
                 data => {
        console.log('fghjklm hjklmù fghjk ok ');
                     this.alertS.success('Inscription réussite', true);
                     this.router.navigate(['/connexion']);
                 },
                 error => {
      console.log('fghjklm hjklmù fghjk ok ');
                   this.alertS.error(error);
                     this.loading = false;
                });


  }

  get f(){
    return this.defaultRegisterForm.controls;
  }

  get defaultRegisterFormFirstName (){
      return this.defaultRegisterForm.get('defaultRegisterFormFirstName');
  }

  get defaultRegisterFormLastName(){
    return this.defaultRegisterForm.get('defaultRegisterFormLastName');
  }

  get defaultRegisterFormNumSecu(){
    return this.defaultRegisterForm.get('defaultRegisterFormNumSecu');
  }

  get defaultRegisterFormEmail(){
    return this.defaultRegisterForm.get('defaultRegisterFormEmail');
  }

  get defaultRegisterFormPassword(){
    return this.defaultRegisterForm.get('defaultRegisterFormPassword');
  }

  get ConfirmeddefaultRegisterFormPassword(){
    return this.defaultRegisterForm.get('ConfirmeddefaultRegisterFormPassword');
  }

}
