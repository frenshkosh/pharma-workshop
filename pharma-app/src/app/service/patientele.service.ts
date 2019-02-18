import { Injectable } from '@angular/core';
import { Patient } from '../model/patient';
import {HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";
import {environment} from '../environnement';
import { throwError } from 'rxjs';
import {map} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class PatienteleService {
  

  constructor(private http: HttpClient) { }

  patients : Patient[] = [
    {id: 1, nom:'marcel',nosecu:'1243254325'},
    {id: 2, nom:'jules',nosecu:'1243254334'},
    {id: 3, nom:'pablo',nosecu:'1243254323'},
  ];

   getAllPatients() : Patient[] {
    return this.patients;
  }

  getPatientById(id:number) : Patient {
    if(id > -1 && id < this.patients.length){
      return this.patients[id];
    } else {
      throwError('Patient inconnu');
    }
  }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${environment.apiUrl}/patients/`);
  }

  createPatient(body): Observable<Patient> {
    return this.http.post<Patient>(`${environment.apiUrl}/patients/create/`,body);
  }

  deletePatient(id): Observable<number> {
    return this.http.post<Patient>(`${environment.apiUrl}/patients/delete/`,{'id': id}).pipe(map(response => id));
  }

  addPatient(patientCree: Patient): any {
    this.patients.push(patientCree);
  }
    
}
