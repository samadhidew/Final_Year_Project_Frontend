import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsportComponent } from './adminsport.component';

describe('AdminsportComponent', () => {
  let component: AdminsportComponent;
  let fixture: ComponentFixture<AdminsportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminsportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminsportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
