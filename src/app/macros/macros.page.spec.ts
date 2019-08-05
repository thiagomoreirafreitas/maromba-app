import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacrosPage } from './macros.page';

describe('MacrosPage', () => {
  let component: MacrosPage;
  let fixture: ComponentFixture<MacrosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacrosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
