import { Component, OnInit,Inject} from '@angular/core';
import { PharmacieService } from '../service/pharmacie.service';
import { PatienteleService } from '../service/patientele.service';
import { ConsultationService } from '../service/consultation.service';
import { Patient } from '../model/patient';
import { Medicament } from '../model/medicament';
import { Traitement } from '../model/traitement';
import { Observable } from 'rxjs';

import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import {map} from "rxjs/internal/operators";
import {AppState} from '../index';
import {select, Store, resultMemoize} from "@ngrx/store";
import { Router } from '@angular/router';
import {PatientListModule} from "../store/patient.action";
import {selectPatientListEntitiesConverted$,selectPatientsLoading$} from "../store/patient.selector";
import {MedicamentListModule} from "../store/medicament.action";
import {selectMedicamentListEntitiesConverted$,selectMedicamentsLoading$} from "../store/medicament.selector";
import { TraitementListModule } from '../store/traitement.action';

@Component({
  selector: 'app-create-traitement',
  templateUrl: './create-traitement.component.html',
  styleUrls: ['./create-traitement.component.less']
})
export class CreateTraitementComponent implements OnInit {

  constructor(private medicamentService: PharmacieService, private store: Store<AppState>,
    private patientService: PatienteleService,
    private router: Router,
    private traitemementService: ConsultationService,
    @Inject(FormBuilder) fb: FormBuilder
    ) { 
      
      this.medicaments$ = store.pipe(select(selectMedicamentListEntitiesConverted$));
      this.medicamentLoading = store.pipe(select(selectMedicamentsLoading$));
      this.patients$ = store.pipe(select(selectPatientListEntitiesConverted$));
      this.patientLoading = store.pipe(select(selectPatientsLoading$))
      this.traitementForm =  fb.group({
        clef: ['', Validators.required],
        multi: [false, Validators.required],
        patient: undefined,
        medicaments: []
      });
    }

  private medicaments$ : Observable<Medicament[]>;
  public medicamentLoading: Observable<boolean>;
  private patients$ : Observable<Patient[]>;
  public patientLoading: Observable<boolean>;

  ngOnInit() {
    this.store.dispatch(new MedicamentListModule.LoadInitMedicaments());
    this.store.dispatch(new PatientListModule.LoadInitPatients());
    this.medicaments$.subscribe(medicaments => this.medicamentsOptions = medicaments);
  }

  //traitementCree : Traitement;

  //patientele : Observable<Patient[]> = this.patientService.getPatients();

  pharmacie: Observable<Medicament[]> = this.medicamentService.getMedicament();

  medicamentsOptions: Medicament[];

  suggestedMedocs: Medicament[];

  selectedMedocs: Medicament[];

  selectedPatient: Patient;

  public traitementForm: FormGroup;


  searchMedoc(event: any) {
    console.log('Le nom qui est entré est :' + event.query);
    this.medicaments$.pipe(map(medicaments => console.log('taille medoc: '+ medicaments.length)));
    console.log('tu te moques de moi');
    this.medicaments$.pipe(map(medicaments => medicaments.map(medicament => console.log('mon Patient: '+ medicament.id + medicament.nom))));
    this.suggestedMedocs = this.medicamentsOptions.filter(medoc => medoc.nom.indexOf(event.query.toUpperCase()) > -1);
  }

  select(patientItem: Patient){
    console.log('Patient Sélectionné: '+ patientItem.nom);
    this.selectedPatient  = patientItem;
  }

  addTraitement() {
    /* this.traitementCree.multi = false;
    this.traitementCree.medicament = this.selectedMedocs;
   //this.traitementCree.patient = this.selectedPatient;
    console.log("patient ajouté: " +  this.traitementCree.patient );
    console.log("patient ajouté: " +  this.traitementCree.patient.nom);
    console.log("patient ajouté: " +  this.traitementCree.patient.nosecu);
    console.log("patient ajouté: " +  this.traitementCree.patient.toString());
    this.traitemementService.addTraitement(this.traitementCree); */
  }

  createTraitement(data: Traitement) {
    const payload = {
      ...data
    };
    this.store.dispatch(new TraitementListModule.LoadCreateTraitement(payload));
    this.router.navigateByUrl('/search-traitement');
  }

}
