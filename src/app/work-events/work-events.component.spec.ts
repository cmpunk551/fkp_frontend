import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkEventsComponent } from './work-events.component';

describe('WorkEventsComponent', () => {
  let component: WorkEventsComponent;
  let fixture: ComponentFixture<WorkEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
