import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateaboutComponent } from './createabout.component';

describe('CreateaboutComponent', () => {
  let component: CreateaboutComponent;
  let fixture: ComponentFixture<CreateaboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateaboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
