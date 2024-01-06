import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcontactComponent } from './bcontact.component';

describe('BcontactComponent', () => {
  let component: BcontactComponent;
  let fixture: ComponentFixture<BcontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BcontactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
