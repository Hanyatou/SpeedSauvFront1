import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
// MDB Angular Free
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule, WavesModule, NavbarModule, ButtonsModule,IconsModule, CheckboxModule, InputsModule, CardsModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { EnregistrementComponent } from './components/enregistrement/enregistrement.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ConfidentialiteComponent } from './components/confidentialite/confidentialite.component';
import { UpdateProfileComponent} from  './components/update-profile/update-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ConnexionComponent,
    EnregistrementComponent,
    AccueilComponent,
    ConfidentialiteComponent, 
    UpdateProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     WavesModule,
     NavbarModule,
     ButtonsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule, 
    IconsModule, 
    CheckboxModule,
     InputsModule, 
     CardsModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
