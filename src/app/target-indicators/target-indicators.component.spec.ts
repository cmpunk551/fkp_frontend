import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetIndicatorsComponent } from './target-indicators.component';

describe('TargetIndicatorsComponent', () => {
  let component: TargetIndicatorsComponent;
  let fixture: ComponentFixture<TargetIndicatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargetIndicatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetIndicatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
