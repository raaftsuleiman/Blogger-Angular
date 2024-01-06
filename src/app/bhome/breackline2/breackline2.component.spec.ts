import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Breackline2Component } from './breackline2.component';

describe('Breackline2Component', () => {
  let component: Breackline2Component;
  let fixture: ComponentFixture<Breackline2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Breackline2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Breackline2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
