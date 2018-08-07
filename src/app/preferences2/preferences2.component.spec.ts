import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Preferences2Component } from './preferences2.component';

describe('Preferences2Component', () => {
  let component: Preferences2Component;
  let fixture: ComponentFixture<Preferences2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Preferences2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Preferences2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
