import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BbloghomeComponent } from './bbloghome.component';

describe('BbloghomeComponent', () => {
  let component: BbloghomeComponent;
  let fixture: ComponentFixture<BbloghomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BbloghomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BbloghomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
