import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/patient';
import { PatienteleService } from '../service/patientele.service';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {AppState} from '../index';
import {select, Store, resultMemoize} from "@ngrx/store";
import {PatientListModule} from "../store/patient.action";
import {selectPatientListEntitiesConverted$,selectPatientsLoading$} from "../store/patient.selector";

@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.component.html',
  styleUrls: ['./search-patient.component.less']
})
export class SearchPatientComponent implements OnInit {

 
  constructor(private patientService: PatienteleService,
    private router: Router, private store: Store<AppState>) {
    this.patients$ = store.pipe(select(selectPatientListEntitiesConverted$));
    this.patientLoading = store.pipe(select(selectPatientsLoading$));
   }

   public patients$: Observable<Patient[]>;
  public patientLoading: Observable<boolean>;

  ngOnInit() {
    this.store.dispatch(new PatientListModule.LoadInitPatients());
  }

  goToAddPatient () {
    this.router.navigateByUrl('/create-patient');
  }

  search(event: any) {
    console.log('Le nom qui est entré est :' + event.query);
    //this.results = this.patientService.getAllPatients().filter(patient => patient.nom.indexOf(event.query) > -1);
  }

  deletePatient(id: number) {
    this.store.dispatch(new PatientListModule.LoadDeletePatient(id));
  }

}
