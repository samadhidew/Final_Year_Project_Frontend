import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminreservationComponent } from './adminreservation.component';

describe('AdminreservationComponent', () => {
  let component: AdminreservationComponent;
  let fixture: ComponentFixture<AdminreservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminreservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminreservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
