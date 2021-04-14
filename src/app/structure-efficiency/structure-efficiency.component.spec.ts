import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureEfficiencyComponent } from './structure-efficiency.component';

describe('StructureEfficiencyComponent', () => {
  let component: StructureEfficiencyComponent;
  let fixture: ComponentFixture<StructureEfficiencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructureEfficiencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureEfficiencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
