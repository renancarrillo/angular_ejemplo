import { TestBed } from '@angular/core/testing';

import { EjemploService } from './ejemplo.service';

describe('EjemploService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EjemploService = TestBed.get(EjemploService);
    expect(service).toBeTruthy();
  });
});
