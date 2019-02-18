import { Component, OnInit } from '@angular/core';
import { ConsultationService } from '../service/consultation.service';
import { PharmacieService } from '../service/pharmacie.service';
import { PatienteleService } from '../service/patientele.service';
import { Traitement } from '../model/traitement';
import { Observable } from 'rxjs';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import {AppState} from '../index';
import {select, Store, resultMemoize} from "@ngrx/store";
import {selectTraitementListEntitiesConverted$,selectTraitementsLoading$} from "../store/traitement.selector";
import { TraitementListModule } from '../store/traitement.action';

@Component({
  selector: 'app-search-traitement',
  templateUrl: './search-traitement.component.html',
  styleUrls: ['./search-traitement.component.less']
})
export class SearchTraitementComponent implements OnInit {

  constructor(private traitementService: ConsultationService,
    private router: Router, private store: Store<AppState>) {
      
    this.traitements$ = store.pipe(select(selectTraitementListEntitiesConverted$));
    this.traitementLoading = store.pipe(select(selectTraitementsLoading$));
     }

  items: MenuItem[];
  switch : number;

  private traitements$: Observable<Traitement[]>;
  private traitementLoading: Observable<Boolean>;

  ngOnInit(
  ) {
    this.items = [
      {label: 'patient', icon: 'fas fa-user-alt', command: () => {
          this.showPatient();
      }},
      {label: 'ordonnance', icon: 'fas fa-medkit', command: () => {
          this.showMedocs();
      }},
  ];
  
  this.store.dispatch(new TraitementListModule.LoadInitTraitements());
  }

  traitement: Traitement;

    results: Traitement[];

    currentTraitement: Traitement;
   /* search(event: any) {
        this.results = this.traitementService.searchByString(event.query);
    }*/

    setCurrent(traitement : Traitement){
      this.currentTraitement = traitement;
    }

    showPatient(){
      //show CurrentPatient from current Traitement;
      this.switch = 1;
    }

    showMedocs() {
      //show current medocs from current Traitement
      this.switch = 2;
    }

    deleteTraitement(id: number) {
      this.store.dispatch(new TraitementListModule.LoadDeleteTraitement(id));
    }

    fullName(traitement: Traitement): string {
      let result : string = '[Clef: ' + traitement.clef + '][Patient: ' ;
      result = result +  (traitement.patient?traitement.patient.nom:'noname') + ']';
      for(let i=0;i<traitement.medicaments.length;i++){
          result =  result + '[Médicaments: '+traitement.medicaments[i].nom +']';
      }
      return result;
  }

}
