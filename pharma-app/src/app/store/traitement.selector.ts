import * as fromTraitments from '../store/traitement.reducer'
import {AppState} from '../index';
import {createSelector} from "@ngrx/store";
export { selectTraitementIds,selectTraitementsEntities, selectTraitements,selectTotalTraitements} from "../store/traitement.reducer";

//Renvoie les patients
export const selectTraitementListState$ = (state: AppState) => state.traitements;

// Et à partir de celle-ci, on créer une autre fonction qui renverra data
export const selectTraitements$ = createSelector(selectTraitementListState$,(traitements) =>  traitements.entities);

export const selectTraitementListEntitiesConverted$ = createSelector(
    selectTraitementListState$,
    fromTraitments.selectTraitements);

export  const  selectTraitementsLoading$ =
  createSelector(selectTraitementListState$, (traitements) =>  traitements.loading);

export  const  selectTraitementsLoaded$ =
  createSelector(selectTraitementListState$, (traitements) =>  traitements.loaded);

export const selectTraitementsErrors$ =
  createSelector(selectTraitementListState$, (traitements) => traitements.logs);