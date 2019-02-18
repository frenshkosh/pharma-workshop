import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";
import { Medicament } from '../model/medicament';
import {environment} from '../environnement';
import { Administration } from '../model/type';

import {map} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class PharmacieService {

  constructor(private http: HttpClient) { }

  banque : Medicament[] = [
    {id: 1234, compatible: true,nom:'Efferalgan',indication: 'Etat grippal',typeAdministration:Administration.oral}
  ];

  addMedicament(medicament : Medicament) : void {
    this.banque.push(medicament);
  }

  removeMedicament(medicament: Medicament) : boolean {
    let removable : number = this.banque.indexOf(medicament);
    if (this.banque.indexOf(medicament)>-1){
      this.banque.splice(0, removable);
      return true;
    }
    return false;
  }

  getMedicament(): Observable<Medicament[]> {
    return this.http.get<Medicament[]>(`${environment.apiUrl}/medicaments/`);
  }

  createMedicament(body): Observable<Medicament> {
    return this.http.post<Medicament>(`${environment.apiUrl}/medicaments/create/`,body);
  }

  deleteMedicament(id): Observable<number> {
    return this.http.post<Medicament>(`${environment.apiUrl}/medicaments/delete/`,{'id': id}).pipe(map(response => id));
  }

  getAllMedicament() : Medicament[] {
    return this.banque;
  }
}
