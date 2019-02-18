import { HttpErrorResponse } from '@angular/common/http';
import {Patient} from "../model/patient";
import { Action } from 'rxjs/internal/scheduler/Action';

export namespace PatientListModule {

    export enum ActionTypes {
        LOAD_INIT_PATIENTS = '[patientList] Load Init Patients',
        SUCCESS_INIT_PATIENTS = '[patientList] Success Init Patients',
        LOAD_DELETE_PATIENT = '[patientList] Load Delete Patients',
        SUCCESS_DELETE_PATIENT = '[patientList] Success Delete Patients',
        LOAD_CREATE_PATIENT = '[patientList] Load Create Patients',
        SUCCESS_CREATE_PATIENT = '[patientList] Success Create Patients',
        ERROR_LOAD_PATIENTS = '[patientList] Error Load Patients'
    }

    export class LoadInitPatients {
        readonly type = ActionTypes.LOAD_INIT_PATIENTS;
    }

    export class SuccessInitPatients {
        readonly type = ActionTypes.SUCCESS_INIT_PATIENTS;
        constructor( public payload: Patient[]) {}
    }

    export class LoadDeletePatient {
        readonly type = ActionTypes.LOAD_DELETE_PATIENT;
        constructor( public payload: number) {}
    }

    export class SuccessDeletePatient {
        readonly type = ActionTypes.SUCCESS_DELETE_PATIENT;
        constructor( public payload: number) {}
    }

    export class LoadCreatePatient {
        readonly type = ActionTypes.LOAD_CREATE_PATIENT;
        constructor(public payload: Patient){}
    }

    export class SuccessCreatePatient {
        readonly type = ActionTypes.SUCCESS_CREATE_PATIENT;
        constructor(public payload: Patient) {}
    }

    export class ErrorLoadActionPatient {
        readonly type = ActionTypes.ERROR_LOAD_PATIENTS;
        constructor(public payload: HttpErrorResponse) {}
    }

    export type Actions = LoadInitPatients | LoadCreatePatient | LoadDeletePatient | SuccessCreatePatient | SuccessDeletePatient | SuccessInitPatients | ErrorLoadActionPatient;
    
}