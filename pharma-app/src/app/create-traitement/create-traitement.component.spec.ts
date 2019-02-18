import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTraitementComponent } from './create-traitement.component';

describe('CreateTraitementComponent', () => {
  let component: CreateTraitementComponent;
  let fixture: ComponentFixture<CreateTraitementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTraitementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTraitementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
