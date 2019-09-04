import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
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
  messageR: string;
   bool = true;

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


  onSubmit(){

    this.submitted= true;
    
    // stop here is form is invalid
    if(this.defaultRegisterForm.invalid){
      return;
    }else{
      this.loading =true;

    console.log( 'info',this.f.defaultRegisterFormFirstName.value );
    
     this.loginData.register( this.f.defaultRegisterFormFirstName.value, 
        this.f.defaultRegisterFormFirstName.value,
       this.f.defaultRegisterFormNumSecu.value, 
        this.f.defaultRegisterFormEmail.value,
        this.f.defaultRegisterFormPassword.value
         )
             .pipe(first())
             .subscribe(
                 data => {
                  console.log(" ok 1 ", data);
                  console.log(" ok 22 ", typeof( data['success']));
                  if(data.success){
                    console.log(" ok 223 ", data['success']);
                    this.router.navigate(['/validateEmail']);
                  }else{
                      this.messageR= "vide";
                      if(data['message'] == 'userFound' ){
                          this.messageR = 'cette adresse mail est déjà utilisée'
                        
                        }else{
                          this.messageR = "Une erreur  technique s'est produite, veuillez réessayez dans un moment svp ."
                      }
                    
                  }
                 
                 },
     );

    }

    

  }

  get f(){
    return this.defaultRegisterForm.controls;
  }

 

}
