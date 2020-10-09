import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficounidoPage } from './graficounido.page';

describe('GraficounidoPage', () => {
  let component: GraficounidoPage;
  let fixture: ComponentFixture<GraficounidoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficounidoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficounidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
