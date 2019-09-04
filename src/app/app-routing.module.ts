import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { EnregistrementComponent } from './components/enregistrement/enregistrement.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ConfidentialiteComponent } from './components/confidentialite/confidentialite.component';
import { UpdateProfileComponent} from  './components/update-profile/update-profile.component';
import { DeconnexionComponent } from './components/deconnexion/deconnexion.component';
import { AdminComponent } from './components/admin/admin.component';
import { ValidateEmailComponent } from './validate-email/validate-email.component';

// guards
//import { AuthGuard } from './_guards/auth.guard';


const routes: Routes = [
  {path: '', 
  redirectTo: '/',
  pathMatch: 'full'},
  { path: 'connexion', component: ConnexionComponent /* , canActivate: [AuthGuard] */},
  { path: 'enregistrement', component: EnregistrementComponent/* , canActivate: [AuthGuard] */},
  { path: 'footer', component: FooterComponent},
  { path: 'header', component: HeaderComponent},
  { path: 'confidentialite', component: ConfidentialiteComponent},
   { path: 'UpdateProfile', component: UpdateProfileComponent},
   { path: 'accueil', component: AccueilComponent},
   { path: 'deconnexion', component: DeconnexionComponent},
   { path: 'admin', component: AdminComponent/* , canActivate: [AuthGuard] */},
   { path: 'validateEmail', component: ValidateEmailComponent /* , canActivate: [AuthGuard] */},
    
  // { path: '**', component: PageNotFoundComponent }

];

export const appRoutingModule = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
