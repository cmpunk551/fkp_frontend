import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryTargetIndicatorsComponent } from './dictionary-target-indicators.component';

describe('DictionaryTargetIndicatorsComponent', () => {
  let component: DictionaryTargetIndicatorsComponent;
  let fixture: ComponentFixture<DictionaryTargetIndicatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictionaryTargetIndicatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionaryTargetIndicatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
