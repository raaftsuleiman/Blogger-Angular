import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialdaialogComponent } from './testimonialdaialog.component';

describe('TestimonialdaialogComponent', () => {
  let component: TestimonialdaialogComponent;
  let fixture: ComponentFixture<TestimonialdaialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonialdaialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialdaialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
