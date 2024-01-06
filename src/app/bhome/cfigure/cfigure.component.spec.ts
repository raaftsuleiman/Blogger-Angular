import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfigureComponent } from './cfigure.component';

describe('CfigureComponent', () => {
  let component: CfigureComponent;
  let fixture: ComponentFixture<CfigureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CfigureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CfigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
