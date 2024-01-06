import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetaliesComponent } from './user-detalies.component';

describe('UserDetaliesComponent', () => {
  let component: UserDetaliesComponent;
  let fixture: ComponentFixture<UserDetaliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetaliesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetaliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
