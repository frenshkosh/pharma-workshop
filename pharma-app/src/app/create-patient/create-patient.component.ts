import { Component, OnInit, Inject } from '@angular/core';
import { PatienteleService } from '../service/patientele.service';
import { Patient } from '../model/patient';
import { SearchTools} from '../tools/search-tools';

import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import {AppState} from "../index";
import {Store} from "@ngrx/store";
import { Router } from '@angular/router';
import { PatientListModule } from '../store/patient.action';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.less']
})
export class CreatePatientComponent implements OnInit {

  constructor(private patienteleService: PatienteleService,
    private router: Router, @Inject(FormBuilder) fb: FormBuilder, private store: Store<AppState>) {
      this.patientForm = fb.group({
        nom: ['', Validators.required],
        nosecu: ['', Validators.required]
      });
     }

  //patientCree : Patient;

  public patientForm: FormGroup;

  ngOnInit() {
  }


 
   /*addPatient(){
     ///this.patientCree.id = this.getFirstFreeId(this.patientService.getPatients());
     this.patientCree.id = SearchTools.getFirstFreeId(this.patienteleService.getAllPatients().map(patient => patient.id));
     this.patienteleService.addPatient(this.patientCree);
   }*/

   createPatient(data: Patient) {
    const payload = {
      ...data
    };
    this.store.dispatch(new PatientListModule.LoadCreatePatient(payload));
    this.router.navigateByUrl('/search-patient');
  }


}
