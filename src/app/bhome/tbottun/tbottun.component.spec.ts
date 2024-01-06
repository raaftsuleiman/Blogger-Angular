import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TbottunComponent } from './tbottun.component';

describe('TbottunComponent', () => {
  let component: TbottunComponent;
  let fixture: ComponentFixture<TbottunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TbottunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TbottunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
