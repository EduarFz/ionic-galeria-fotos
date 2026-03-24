import { TestBed } from '@angular/core/testing';

import { Favoritos } from './favoritos.service';

describe('Favoritos', () => {
  let service: Favoritos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Favoritos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
