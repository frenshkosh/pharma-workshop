import { Administration } from './type';

export interface Medicament {
    id: number;
    nom: string;
    typeAdministration: Administration;
    indication: string;
    compatible:boolean;
}
