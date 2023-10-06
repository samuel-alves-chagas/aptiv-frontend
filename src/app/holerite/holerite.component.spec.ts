import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoleriteComponent } from './holerite.component';

describe('HoleriteComponent', () => {
  let component: HoleriteComponent;
  let fixture: ComponentFixture<HoleriteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoleriteComponent]
    });
    fixture = TestBed.createComponent(HoleriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
