import { Patient } from './patient';
import { Medicament } from './medicament';

export interface Traitement {

    clef: string;
    patient : Patient;
    multi: boolean;
    medicaments: Medicament[];

}
