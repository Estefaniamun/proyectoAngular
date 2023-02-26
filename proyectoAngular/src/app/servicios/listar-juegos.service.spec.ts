import { TestBed } from '@angular/core/testing';

import { ListarJuegosService } from './listar-juegos.service';

describe('ListarJuegosService', () => {
  let service: ListarJuegosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarJuegosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
