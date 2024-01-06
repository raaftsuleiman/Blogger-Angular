import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostreporttableComponent } from './postreporttable.component';

describe('PostreporttableComponent', () => {
  let component: PostreporttableComponent;
  let fixture: ComponentFixture<PostreporttableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostreporttableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostreporttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
