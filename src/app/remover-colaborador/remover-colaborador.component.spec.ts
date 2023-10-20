import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverColaboradorComponent } from './remover-colaborador.component';

describe('RemoverColaboradorComponent', () => {
  let component: RemoverColaboradorComponent;
  let fixture: ComponentFixture<RemoverColaboradorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoverColaboradorComponent]
    });
    fixture = TestBed.createComponent(RemoverColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
