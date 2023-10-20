import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoFeriasComponent } from './agendamento-ferias.component';

describe('AgendamentoFeriasComponent', () => {
  let component: AgendamentoFeriasComponent;
  let fixture: ComponentFixture<AgendamentoFeriasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgendamentoFeriasComponent]
    });
    fixture = TestBed.createComponent(AgendamentoFeriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
