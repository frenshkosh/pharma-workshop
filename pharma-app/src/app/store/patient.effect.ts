import { Injectable } from  '@angular/core';
import { Actions, Effect, ofType } from  '@ngrx/effects';
import { Observable } from  'rxjs';
import { catchError, map, switchMap } from  'rxjs/operators';
import {of} from "rxjs/index";
import {PatienteleService} from "../service/patientele.service";
import {PatientListModule} from "../store/patient.action";

@Injectable()
export  class  PatientListEffects {
  // Ecoute les actions passées dans le store
  @Effect() LoadPatients$: Observable<PatientListModule.Actions> = this.actions$
    .pipe(
      ofType(PatientListModule.ActionTypes.LOAD_INIT_PATIENTS),
      switchMap(action  =>  this.patientListService.getPatients()),
      map(patients => new PatientListModule.SuccessInitPatients(patients)),
      catchError((err) => of(new PatientListModule.ErrorLoadActionPatient(err)))
    );

  @Effect() LoadCreatePatient$: Observable<PatientListModule.Actions> = this.actions$
    .pipe(
      ofType<PatientListModule.LoadCreatePatient>(PatientListModule.ActionTypes.LOAD_CREATE_PATIENT),
      switchMap(action => this.patientListService.createPatient(action.payload)),
      map(patient => new PatientListModule.SuccessCreatePatient(patient)),
      catchError((err) => of(new PatientListModule.ErrorLoadActionPatient(err)))
    );

  @Effect() LoadDeletePatient$: Observable<PatientListModule.Actions> = this.actions$
    .pipe(
      ofType<PatientListModule.LoadDeletePatient>(PatientListModule.ActionTypes.LOAD_DELETE_PATIENT),
      switchMap(action => this.patientListService.deletePatient(action.payload)),
      map(id => new PatientListModule.SuccessDeletePatient(id)),
      catchError((err) => of(new PatientListModule.ErrorLoadActionPatient(err)))
    );

  constructor(
    private  patientListService: PatienteleService,
    private  actions$: Actions,
  ) {}

}
