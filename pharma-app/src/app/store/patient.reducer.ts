import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import {Patient} from '../model/patient';
import {PatientListModule} from '../store/patient.action';

export interface PatientListStateEntity extends EntityState<Patient> {
    loading: boolean;
    loaded: boolean;
    selectPatient: Patient;
    logs: {
        type: string;
        message: string;
    };
}

export const PatientListAdapter: EntityAdapter<Patient> = createEntityAdapter<Patient>({
    sortComparer: false
});

export const initialState: PatientListStateEntity = PatientListAdapter.getInitialState({
    loading: false,
    loaded: false,
    selectPatient: undefined,
    logs: undefined
});

export const {
    selectIds: selectPatientIds,
    selectEntities: selectPatientsEntities,
    selectAll: selectPatients,
    selectTotal: selectTotalPatients
} = PatientListAdapter.getSelectors();

export function patientsReducer (
    state = initialState,
    action: PatientListModule.Actions
): PatientListStateEntity {
    switch (action.type) {
        case PatientListModule.ActionTypes.LOAD_INIT_PATIENTS:
        //Passe le loading à true
        return {
            ...state,
            loading: true
        };
        case PatientListModule.ActionTypes.SUCCESS_INIT_PATIENTS:
        //ajout les medocs loaded ok loading à false
        return {
            ...PatientListAdapter.addMany(action.payload, state),
            loading: false,
            loaded: true
        };
        case PatientListModule.ActionTypes.LOAD_DELETE_PATIENT:
        return {
            ...state,
            loading:true
        }
        case PatientListModule.ActionTypes.SUCCESS_DELETE_PATIENT:
        return {
            ...PatientListAdapter.removeOne(action.payload,state),
            loading:false,
            loaded:true,
            logs: { type: 'SUCCESS', message: 'Le patient a été supprimé avec succès' }
        }
        case PatientListModule.ActionTypes.LOAD_CREATE_PATIENT:
        return {
            ...state,
            loading: true
        }
        case PatientListModule.ActionTypes.SUCCESS_CREATE_PATIENT:
        return {
            ...PatientListAdapter.addOne(action.payload,state),
            loading:false,
            logs: { type: 'SUCCESS', message: 'Le patient a été créé avec succès' },
        }
        case PatientListModule.ActionTypes.ERROR_LOAD_PATIENTS:
      return {
        ...state,
        logs: { type: 'ERROR', message: action.payload.message },
        loading: false
      };

        default:
        return state;
        }
}