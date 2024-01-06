import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Breackline3Component } from './breackline3.component';

describe('Breackline3Component', () => {
  let component: Breackline3Component;
  let fixture: ComponentFixture<Breackline3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Breackline3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Breackline3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
