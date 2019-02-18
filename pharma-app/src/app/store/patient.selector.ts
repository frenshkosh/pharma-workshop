import * as fromPatients from '../store/patient.reducer'
import {AppState} from '../index';
import {createSelector} from "@ngrx/store";
export { selectPatientIds,selectPatientsEntities, selectPatients,selectTotalPatients} from "../store/patient.reducer";

//Renvoie les patients
export const selectPatientListState$ = (state: AppState) => state.patients;

// Et à partir de celle-ci, on créer une autre fonction qui renverra data
export const selectPatients$ = createSelector(selectPatientListState$,(patients) =>  patients.entities);

export const selectPatientListEntitiesConverted$ = createSelector(
    selectPatientListState$,
  fromPatients.selectPatients);

export  const  selectPatientsLoading$ =
  createSelector(selectPatientListState$, (patients) =>  patients.loading);

export  const  selectPatientsLoaded$ =
  createSelector(selectPatientListState$, (patients) =>  patients.loaded);

export const selectPatientsErrors$ =
  createSelector(selectPatientListState$, (patients) => patients.logs);