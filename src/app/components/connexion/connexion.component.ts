import { Component, OnInit } from '@angular/core';
import {  FormGroup, Validators, FormBuilder } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';

// import { AuthentificationService } from 'src/app/_services/authentification.service';
// import { first } from 'rxjs/operators';
// import { AlertService } from 'src/app/_services/alert.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  elegantForm :FormGroup;
  loading = false;
  submitted=false;
  returnUrl : string;
  loggedIn = false;
  loggedOut =true;

  ngOnInit(){
    this.elegantForm= this.fb.group({
      elegantFormLoginEx: ['', [Validators.required, Validators.email]],
      elegantFormPasswordEx: ['',[ Validators.required, Validators.minLength(7)]],
    });

      // get return url from route parameters
      this.returnUrl= this.route.snapshot.queryParams['returnUrl'] || '/';    
  }

  // getter to easy access form control fields
  get f(){
    return this.elegantForm.controls;
  }

  get elegantFormLoginEx(){
    return this.elegantForm.get('elegantFormLoginEx:');
  }

  get pwd(){
    return this.elegantForm.get('elegantFormPasswordEx');
  }

  onSubmit(){
    this.submitted= true;
    
    // stop here is form is invalid
    if(this.elegantForm.invalid){
      return;
    }

    this.loading =true;
    //
    
    console.log( 'info', this.elegantForm.value);
    this.loading = true;
//     this.auth.login(this.f.elegantFormLoginEx.value, this.f.elegantFormLoginEx.value)
//         .pipe(first())
//         .subscribe(
//             data => {
//                 this.router.navigate([this.returnUrl]);
//             },
//             error => {
//                 //this.alertService.error(error);
//                 this.loading = false;
//             });

}

  constructor(public fb: FormBuilder,
    private route : ActivatedRoute,
    private router: Router,
    //private auth : AuthentificationService,
    //private alertService: AlertService
    ) {
       // redirige vers la page de garde une fois connecé
    //    if (this.auth.currentUserValue) {
    //     this.router.navigate(['/UpdateProfile']);
    // }
    }
  

  
}
