import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeaboutcardComponent } from './editeaboutcard.component';

describe('EditeaboutcardComponent', () => {
  let component: EditeaboutcardComponent;
  let fixture: ComponentFixture<EditeaboutcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeaboutcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeaboutcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
