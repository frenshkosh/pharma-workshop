import { Injectable } from  '@angular/core';
import { Actions, Effect, ofType } from  '@ngrx/effects';
import { Observable } from  'rxjs';
import { catchError, map, switchMap } from  'rxjs/operators';
import {of} from "rxjs/index";
import {ConsultationService} from "../service/consultation.service";
import {TraitementListModule} from "../store/traitement.action";

@Injectable()
export  class  TraitementListEffects {
  // Ecoute les actions passées dans le store
  @Effect() LoadTraitements$: Observable<TraitementListModule.Actions> = this.actions$
    .pipe(
      ofType(TraitementListModule.ActionTypes.LOAD_INIT_TRAITEMENTS),
      switchMap(action  =>  this.consultationService.getTraitements()),
      map(traitements => new TraitementListModule.SuccessInitTraitements(traitements)),
      catchError((err) => of(new TraitementListModule.ErrorLoadActionTraitement(err)))
    );

  @Effect() LoadCreateTraitement$: Observable<TraitementListModule.Actions> = this.actions$
    .pipe(
      ofType<TraitementListModule.LoadCreateTraitement>(TraitementListModule.ActionTypes.LOAD_CREATE_TRAITEMENT),
      switchMap(action => this.consultationService.createTraitement(action.payload)),
      map(traitement => new TraitementListModule.SuccessCreateTraitement(traitement)),
      catchError((err) => of(new TraitementListModule.ErrorLoadActionTraitement(err)))
    );

  @Effect() LoadDeleteTraitement$: Observable<TraitementListModule.Actions> = this.actions$
    .pipe(
      ofType<TraitementListModule.LoadDeleteTraitement>(TraitementListModule.ActionTypes.LOAD_DELETE_TRAITEMENT),
      switchMap(action => this.consultationService.deleteTraitement(action.payload)),
      map(id => new TraitementListModule.SuccessDeleteTraitement(id)),
      catchError((err) => of(new TraitementListModule.ErrorLoadActionTraitement(err)))
    );

  constructor(
    private  consultationService: ConsultationService,
    private  actions$: Actions,
  ) {}

}
