// les modules de angul
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// MDB Angular Free
import { MDBBootstrapModule, WavesModule, NavbarModule, ButtonsModule,IconsModule, CheckboxModule, InputsModule, CardsModule } from 'angular-bootstrap-md';

// mes validateurs de champs inputs
import { FormsModule, ReactiveFormsModule, NG_VALIDATORS } from '@angular/forms'

// mes components créés
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { EnregistrementComponent } from './components/enregistrement/enregistrement.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ConfidentialiteComponent } from './components/confidentialite/confidentialite.component';
import { UpdateProfileComponent} from  './components/update-profile/update-profile.component';
import { AdminComponent } from './components/admin/admin.component';
import { DeconnexionComponent } from './components/deconnexion/deconnexion.component';

import { AlertComponent } from './components/alert/alert.component';

//les interceptors de token ou d'erreur créés 
import { ErrorInterceptor} from './_interceptors/error-interceptor';
import { JwtInterceptor } from './_interceptors/jwt-interceptor';

//les guards 
import { AuthGuard } from './_guards/auth.guard';

//les services 
import { AlertService } from './_services/alert.service';
import { AuthentificationService } from './_services/authentification.service';
import { LoginDataService } from './_services/login-data.service';
import { PatCollectionService } from './_services/pat-collection.service';
import { AdminService } from './_services/admin.service';
import { RegisterService } from './_services/register.service';
import { ValidateEmailComponent } from './validate-email/validate-email.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ConnexionComponent,
    EnregistrementComponent,
    AccueilComponent,
    ConfidentialiteComponent, 
    UpdateProfileComponent, 
    AdminComponent,
    DeconnexionComponent,
    AlertComponent,
    ValidateEmailComponent,
     
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
    CardsModule,
    HttpClientModule,
    
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    AuthGuard,
    AlertService,
    AuthentificationService,
    LoginDataService,
    PatCollectionService,
    AdminService,
    RegisterService,
      ErrorInterceptor,
      JwtInterceptor,
      { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    
],
  bootstrap: [AppComponent],
  

})
export class AppModule { }
