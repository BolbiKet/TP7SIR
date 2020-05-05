import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultSondageComponent } from './result-sondage.component';

describe('ResultSondageComponent', () => {
  let component: ResultSondageComponent;
  let fixture: ComponentFixture<ResultSondageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultSondageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultSondageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
