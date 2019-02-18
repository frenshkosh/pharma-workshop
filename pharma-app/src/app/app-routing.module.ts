import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchMedicamentComponent } from './search-medicament/search-medicament.component';
import { SearchTraitementComponent } from './search-traitement/search-traitement.component';
import { CreateMedicamentComponent } from './create-medicament/create-medicament.component';
import { CreateTraitementComponent } from './create-traitement/create-traitement.component';
import { AppComponent } from './app.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { SearchPatientComponent } from './search-patient/search-patient.component';

const routes: Routes = [
  {path: 'search-medicament', component: SearchMedicamentComponent},
  {path: 'search-traitement', component: SearchTraitementComponent},
  {path: 'create-medicament', component: CreateMedicamentComponent},
  {path: 'create-traitement', component: CreateTraitementComponent},
  {path: 'create-patient', component: CreatePatientComponent},
  {path: 'search-patient', component: SearchPatientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
