import { Injectable } from '@angular/core';
import { Traitement } from '../model/traitement';
import { ArrayTools} from '../tools/array-tools';

import {HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";
import {environment} from '../environnement';
import { throwError } from 'rxjs';
import {map} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

  constructor(private http: HttpClient) { }

  traitements : Traitement[] = [];

  addTraitement(traitement : Traitement) : void {
    this.traitements.push(traitement);
  }

  removeTraitement(traitement: Traitement) : boolean {
    let removable : number = this.traitements.indexOf(traitement);
    if (this.traitements.indexOf(traitement)>-1){
      this.traitements.splice(0, removable);
      return true;
    }
    return false;
  }

  //mock Version 
  searchByString(searchValue: string): Traitement[]{
    let results : Traitement[] = [];
    //comment the line below for a nominal version
    console.log('Valeur enntrée: ' + searchValue);
    //add results by clef
    results = results.concat(this.traitements.filter(traitement => traitement.clef.indexOf(searchValue) > -1));
    //add results by patient name
    results = results.concat(this.traitements.filter(traitement => traitement.patient.nom.indexOf(searchValue) > -1));
    //add results by medicament name
    results =  results.concat(this.traitements.filter( traitement => traitement.medicaments.filter(medicament => medicament.nom.indexOf(searchValue) > -1).length > 0));
    ArrayTools.arrayUnique(results);
    return ArrayTools.arrayUnique(results);
  }

  getAllTraitement() : Traitement[] {
    return this.traitements;
  }


  getTraitements(): Observable<Traitement[]> {
    return this.http.get<Traitement[]>(`${environment.apiUrl}/traitements/`);
  }

  createTraitement(body): Observable<Traitement> {
    return this.http.post<Traitement>(`${environment.apiUrl}/traitements/create/`,body);
  }

  deleteTraitement(id): Observable<number> {
    return this.http.post<Traitement>(`${environment.apiUrl}/traitements/delete/`,{'id': id}).pipe(map(response => id));
  }
}
