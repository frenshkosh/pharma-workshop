import { ActionReducerMap } from '@ngrx/store';
import { InjectionToken } from '@angular/core';

import {MedicamentListEffects} from "./store/medicament.effect";
import {PatientListEffects} from "./store/patient.effect";
import {TraitementListEffects} from "./store/traitement.effect";
import {MedicamentListStateEntity, medicamentsReducer} from "./store/medicament.reducer";
import { patientsReducer, PatientListStateEntity } from './store/patient.reducer';
import { traitementsReducer, TraitementListStateEntity } from './store/traitement.reducer';

// Le root reducer
const reducers = {
  medicaments: medicamentsReducer,
  patients: patientsReducer,
  traitements: traitementsReducer,
};

export interface AppState {
  medicaments: MedicamentListStateEntity,
  patients: PatientListStateEntity,
  traitements: TraitementListStateEntity
}

// Nécéssaire pour l'AOT
export function getReducers() {
  return reducers;
}
// Nécéssaire pour l'AOT
export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<AppState>>('Registered Reducers');

export  const  appEffects = [MedicamentListEffects,PatientListEffects,TraitementListEffects];