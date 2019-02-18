import { TestBed } from '@angular/core/testing';

import { PatienteleService } from './patientele.service';

describe('PatienteleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PatienteleService = TestBed.get(PatienteleService);
    expect(service).toBeTruthy();
  });
});
