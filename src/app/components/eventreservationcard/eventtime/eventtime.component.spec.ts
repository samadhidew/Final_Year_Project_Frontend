import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventtimeComponent } from './eventtime.component';

describe('EventtimeComponent', () => {
  let component: EventtimeComponent;
  let fixture: ComponentFixture<EventtimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventtimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
