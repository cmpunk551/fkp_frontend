import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostEfficiencyComponent } from './cost-efficiency.component';

describe('CostEfficiencyComponent', () => {
  let component: CostEfficiencyComponent;
  let fixture: ComponentFixture<CostEfficiencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostEfficiencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostEfficiencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
