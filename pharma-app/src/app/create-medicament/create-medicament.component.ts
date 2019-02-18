import { Component, OnInit, Inject } from '@angular/core';
import { Medicament } from '../model/medicament';
import { Administration } from '../model/type';
import { PharmacieService } from '../service/pharmacie.service';
import { SearchTools } from '../tools/search-tools';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import {AppState} from "../index";
import {Store} from "@ngrx/store";
import { Router } from '@angular/router';
import { MedicamentListModule } from '../store/medicament.action';

@Component({
  selector: 'app-create-medicament',
  templateUrl: './create-medicament.component.html',
  styleUrls: ['./create-medicament.component.less']
})
export class CreateMedicamentComponent implements OnInit {

  constructor(private pharmacieService: PharmacieService,
    private router: Router, @Inject(FormBuilder) fb: FormBuilder, private store: Store<AppState>) {
      this.medicamentForm = fb.group({
        nom: ['', Validators.required],
        indication: ['', Validators.required],
        typeAdministration: [Administration.autre],
        compatible: [false]
      });
     }

  medicamentCree: Medicament ;

  public medicamentForm: FormGroup;

  administrationTypes: Administration[] = [Administration.autre,Administration.cutanee,Administration.dilution, Administration.oral];

  ngOnInit() {
  }

  createMedicament(data: Medicament) {
    const payload = {
      ...data
    };
    this.store.dispatch(new MedicamentListModule.LoadCreateMedicament(payload));
    this.router.navigateByUrl('/search-medicament');
  }

  creeMedicament(){
   this.medicamentCree = {nom: "", id:1, compatible: true, indication:"",typeAdministration: Administration.autre}
  }

  addMedicament(){
    this.medicamentCree.id = SearchTools.getFirstFreeId(this.pharmacieService.getAllMedicament().map(medicament => medicament.id));
    this.pharmacieService.addMedicament(this.medicamentCree);
  }

}
