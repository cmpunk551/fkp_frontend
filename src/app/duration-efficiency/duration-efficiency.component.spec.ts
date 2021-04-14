import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DurationEfficiencyComponent } from './duration-efficiency.component';

describe('DurationEfficiencyComponent', () => {
  let component: DurationEfficiencyComponent;
  let fixture: ComponentFixture<DurationEfficiencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DurationEfficiencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DurationEfficiencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
