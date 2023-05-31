import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipregComponent } from './membershipreg.component';

describe('MembershipregComponent', () => {
  let component: MembershipregComponent;
  let fixture: ComponentFixture<MembershipregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembershipregComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembershipregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
