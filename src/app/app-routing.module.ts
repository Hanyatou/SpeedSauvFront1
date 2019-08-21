import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { EnregistrementComponent } from './components/enregistrement/enregistrement.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ConfidentialiteComponent } from './components/confidentialite/confidentialite.component';
import { UpdateProfileComponent} from  './components/update-profile/update-profile.component';


const routes: Routes = [
  {path: '', 
  redirectTo: '/',
  pathMatch: 'full'},
  { path: 'connexion', component: ConnexionComponent},
  { path: 'enregistrement', component: EnregistrementComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'header', component: HeaderComponent},
  { path: 'confidentialite', component: ConfidentialiteComponent},
   { path: 'UpdateProfileComponent', component: UpdateProfileComponent},
   { path: 'accueil', component: AccueilComponent},
  // { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
