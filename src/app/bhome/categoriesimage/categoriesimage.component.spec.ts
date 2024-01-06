import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesimageComponent } from './categoriesimage.component';

describe('CategoriesimageComponent', () => {
  let component: CategoriesimageComponent;
  let fixture: ComponentFixture<CategoriesimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesimageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
