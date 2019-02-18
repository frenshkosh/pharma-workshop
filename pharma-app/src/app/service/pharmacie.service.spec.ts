import { TestBed } from '@angular/core/testing';

import { PharmacieService } from './pharmacie.service';

describe('PharmacieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PharmacieService = TestBed.get(PharmacieService);
    expect(service).toBeTruthy();
  });
});
