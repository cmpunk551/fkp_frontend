import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PithyAnalysisEfficiencyComponent } from './pithy-analysis-efficiency.component';

describe('PithyAnalysisEfficiencyComponent', () => {
  let component: PithyAnalysisEfficiencyComponent;
  let fixture: ComponentFixture<PithyAnalysisEfficiencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PithyAnalysisEfficiencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PithyAnalysisEfficiencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
