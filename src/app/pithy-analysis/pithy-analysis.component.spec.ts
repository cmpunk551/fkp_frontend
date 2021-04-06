import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PithyAnalysisComponent } from './pithy-analysis.component';

describe('PithyAnalysisComponent', () => {
  let component: PithyAnalysisComponent;
  let fixture: ComponentFixture<PithyAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PithyAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PithyAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
