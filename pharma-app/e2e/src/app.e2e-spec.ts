import { AppPage } from './app.po';
import { Driver } from 'selenium-webdriver/chrome';
import { browser, by, element} from 'protractor';
import { PharmacieService } from 'src/app/service/pharmacie.service';
import { state } from '@angular/animations';

describe('Medicament App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
 /*  it('should not have the form ready to use when coming to the create page', () => {
    browser.get('create-medicament');
    browser.getCurrentUrl().then( function( url ) {
      console.log('t as lu RL :' + url);
      });
      element.all(by.id('newMedicament')).then( function (value) {
        console.log('contenu pouet lop : '+value);
      })
    //expect(typeof (element.all(by.linkText('newMedicament3')) != undefined));
    expect(element.all(by.id('newMedicament')).count()).toBe(1);

  }); */

  it('should not switch to medicament form when click on button new', () => {
    browser.get('create-medicament');
    //element.all(by.id('newMedicament')).click();
    expect(element.all(by.id('medicamentFormCreation')).count()).toBe(1);
  });

  it('when filled the creation of a medicament will save patient and navigate to Search Medciament', () => {
    browser.get('create-medicament');
    //element.all(by.id('newMedicament')).click();
    element.all(by.id('nom')).sendKeys('Maboitagan');
    element.all(by.id('indication')).sendKeys('perte de gants');
    element.all(by.id('typeAdministration')).sendKeys('Cutanée');
    element.all(by.id('compatible')).sendKeys('true');
    element.all(by.id('createButton')).click();
    element.all(by.cssContainingText('.btn-danger','Confirm')).click();
    browser.sleep(7000);
    expect(browser.getCurrentUrl()).toContain('search-medicament');
  });

  /* it('when filled the creation of a patient will save patient and navigate to Search Patient', () => {
    browser.get('create-medicament');
    element.all(by.id('newMedicament')).click();
    element.all(by.id('nom')).sendKeys('Maboitagan');
    element.all(by.id('indication')).sendKeys('perte de gants');
    element.all(by.id('typeAdministration')).sendKeys('Cutanée');
    element.all(by.id('compatible')).sendKeys('true');
    element.all(by.id('createButton')).click();
    expect(browser.getCurrentUrl()).toContain('search-medicament');
    element.all(by.)
  }); */
});

describe('Patient App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
 

  
  it('when filled the creation of a patient will save patient and navigate to Search Patient', () => {
    browser.get('create-patient');
  //  element.all(by.id('newPatient')).click();
    element.all(by.id('nom')).sendKeys('PetitPatient');
    element.all(by.id('nosecu')).sendKeys('57494374829');
    element.all(by.id('createButton')).click();
    element.all(by.cssContainingText('.btn-danger','Confirm')).click();
    browser.sleep(7000);
    expect(browser.getCurrentUrl()).toContain('search-patient');
  });

  /* it('when filled the creation of a patient will save patient and navigate to Search Patient', () => {
    browser.get('create-medicament');
    element.all(by.id('newMedicament')).click();
    element.all(by.id('nom')).sendKeys('Maboitagan');
    element.all(by.id('indication')).sendKeys('perte de gants');
    element.all(by.id('typeAdministration')).sendKeys('Cutanée');
    element.all(by.id('compatible')).sendKeys('true');
    element.all(by.id('createButton')).click();
    expect(browser.getCurrentUrl()).toContain('search-medicament');
    element.all(by.)
  }); */
});

describe('Traitement App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
  /*it('should not have the form ready to use when coming to the create page', () => {
    browser.get('create-traitement');
    browser.getCurrentUrl().then( function( url ) {
      console.log('t as lu RL :' + url);
      });
      element.all(by.id('newTraitement')).then( function (value) {
        console.log('contenu pouet lop : '+value);
      })
    //expect(typeof (element.all(by.linkText('newMedicament3')) != undefined));
    expect(element.all(by.id('newTraitement')).count()).toBe(1);

  });

  it('should not switch to medicament form when click on button new', () => {
    browser.get('create-traitement');
    element.all(by.id('newTraitement')).click();
    expect(element.all(by.id('traitementFormCreation')).count()).toBe(1);
  });*/


  it('when filled the creation of a traitement will save traitement and navigate to Search traitement', () => {

    //test medicament
    browser.get('create-medicament');
    //element.all(by.id('newMedicament')).click();
    element.all(by.id('nom')).sendKeys('Maboitagan');
    element.all(by.id('indication')).sendKeys('perte de gants');
    element.all(by.id('typeAdministration')).sendKeys('Cutanée');
    element.all(by.id('compatible')).sendKeys('true');
    element.all(by.id('createButton')).click();
    element.all(by.id('newMenuPatient')).first().click();

    //test patient
    //browser.get('create-patient');
    //element.all(by.id('newPatient')).click();
    element.all(by.id('nom')).sendKeys('PetitPatient');
    element.all(by.id('nosecu')).sendKeys('57494374829');
    element.all(by.id('createButton')).click();
    //fin de test de conservation de contexte
    element.all(by.id('newMenuTraitement')).first().click();


    //browser.get('create-traitement');
    //element.all(by.id('newTraitement')).click();
    element.all(by.id('clef')).sendKeys('traitementlala');
    element.all(by.id('choixPatientList')).click();
    
    browser.sleep(7200);
    element.all(by.className('ui-dropdown-item')).last().click();
    element.all(by.id('medicSearch')).first().element(by.tagName('input')).sendKeys('Maboitagan');

    element.all(by.id('medicSearch')).first().element(by.className('ui-autocomplete-list-item')).click();

    browser.sleep(7200);
    element.all(by.id('createButton')).click();
    element.all(by.cssContainingText('.btn-danger','Confirm')).click();
    expect(browser.getCurrentUrl()).toContain('search-traitement');
    //recherche pour vérifier et afficher mon message traitSearch
    //element.all(by.id('traitSearch')).first().element(by.tagName('input')).sendKeys('trait');
    //element.all(by.id('traitSearch')).first().element(by.className('ui-autocomplete-list-item')).click();
    expect(element.all(by.tagName('p-splitbutton')).count()).toBeGreaterThan(0);
    element.all(by.tagName('p-splitbutton')).last().element(by.className('ui-splitbutton-menubutton')).click();
    element.all(by.tagName('p-splitbutton')).last().all(by.className('ui-menuitem-link')).get(1).click();
    browser.sleep(7200);
    expect(element.all(by.id('visu')).count()).toBe(1);
   
    // element.all(by.tagName('p-splitbutton')).click();ui-menuitem-link
    // browser.pause();
  });

});


