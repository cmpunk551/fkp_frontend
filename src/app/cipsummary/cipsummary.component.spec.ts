import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CIPSummaryComponent } from './cipsummary.component';

describe('CIPSummaryComponent', () => {
  let component: CIPSummaryComponent;
  let fixture: ComponentFixture<CIPSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CIPSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CIPSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
