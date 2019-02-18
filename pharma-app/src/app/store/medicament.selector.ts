import * as fromMedicaments from '../store/medicament.reducer'
import {AppState} from '../index';
import {createSelector} from "@ngrx/store";
export { selectMedicamentIds,selectMedicamentsEntities, selectMedicaments,selectTotalMedicaments} from "../store/medicament.reducer";

//Renvoie les medicaments
export const selectMedicamentListState$ = (state: AppState) => state.medicaments;

// Et à partir de celle-ci, on créer une autre fonction qui renverra data
export const selectMedicaments$ = createSelector(selectMedicamentListState$,(medicaments) =>  medicaments.entities);

export const selectMedicamentListEntitiesConverted$ = createSelector(
  selectMedicamentListState$,
  fromMedicaments.selectMedicaments);

export  const  selectMedicamentsLoading$ =
  createSelector(selectMedicamentListState$, (medicaments) =>  medicaments.loading);

export  const  selectMedicamentsLoaded$ =
  createSelector(selectMedicamentListState$, (medicaments) =>  medicaments.loaded);

export const selectMedicamentsErrors$ =
  createSelector(selectMedicamentListState$, (medicaments) => medicaments.logs);