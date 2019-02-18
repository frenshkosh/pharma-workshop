import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import {Traitement} from '../model/traitement';
import {TraitementListModule} from '../store/traitement.action';

export interface TraitementListStateEntity extends EntityState<Traitement> {
    loading: boolean;
    loaded: boolean;
    selectTraitement: Traitement;
    logs: {
        type: string;
        message: string;
    };
}

export const TraitementListAdapter: EntityAdapter<Traitement> = createEntityAdapter<Traitement>({
    sortComparer: false
});

export const initialState: TraitementListStateEntity = TraitementListAdapter.getInitialState({
    loading: false,
    loaded: false,
    selectTraitement: undefined,
    logs: undefined
});

export const {
    selectIds: selectTraitementIds,
    selectEntities: selectTraitementsEntities,
    selectAll: selectTraitements,
    selectTotal: selectTotalTraitements
} = TraitementListAdapter.getSelectors();

export function traitementsReducer (
    state = initialState,
    action: TraitementListModule.Actions
): TraitementListStateEntity {
    switch (action.type) {
        case TraitementListModule.ActionTypes.LOAD_INIT_TRAITEMENTS:
        //Passe le loading à true
        return {
            ...state,
            loading: true
        };
        case TraitementListModule.ActionTypes.SUCCESS_INIT_TRAITEMENTS:
        //ajout les medocs loaded ok loading à false
        return {
            ...TraitementListAdapter.addMany(action.payload, state),
            loading: false,
            loaded: true
        };
        case TraitementListModule.ActionTypes.LOAD_DELETE_TRAITEMENT:
        return {
            ...state,
            loading:true
        }
        case TraitementListModule.ActionTypes.SUCCESS_DELETE_TRAITEMENT:
        return {
            ...TraitementListAdapter.removeOne(action.payload,state),
            loading:false,
            loaded:true,
            logs: { type: 'SUCCESS', message: 'Le Traitement a été supprimé avec succès' }
        }
        case TraitementListModule.ActionTypes.LOAD_CREATE_TRAITEMENT:
        return {
            ...state,
            loading: true
        }
        case TraitementListModule.ActionTypes.SUCCESS_CREATE_TRAITEMENT:
        return {
            ...TraitementListAdapter.addOne(action.payload,state),
            loading:false,
            logs: { type: 'SUCCESS', message: 'Le Traitement a été créé avec succès' },
        }
        case TraitementListModule.ActionTypes.ERROR_LOAD_TRAITEMENTS:
        return {
            ...state,
            logs: { type: 'ERROR', message: action.payload.message },
            loading: false
        };

        default:
        return state;
        }
}