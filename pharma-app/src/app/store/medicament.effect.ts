import { Injectable } from  '@angular/core';
import { Actions, Effect, ofType } from  '@ngrx/effects';
import { Observable } from  'rxjs';
import { catchError, map, switchMap } from  'rxjs/operators';
import {of} from "rxjs/index";
import {PharmacieService} from "../service/pharmacie.service";
import {MedicamentListModule} from "../store/medicament.action";

@Injectable()
export  class  MedicamentListEffects {
  // Ecoute les actions passées dans le store
  @Effect() LoadMedicaments$: Observable<MedicamentListModule.Actions> = this.actions$
    .pipe(
      ofType(MedicamentListModule.ActionTypes.LOAD_INIT_MEDICAMENTS),
      switchMap(action  =>  this.medicamentListService.getMedicament()),
      map(medicaments => new MedicamentListModule.SuccessInitMedicaments(medicaments)),
      catchError((err) => of(new MedicamentListModule.ErrorLoadActionMedicament(err)))
    );

  @Effect() LoadCreateMedicament$: Observable<MedicamentListModule.Actions> = this.actions$
    .pipe(
      ofType<MedicamentListModule.LoadCreateMedicament>(MedicamentListModule.ActionTypes.LOAD_CREATE_MEDICAMENTS),
      switchMap(action => this.medicamentListService.createMedicament(action.payload)),
      map(medicament => new MedicamentListModule.SuccessCreateMedicament(medicament)),
      catchError((err) => of(new MedicamentListModule.ErrorLoadActionMedicament(err)))
    );

  @Effect() LoadDeleteMedicament$: Observable<MedicamentListModule.Actions> = this.actions$
    .pipe(
      ofType<MedicamentListModule.LoadDeleteMedicament>(MedicamentListModule.ActionTypes.LOAD_DELETE_MEDICAMENTS),
      switchMap(action => this.medicamentListService.deleteMedicament(action.payload)),
      map(id => new MedicamentListModule.SuccessDeleteMedicament(id)),
      catchError((err) => of(new MedicamentListModule.ErrorLoadActionMedicament(err)))
    );

  constructor(
    private  medicamentListService: PharmacieService,
    private  actions$: Actions,
  ) {}

}
