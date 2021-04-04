import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceLimitsComponent } from './finance-limits.component';

describe('FinanceLimitsComponent', () => {
  let component: FinanceLimitsComponent;
  let fixture: ComponentFixture<FinanceLimitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceLimitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceLimitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
