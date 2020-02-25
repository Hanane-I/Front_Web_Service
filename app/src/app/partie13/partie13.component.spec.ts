import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Partie13Component } from './partie13.component';

describe('Partie13Component', () => {
  let component: Partie13Component;
  let fixture: ComponentFixture<Partie13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Partie13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Partie13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
