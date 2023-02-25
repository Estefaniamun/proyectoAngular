import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarJuegosComponent } from './borrar-juegos.component';

describe('BorrarJuegosComponent', () => {
  let component: BorrarJuegosComponent;
  let fixture: ComponentFixture<BorrarJuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarJuegosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrarJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
