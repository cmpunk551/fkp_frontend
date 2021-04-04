import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceWorkPlacesComponent } from './finance-work-places.component';

describe('FinanceWorkPlacesComponent', () => {
  let component: FinanceWorkPlacesComponent;
  let fixture: ComponentFixture<FinanceWorkPlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceWorkPlacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceWorkPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
