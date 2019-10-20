import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsRecordComponent } from './results-record.component';

describe('ResultsRecordComponent', () => {
  let component: ResultsRecordComponent;
  let fixture: ComponentFixture<ResultsRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
