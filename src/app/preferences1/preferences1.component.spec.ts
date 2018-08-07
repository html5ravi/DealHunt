import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Preferences1Component } from './preferences1.component';

describe('Preferences1Component', () => {
  let component: Preferences1Component;
  let fixture: ComponentFixture<Preferences1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Preferences1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Preferences1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
