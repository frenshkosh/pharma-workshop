import { HttpErrorResponse } from '@angular/common/http';
import {Medicament} from "../model/medicament";

export namespace MedicamentListModule {

    export enum ActionTypes {
        LOAD_INIT_MEDICAMENTS = '[medicamentList] Load Init Medicaments',
        SUCCESS_INIT_MEDICAMENTS = '[medicamentList] Success Init Medicaments',
        LOAD_DELETE_MEDICAMENTS = '[medicamentList] Load Delete Medicaments',
        SUCCESS_DELETE_MEDICAMENTS = '[medicamentList] Success Delete Medicaments',
        LOAD_CREATE_MEDICAMENTS = '[medicamentList] Load Create Medicaments',
        SUCCESS_CREATE_MEDICAMENTS = '[medicamentList] Success Create Medicaments',
        ERROR_LOAD_MEDICAMENTS = '[medicamentList] Error Load Medicaments'
    }

    export class LoadInitMedicaments {
        readonly type = ActionTypes.LOAD_INIT_MEDICAMENTS;
    }

    export class SuccessInitMedicaments {
        readonly type = ActionTypes.SUCCESS_INIT_MEDICAMENTS;
        constructor( public payload: Medicament[]) {}
    }

    export class LoadDeleteMedicament {
        readonly type = ActionTypes.LOAD_DELETE_MEDICAMENTS;
        constructor( public payload: number) {}
    }

    export class SuccessDeleteMedicament {
        readonly type = ActionTypes.SUCCESS_DELETE_MEDICAMENTS;
        constructor( public payload: number) {}
    }

    export class LoadCreateMedicament {
        readonly type = ActionTypes.LOAD_CREATE_MEDICAMENTS;
        constructor(public payload: Medicament){}
    }

    export class SuccessCreateMedicament {
        readonly type = ActionTypes.SUCCESS_CREATE_MEDICAMENTS;
        constructor(public payload: Medicament) {}
    }

    export class ErrorLoadActionMedicament {
        readonly type = ActionTypes.ERROR_LOAD_MEDICAMENTS;
        constructor(public payload: HttpErrorResponse) {}
    }

    export type Actions = LoadInitMedicaments | LoadCreateMedicament | LoadDeleteMedicament | SuccessCreateMedicament | SuccessDeleteMedicament | SuccessInitMedicaments | ErrorLoadActionMedicament;

}