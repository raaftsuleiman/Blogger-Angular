import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfpostComponent } from './pdfpost.component';

describe('PdfpostComponent', () => {
  let component: PdfpostComponent;
  let fixture: ComponentFixture<PdfpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
