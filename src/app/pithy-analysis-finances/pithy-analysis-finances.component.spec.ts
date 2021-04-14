import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PithyAnalysisFinancesComponent } from './pithy-analysis-finances.component';

describe('PithyAnalysisFinancesComponent', () => {
  let component: PithyAnalysisFinancesComponent;
  let fixture: ComponentFixture<PithyAnalysisFinancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PithyAnalysisFinancesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PithyAnalysisFinancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
