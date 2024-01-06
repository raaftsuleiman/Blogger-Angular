import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostreportComponent } from './postreport.component';

describe('PostreportComponent', () => {
  let component: PostreportComponent;
  let fixture: ComponentFixture<PostreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
