import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PithyAnalysisCIPComponent } from './pithy-analysis-cip.component';

describe('PithyAnalysisCIPComponent', () => {
  let component: PithyAnalysisCIPComponent;
  let fixture: ComponentFixture<PithyAnalysisCIPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PithyAnalysisCIPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PithyAnalysisCIPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
