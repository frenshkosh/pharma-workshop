import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Pharma App for protractor testing 2018-12-04';

  private items: MenuItem[];
  ngOnInit() {
    this.items = [{
        label: 'Patient', 
        icon: 'fas fa-user',
        items: [
            {label: 'Nouveau', icon: 'fa fa-plus', routerLink: 'create-patient',id: 'newMenuPatient'},
            {label: 'Recherche', icon: 'fas fa-search', routerLink: 'search-patient',id: 'searchMenuPatient'}
        ]
    },
    {
        label: 'Medicament', icon: 'fas fa-first-aid',
        items: [
            {label: 'Nouveau', icon: 'fa fa-plus',routerLink: 'create-medicament',id: 'newMenuMedicament'},
            {label: 'Recherche', icon: 'fas fa-search',routerLink: 'search-medicament',id: 'searchMenuMedicament'}
        ]
    },
    {
        label: 'Traitement', icon: 'fas fa-hands-helping',
        items: [
            {label: 'Nouveau', icon: 'fa fa-plus',routerLink: 'create-traitement',id: 'newMenuTraitement'},
            {label: 'Recherche', icon: 'fas fa-search',routerLink: 'search-traitement',id: 'searchMenuTraitement'}
        ]
    }];
}
}
