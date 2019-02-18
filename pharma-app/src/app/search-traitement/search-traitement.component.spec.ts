import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTraitementComponent } from './search-traitement.component';

describe('SearchTraitementComponent', () => {
  let component: SearchTraitementComponent;
  let fixture: ComponentFixture<SearchTraitementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTraitementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTraitementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
