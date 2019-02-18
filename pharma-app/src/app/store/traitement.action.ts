import { HttpErrorResponse } from '@angular/common/http';
import {Traitement} from "../model/traitement";

export namespace TraitementListModule {

    export enum ActionTypes {
        LOAD_INIT_TRAITEMENTS = '[TraitementList] Load Init Traitements',
        SUCCESS_INIT_TRAITEMENTS = '[TraitementList] Success Init Traitements',
        LOAD_DELETE_TRAITEMENT = '[TraitementList] Load Delete Traitements',
        SUCCESS_DELETE_TRAITEMENT = '[TraitementList] Success Delete Traitements',
        LOAD_CREATE_TRAITEMENT = '[TraitementList] Load Create Traitements',
        SUCCESS_CREATE_TRAITEMENT = '[TraitementList] Success Create Traitements',
        ERROR_LOAD_TRAITEMENTS = '[TraitementList] Error Load Traitements'
    }

    export class LoadInitTraitements {
        readonly type = ActionTypes.LOAD_INIT_TRAITEMENTS;
    }

    export class SuccessInitTraitements {
        readonly type = ActionTypes.SUCCESS_INIT_TRAITEMENTS;
        constructor( public payload: Traitement[]) {}
    }

    export class LoadDeleteTraitement {
        readonly type = ActionTypes.LOAD_DELETE_TRAITEMENT;
        constructor( public payload: number) {}
    }

    export class SuccessDeleteTraitement {
        readonly type = ActionTypes.SUCCESS_DELETE_TRAITEMENT;
        constructor( public payload: number) {}
    }

    export class LoadCreateTraitement {
        readonly type = ActionTypes.LOAD_CREATE_TRAITEMENT;
        constructor(public payload: Traitement){}
    }

    export class SuccessCreateTraitement {
        readonly type = ActionTypes.SUCCESS_CREATE_TRAITEMENT;
        constructor(public payload: Traitement) {}
    }

    export class ErrorLoadActionTraitement {
        readonly type = ActionTypes.ERROR_LOAD_TRAITEMENTS;
        constructor(public payload: HttpErrorResponse) {}
    }

    export type Actions = LoadInitTraitements | LoadCreateTraitement | LoadDeleteTraitement | SuccessCreateTraitement | SuccessDeleteTraitement | SuccessInitTraitements | ErrorLoadActionTraitement;
    
}