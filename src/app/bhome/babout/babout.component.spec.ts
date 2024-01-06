import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaboutComponent } from './babout.component';

describe('BaboutComponent', () => {
  let component: BaboutComponent;
  let fixture: ComponentFixture<BaboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
