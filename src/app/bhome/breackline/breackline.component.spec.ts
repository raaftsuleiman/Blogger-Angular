import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreacklineComponent } from './breackline.component';

describe('BreacklineComponent', () => {
  let component: BreacklineComponent;
  let fixture: ComponentFixture<BreacklineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreacklineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreacklineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
