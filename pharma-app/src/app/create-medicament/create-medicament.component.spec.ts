import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMedicamentComponent } from './create-medicament.component';

describe('CreateMedicamentComponent', () => {
  let component: CreateMedicamentComponent;
  let fixture: ComponentFixture<CreateMedicamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMedicamentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMedicamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
