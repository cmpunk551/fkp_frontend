import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureAnalysisComponent } from './structure-analysis.component';

describe('StructureAnalysisComponent', () => {
  let component: StructureAnalysisComponent;
  let fixture: ComponentFixture<StructureAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructureAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
