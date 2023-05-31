import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventreservationComponent } from './eventreservation.component';

describe('EventreservationComponent', () => {
  let component: EventreservationComponent;
  let fixture: ComponentFixture<EventreservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventreservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventreservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
