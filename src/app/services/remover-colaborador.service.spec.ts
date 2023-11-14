import { TestBed } from '@angular/core/testing';

import { RemoverColaboradorService } from './remover-colaborador.service';

describe('RemoverColaboradorService', () => {
  let service: RemoverColaboradorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoverColaboradorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
