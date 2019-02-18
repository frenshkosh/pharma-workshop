import { Component, OnInit } from '@angular/core';
import { Medicament } from '../model/medicament';
import { PharmacieService } from '../service/pharmacie.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {AppState} from '../index';
import {select, Store, resultMemoize} from "@ngrx/store";
import {MedicamentListModule} from "../store/medicament.action";
import {selectMedicamentListEntitiesConverted$,selectMedicamentsLoading$} from "../store/medicament.selector";

@Component({
  selector: 'app-search-medicament',
  templateUrl: './search-medicament.component.html',
  styleUrls: ['./search-medicament.component.less']
})
export class SearchMedicamentComponent implements OnInit {

  constructor(private medicamentService: PharmacieService,
    private router: Router, private store: Store<AppState>) {
      this.medicaments$ = store.pipe(select(selectMedicamentListEntitiesConverted$));
      this.medicamentLoading = store.pipe(select(selectMedicamentsLoading$));
     }


  medicament: Medicament;

  results: Medicament[];

  public medicaments$: Observable<Medicament[]>;
  //public medicaments$: Observable<Medicament>[];
  public medicamentLoading: Observable<boolean>;

  search(event: any) {
      console.log('Le nom qui est entré est :' + event.query);
      //this.results = this.medicamentService.getAllMedicament().filter(medoc => medoc.nom.indexOf(event.query) > -1 );
  }
  ngOnInit() {
    this.store.dispatch(new MedicamentListModule.LoadInitMedicaments());

  }

  goToAddMedicament () {
    this.router.navigateByUrl('/create-medicament');
  }

  deleteMedicament(id: number) {
    this.store.dispatch(new MedicamentListModule.LoadDeleteMedicament(id));
  }
}
