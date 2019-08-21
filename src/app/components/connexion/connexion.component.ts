import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  ngOnInit(){
    
  }

  elegantForm: FormGroup;

  constructor(public fb: FormBuilder) {
    this.elegantForm = fb.group({
      elegantFormEmailEx: ['', [Validators.required, Validators.email]],
      elegantFormPasswordEx: ['', Validators.required],
    });
  }
  

}
