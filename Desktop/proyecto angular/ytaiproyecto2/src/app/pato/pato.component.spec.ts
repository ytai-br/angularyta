import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatoComponent } from './pato.component';

describe('PatoComponent', () => {
  let component: PatoComponent;
  let fixture: ComponentFixture<PatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
