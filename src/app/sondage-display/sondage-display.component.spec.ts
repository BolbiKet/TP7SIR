import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SondageDisplayComponent } from './sondage-display.component';

describe('SondageDisplayComponent', () => {
  let component: SondageDisplayComponent;
  let fixture: ComponentFixture<SondageDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SondageDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SondageDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
