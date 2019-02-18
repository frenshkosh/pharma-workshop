import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import {Medicament} from '../model/medicament';
import {MedicamentListModule} from '../store/medicament.action';

export interface MedicamentListStateEntity extends EntityState<Medicament> {
    loading: boolean;
    loaded: boolean;
    selectMedicament: Medicament;
    logs: {
        type: string;
        message: string;
    };
}

export const MedicamentListAdapter: EntityAdapter<Medicament> = createEntityAdapter<Medicament>({
    sortComparer: false
});

export const initialState: MedicamentListStateEntity = MedicamentListAdapter.getInitialState({
    loading: false,
    loaded: false,
    selectMedicament: undefined,
    logs: undefined
});

export const {
    selectIds: selectMedicamentIds,
    selectEntities: selectMedicamentsEntities,
    selectAll: selectMedicaments,
    selectTotal: selectTotalMedicaments
} = MedicamentListAdapter.getSelectors();

export function medicamentsReducer (
    state = initialState,
    action: MedicamentListModule.Actions
): MedicamentListStateEntity {
    switch (action.type) {
        case MedicamentListModule.ActionTypes.LOAD_INIT_MEDICAMENTS:
        //Passe le loading à true
        return {
            ...state,
            loading: true
        };
        case MedicamentListModule.ActionTypes.SUCCESS_INIT_MEDICAMENTS:
        //ajout les medocs loaded ok loading à false
        return {
            ...MedicamentListAdapter.addMany(action.payload, state),
            loading: false,
            loaded: true
        };
        case MedicamentListModule.ActionTypes.LOAD_DELETE_MEDICAMENTS:
        return {
            ...state,
            loading:true
        }
        case MedicamentListModule.ActionTypes.SUCCESS_DELETE_MEDICAMENTS:
        return {
            ...MedicamentListAdapter.removeOne(action.payload,state),
            logs: { type: 'SUCCESS', message: 'Le médicament a été supprimé avec succès' }
        }
        case MedicamentListModule.ActionTypes.LOAD_CREATE_MEDICAMENTS:
        return {
            ...state,
            loading: true
        }
        case MedicamentListModule.ActionTypes.SUCCESS_CREATE_MEDICAMENTS:
        return {
            ...MedicamentListAdapter.addOne(action.payload,state),
            loading: false,
            logs: { type: 'SUCCESS', message: 'Le médicament a été créé avec succès' },
        }
        case MedicamentListModule.ActionTypes.ERROR_LOAD_MEDICAMENTS:
      return {
        ...state,
        logs: { type: 'ERROR', message: action.payload.message },
        loading: false
      };

        default:
        return state;
        }
}