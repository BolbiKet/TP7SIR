import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SondageParticipationComponent } from './sondage-participation.component';

describe('SondageParticipationComponent', () => {
  let component: SondageParticipationComponent;
  let fixture: ComponentFixture<SondageParticipationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SondageParticipationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SondageParticipationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
