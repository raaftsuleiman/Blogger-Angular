import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonealComponent } from './testimoneal.component';

describe('TestimonealComponent', () => {
  let component: TestimonealComponent;
  let fixture: ComponentFixture<TestimonealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
