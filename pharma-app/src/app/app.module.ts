import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {environment} from "../environments/environment";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";
import {appEffects, getReducers, REDUCER_TOKEN} from "./index";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchMedicamentComponent } from './search-medicament/search-medicament.component';
import { CreateMedicamentComponent } from './create-medicament/create-medicament.component';
import { CreateTraitementComponent } from './create-traitement/create-traitement.component';
import { SearchTraitementComponent } from './search-traitement/search-traitement.component';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { MenuModule } from 'primeng/menu';
import {CheckboxModule} from 'primeng/checkbox';
import {MultiSelectModule} from 'primeng/primeng';
import {SplitButtonModule} from 'primeng/splitbutton';
import {ToastModule} from 'primeng/toast';
import {DropdownModule} from 'primeng/dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { SearchPatientComponent } from './search-patient/search-patient.component';
import { StoreModule } from '@ngrx/store';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SearchMedicamentComponent,
    CreateMedicamentComponent,
    CreateTraitementComponent,
    SearchTraitementComponent,
    CreatePatientComponent,
    SearchPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AutoCompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MenuModule,
    BrowserAnimationsModule,
    CheckboxModule,
    MultiSelectModule,
    SplitButtonModule,
    ToastModule,
    DropdownModule,
    StoreModule.forRoot(REDUCER_TOKEN),
    HttpClientModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    }),
    EffectsModule.forRoot(appEffects),
    StoreDevtoolsModule.instrument({
      name: '[DEMOANGULAR]',
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production
    })
  ],
  providers: [{
    provide: REDUCER_TOKEN,
    useFactory: getReducers
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
